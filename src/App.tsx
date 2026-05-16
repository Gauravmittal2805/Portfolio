import { useEffect } from "react";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Coding } from "@/components/portfolio/Coding";
import { Certifications } from "@/components/portfolio/Certifications";
import { Hackathons } from "@/components/portfolio/Hackathons";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

import { ThemeProvider } from "@/components/ThemeProvider";

function App() {
  useEffect(() => {
    // Ensure the page starts at the top on load/refresh
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <main className="min-h-screen bg-background text-foreground antialiased">
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Coding />
        <Certifications />
        <Hackathons />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
