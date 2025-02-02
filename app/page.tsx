import Posts from "./components/Posts";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-12 content-center"> 
      <section className="flex justify-center w-full mt-4 sm:mt-6">
        <button className="bg-black hover:bg-gray-700 text-white text-sm sm:text-base font-bold py-2 px-4 border border-black rounded">
          <Link href="/about">About Me!</Link>
        </button>
      </section>
      <Posts />
    </main>
  );
}
