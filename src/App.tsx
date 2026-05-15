import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Coding } from "@/components/portfolio/Coding";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

import { ThemeProvider } from "@/components/ThemeProvider";

function App() {
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
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
