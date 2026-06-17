import Hero from "./components/sections/Hero";
import ScoreTicker from "./components/ui/ScoreTicker";
import FeaturedWork from "./components/sections/FeaturedWork";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Practice from "./components/sections/Practice";
import Testimonials from "./components/sections/Testimonials";
import Awards from "./components/sections/Awards";
import Writing from "./components/sections/Writing";
import FAQ from "./components/sections/FAQ";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ScoreTicker />
      <Experience />
      <Skills />
      <FeaturedWork />
      <Writing />
      <Practice />
      <Testimonials />
      <Awards />
      <FAQ />
      <Footer />
    </main>
  );
}
