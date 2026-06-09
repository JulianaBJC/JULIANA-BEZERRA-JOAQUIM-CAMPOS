/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Compass, Sparkles, Heart } from "lucide-react";

export default function History() {
  return (
    <section id="minha-historia" className="py-24 relative overflow-hidden bg-white">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4 text-left">
          <span className="text-[10px] font-mono text-gold-650 tracking-widest uppercase font-semibold">Trajetória e Propósito</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0b1a30] font-semibold tracking-tight">
            Minha História
          </h2>
          <div className="accent-line w-24" />
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch text-left">
          
          {/* Main Biography Text */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 font-normal text-sm sm:text-base leading-relaxed">
            <p>
              Cuidar de vidas humanas em ambientes críticos sempre foi o norte da minha caminhada profissional. No entanto, ao longo de anos de atuação clínica hospitalar severa e coordenação de equipes em saúde, me deparei com uma contradição inquietante: os sistemas tradicionais preparam o profissional para dar a vida pelo outro, mas ignoram totalmente os mecanismos de preservação de sua integridade física e mental.
            </p>
            <p>
              Minha formação profissional cruzou duas avenidas cruciais: a <strong className="text-[#0b1a30]">Enfermagem em Cardiologia</strong> — onde a precisão de segundos decide a vida, e a <strong className="text-[#0b1a30]">Pedagogia</strong> — que me ensinou as leis de como o cérebro humano absorve novos comportamentos e conhecimentos. Posteriormente, o <strong className="text-[#0b1a30]">Mestrado na UNIFESP</strong> solidificou minha competência na pesquisa científica e na validação empírica.
            </p>
            <p>
              Compreendendo que a educação em saúde precisava evoluir, especializei-me em <strong className="text-[#0b1a30]">Design Instrucional</strong>. Passei a desenhar arquiteturas cognitivas em ambientes analógicos e digitais de aprendizagem hospitalar que não fossem apenas repetições de slides, mas verdadeiras experiências de transformação cultural.
            </p>
          </div>

          {/* Core Human Point / Diagnóstico de Câncer Highlight card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-[#0b1a30] text-white p-8 rounded-3xl border border-[#091526] shadow-2xl relative overflow-hidden glow-gold">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl" />
              
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-gold-400">
                    <Heart className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-gold-400 tracking-widest uppercase font-bold">O Ponto de Virada</span>
                </div>

                <blockquote className="font-serif text-base sm:text-lg text-gray-100 font-light leading-relaxed italic border-l-2 border-gold-400 pl-4 py-1">
                  "Minha trajetória foi atravessada pela finitude e pela dor de forma visceral. Enfrentar o diagnóstico de um câncer me transformou de forma irrevogável. Ali, no limiar da vulnerabilidade, experimentei o cuidado técnico na perspectiva do paciente e compreendi que a ciência médica sem sustentabilidade humana é incompleta."
                </blockquote>

                <div className="space-y-1 border-t border-white/10 pt-4">
                  <header className="text-xs font-bold text-gold-400 font-serif">Alinhamento Existencial</header>
                  <p className="text-xs text-gray-350 leading-relaxed font-light">
                    Esta virada me fez focar integralmente na construção de ambientes de cuidado que preservem quem cuida, unindo ciência, Terapia Cognitivo-Comportamental e educação sustentável.
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
