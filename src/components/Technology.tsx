/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Cpu, LayoutTemplate, MonitorSmartphone, Code2 } from "lucide-react";

export default function Technology() {
  const techPillars = [
    {
      title: "Inteligência Artificial na Aprendizagem",
      desc: "Uso estratégico de IA para personalização de trilhas cognitivas, tutoria virtual assistida e automação inteligente de roteiros instrucionais de alto rendimento.",
      icon: Cpu,
    },
    {
      title: "Design Instrucional Apoiado por Tech",
      desc: "Modelagem de jornadas educacionais de alto engajamento cognitivo, baseadas em frameworks ágeis e mapeamento mental estruturado para transferência imediata ao front clínico.",
      icon: LayoutTemplate,
    },
    {
      title: "Ambientes Virtuais de Aprendizagem (AVAs)",
      desc: "Projeto arquitetônico de experiência (UX/UI) e fomento de comunidades em plataformas como Moodle, Blackboard e Canvas corporativos.",
      icon: MonitorSmartphone,
    },
    {
      title: "Desenvolvimento Web como Inovação",
      desc: "Criação de soluções sob medida para responder a dores clínicas e organizacionais, desenvolvendo aplicativos e protótipos focados na saúde mental de equipes.",
      icon: Code2,
    }
  ];

  const languages = [
    { name: "HTML & CSS", category: "Fundamento Visual", color: "bg-gold-500/10 text-gold-750 border-gold-500/20" },
    { name: "TypeScript", category: "Tipagem e Robustez", color: "bg-gold-500/10 text-gold-750 border-gold-500/20" },
    { name: "JavaScript", category: "Interação Dinâmica", color: "bg-gold-500/10 text-gold-750 border-gold-500/20" },
    { name: "Git & GitHub", category: "Versionamento", color: "bg-gold-500/10 text-gold-750 border-gold-500/20" }
  ];

  const corporatePlatforms = [
    { name: "Moodle & Blackboard", category: "Ambientes Virtuais AVA" },
    { name: "Power BI", category: "Dashboards & Dados" },
    { name: "Tasy & MV/MVI", category: "HIS / Prontuário Clínico" },
    { name: "Senior", category: "ERP / Gestão de Pessoas" }
  ];

  return (
    <section id="tecnologia" className="py-24 relative overflow-hidden bg-slate-100/60">
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-[10px] font-mono text-gold-650 tracking-widest uppercase font-semibold">Arquitetura de Sistemas Pedagógicos</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0b1a30] font-semibold tracking-tight">
            Tecnologia Educacional e Transformação Digital
          </h2>
          <div className="accent-line w-24" />
        </div>

        {/* Layout containing Statement on Left, Grid Elements on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Statement column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4 text-slate-700 font-normal text-sm sm:text-base leading-relaxed text-left">
              <p>
                Não opero simplesmente como programadora de códigos isolados. Meu grande diferencial reside em ser uma <strong className="text-[#0b1a30] font-semibold font-sans">profissional da saúde e educadora que possui letramento tecnológico instrumental profundo</strong>.
              </p>
              <p>
                Isso me possibilita mediar com inteligência extraordinária o diálogo entre o time de engenharia de software e os especialistas clínicos na linha de frente, estruturando e prototipando sistemas que funcionam perfeitamente na prática hospitalar sem burocracia.
              </p>
            </div>

            {/* Toolbox visual block */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl shadow-slate-100 space-y-4 text-left">
              <h4 className="text-[10px] font-mono uppercase text-slate-500 tracking-wider font-semibold">
                Desenvolvimento, HTML, CSS, JS, TS, Git/GitHub
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {languages.map((lng) => (
                  <div key={lng.name} className={`p-3 rounded-xl border flex flex-col gap-1 transition-colors duration-300 ${lng.color}`}>
                    <span className="text-xs font-bold leading-none">{lng.name}</span>
                    <span className="text-[9px] opacity-80 font-semibold font-mono block tracking-wider uppercase">{lng.category}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Systems & Corporate Platforms block (Moodle, Blackboard, Power BI, Senior, Tasy, MV/MVI) */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl shadow-slate-100 space-y-4 text-left">
              <h4 className="text-[10px] font-mono uppercase text-slate-500 tracking-wider font-semibold">
                Plataformas de Gestão, Dados & AVAs
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {corporatePlatforms.map((plt) => (
                  <div key={plt.name} className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 flex flex-col gap-1.5 hover:border-gold-500/30 transition-all duration-300">
                    <span className="text-xs font-bold text-[#0b1a30] leading-none">{plt.name}</span>
                    <span className="text-[9px] text-gold-700 font-semibold font-mono block tracking-wider uppercase">{plt.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Pillars grid on Right */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {techPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white p-6 rounded-3xl border border-slate-200 flex flex-col gap-4 hover:border-gold-500/30 hover:bg-gold-500/5 transition-all duration-300 glow-card shadow-xl shadow-slate-100"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-750">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-serif text-sm sm:text-base text-[#0b1a30] font-semibold">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
