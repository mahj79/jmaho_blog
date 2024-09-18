---
title: 'Enterprise Architect'
date: '2024-09-17'
---

I’m excited to share some big news! Back in July, I accepted a new position at my current company as an **Enterprise Architect**. If you’re not familiar with the title, that’s totally understandable as it can be a bit tricky to explain. Even when I tell close friends and family about the job, I sometimes struggle to describe everything it entails.

For starters, Wikipedia defines Enterprise Architecture as the following: “*A well-defined practice for conducting enterprise analysis, design, planning, and implementation, using a comprehensive approach at all times, for the successful development and execution of strategy. Enterprise architecture applies architecture principles and practices to guide organizations through the business, information, process, and technology changes necessary to execute their strategies. These practices utilize the various aspects of an enterprise to identify, motivate, and achieve these changes*." 

As you can see, the definition is a bit abstract, so let me try to break it down into simpler terms.
I like to think of enterprise architecture similar to how most people view a traditional architect’s job. When you think of designing a house, there are many components to consider—its structure, exterior materials like walls and siding, inner layers like insulation and drywall, plumbing, electrical systems, and more. All these details make the process quite complex. Similarly, a business’s technology has many moving parts. There’s hardware, software, data, network connections, security, and so on. Enterprise architects are responsible for staying up to date with the latest best practices in InfoSecurity, Networking, Software, and Hardware, etc. and applying that knowledge to help keep the organization’s technology running smoothly. My role is to help design, build, and operate systems that align with the goals of the IT organization. While there’s more to it, that’s a basic idea.

To help you better understand the role, here’s an example based on something I was thinking about the other day. If you’ve ever flown Southwest Airlines (or are familiar with them), you know they use a first-come, first-served model for boarding where passengers are assigned boarding groups (e.g., A1-A60, B1-B60, C1-C60). You then choose any open seat once you board the plane. Recently, Southwest announced that by 2025 they’ll be shifting to a more traditional model where passengers select their seat when they book their ticket.

While this move may make sense from a business perspective based on research Southwest has done, there is a lot of technical work that would go into making this happen. First there are a ton of questions that first need to be asked that will ultimately decide how customers will select their seat. 

- *At what point in the purchasing process should customers select their seat?*
- *How do you ensure no one else selects the same seat?*
- *If a customer doesn’t complete their purchase, how long should the seat be held?*
- *Will this option be available on both the website and app?*
- *How will third-party services like Expedia or Travelocity handle seat selection?*
- *Where is all this data stored, and how is it managed?*

Once you start digging into the details you start realizing there are a lot of different things you have to account for that require some complex thinking to make sure you not only deliver the best user experience but also a reliable and resilient system as well. Well, luckily that’s where an enterprise architect comes in!

Before answering these questions, it’s essential to visualize the high-level technical architecture involved in handling data across various applications. First, users interact with a front end (the website or mobile app) to find their flight and select their seat. Their input travels over the internet, passes through firewalls and proxies, and then reaches servers that process the requests. Finally, the data is stored in the database. Here’s a simple diagram to visualize basic application data handling. (If any of the terms are unfamiliar, a quick Google search should help, or feel free to ask me directly!)

![App Architecture Diagram](/images/App_Architecture_Diagram.jpg "App Architecture Diagram")

To avoid overwhelming you with too many details, let’s focus on one of the questions: “*Where does all this data go, and how is it managed and stored?”* Data is critical to every business, and getting it right is key to delivering a great customer experience. For our example, we’ll concentrate on key pieces of data:

- Flight Number (For simplicity we’re going to pretend this includes everything like route, flight time, plane type, airport, gate, etc.)
- Passenger Name
- Confirmation Number
- Customer Rewards Number
- Seat Number

In this case there may be multiple databases but let’s imagine there is a single database that has two tables to manage and store this data. For reference, a table is a basic structure of a database that stores data in a structured format of rows and columns. This database would have two main parts: a **user info** table and a **flight** table.
- The **user info** table is where we store customer details like name, rewards number, confirmation number, and seat assignment. Think of this table as a profile storage, it holds all the basic information a customer provides when creating an account.
- The **flight** table, on the other hand, keeps track of flight-specific data, like the flight number, destination, and departure time.

The reason for having two separate tables is that they handle different types of information. However, these tables need to work together during the booking process. For example, when a customer books a flight, the system looks at the user info table to pull in details about the customer (like their name and seat preference), and then it connects this information to the specific flight stored in the flight table. This ensures the customer’s profile and the flight data work together so that everything is in sync, from reserving the seat to confirming the flight details. Even though these tables store different information, they work together seamlessly to complete the booking process. A database system like PostgreSQL is great for this because it lets us set up these connections (called relationships) between different tables, making it easy to link the right customer data to the right flight.

For example, let’s say John Doe books a flight from Chicago to New York, departing at 11:00 AM on Christmas Eve. His seat is 15A, his confirmation number is FLIGHT123, and his rewards number is johndoe123. First, the system pulls John's details from the user info table, and then links them to his flight in the flight table. This way, John’s seat is reserved, and he receives a confirmation. All of this happens behind the scenes through careful planning, making sure the system coordinates the information from both tables for a smooth experience.

Please refer to the graphic below to better visualize how these tables are set up and how they interact.

![Flight Database Tables](/images/Flight_Database_Tables.jpg "Flight Database Tables")

Of course, this is a simplified version of a much more complex system. Building something like this involves a lot of analysis, proof of concept, testing, data modeling, and decision-making. But hopefully, this gives you a glimpse into the technical complexities that enterprise architects deal with.

Now, my job isn’t an exact replica of this scenario. I face different challenges in a different industry, but the underlying theme is similar: identify a problem and help solve it. If anything is unclear, you have questions, or you’re simply curious about what an enterprise architect does, feel free to reach out!
