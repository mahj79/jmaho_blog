import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="px-12 mx-auto">
      <p className="mt-12 mb-12 text-lg text-center text-wrap dark:text-white">
        Hello and Welcome!&nbsp; 
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Jack!&nbsp;</span>
        </span>
        <br></br>
        Thank you for taking the time to visit my website and hopefuly you find something you enjoy in one of my posts.
      </p>
      <Posts />
    </main>
  );
}
