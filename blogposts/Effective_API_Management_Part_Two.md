---
title: 'Effective API Management (Part 2)'
date: '2025-01-07'
description: Jack's second post on effective API Management.
image: /images/Azure_key_vault_rotation.jpg
---

In Part 1 of this series, we talked about what is an API and what goes into developing one, as well as exploring the first two phases of the Software Development Lifecycle (SDLC); Phase one: Planning and Designing & Phase two: Developing and Testing. \
Now, we’ll dive into the remaining phases of the API lifecycle: Implementing and Deploying, Operating and Maintaining, and Retirement and Decommissioning. Each of these phases is critical to ensuring your APIs remain secure, scalable, and functional throughout their lifecycle. Let’s dive in!

**IMPLEMENTING AND DEPLOYMENT PHASE** \
The third phase of the SDLC is the implementation and deployment phase. This phase focuses on transitioning your API from development to production. This phase is where careful preparation and thorough testing meet real world usage. Below we'll talk about the key considerations and best practices for this phase.

We will start with talking about environment segregation. If you’re not familiar with different environments for applications, we briefly touched on DEV environments in the last post, but essentially they are different zones to test your app. The idea is that Production (PROD) is where the real work happens and that is where your users interact with the app. DEV and TEST are ideally clones of your PROD environment for actually developing the app and testing it without affecting what your users see. This is to avoid mistakes or breaking the app and affecting your users. 
Having proper environment setups is critical to building and testing any app. So for our APIs, we want to use distinct environments for Development (DEV), Testing (TEST), Staging (right before we go to PROD), and Production (PROD). This helps ensure that changes are thoroughly vetted before affecting end users. Ideally we automate deployments using CI/CD pipelines to minimize human error and ensure consistency, but the key point is nothing our APIs will do goes to production unless it is developed and tested in our lower environments before actually going to PROD.

![Code Environments](/images/Code_Environments.jpg "Code Environments")

Ok so we talked about different environments, but how do we actually make sure our API will run effectively once it’s in production and available for usage? That’s where our API Management Solution (APIM) comes into play. The APIM is going to serve various functions, but arguably the most important act as a gateway. Below is what I’ve laid out as some of the key functions our APIM solution will perform:
- Act as a Gateway. We deploy our API behind an API gateway because it will act as intermediaries between clients and our backend services. From a networking perspective, it’s expected to handle some of the following:
    - Load balancing
    - Request routing
    - Authentication and authorization
    - Rate limiting and throttling
- Monitoring and Logging for our API. Our APIM solution is set up to monitor and track our APIs health, performance, and usage. 
    - If we implemented our API correctly into our APIM solution, we will have access to centralized logging for collecting and analyzing logs from all environments. This is to help identify issues quickly and provides valuable insights into API behavior for when things are either going really well or really bad.
- Leverage our APIM solution for managing sensitive information. The APIM can be responsible for managing the compliance for various key parts of our APIs. For example, if integrated correctly with our other cloud functions like Azure Key Vault, we can set up rules to check for the below:
    - Validate and check for secure configurations (e.g., database credentials, API keys) using environment variables or tools like our Azure Key Vault.
    - Ensure all network traffic is encrypted using HTTPS.
    - Confirm we have setup web application firewalls (WAFs) and intrusion detection systems to safeguard against potential threats correctly.

As promised in the previous post, I did say I would touch on how we would implement effective key management in Azure Key Vault. So how do we do this exactly? Well we’re going to use a combination of some of the resources available to us in Azure cloud. Now to do this, there is an assumption that you already have an API key available that needs to be rotated. If you’re curious what that looks like, below is the code snippet from the project I linked in the first post. Now I should caveat that there is a difference in a JWT (JSON Web Token) key for authorization vs traditional API keys, but for this example and to avoid getting too technical you can think of them as pretty much doing the same thing; authorizing access to the API. Maybe at some point I’ll write a 10 page post on the differences of JWT vs traditional keys and the pros and cons, but for now I digress. The createJWT is what generates a ‘key” that can be used to connect to our API. I included an example of a generated key that is strictly for educational purposes and would not work if you tried it, but this is so you can see what a key would look like. As always, never store your key in your code. 

![Create JWT Code](/images/createJWTcode.jpg "createJWTcode")

Ok so now that we have a key, we are going to store this in Azure Key Vault. Once you have an account set up with the corresponding API key, this is where your key will be securely stored via various security protocols Microsoft has implemented such as encryption and multi factor authentication. From there, we’re going to set up an Azure function that will connect to our key vault that basically says whenever it’s been X amount of days, it’s time to generate a new key. Based on how frequently you want to rotate your key will be what you input, but let's just say every 90 days because we value high security.

