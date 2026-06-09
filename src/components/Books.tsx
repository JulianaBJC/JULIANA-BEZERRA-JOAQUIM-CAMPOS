/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { BookMarked, Sparkles, Heart, HeartHandshake } from "lucide-react";

export default function Books() {
  return (
    <section id="livros" className="py-24 relative overflow-hidden bg-slate-50">
      {/* Background glow and subtle dots */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-left max-w-3xl mb-16 space-y-4">
          <span className="text-[10px] font-mono text-gold-650 tracking-widest uppercase font-semibold">Narrativa de Superação & Fé</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0b1a30] font-semibold tracking-tight">
            Livros e Publicações Complementares
          </h2>
          <div className="accent-line w-24" />
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            Produções literárias de caráter autoral e biográfico que resgatam a integridade existencial do ser humano através da fé madura, da resiliência e do propósito.
          </p>
        </div>

        {/* Highlight Card for Renascida na Dor, Fortalecida na Fé */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 shrink-0 bg-gold-500/10 border-b border-l border-slate-200/50 text-gold-750 text-xs font-mono tracking-widest uppercase rounded-bl-xl font-bold">
            Eixo Biográfico & Humano
          </div>

          {/* 3D Book Cover Drawing */}
          <div className="lg:col-span-4 flex justify-center py-6">
            <div className="relative group perspective-[1000px] cursor-pointer">
              <motion.div 
                whileHover={{ rotateY: -15, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative w-44 h-64 rounded-r-lg shadow-2xl transition-all preserve-3d"
                style={{ transformOrigin: "left center" }}
              >
                {/* Spine Cover (Fake thickness) */}
                <div className="absolute inset-y-0 -left-1 w-2 bg-gradient-to-r from-gold-900 to-gold-800 rounded-l-sm" />
                
                {/* Front Cover - Elegant dark theme to reflect victory inside pain */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0c0d12] via-[#10131d] to-[#121217] border border-gold-450/40 rounded-r-lg p-5 flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="w-8 h-1 bg-gold-400 mb-2" />
                    <span className="text-[7px] font-mono text-gold-400 block tracking-widest uppercase">Tratado de Superação</span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-serif text-sm sm:text-base text-white font-normal leading-tight">
                      Renascida na Dor,
                    </h4>
                    <h4 className="font-serif text-sm sm:text-base text-gold-400 font-bold leading-tight">
                      Fortalecida na Fé
                    </h4>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 pt-20">
                    <Heart className="w-3 text-red-500" />
                    <span className="text-[7px] font-mono text-gray-500 font-semibold uppercase">Juliana Bezerra</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Content Description */}
          <div className="lg:col-span-8 space-y-6 text-left">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-750 text-[10px] font-mono mb-2 font-bold uppercase">
                <Sparkles className="w-3 h-3 text-gold-650" /> Projeto Autoral Complementar
              </span>
              <h3 className="font-serif text-2xl text-[#0b1a30] font-bold">
                Renascida na Dor, Fortalecida na Fé
              </h3>
              <p className="text-[11px] font-mono text-gold-700 uppercase mb-4 tracking-wider font-bold">
                A Jornada de Fé que Alimenta a Humanização Clínica
              </p>
              <p className="text-slate-650 text-xs sm:text-sm leading-relaxed font-normal">
                Uma obra profundamente pessoal e tocante que retrata a vitória indubitável sobre o câncer, convertendo o sofrimento existencial e a dor física em um testemunho maduro de fé prática, determinação e propósito de vida.
              </p>
              <p className="text-slate-650 text-xs sm:text-sm leading-relaxed font-normal mt-3">
                Este livro é o relator espiritual e humano do qual brota toda a paixão de Juliana por humanizar o cuidado assistencial hospitalar, garantindo que o acolhimento à vulnerabilidade do paciente seja sempre acompanhado pelo respeito à integridade do profissional de saúde.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-5">
              <div className="flex gap-3 items-center p-4 bg-slate-50 rounded-2xl border border-slate-200/50">
                <HeartHandshake className="w-5 h-5 text-gold-750 shrink-0" />
                <div className="space-y-0.5">
                  <span className="text-[11px] font-bold text-slate-850 font-serif block">Conexão Teológica e Comportamental</span>
                  <p className="text-[10px] text-slate-500 leading-normal font-normal">
                    Este testemunho ampara e valida diretamente seu trabalho no campo da saúde mental e sua capacitação no mapeamento comportamental com foca na TCC.
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
