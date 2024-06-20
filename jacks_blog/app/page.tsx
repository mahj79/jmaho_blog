import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="px-12 mx-auto">
      <p className="mt-12 mb-6 text-lg text-center text-wrap dark:text-white">
        Hello and Welcome!&nbsp; 
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Jack!&nbsp;</span>
        </span>
        </p>
      <p className="px-48 mt-6 mb-12 text-lg text-left text-wrap dark:text-white">
        A little about me is I work in tech, with a background in software engineering and electrical engineering. However, up to this point I've spent my career working in the cybersecurity field. 

        While my focus has been in the cybersecurity space, my real passion is solving complex problems with tech, hence why I spend free time programming! When I'm not working, you can usually find me trying to pick up new skills, spending time with my friends, fiancee, or Cleo my french bulldog. Thank you for taking the time to visit my website and hopefully you find something you enjoy in one of my posts.
      </p>
      <Posts />
    </main>
  );
}
