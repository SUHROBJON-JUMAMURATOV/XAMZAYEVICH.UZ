import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import GithubActivity from "@/sections/GithubActivity";
import Hero from "@/sections/Hero";
import Philosophy from "@/sections/Philosophy";
import Projects from "@/sections/Projects";
import Services from "@/sections/Services";
import Skills from "@/sections/Skills";
import Stats from "@/sections/Stats";

export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Philosophy />
        <GithubActivity />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
