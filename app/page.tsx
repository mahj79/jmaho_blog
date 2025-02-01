import Posts from "./components/Posts";
import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <main className="px-12 mx-auto">
        <button className="bg-gray-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-green-500 rounded">
          <AboutMe />
        </button>
      <Posts />
    </main>
  );
}
