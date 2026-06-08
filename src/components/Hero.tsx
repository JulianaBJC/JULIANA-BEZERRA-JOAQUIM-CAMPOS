/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowDown, Mail, GraduationCap, Sparkles, BookOpen } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-slate-50"
    >
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-400/15 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-450/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[600px] bg-white/30 rounded-full blur-2xl -z-20 pointer-events-none border border-slate-200/50" />
 
      {/* Grid Pattern Overlay in dark system for light theme */}
      <div className="absolute inset-0 bg-[radial-gradient(#0000000a_1px,transparent_1px)] [background-size:24px_24px] opacity-60 -z-10" />
 
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-700 text-xs font-semibold tracking-wide mb-6 uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            Estratégia · Educação · Saúde
          </motion.div>
 
          {/* Name & Title */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#0b1a30] mb-2"
          >
            Juliana Bezerra Joaquim Campos
          </motion.h1>
 
          <motion.p
            variants={itemVariants}
            className="text-gold-600 font-mono text-xs sm:text-sm tracking-wider uppercase mb-6 max-w-3xl text-center leading-relaxed font-semibold"
          >
            Enfermeira · Pedagoga · Mestre em Ciências da Saúde (UNIFESP) · Especialista em Design Instrucional
          </motion.p>
 
          <motion.div
            variants={itemVariants}
            className="w-24 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent mb-8"
          />
 
          {/* Core Guiding Question (Posicionamento Central, de excepcional legilibidade) */}
          <motion.div
            variants={itemVariants}
            className="relative max-w-3xl bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl glow-gold mb-8"
          >
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-gold-600 font-serif text-3xl font-bold">
              “
            </span>
            <h2 className="font-sans text-xl sm:text-2xl md:text-3xl font-semibold leading-relaxed text-[#0b1a30] tracking-tight antialiased">
              Como formar profissionais capazes de permanecer saudáveis, humanos e sustentáveis ao longo da vida profissional?
            </h2>
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#0b1a30] border border-slate-200 text-[10px] font-mono text-gold-200 tracking-widest uppercase font-semibold">
              Tese Norteadora de Posicionamento Estético
            </span>
          </motion.div>
 
          {/* Executive Subtitle & Statement */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 max-w-3xl mb-10"
          >
            <p className="text-base sm:text-lg md:text-xl font-semibold tracking-wide text-slate-800 text-center">
              Especialista em Educação, Saúde, Desenvolvimento Humano, Gestão e Transformação Digital
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal text-center">
              Dedicada a construir a nova arquitetura da educação e formação sustentável em saúde. Uma trajetória que conecta conhecimento científico, desenvolvimento humano e inovação para transformar o comportamento organizacional de equipes de elite e serviços assistenciais complexos.
            </p>
          </motion.div>
 
          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#manifesto"
              className="px-8 py-3.5 rounded-full text-xs font-semibold bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-[#0b1a30] transition-all flex items-center gap-2 group hover:scale-102 shadow-md shadow-gold-500/10"
            >
              <BookOpen className="w-4 h-4 transition-transform group-hover:scale-110" />
              Ler Manifesto de Ensino
            </a>
            <a
              href="#contato"
              className="px-8 py-3.5 rounded-full text-xs font-semibold border border-slate-300 hover:border-gold-500 text-slate-700 hover:text-slate-900 bg-white/50 backdrop-blur-xs shadow-sm transition-all flex items-center gap-2 group"
            >
              <Mail className="w-4 h-4 text-gold-600" />
              Agendar Diálogo Profissional
            </a>
          </motion.div>
 
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="mt-16 flex flex-col items-center gap-2 text-slate-400 hover:text-gold-600 transition-colors cursor-pointer"
            onClick={() => document.getElementById("manifesto")?.scrollIntoView()}
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">Explorar Trajetória</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
