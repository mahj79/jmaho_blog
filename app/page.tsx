import Posts from "./components/Posts";
import Link from "next/link";

export default function Home() {
  return (
    
    <main className="px-12 content-center"> 
      <section>
        <button className="bg-green-900 hover:bg-green-700 mx-auto text-white font-bold py-2 px-4 border border-black rounded">
          <Link href="/AboutMe">About Me!</Link>
        </button>
      </section>
      <Posts />
    </main>
  );
}
