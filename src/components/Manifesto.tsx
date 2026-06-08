/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { HeartPulse, GraduationCap, ShieldCheck, Dumbbell, Cpu, Compass, BookOpen } from "lucide-react";

export default function Manifesto() {
  const areas = [
    { title: "Saúde", icon: HeartPulse, color: "text-red-400", desc: "A prática clínica assentada na segurança do paciente e no amparo humano." },
    { title: "Educação", icon: GraduationCap, color: "text-emerald-400", desc: "Novas arquiteturas de aprendizagem baseadas em evidências cognitivas." },
    { title: "Gestão", icon: ShieldCheck, color: "text-amber-400", desc: "Processos, cultura institucional sustentável e sistemas integrados." },
    { title: "Desenvolvimento Humano", icon: Dumbbell, color: "text-sky-400", desc: "O bem-estar e a integridade de quem está encarregado de cuidar." },
    { title: "Tecnologia", icon: Cpu, color: "text-purple-400", desc: "A tecnologia como infraestrutura pedagógica e potencializadora humana." },
    { title: "Inovação", icon: Compass, color: "text-pink-400", desc: "A criação de pontes inéditas entre teorias científicas e o cotidiano clínico." },
  ];

  return (
    <section id="manifesto" className="py-24 relative overflow-hidden bg-slate-100/60">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl -z-10" />
 
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Copywriting Essay */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-gold-600 tracking-widest uppercase font-semibold">Espinha Dorsal da Filosofia</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0b1a30] font-semibold tracking-tight">
                Manifesto de Formação Sustentável
              </h2>
              <div className="accent-line w-20" />
            </div>
 
            <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Cuidar de vidas humanas é uma das atividades mais nobres e, simultaneamente, mais propensas ao adoecimento psíquico e físico. Ao longo de anos de atuação clínica hospitalar severa e coordenação educacional na saúde, me deparei com uma contradição gritante: 
                <strong className="text-slate-900 font-semibold"> os sistemas de ensino preparam o profissional para salvar o outro, mas ignoram as ferramentas necessárias para que ele permaneça íntegro.</strong>
              </p>
 
              <blockquote className="border-l-4 border-gold-500 pl-6 my-8 font-sans text-base sm:text-lg text-slate-800 font-medium leading-relaxed bg-gold-500/5 py-5 pr-4 rounded-r-2xl">
                "Minha trajetória foi atravessada pela finitude e pela dor. Enfrentar o diagnóstico de um câncer me transformou inteiramente. Ali, experimentei o cuidado técnico como paciente e compreendi que a verdadeira ciência da saúde exige sustentabilidade emocional, resiliência terapêutica e inteligência de processos."
              </blockquote>
 
              <p>
                Esta fusão única de perspectivas – a <strong className="text-slate-900 font-semibold font-sans">enfermagem</strong> que atua na linha de frente, a <strong className="text-slate-900 font-semibold font-sans">pedagogia</strong> que entende como as pessoas aprendem, o <strong className="text-slate-900 font-semibold font-sans">mestrado científico na UNIFESP</strong> e as descobertas da <strong className="text-slate-900 font-semibold font-sans">Terapia Cognitivo-Comportamental (TCC) e das Neurociências</strong> – revelou que a chave para a formação moderna de equipes reside no equilíbrio dinâmico entre processos operacionais claros e acolhimento humano fundamentado.
              </p>
 
              <p>
                O design instrucional não é apenas diagramar telas; é arquitetar experiências que alteram a cultura de equipes, promovendo uma prática assistencial que cura sem extenuar quem cuida. Esse é o manifesto que move minhas consultorias, palestras, publicações e o plano para o meu futuro doutorado.
              </p>
            </div>
          </div>
 
          {/* Right Side: The Six Pillars */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 space-y-6 shadow-xl glow-gold">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-650">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#0b1a30] font-semibold">As 6 Grandes Áreas</h3>
                  <p className="text-xs text-slate-500">A confluência multidisciplinar de Juliana</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {areas.map((area, i) => {
                  const Icon = area.icon;
                  return (
                    <motion.div
                      key={area.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="group flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-gold-500/5 hover:border-gold-500/20 transition-all duration-300"
                    >
                      <div className={`w-8 h-8 rounded-lg ${area.color} bg-white flex items-center justify-center shrink-0 shadow-xs border border-slate-200/50`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-xs font-semibold text-slate-800 group-hover:text-gold-700 transition-colors">
                          {area.title}
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed font-light">
                          {area.desc}
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
