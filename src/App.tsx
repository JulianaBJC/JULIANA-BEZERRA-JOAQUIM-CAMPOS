/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import History from "./components/History";
import Manifesto from "./components/Manifesto";
import CuidarSemAdoecer from "./components/CuidarSemAdoecer";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Technology from "./components/Technology";
import Results from "./components/Results";
import Credentials from "./components/Credentials";
import Books from "./components/Books";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const sections = [
      "inicio",
      "minha-historia",
      "manifesto",
      "cuidar-sem-adoecer",
      "projetos",
      "educacao",
      "tecnologia",
      "resultados",
      "credenciais",
      "livros",
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

      {/* Main Sections in the exact sequence requested */}
      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Minha História */}
        <History />

        {/* 3. Manifesto */}
        <Manifesto />

        {/* 4. Cuidar Sem Adoecer */}
        <CuidarSemAdoecer />

        {/* 5. Projetos de Transformação */}
        <Projects />

        {/* 6. Educação e Simulação */}
        <Education />

        {/* 7. Tecnologia e Inovação */}
        <Technology />

        {/* 8. Resultados */}
        <Results />

        {/* 9. Formação e Credenciais */}
        <Credentials />

        {/* 10. Livros e Publicações (Demais livros) */}
        <Books />

        {/* 11. Contato */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
