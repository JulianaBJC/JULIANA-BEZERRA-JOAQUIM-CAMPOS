/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Cpu, Code2, Database, Shield, LayoutGrid, Terminal } from "lucide-react";

export default function Technology() {
  const skillsList = [
    { name: "Inteligência Artificial e IA Generativa", category: "Inovação", icon: Cpu },
    { name: "Prompt Engineering", category: "Inovação", icon: Terminal },
    { name: "Análise de Dados com Excel, SQL e Python", category: "Mapeamento", icon: Database },
    { name: "HTML e HTML5", category: "Letramento", icon: Code2 },
    { name: "CSS", category: "Letramento", icon: Code2 },
    { name: "JavaScript", category: "Letramento", icon: Code2 },
    { name: "TypeScript", category: "Letramento", icon: Code2 },
    { name: "Git e GitHub", category: "Letramento", icon: Terminal },
    { name: "Desenvolvimento de Aplicações Web", category: "Modelagem", icon: LayoutGrid },
    { name: "Fundamentos de Cibersegurança", category: "Segurança", icon: Shield }
  ];

  return (
    <section id="tecnologia" className="py-24 relative overflow-hidden bg-slate-100/60">
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4 text-left">
          <span className="text-[10px] font-mono text-gold-650 tracking-widest uppercase font-semibold">
            Letramento Tecnológico Instrumental
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0b1a30] font-semibold tracking-tight">
            Tecnologia, Inteligência Artificial e Transformação Digital
          </h2>
          <div className="accent-line w-24" />
        </div>

        {/* Layout containing Statement on Left, Skills/Grip on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Statement column */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-4 text-slate-750 font-normal text-sm sm:text-base leading-relaxed">
              <p>
                Ao longo da minha trajetória profissional, participei da implantação de sistemas hospitalares, da construção de projetos educacionais digitais, da gestão de ambientes virtuais de aprendizagem e do desenvolvimento de soluções voltadas para a formação de profissionais da saúde.
              </p>
              <p>
                Compreendendo que a transformação digital passaria a impactar profundamente a educação, a assistência e a gestão em saúde, ampliei minha formação para a área de <strong className="text-[#0b1a30] font-semibold">Desenvolvimento Web Full Stack, Inteligência Artificial, Dados e Cibersegurança</strong> (em andamento na Rocketseat).
              </p>
              <p>
                Meu objetivo não é atuar como desenvolvedora de software tradicional, mas <strong className="text-[#0b1a30] font-semibold">compreender de forma crítica e estratégica</strong> como tecnologias emergentes podem apoiar a aprendizagem, o desenvolvimento humano, a gestão do conhecimento e a inovação na saúde.
              </p>
              <p>
                Acredito que os profissionais responsáveis pela formação das próximas gerações precisam compreender não apenas os processos educacionais e assistenciais, mas também os impactos da Inteligência Artificial, da análise de dados e da transformação digital sobre o futuro do trabalho, da educação e do cuidado.
              </p>
            </div>
          </div>

          {/* Practical Skills Grid on Right */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-100 text-left space-y-6">
              <div>
                <h4 className="text-[10px] font-mono uppercase text-gold-700 tracking-wider font-bold">
                  Especialidades Técnicas em Desenvolvimento & IA
                </h4>
                <p className="text-xs text-slate-500 font-normal">
                  Visão conceitual e habilidades práticas adquiridas e aplicadas estrategicamente.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skillsList.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-3 hover:border-gold-500/30 hover:bg-gold-505/5 transition-all duration-300"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-750 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <h5 className="text-[11.5px] font-bold text-[#0b1a30] leading-tight">
                          {skill.name}
                        </h5>
                        <p className="text-[9px] text-slate-500 tracking-wider uppercase font-mono font-bold leading-none">
                          {skill.category}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
