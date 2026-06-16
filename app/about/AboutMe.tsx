import Image from "next/image"
import Link from "next/link"
import { profilePhotos } from "@/lib/profilePhotos"
import Divider from "../components/ui/Divider"
import SectionHeading from "../components/ui/SectionHeading"
import SectionShell from "../components/ui/SectionShell"

export default function AboutMe() {
    return (
        <SectionShell id="about" className="max-w-3xl">
            <Link
                href="/"
                className="mb-8 inline-block text-xs uppercase tracking-[0.15em] text-white/50 transition-colors hover:text-white"
            >
                ← Back to Home
            </Link>

            <SectionHeading className="mb-8">About Me</SectionHeading>
            <Divider className="mb-12" />

            <div className="space-y-12 text-sm leading-relaxed text-white/70 sm:text-base">
                <section>
                    <h2 className="mb-4 text-lg font-semibold text-white">Introduction</h2>
                    <div className="relative mx-auto mb-6 aspect-[3/4] w-full max-w-xs overflow-hidden rounded-sm">
                        <Image
                            src={profilePhotos.portrait.src}
                            alt={profilePhotos.portrait.alt}
                            fill
                            className="object-cover object-top"
                            sizes="320px"
                        />
                    </div>
                    <p>
                        Thanks for taking the time to learn more about me, the creator behind Maho&apos;s Corner! My name is Jack Mahoney or what my friends call me, Maho. I am a software engineer / enterprise architect based in Chicago.
                    </p>
                    <p className="mt-4">
                        In my continuous pursuit to be a lifelong learner, I decided to create this blog &quot;Maho&apos;s Corner&quot; in early 2024 to tone up some of my front end programming skills, but also to write about topics I find interesting, as writing is a bit therapeutic for me. The inspiration behind Maho&apos;s Corner is to approach traditionally complex technical subjects like Machine Learning and break them down to be simple enough for anyone to walk away from an article and feel like they&apos;ve learned something. The other part is to write about things I enjoy, such as cooking, sports, and being there for the people I care about.
                    </p>
                    <p className="mt-4">
                        Maho&apos;s Corner is meant to be a place where all are welcome. It is a place for learners of all ages and any background. You are welcome to reach out to me on any of my socials which are linked in the navbar. If you are particularly interested in a subject and want me to write about it, then by all means, contact me via one of my socials, or my email:{" "}
                        <a href="mailto:mahonej79@gmail.com" className="text-white underline">
                            mahonej79@gmail.com
                        </a>{" "}
                        and tell me about what you&apos;re interested in!
                    </p>
                </section>

                <Divider />

                <section>
                    <h2 className="mb-4 text-lg font-semibold text-white">Background</h2>
                    <p>
                        While my job titles may imply that all I do is code, I actually like to think of myself as simply a problem solver. Throughout my life and especially since I started my career, I became known as the guy who would find an answer to a complicated problem. I think this is mostly in part for a few reasons.
                    </p>
                    <p className="mt-4">
                        I&apos;ll start with the main reason being I simply love solving problems. I think ever since I was young I would spend hours solving puzzles. Then as I got older I gravitated towards engineering because that&apos;s where the challenging problems were. I would get a sense of satisfaction from completing something complex, and you just don&apos;t get that from figuring out simple or menial tasks. There&apos;s joy derived from putting in the effort and recognizing the effort it takes to achieve the outcome you want.
                    </p>
                    <p className="mt-4">
                        Speaking of growing up, I grew up in the middle of Michigan, near the state&apos;s capitol; Lansing. A fun fact about me is that when I was in middle school, my Dad, brother, and I started a lawn mowing business that is still operating today. After high school, I attended Michigan State University and studied Electrical and Computer Engineering. This is where I first learned to code and understand hardware at the most granular of levels. The first two programming languages I learned were C and Assembly, because for whatever reason electrical engineers have to turn the clock back to the stone ages to truly understand the inner workings of a computer. After 4 years I graduated and received a degree in Electrical and Computer Engineering. I am particularly proud of this, as I am a first generation college graduate.
                    </p>
                    <p className="mt-4">
                        Following graduation, I moved to Chicago to live with my best friends. I always wanted to live in a big city and in my completely biased opinion, Chicago is one of the best cities in the world, so naturally it made sense. Not really knowing what I wanted to do, I spent a few years in cybersecurity consulting. I learned a lot, but after getting burned out, I realized I wanted to do a small career pivot. I wanted to get further back into software engineering and also travel less, so that&apos;s how I ended up at my current job as an enterprise architect for a big bank.
                    </p>
                    <p className="mt-4">
                        For the most part, life is good. I have a great fiancee and a super cute french bulldog, Cleo. Cleo is the dog pictured in my main cover art. Hopefully you&apos;ve enjoyed getting to learn a little bit more about me and I hope you continue to visit Maho&apos;s Corner to see what I write about next!
                    </p>
                </section>

                <Divider />

                <section>
                    <h2 className="mb-4 text-lg font-semibold text-white">Resume</h2>
                    <p className="mb-6">
                        Jack is a skilled engineer who has an impressive track record of solving complex problems at various companies, in various industries. He is typically known as someone who isn&apos;t easily phased by pressure or stress. He&apos;s even been described as &quot;a serial smiler&quot;, due to his tendencies of taking a glass half full approach to situations and helping diffuse tension across teams. Many view him as a mixture of a leader and individual contributor thanks to his ability to adapt to whatever the situation calls for.
                    </p>

                    <h3 className="mb-2 font-semibold text-white">Sr. Lead Enterprise Architect (2022 - Present)</h3>
                    <ul className="mb-6 list-none space-y-2 pl-0">
                        <li>Researched and presented Machine Learning and Neural Networks findings to 300+ engineers. Including live demonstrations with python to highlight impacts of fine tuning weights and biases.</li>
                        <li>Established Platform Guidance Program to assess complete software footprint across the org. Rationalize software products for redundancy. Publish guidance on products to grow, maintain, or to retire, based on future technology strategies.</li>
                        <li>Matured the org&apos;s API lifecycle management program by developing key strategies to perform effective API secrets and key security measures. Results improved developer experience and reduced security risks.</li>
                    </ul>

                    <h3 className="mb-2 font-semibold text-white">Senior Consultant - Cybersecurity (2018 - 2022)</h3>
                    <ul className="mb-6 list-none space-y-2 pl-0">
                        <li>Led projects to maximize cybersecurity maturity, leveraging expertise in NIST and ISO 27001 standards. Identified compliance risks, reduced unnecessary spending, and strengthened network security by addressing top cyber threats. Responsible for implementing secure Software Development Lifecycle (SDLC) practices for clients.</li>
                        <li>Served multiple Fortune 500 clients, as well as other clients in a diverse array of industries on how to reduce overall cyber risk by leveraging industry leading practices for Asset Management at the foundational level. Managed multiple clients, presenting deliverables to executive-level leadership.</li>
                        <li>Responsible for optimizing Oracle footprint for client environments, including developing and deploying SQL scripts to identify database performance improvements and compliance gaps. Implemented performance improvements in Java and Oracle database environments, reducing spending by 20%.</li>
                    </ul>

                    <h3 className="mb-2 font-semibold text-white">Fun Projects</h3>
                    <ul className="mb-6 list-none space-y-2 pl-0">
                        <li>Built and deployed mahoscorner.com website using modern front-end technologies such as TypeScript, Tailwind CSS, React / Next.js, HTML, front-end components, and markdown to build my own blog to write about interesting subjects like machine learning.</li>
                        <li>Built a JSON API project in Go using JSON Web Token authentication, PostgreSQL integration, and Docker deployment. Project simulates building of a bank API from scratch, with optimized performance by utilizing only essential packages. Completed implementation of thorough testing for each HTTP handler to ensure a reliable and secure API</li>
                    </ul>

                    <h3 className="mb-2 font-semibold text-white">Skills</h3>
                    <p className="mb-2 font-medium text-white/90">Software Engineering Skills:</p>
                    <ul className="mb-4 list-none space-y-1 pl-0">
                        <li>Front-End: JavaScript, TypeScript, CSS, HTML, React</li>
                        <li>Data: SQL, PostgreSQL, Supabase</li>
                        <li>Back-End: Go, Node.JS, C</li>
                        <li>Tooling: VS Code, Git, Azure DevOps, Cursor.ai, ServiceNow, Azure Cloud (Certified), Amazon AWS, Docker</li>
                    </ul>

                    <p className="mb-2 font-medium text-white/90">Additional Technical Skills:</p>
                    <ul className="list-none space-y-1 pl-0">
                        <li>Network technologies, protocols, ports, API management, and network segmentation strategies</li>
                        <li>Machine Learning and LLMs (Large Language Models)</li>
                        <li>Enterprise application architecture and strategies</li>
                        <li>Disaster recovery planning, testing, and fault tolerance strategies</li>
                    </ul>
                </section>
            </div>
        </SectionShell>
    )
}
