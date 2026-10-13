import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";

export default function Home() {
  return (
    <>
      <ScrollObserver />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

