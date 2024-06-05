import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="px-12 mx-auto">
      <p className="mt-12 mb-12 text-lg text-center dark:text-white">
        Hello and Welcome!&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Jack!</span>
        </span>
      </p>
      <Posts />
    </main>
  );
}
