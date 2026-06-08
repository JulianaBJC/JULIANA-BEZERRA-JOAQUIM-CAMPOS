/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { BookMarked, Sparkles, Compass, Heart, HeartHandshake, ShieldAlert } from "lucide-react";

export default function Books() {
  const topicsMainBook = [
    { title: "Formação Sustentável", desc: "A desconstrução da mentalidade de super-herói que leva ao esgotamento clínico crônico." },
    { title: "Saúde Mental no Front", desc: "Como mitigar estresse agudo, burnout e fadiga por compaixão em equipes de alta pressão." },
    { title: "Nova Arquitetura Educacional", desc: "A incorporação estruturada de TCC e Neurociência cognitiva aplicada no design instrucional de saúde." },
    { title: "Pedagogia da Segurança", desc: "Integração entre treinamento técnico seguro e salvaguardas psicológicas individuais." }
  ];

  return (
    <section id="livros" className="py-24 relative overflow-hidden bg-slate-50">
      {/* Background glow and subtle dots */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />
 
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-[10px] font-mono text-gold-600 tracking-widest uppercase font-semibold">Autoridade & Escrita</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0b1a30] font-semibold tracking-tight">
            Livros e Publicações
          </h2>
          <div className="accent-line w-24 mx-auto" />
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            Obras estruturadoras voltadas para o desenvolvimento acadêmico, técnico e existencial de profissionais de saúde e desenvolvimento de pessoas.
          </p>
        </div>
 
        {/* Grid: Primary Book (Large Span) & Secondary Book (Sidebar style or column style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Main Book - Cuidar Sem Adoecer */}
          <div className="lg:col-span-8 flex flex-col justify-between bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-xl glow-gold relative overflow-hidden">
            
            <div className="absolute top-0 right-0 p-4 shrink-0 bg-gold-500/10 border-b border-l border-slate-200/50 text-gold-700 text-xs font-mono tracking-widest uppercase rounded-bl-xl font-semibold">
              Destaque Principal
            </div>
 
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full">
              {/* Cover Column */}
              <div className="md:col-span-5 flex justify-center py-6">
                {/* 3D Interactive CSS Book */}
                <div className="relative group perspective-[1000px] cursor-pointer">
                  <motion.div 
                    whileHover={{ rotateY: -15, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="relative w-48 h-72 rounded-r-lg shadow-2xl transition-all preserve-3d"
                    style={{ transformOrigin: "left center" }}
                  >
                    {/* Spine Cover (Fake thickness) */}
                    <div className="absolute inset-y-0 -left-1 w-2 bg-gradient-to-r from-gold-900 to-gold-800 rounded-l-sm" />
                    
                    {/* Front Cover - Dark Navy for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-gold-400/30 rounded-r-lg p-5 flex flex-col justify-between overflow-hidden">
                      {/* Cover Details */}
                      <div>
                        {/* Horizontal Line Accent */}
                        <div className="w-10 h-1 bg-gold-400/80 mb-3" />
                        <span className="text-[8px] font-mono text-gold-400 tracking-widest uppercase">Juliana Bezerra</span>
                      </div>
 
                      <div className="space-y-2 my-auto">
                        <h3 className="font-serif text-xl font-normal leading-snug text-white tracking-wide">
                          Cuidar Sem Adoecer
                        </h3>
                        <p className="text-[10px] text-gray-400 italic">
                          Formação sustentável, saúde mental e a nova arquitetura da educação.
                        </p>
                      </div>
 
                      <div className="flex items-center justify-between border-t border-white/10 pt-3">
                        <div className="flex items-center gap-1">
                          <BookMarked className="w-4 h-4 text-gold-400" />
                          <span className="text-[8px] font-mono text-gold-400 tracking-wider">LIVRO NOVO</span>
                        </div>
                        <span className="text-[8px] font-mono text-gray-500">2026/2027</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
 
              {/* Text Description Column */}
              <div className="md:col-span-7 space-y-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-700 text-[10px] font-mono mb-2 font-semibold">
                    <Sparkles className="w-3 h-3 text-gold-600" /> EIXO CIENTÍFICO DA CARREIRA
                  </span>
                  <h3 className="font-serif text-2xl text-[#0b1a30] font-semibold mb-2">
                    Cuidar Sem Adoecer
                  </h3>
                  <p className="text-xs font-mono text-gold-600 mb-4 tracking-wide font-semibold">
                    Formação sustentável, saúde mental e a nova arquitetura da educação em saúde.
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    Este livro representa a materialização de uma vida de estudos teóricos e enfrentamento clínico. É um guia completo que desafia as metodologias educacionais clássicas, sugerindo uma transição para processos em saúde baseados em fatores de resiliência e amparo neural.
                  </p>
                </div>
 
                <div className="space-y-3.5 border-t border-slate-100 pt-4">
                  <h4 className="text-[10px] font-mono uppercase text-slate-500 tracking-widest font-semibold">
                    Pilares Explorados no Livro:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {topicsMainBook.map((topic) => (
                      <div key={topic.title} className="space-y-0.5">
                        <h5 className="text-xs font-semibold text-slate-800">
                          {topic.title}
                        </h5>
                        <p className="text-[11px] text-slate-500 leading-relaxed font-light">
                          {topic.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
 
          </div>
 
          {/* Secondary Book - Renascida na Dor, Fortalecida na Fé */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xl hover:bg-slate-50/50 transition-all duration-300">
            <div className="space-y-6">
              <span className="text-[10px] font-mono text-slate-450 tracking-widest uppercase">Eixo Biográfico & Humano</span>
              
              {/* Cover drawing (Small) */}
              <div className="flex justify-center">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative w-36 h-52 bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950 border border-white/10 rounded-r shadow-xl p-4 flex flex-col justify-between overflow-hidden"
                >
                  <div className="border-l border-gold-400/40 pl-2">
                    <span className="text-[7px] font-mono text-gold-400 block tracking-widest uppercase">Mapeamento Biográfico</span>
                  </div>
                  
                  <div className="space-y-1">
                    <h4 className="font-serif text-sm text-white font-normal leading-tight">
                      Renascida na Dor,
                    </h4>
                    <h4 className="font-serif text-sm text-gold-400 font-semibold leading-tight">
                      Fortalecida na Fé
                    </h4>
                  </div>
 
                  <div className="flex items-center justify-between border-t border-white/5 pt-2">
                    <Heart className="w-3.5 h-3.5 text-red-400/60" />
                    <span className="text-[7px] font-mono text-gray-500">Juliana Bezerra</span>
                  </div>
                </motion.div>
              </div>
 
              <div>
                <h3 className="font-serif text-xl text-[#0b1a30] font-semibold mb-2">
                  Renascida na Dor, Fortalecida na Fé
                </h3>
                <p className="text-[10px] font-mono text-gold-600 uppercase mb-4 tracking-wider font-semibold">
                  Tratado de Superação Existencial
                </p>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Uma obra profundamente pessoal que retrata a vitória sobre o câncer, convertendo a dor física e espiritual em um farol de fé e propósito clínico. É o relato inspirador do qual floresce seu desejo profissional de humanizar e estruturar os bastidores clínicos.
                </p>
              </div>
            </div>
 
            <div className="border-t border-slate-100 pt-4 mt-6">
              <div className="flex gap-3 items-start p-3 bg-slate-50 rounded-xl border border-slate-200/50">
                <HeartHandshake className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <header className="text-[11px] font-bold text-slate-850">Conexão Humana</header>
                  <p className="text-[10px] text-slate-500 leading-normal font-light">
                    Alimenta seu trabalho de saúde mental e o desenvolvimento focado em TCC.
                  </p>
                </div>
              </div>
            </div>
 
          </div>
        </div>
      </div>
    </section>
  );
}
