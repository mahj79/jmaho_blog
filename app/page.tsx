import Posts from "./components/Posts";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-12 content-center"> 
      <section className="flex justify-center w-full mt-2 sm:mt-2">
      {/* <Link href="/about">
        <button className="bg-gray-800 font-spaceGrotesk hover:bg-gray-600 text-white text-xl sm:text-md font-bold py-2 px-4 border border-black rounded">
          About Me!
        </button>
      </Link> */}
      {/* <p className="text-center  text-gray-300 text-xl sm:text-md font-bold py-2 px-4">
        A blog about simplifying complex tech topics for the everyday person.
      </p> */}
      </section>
      <Posts />

    </main>
  );
}
