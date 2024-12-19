import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="px-12 mx-auto">
      <p className="mt-12 mb-6 text-lg text-center text-wrap dark:text-white">
        Hello and Welcome!&nbsp; 
        <span className="text-wrap">
          I&apos;m <span className="font-bold">Jack</span> or more commonly referred to by what my friends call me&sbquo; <span className="font-bold">Maho!</span>
        </span>
        </p>
      <p className="px-8 mt-12 mb-12 text-lg text-left text-wrap dark:text-white">
        A little about me is I work in tech&sbquo; with a background in software engineering and electrical engineering. However&sbquo; up to this point I&apos;ve spent my career working in the cybersecurity field. 

        While my focus has been in the cybersecurity space&sbquo; my real passion is solving complex problems with tech&sbquo; hence why I spend free time programming! When I&apos;m not working&sbquo; you can usually find me trying to pick up new skills&sbquo; spending time with my friends&sbquo; fiancee&sbquo; or Cleo my french bulldog. Thank you for taking the time to visit my website and hopefully you find something you enjoy in one of my posts.
      </p>
      <Posts />
    </main>
  );
}
