import Posts from "./components/Posts";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-12 content-center"> 
      <section className="flex justify-center w-full">
        <button className="bg-green-900 hover:bg-green-700 text-lg text-white font-bold py-2 px-6 border border-black rounded">
          <Link href="/about">About Me!</Link>
        </button>
      </section>
      <Posts />
    </main>
  );
}
