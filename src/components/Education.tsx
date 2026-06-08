/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { BookOpen, Users } from "lucide-react";

export default function Education() {
  const simItems = [
    {
      title: "SimMan (Simulador Adulto Avançado)",
      desc: "Dimensionamento e exploração de situações críticas de alta complexidade com manequins de fidelidade extrema que apresentam respostas fisiológicas, pupilares, sonoras e farmacológicas integradas."
    },
    {
      title: "SimBaby (Simulador de Emergência Infantil)",
      desc: "Construção de competência clínica na identificação rápida de parada cardiorrespiratória e desconforto respiratório neonatal ou pediátrico, promovendo o desenvolvimento de reanimação de excelência."
    },
    {
      title: "Construção de Cenários Imersivos",
      desc: "Arquitetura completa de cenários e simulações que capturam as pressões operacionais e psicológicas do ambiente clínico real, garantindo máxima segurança nas tomadas de decisão."
    },
    {
      title: "Debriefing Estruturado e Construtivo",
      desc: "Metodologia científica para análise de conduta pós-simulação, transformando erros operacionais em aprendizados permanentes e mantendo a segurança psicológica individual e coletiva das equipes."
    }
  ];

  return (
    <section id="educacao" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4 text-left">
          <span className="text-[10px] font-mono text-gold-650 tracking-widest uppercase font-semibold">Pedagogia de Alto Impacto</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0b1a30] font-semibold tracking-tight">
            Educação Continuada, Permanente & Simulação Realística
          </h2>
          <div className="accent-line w-24" />
        </div>

        {/* Introduction Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-12 xl:col-span-6 space-y-6 text-slate-700 font-normal text-sm sm:text-base leading-relaxed text-left">
            <p>
              A diferença clássica entre a <strong className="text-[#0b1a30] font-semibold font-sans">Educação Continuada</strong> (voltada à transmissão pontual de novas técnicas operacionais) e a <strong className="text-[#0b1a30] font-semibold font-sans">Educação Permanente</strong> (que gera reflexão ativa sobre as práticas cotidianas no trabalho) reside na capacidade de construir pontes imersivas baseadas em simulações realistas e inteligência coletiva.
            </p>
            <p>
              Em minha atuação, utilizo a <strong className="text-[#0b1a30] font-semibold font-sans">Simulação Realística de Alta Fidelidade</strong> como catalisador de mudança cultural e técnica. Nela, o profissional experimenta o erro dentro de um cenário controlado e seguro, consolidando competências técnicas de excelência associadas à liderança de times multiprofissionais.
            </p>
          </div>

          <div className="lg:col-span-12 xl:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/65 space-y-3 shadow-md shadow-slate-100 hover:border-gold-500/30 transition-all duration-300">
              <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-700">
                <BookOpen className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-sm text-[#0b1a30] font-semibold">Metodologias Ativas</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                Ensino baseado em problemas (EBP) e dinâmicas de sala de aula invertida que transformam o profissional em protagonista da sua educação.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/65 space-y-3 shadow-md shadow-slate-100 hover:border-gold-500/30 transition-all duration-300">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-550/20 flex items-center justify-center text-emerald-700">
                <Users className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-sm text-[#0b1a30] font-semibold">Formação Multiprofissional</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                Interconexão real de enfermeiros, médicos, fisioterapeutas e técnicos de enfermagem trabalhando em sinergia de alta performance clínica.
              </p>
            </div>
          </div>
        </div>

        {/* Simulators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {simItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-gold-500/30 hover:bg-gold-500/5 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold-500/5 transition-all duration-300 flex flex-col justify-between shadow-xl shadow-slate-100/60"
            >
              <div className="space-y-4">
                <div className="text-[10px] font-semibold font-mono text-gold-700 uppercase tracking-widest leading-none">
                  {`Piloto 0${index + 1}`}
                </div>
                <h4 className="font-serif text-base text-[#0b1a30] font-semibold leading-snug">
                  {item.title}
                </h4>
                <p className="text-[11.5px] text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
              <div className="w-10 h-1 bg-gold-500 rounded mt-6" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
