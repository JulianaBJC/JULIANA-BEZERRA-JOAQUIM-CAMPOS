/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

interface Institution {
  id: string;
  name: string;
}

export default function PorOndeAndei() {
  const institutions: Institution[] = [
    { id: "oswaldo-cruz", name: "Hospital Alemão Oswaldo Cruz" },
    { id: "sao-camilo", name: "Hospital São Camilo" },
    { id: "cruz-azul", name: "Hospital Cruz Azul" },
    { id: "pmesp", name: "Polícia Militar de SP" },
    { id: "cogna", name: "Cogna Educação" },
    { id: "sagah", name: "SAGAH (Grupo A)" },
    { id: "unifesp", name: "UNIFESP" },
    { id: "unicid", name: "UNICID" },
    { id: "uab", name: "UAB (Universidade Aberta do Brasil - CAPES)" },
    { id: "uniasselvi", name: "UNIASSELVI" },
    { id: "braz-cubas", name: "Braz Cubas" },
    { id: "min-saude", name: "Ministério da Saúde" },
    { id: "min-educacao", name: "Ministério da Educação (MEC)" },
  ];

  return (
    <section id="por-onde-andei" className="py-24 relative overflow-hidden bg-[#fafbfc]">
      {/* Subtle clean background decorative gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header with updated copy and gold accent dot */}
        <div className="max-w-3xl mb-16 space-y-4 text-left">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <span className="text-[10px] font-mono text-gold-650 tracking-widest uppercase font-bold">Trajetória Realizada</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0b1a30] font-semibold tracking-tight">
            Por Onde Andei
          </h2>
          <p className="text-slate-650 text-sm sm:text-base leading-relaxed font-normal">
            Uma trajetória construída na integração entre assistência, educação, gestão e inovação, contribuindo para a formação de profissionais, a implantação de serviços de saúde e o desenvolvimento de soluções educacionais em instituições de referência nacional.
          </p>
          <div className="h-[2px] w-12 bg-gold-400 mt-2" />
        </div>

        {/* Minimalist Numbered Card Grid - Compact & Custom Gold Colored as requested */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {institutions.map((inst, index) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.02 }}
              key={inst.id}
              className="bg-[#b49162] rounded-[20px] py-5 px-6 shadow-[0_4px_16px_rgba(180,145,98,0.15)] hover:shadow-[0_8px_24px_rgba(180,145,98,0.3)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center gap-3 border border-[#c3a47a]/25 group"
            >
              {/* Elegant white numbering badge with gold text */}
              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm select-none">
                <span className="text-[11px] font-bold text-[#b49162] font-sans">
                  {index + 1}
                </span>
              </div>

              {/* Smaller centered institutional text in clean white */}
              <h3 className="font-sans text-xs sm:text-sm font-bold text-white tracking-tight leading-snug group-hover:text-white/90 transition-colors duration-200">
                {inst.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
