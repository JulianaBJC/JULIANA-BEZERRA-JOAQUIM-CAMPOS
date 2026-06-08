/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, GraduationCap } from "lucide-react";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Manifesto", href: "#manifesto" },
    { label: "Livros", href: "#livros" },
    { label: "Projetos", href: "#projetos" },
    { label: "Educação", href: "#educacao" },
    { label: "Tecnologia", href: "#tecnologia" },
    { label: "Resultados", href: "#resultados" },
    { label: "Sobre", href: "#sobre-mim" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "py-4 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-md" 
        : "py-6 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Name */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-600 group-hover:border-gold-500/50 transition-colors">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-semibold tracking-wide text-[#0b1a30] group-hover:text-gold-650 transition-colors">
              Juliana Bezerra
            </span>
            <span className="text-[10px] font-mono text-gold-600 tracking-wider uppercase">
              Saúde & Educação
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors ${
                  isActive ? "text-gold-700" : "text-slate-600 hover:text-[#0b1a30]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBG"
                    className="absolute inset-0 bg-gold-500/5 rounded-full border border-gold-500/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Professional Contact Link */}
        <div className="hidden lg:block">
          <a
            href="#contato"
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-slate-950 transition-all shadow-md hover:shadow-gold-500/10 hover:scale-[1.02]"
          >
            Falar com Juliana
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-slate-200/80 py-6 px-6 lg:hidden flex flex-col gap-4 shadow-xl"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-semibold tracking-wide py-2 border-b border-slate-100 transition-colors ${
                  activeSection === item.href.slice(1) ? "text-gold-700 pl-2" : "text-slate-700 hover:text-[#0b1a30]"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-gold-500 to-gold-600 outline-none text-[#0b1a30] text-center shadow-md shadow-gold-500/10"
            >
              Falar com Juliana
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
