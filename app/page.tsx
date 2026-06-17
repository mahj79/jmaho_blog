import Hero from "./components/sections/Hero";
import FeaturedWork from "./components/sections/FeaturedWork";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Practice from "./components/sections/Practice";
import Testimonials from "./components/sections/Testimonials";
import Awards from "./components/sections/Awards";
import Clients from "./components/sections/Clients";
import Pricing from "./components/sections/Pricing";
import Writing from "./components/sections/Writing";
import FAQ from "./components/sections/FAQ";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Skills />
      <FeaturedWork />
      <Practice />
      <Testimonials />
      <Awards />
      <Clients />
      <Pricing />
      <Writing />
      <FAQ />
      <Footer />
    </main>
  );
}
