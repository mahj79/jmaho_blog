//About me section
import Image from "next/image"

export default function AboutMe() {
    
    return (
        <section className="bg-[#e1dab7] bg-gradient-to-br from-[#e6e6c5] to-[#d8d1a7] text-gray-900 p-4 sm:p-6 rounded-lg border-4 border-black shadow-md my-4 prose-sm sm:prose-xl mx-auto max-w-2xl w-full">
            <h2 className="text-xl sm:text-2xl font-bold underline">Introduction</h2>
            <p className="text-sm sm:text-lg mt-2">
                Thanks for taking the time to learn more about me, the creator behind Maho&apos;s Corner! My name is Jack Mahoney or what my friends call me, Maho. I am a software engineer / enterprise architect based in Chicago. 
                <Image
                className="border-4 border-black dark:border-slate-500 drop-shadow-xl 
                shadow-black rounded-3xl mx-auto mt-4 mb-4"
                src={"/images/vail_headshot.jpg"}
                width={200}
                height={100}
                alt="Profile picture of Jack Mahoney"
                priority={true}
            />
                In my continuous pursuit to be a lifelong learner, I decided to create this blog &quot;Maho&apos;s Corner&quot; in early 2024 to tone up some of my front end programming skills, but also to write about topics I find interesting, as writing is a bit therapeutic for me. The inspiration behind Maho&apos;s Corner is to approach traditionally complex technical subjects like Machine Learning and break them down to be simple enough for anyone to walk away from an article and feel like they&apos;ve learned something. The other part is to write about things I enjoy, such as cooking, sports, and being there for the people I care about. 
                <br />
                <br />
                Maho&apos;s Corner is meant to be a place where all are welcome. It is a place for learners of all ages and any background. You are welcome to reach out to me on any of my socials which are linked in the navbar. If you are particularly interested in a subject and want me to write about it, then by all means, contact me via one of my socials, or my email: mahonej79@gmail.com and tell me about what you&apos;re interested in!
                <br />
                <br />
                <br />
            </p>

            <h2 className="text-xl sm:text-2xl font-bold underline mt-4">Background</h2>
            <p className="text-sm sm:text-lg mt-2 mb-4">
                While my job titles may imply that all I do is code, I actually like to think of myself as simply a problem solver. Throughout my life and especially since I started my career, I became known as the guy who would find an answer to a complicated problem. I think this is mostly in part for a few reasons. 
                <br />
                <br />
                I&apos;ll start with the main reason being I simply love solving problems. I think ever since I was young I would spend hours solving puzzles. Then as I got older I gravitated towards engineering because that&apos;s where the challenging problems were. I would get a sense of satisfaction from completing something complex, and you just don&apos;t get that from figuring out simple or menial tasks. There&apos;s joy derived from putting in the effort and recognizing the effort it takes to achieve the outcome you want. 
                <br />
                <br />
                Speaking of growing up, I grew up in the middle of Michigan, near the state&apos;s capitol; Lansing. After high school, I attended Michigan State University and studied Electrical and Computer Engineering. This is where I first learned to code and understand hardware at the most granular of levels. The first two programming languages I learned were C and Assembly, because for whatever reason electrical engineers have to turn the clock back to the stone ages to truly understand the inner workings of a computer. After 4 years I graduated and received a degree in Electrical and Computer Engineering. I am particularly proud of this, as I am a first generation college graduate.
                <br />
                <br />
                Following graduation, I moved to Chicago to live with my best friends. I always wanted to live in a big city and in my completely biased opinion, Chicago is one of the best cities in the world, so naturally it made sense. Not really knowing what I wanted to do, I spent a few years in cybersecurity consulting. I learned a lot, but after getting burned out, I realized I wanted to do a small career pivot. I wanted to get further back into software engineering and also travel less, so that&apos;s how I ended up at my current job as an enterprise architect for a big bank. 
                <br />
                <br />
                For the most part, life is good. I have a great fiancee and a super cute french bulldog, Cleo. Cleo is the dog pictured in my main cover art. Hopefully you&apos;ve enjoyed getting to learn a little bit more about me and I hope you continue to visit Maho&apos;s Corner to see what I write about next!
                <br />
                <br />      
                <br />
            </p>

            <h2 className="text-xl sm:text-2xl font-bold underline mt-4">Resume</h2>
            <div className="text-sm sm:text-lg mt-2 mb-4">
                Jack is a skilled engineer who has an impressive track record of solving complex problems at various companies, in various industries. He is typically known as someone who isn&apos;t easily phased by pressure or stress. He&apos;s even been described as &quot;a serial smiler&quot;, due to his tendencies of taking a glass half full approach to situations and helping diffuse tension across teams. Many view him as a mixture of a leader and individual contributor thanks to his ability to adapt to whatever the situation calls for. 
                <br />
                <br />
                <h4 className="font-bold underline">Lead Enterprise Architect (2022 - Present)</h4>
                - Researched and presented Machine Learning and Neural Networks findings to 300+ engineers. Including live demonstrations with python to highlight impacts of fine tuning weights and biases.

                <br />
                <br />  
                - Established Platform Guidance Program to assess complete software footprint across the org. Rationalize software products for redundancy. Publish guidance on products to grow, maintain, or to retire, based on future technology strategies.
                <br />
                <br />
                - Matured the org&apos;s API lifecycle management program by developing key strategies to perform effective API secrets and key security measures. Results improved developer experience and reduced security risks.
                <br />
                <br />
               
                <h4 className="font-bold underline">Senior Consultant - Cybersecurity (2018 - 2022)</h4>
                - Led projects to maximize cybersecurity maturity, leveraging expertise in NIST and ISO 27001 standards. Identified compliance risks, reduced unnecessary spending, and strengthened network security by addressing top cyber threats. Responsible for implementing secure Software Development Lifecycle (SDLC) practices for clients.
                <br />
                <br />

                - Served multiple Fortune 500 clients, as well as other clients in a diverse array of industries on how to reduce overall cyber risk by leveraging industry leading practices for Asset Management at the foundational level. Managed multiple clients, presenting deliverables to executive-level leadership.
                <br />
                <br />
                - Responsible for optimizing Oracle footprint for client environments, including developing and deploying SQL scripts to identify database performance improvements and compliance gaps. Implemented performance improvements in Java and Oracle database environments, reducing spending by 20%.
                <br />
                <br />
                <h4 className="font-bold underline">Fun Projects</h4>		
                - Built and deployed mahoscorner.com website using modern front-end technologies such as TypeScript, Tailwind CSS, React / Next.js, HTML, front-end components, and markdown to build my own blog to write about interesting subjects like machine learning.    
                <br />  
                <br />

                - Built a JSON API project in Go using JSON Web Token authentication, PostgreSQL integration, and Docker deployment. Project simulates building of a bank API from scratch, with optimized performance by utilizing only essential packages. Completed implementation of thorough testing for each HTTP handler to ensure a reliable and secure API
                <br />
                <br />
                <h4 className="font-bold underline">Skills</h4>
                <h5 className="font-bold underline">Software Engineering Skills:</h5>
                - Front-End: JavaScript, TypeScript, CSS, HTML, React
                <br />
                - Data: SQL, PostgreSQL, Supabase
                <br />

                - Back-End: Go, Node.JS, C
                <br />
                - Tooling: VS Code, Git, Azure DevOps, Cursor.ai, ServiceNow, Azure Cloud (Certified), Amazon AWS, Docker
                <br />
                <br />
                <h4 className="font-bold underline">Additional Technical Skills:</h4>
                - Network technologies, protocols, ports, API management, and network segmentation strategies
                <br />
                - Machine Learning and LLMs (Large Language Models)
                <br />
                - Enterprise application architecture and strategies 
                <br />
                - Disaster recovery planning, testing, and fault tolerance strategies
                <br />
                <br />
                <br />
            </div>
            
            <p className="text-sm sm:text-lg font-bold underline">
                {/* Section titles */}
            </p>
        </section>
    )
}
