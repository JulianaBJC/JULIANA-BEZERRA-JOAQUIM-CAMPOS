/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Books from "./components/Books";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Technology from "./components/Technology";
import Results from "./components/Results";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const sections = [
      "inicio",
      "manifesto",
      "livros",
      "projetos",
      "educacao",
      "tecnologia",
      "resultados",
      "sobre-mim",
      "contato animate"
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Detect active section when it fills the major part of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id.split(" ")[0]);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id.split(" ")[0]);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div id="executive-portfolio-root" className="min-h-screen bg-[#f5f7f9] text-[#0b1a30] flex flex-col justify-between selection:bg-gold-500/20 selection:text-slate-950">
      {/* Dynamic Header */}
      <Header activeSection={activeSection} />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <Manifesto />
        <Books />
        <Projects />
        <Education />
        <Technology />
        <Results />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
