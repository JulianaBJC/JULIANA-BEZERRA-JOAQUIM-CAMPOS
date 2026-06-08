/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Award, Briefcase, CheckCircle, GraduationCap, Users, ShieldCheck, Sparkles } from "lucide-react";

export default function Results() {
  const resultCards = [
    {
      metric: "Nacional",
      label: "Capacitação Operacional",
      description: "Formação integral de profissionais da saúde distribuídos em projetos de fôlego nacional, unificando condutas preventivas e técnicas de alta fidelidade.",
      icon: Users,
      badge: "Liderança de Projeto"
    },
    {
      metric: "EaD / Digital",
      label: "Desenvolvimento de Cursos",
      description: "Modelagem instrucional completa para trilhas de aprendizagem em Ambientes Virtuais (AVAs), unindo UX fluida a metodologias pedagógicas baseadas em neurociência.",
      icon: GraduationCap,
      badge: "Inovação Educativa"
    },
    {
      metric: "Sistêmica",
      label: "Implantação de Serviços",
      description: "Liderança de ponta a ponta na inauguração de leitos críticos e operacionais, englobando fluxo físico de enfermagem, capacitação clínica de times e montagem tecnológica.",
      icon: Briefcase,
      badge: "Gestão Operacional"
    },
    {
      metric: "Multiprofissional",
      label: "Liderança de Equipes",
      description: "Gestão e desenvolvimento de cultura integrada entre médicos, enfermeiros e equipes técnicas de forma colaborativa, focada na segurança psicológica.",
      icon: Award,
      badge: "Cultura & Pessoas"
    },
    {
      metric: "Protocolar",
      label: "Desenvolvimento Institucional",
      description: "Elaboração e escrita científica de dezenas de manuais e protocolos assistenciais críticos adotados sistemicamente por instituições hospitalares premium.",
      icon: ShieldCheck,
      badge: "Padronização Assistencial"
    },
    {
      metric: "Acreditação",
      label: "Selos Hospitalares",
      description: "Participação ativa e fomento pedagógico de processos complexos de acreditação médica hospitalar nacional e internacional (ONA, JCI).",
      icon: CheckCircle,
      badge: "Qualidade Máxima"
    }
  ];

  return (
    <section id="resultados" className="py-24 relative overflow-hidden bg-slate-50">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-[10px] font-mono text-gold-650 tracking-widest uppercase font-semibold">Resultados Comprovados</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0b1a30] font-semibold tracking-tight">
            Resultados e Impacto Estratégico
          </h2>
          <div className="accent-line w-24" />
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            A excelência profissional não se mede apenas pela titulação, mas pelos sistemas implantados, pessoas transformadas e métricas organizacionais consolidadas.
          </p>
        </div>

        {/* Dynamic Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {resultCards.map((res, index) => {
            const Icon = res.icon;
            return (
              <motion.div
                key={res.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col justify-between hover:border-gold-500/30 hover:bg-gold-500/5 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-slate-100"
              >
                <div className="space-y-4">
                  {/* Icon & Label */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-mono text-gold-700 tracking-wide uppercase px-2.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 font-semibold">
                      {res.badge}
                    </span>
                  </div>

                  {/* Big Metric Display */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-450 block uppercase tracking-widest leading-none">MÉTRICA</span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#0b1a30] font-semibold leading-tight">
                      {res.metric}
                    </h3>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <h4 className="text-xs font-bold text-slate-800">{res.label}</h4>
                    <p className="text-xs text-slate-650 leading-relaxed font-normal">
                      {res.description}
                    </p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-slate-100 mt-5 flex items-center gap-1.5 text-[10px] font-mono text-gold-700 font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>EFICÁCIA COMPROVADA</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
