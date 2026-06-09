/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { BookMarked, Sparkles, AlertTriangle, ShieldCheck, Heart, GraduationCap } from "lucide-react";

export default function CuidarSemAdoecer() {
  const topicsMainBook = [
    { 
      title: "Formação Sustentável", 
      desc: "A desconstrução da perigosa mentalidade de super-herói que leva ao esgotamento clínico crônico e burnout precoce.", 
      icon: Heart 
    },
    { 
      title: "Saúde Mental no Front", 
      desc: "Como identificar e mitigar voluntariamente o estresse agudo, a opressão situacional e a fadiga por compaixão em equipes de alta pressão.", 
      icon: AlertTriangle 
    },
    { 
      title: "Nova Arquitetura Educacional", 
      desc: "A incorporação estruturada de Terapia Cognitivo-Comportamental (TCC) e neurociência cognitiva aplicada ao design de aprendizagem.", 
      icon: GraduationCap 
    },
    { 
      title: "Pedagogia da Segurança", 
      desc: "A fina integração prática entre o rigoroso treinamento técnico do suporte à vida e salvaguardas emocionais seguras.", 
      icon: ShieldCheck 
    }
  ];

  return (
    <section id="cuidar-sem-adoecer" className="py-24 relative overflow-hidden bg-slate-100/60">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4 text-left">
          <span className="text-[10px] font-mono text-gold-650 tracking-widest uppercase font-semibold">Projeto Intelectual de Destaque</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0b1a30] font-semibold tracking-tight flex flex-wrap items-center gap-2">
            <span>Cuidar Sem Adoecer</span>
            <span className="text-[9px] font-mono tracking-widest font-bold px-2.5 py-1 bg-amber-550/10 text-amber-800 border border-amber-500/20 rounded-full uppercase shrink-0">
              Livro Em Desenvolvimento
            </span>
          </h2>
          <div className="accent-line w-24" />
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            A principal obra e tese intelectual de Juliana Bezerra (atualmente em fase de escrita), abordando a saúde mental coletiva e a estruturação de metodologias sustentáveis de ensino na prática clínica.
          </p>
        </div>

        {/* 3D Book Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch text-left">
          
          {/* Cover drawing (Interactive) */}
          <div className="lg:col-span-5 flex justify-center items-center py-6 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden min-h-[350px]">
            <div className="relative group perspective-[1000px] cursor-pointer">
              <motion.div 
                whileHover={{ rotateY: -15, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative w-52 h-80 rounded-r-lg shadow-2xl transition-all preserve-3d"
                style={{ transformOrigin: "left center" }}
              >
                {/* Spine Cover (Fake thickness) */}
                <div className="absolute inset-y-0 -left-1 w-2 bg-gradient-to-r from-gold-900 to-gold-800 rounded-l-sm" />
                
                {/* Front Cover - Elegant Navy and Gold Accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0b1a30] via-[#091526] to-[#040c17] border border-gold-400/30 rounded-r-lg p-6 flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="w-10 h-1 bg-gold-400/80 mb-3" />
                    <span className="text-[8px] font-mono text-gold-400 tracking-widest uppercase">Juliana Bezerra</span>
                  </div>

                  <div className="space-y-2 my-auto">
                    <h3 className="font-serif text-2xl font-normal leading-snug text-white tracking-wide">
                      Cuidar Sem Adoecer
                    </h3>
                    <p className="text-[10px] text-gray-400 italic">
                      Formação sustentável, saúde mental e a nova arquitetura da educação.
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 pt-3">
                    <div className="flex items-center gap-1">
                      <BookMarked className="w-4 h-4 text-gold-400" />
                      <span className="text-[8px] font-mono text-gold-400 tracking-wider">OBRA PRINCIPAL</span>
                    </div>
                    <span className="text-[8px] font-mono text-gray-500">2026/2027</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Core Info & Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-750 text-[10px] font-mono mb-3 font-semibold">
                  <Sparkles className="w-3 h-3 text-gold-600" /> EIXO DE SUSTENTABILIDADE COGNITIVA
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#0b1a30] font-bold">
                  O Livro de Cabeceira dos Gestores de Saúde e Docentes da área
                </h3>
                <p className="text-slate-650 text-xs sm:text-sm leading-relaxed font-normal mt-3">
                  Este livro representa a materialização de anos de estudos em enfermagem crítica, pedagogia corporativa e psicologia comportamental. É um guia de alto valor metodológico desenhado para gestores das áreas hospitalares, consultores e educadores da área da saúde. Profissionais designers instrucionais encontrarão um material atualizado pronto para aplicar em sua prática.
                </p>
              </div>

              {/* Pillars list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                {topicsMainBook.map((topic) => {
                  const Icon = topic.icon;
                  return (
                    <div key={topic.title} className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-gold-500/10 flex items-center justify-center text-gold-750">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <h4 className="text-xs font-bold text-slate-800">
                          {topic.title}
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-normal pl-8">
                        {topic.desc}
                      </p>
                    </div>
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