So what this function does is once 90 days has happened, it will send a request to our app or wherever our key is generated and say time to generate a new key. Once that key is generated, it will be rotated in our Azure Key Vault replacing the old key. The function part is necessary as this is what helps rotate the key for the API. If it were an Azure resource that was integrated with Azure Key Vault, you can just have auto key rotation set up and not have to worry about the extra steps. The key part (pun intended) of this is that if you are rotating a key that an end user is using, you need to either have automation set up so their key still matches OR communicate to them what is happening, including the expectation that they will need a new key. A lot of companies have solved this by creating a developer portal with automation that will handle key generation and rotation for you. Additionally, Microsoft put together two different learning documents laying a lot of this out here: [Automate the rotation of a secret for resources that have two sets of authentication credentials](https://learn.microsoft.com/en-us/azure/key-vault/secrets/tutorial-rotation-dual?tabs=azure-cli) and [Configure cryptographic key auto-rotation in Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/keys/how-to-configure-key-rotation).

![Azure Key Vault Rotation](/images/Azure_key_vault_rotation.jpg "Azure_key_vault_rotation.jpg")

Ok, now on to the last element of our implementing and deployment phase, as stewards of doing the right thing we always have a rollback plan. Any good engineer knows that not everything always goes according to plan, especially when deploying and that is why you need a rollback plan. Make sure you have a rollback plan ready in case the deployment introduces issues. This could mean deploying the previous stable version or redirecting traffic to an alternate instance. As I was once a boy scout for maybe half a year, the motto goes: “BE PREPARED”. 

**OPERATING AND MAINTAINING PHASE** \
We are on to the next phase of our API’s SDLC journey, the operating and maintaining phase! While the first few phases covered a lot of key information, this is where our bread and butter is. For the most part, this is typically the phase that lasts the longest, as once we have gone live, the intent is that this will be up and running for as long as we need to. Sometimes months, sometimes years. So once our API is live, the focus shifts to keeping it operational and continually improving its performance. If we’ve done the first three phases well, then this phase should hopefully be relatively smooth sailing. A lot of the principles we covered in those previous phases will be applied here, however the focus is on doing so continuously. This phase is about stability, scalability, and security.

So, what are the key elements of operating and maintaining an API and how do we do them successfully? Well below is a bulleted list of the central points of operating and maintaining an API effectively.
- Monitoring and Incident Management:
    - Continuously monitor API performance (e.g., latency, error rates, throughput). We can use our APIM for this.
    - Set up alerting mechanisms to notify teams of anomalies or failures.
    - If you’re a larger enterprise with multiple applications, you can additionally use APM (Application Performance Monitoring) tools like Dynatrace to identify bottlenecks.
- Scalability and Load Management:
    - Design your API infrastructure to scale horizontally by adding more instances as demand grows. If you have cloud environments you can set up auto scaling to address these needs for horizontal and vertical scaling.
    - Employ caching strategies to reduce server load and improve response times. We don’t have time to cover how this is done, but if interested I would recommend looking this up.
- Documentation Maintenance:
    - Keep API documentation up-to-date with changes or enhancements. I’ve been harping on this a lot throughout these posts, but staying true to what matters; documentation, documentation, and oh that’s right! Documentation!
    - Some tools are able to provide interactive API documentation or help generate it for you as you develop and maintain your API.
- Security Practices:
    - Regularly review and update API access controls and permissions.
    - We should also have security team alerting for any alerts that may indicate security concerns related to our API. This dovetails off of the monitoring and incident management piece.
    - Perform periodic security assessments, including penetration testing and vulnerability scanning.
    - Rotate API keys and refresh tokens regularly to mitigate security risks like we’ve talked about ad-nauseam.
- User Support and Feedback:
    - Provide a channel for users to report bugs, suggest features, or ask questions. If you have customers that use your API, you may support reps to help handle or field requests. 
    - Use feedback to prioritize future updates and improvements. This is pretty standard stuff but if your users all want a specific feature and it makes sense to build said feature, you can prioritize that for your API.
- Operational Reporting:
    - If you are a part of a larger organization you’ve probably heard of the dreaded terms KPIs and KRIs. They are important and communicating the status of KPIs and KRIs is equally important. Share operational metrics and API usage reports with stakeholders. Use these insights to identify opportunities for optimization or current risks.

**RETIREMENT AND DECOMMISSIONING PHASE** \
If you’ve made it to this point, congrats! You are at the last phase of the API SDLC, retirement and decommissioning. At some point, your API may no longer be needed due to technological advancements, changing business priorities, or a newer API version replacing it. So to make sure we properly retire our API to avoid disruptions and maintain trust with users we are going to do the following.
To start, we are going to plan for retirement. Ideally we have certain criteria or metrics around what constitutes when an API should be retired but if not, we can still gain an idea when that day might come. Let’s say our API is either unable to stay up to date with appropriate security protocols or is just not being used enough to meet the effort needed to maintain it. Well when that happens, we need to communicate. Once we have a depreciation date set, we need to establish a timeline of how and when the API will be decommissioned. We will then send that out to anyone using our API, as well as post on public forums or where our documentation is managed letting people know the intent to retire our API. 

As part of retiring or decommissioning any sort of application, feature, or in our case an API, most organizations will offer migration support. Ideally the reason for our API retirement is because we have a newer and better API available. We will provide guides of how our users can migrate to the new API, as well as provide support where necessary to move off the old one. 

![API Trash](/images/API_Trash.jpg "API Trash")

The last part of this is actually decommissioning the API. Best practice is to take a phased approach of gradually reducing the rates at which our API is used and limiting access. Once we feel comfortable that there are no longer users dependent on our API and data has been appropriately archived, we can finally turn our API off. Once our API is officially turned off that means if someone were to try and access the API, they should receive an error code (410 “Gone”) indicating the resource is not available. As always with all of the phases we’ve talked about up to this point, this should align to appropriate change management and ITSM to ensure we are following protocol. At last our API has gone through the complete lifecycle and can be put to bed. Rest in Peace API.

**Conclusion** \
So that was a lot, but hopefully this just further emphasizes the importance of Effective API management. Effective API Management is not easy nor does anyone do it perfectly, as it is more of a continuous process that spans the entire software development lifecycle. By paying close attention to each phase and putting in the time necessary from planning and design to eventual retirement you can ensure your APIs remain reliable, secure, and valuable to users.
As always, don’t hesitate to reach out and feel free to share your thoughts, questions, or any feedback!
