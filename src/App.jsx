import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import CursorGlow from "./components/CursorGlow";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import TechStack from "./components/sections/TechStack";
import Tools from "./components/sections/Tools";
import Skills from "./components/sections/Skills";
import Certifications from "./components/sections/Certifications";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen w-full overflow-x-hidden bg-white text-slate-900 transition-colors duration-500 ease-in-out dark:bg-slate-950 dark:text-slate-100">
        <CursorGlow />
        <Navbar />
        <Hero />
        <About />
        <TechStack />
        <Tools />
        <Skills />
        <Certifications />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
