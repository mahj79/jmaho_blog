import Posts from "./components/Posts";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-12 content-center"> 
      <section className="flex justify-center w-full mt-4 sm:mt-6">
      <Link href="/about">
        <button className="bg-gray-800 font-spaceGrotesk hover:bg-gray-700 text-white text-xl sm:text-md font-bold py-2 px-4 border border-black rounded">
          About Me!
        </button>
      </Link>

      </section>
      <Posts />
    </main>
  );
}
