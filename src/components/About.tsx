/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, BookOpen, Sparkles, BrainCircuit } from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState<'percurso' | 'producao' | 'doutorado'>('percurso');

  const tabs = [
    { id: "percurso" as const, label: "Trajetória & Formação", icon: GraduationCap },
    { id: "producao" as const, label: "Projetos Estratégicos & Intelecto", icon: BookOpen },
    { id: "doutorado" as const, label: "Eixo Científico & Doutorado", icon: BrainCircuit }
  ];

  return (
    <section id="sobre-mim" className="py-24 relative overflow-hidden bg-slate-100/60">
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4 text-left">
          <span className="text-[10px] font-mono text-gold-650 tracking-widest uppercase font-semibold">Autoridade Acadêmica</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0b1a30] font-semibold tracking-tight">
            Sobre Juliana Bezerra
          </h2>
          <div className="accent-line w-24" />
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all duration-350 cursor-pointer ${
                  isActive 
                    ? "bg-[#0b1a30] border border-[#0b1a30] text-gold-450 shadow-md" 
                    : "border border-slate-200 text-slate-650 hover:text-[#0b1a30] hover:bg-slate-50 bg-white"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
            {activeTab === 'percurso' && (
              <>
                <div className="lg:col-span-12 xl:col-span-7 space-y-6 text-left">
                  <h3 className="font-serif text-2xl text-[#0b1a30] font-semibold leading-relaxed">
                    A Convergência entre a Linha de Frente e a Academia
                  </h3>
                  <div className="space-y-4 text-slate-700 font-normal text-sm sm:text-base leading-relaxed">
                    <p>
                      Com uma base sólida formada pela dupla graduação em <strong className="text-[#0b1a30] font-semibold font-sans">Enfermagem e Pedagogia</strong>, minha jornada profissional sempre trilhou os caminhos da docência científica aplicada à sobrevivência em ambientes intensos.
                    </p>
                    <p>
                      Sou <strong className="text-[#0b1a30] font-semibold font-sans">Mestre em Ciências da Saúde pela conceituada UNIFESP</strong>, onde refinei meu olhar para a investigação científica guiada por dados robustos e evidências clínicas. 
                    </p>
                    <p>
                      Compreendendo que a transição do conhecimento exige metodologias inovadoras, me especializei como <strong className="text-[#0b1a30] font-semibold font-sans">Designer Instrucional</strong>. Essa habilidade me permite conceber trilhas de treinamento analógicas e digitais de alta absorção cognitiva para indústrias, operadoras médicas e hospitais.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-12 xl:col-span-5 space-y-4 text-left">
                  <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl glow-gold">
                    <h4 className="text-[10px] font-mono text-gold-700 uppercase tracking-widest font-semibold mb-4">Titulações Principais</h4>
                    
                    <div className="space-y-4">
                      <div className="flex gap-4 items-start border-l-4 border-gold-500 pl-4 py-1.5">
                        <div>
                          <h5 className="text-xs font-bold text-slate-800">Mestrado em Ciências da Saúde</h5>
                          <p className="text-[10px] text-slate-500 font-mono font-medium uppercase tracking-wide">UNIFESP · Universidade Federal de São Paulo</p>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start border-l-4 border-gold-500 pl-4 py-1.5">
                        <div>
                          <h5 className="text-xs font-bold text-slate-800">Especialização em Design Instrucional</h5>
                          <p className="text-[10px] text-slate-500 font-mono font-medium uppercase tracking-wide">Arquitetura de Trilhas Digitais de Ensino</p>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start border-l-4 border-gold-500 pl-4 py-1.5">
                        <div>
                          <h5 className="text-xs font-bold text-slate-800">Dupla Graduação: Enfermagem + Pedagogia</h5>
                          <p className="text-[10px] text-slate-500 font-mono font-medium uppercase tracking-wide">A união máxima da assistência com o ensinar racional</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'producao' && (
              <>
                <div className="lg:col-span-12 space-y-8 text-left">
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl text-[#0b1a30] font-semibold">Projetos Estratégicos e Produção Intelectual</h3>
                    <p className="text-xs font-mono text-gold-750 uppercase tracking-widest font-semibold">Atividades científicas, palestras de alto impacto e contribuição autoral</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-100 space-y-3 hover:border-gold-500/30 hover:bg-gold-500/5 transition-all duration-300">
                      <h4 className="font-serif text-base text-[#0b1a30] font-semibold">Consultorias em Mudança Organizacional</h4>
                      <p className="text-xs text-slate-650 leading-relaxed font-normal">
                        Redesenho de metodologias internas hospitalares para desonerar times em sofrimento psicológico ativo, estruturando linhas de cuidado sustentáveis e assertivas.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-100 space-y-3 hover:border-gold-500/30 hover:bg-gold-500/5 transition-all duration-300">
                      <h4 className="font-serif text-base text-[#0b1a30] font-semibold">Arquitetura Curricular Customizada</h4>
                      <p className="text-xs text-slate-650 leading-relaxed font-normal">
                        Construção de currículos educacionais inteiros focados nas dores corporativas clínicas, garantindo que o tempo investido no EaD resulte em excelência à beira-leito.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-100 space-y-3 hover:border-gold-500/30 hover:bg-gold-500/5 transition-all duration-300">
                      <h4 className="font-serif text-base text-[#0b1a30] font-semibold">Produção Científica & Artigos</h4>
                      <p className="text-xs text-slate-650 leading-relaxed font-normal">
                        Escrita e submissão ativa de artigos científicos focados na melhora contínua de metodologias de simulação realística pediátrica e educação médica no Brasil.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'doutorado' && (
              <>
                <div className="lg:col-span-12 xl:col-span-7 space-y-6 text-left animate-fade-in">
                  <h3 className="font-serif text-2xl text-[#0b1a30] font-semibold">A Nova Ciência do Cuidar Sem Adoecer</h3>
                  <div className="space-y-4 text-slate-700 font-normal text-sm sm:text-base leading-relaxed">
                    <p>
                      Meu foco de estudo para o futuro doutorado está assentado na interseção entre a <strong className="text-[#0b1a30] font-semibold font-sans">Terapia Cognitivo-Comportamental (TCC) e a Neurobiologia do Estresse</strong> aplicada a ambientes clínicos e educacionais.
                    </p>
                    <p>
                      Investigo criticamente como o estresse extremo e prolongado sequestra a capacidade de raciocínio lógico imediato de times médicos e de enfermagem em cenários críticos (Pronto Atendimento e Sala Vermelha).
                    </p>
                    <p>
                      O objetivo é desenvolver e validar cientificamente <strong className="text-[#0b1a30] font-semibold font-sans">dispositivos pedagógicos imersivos autorregulatórios</strong> de modo que os profissionais possam regular seus batimentos cardíacos, ansiedade antecipatória e carga cognitiva no instante crucial de sua ação assistencial.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-12 xl:col-span-5 text-left">
                  <div className="p-6 rounded-3xl bg-[#0b1a30] border border-[#091526] text-white space-y-4 shadow-2xl glow-gold">
                    <div className="flex items-center gap-2 text-gold-400">
                      <Sparkles className="w-5 h-5 text-gold-400" />
                      <h4 className="font-mono text-[10px] tracking-wider uppercase font-semibold">Tese Investigativa de Doutoramento</h4>
                    </div>
                    <blockquote className="font-sans text-xs sm:text-sm text-gray-100 leading-relaxed border-l-2 border-gold-400 pl-4 py-1.5">
                      "Utilizar o mapeamento neural cognitivo e ferramentas de regulação comportamental (derivadas do TCC) para que o cuidador mantenha-se humano, sem que seu próprio cérebro adoeça em condições hospitalares de pânico operacional."
                    </blockquote>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
