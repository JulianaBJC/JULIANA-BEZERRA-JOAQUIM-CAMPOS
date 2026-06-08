/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Heart, GraduationCap } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-700">
            <GraduationCap className="w-4.5 h-4.5" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif text-sm font-bold tracking-wide text-[#0b1a30]">
              Juliana Bezerra Joaquim Campos
            </span>
            <span className="text-[9px] font-mono text-gold-700 tracking-widest uppercase font-semibold">
              Educação em Saúde & Inovação Humana
            </span>
          </div>
        </div>

        {/* Professional tag */}
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 tracking-wide">
          <span>Desenvolvido com</span>
          <Heart className="w-3.5 h-3.5 text-gold-600 fill-gold-550/10" />
          <span>para a formação sustentável em saúde.</span>
        </div>

        {/* Copyright */}
        <div className="text-[10px] font-mono text-slate-400 font-semibold">
          &copy; {currentYear} Juliana Bezerra. Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
}
