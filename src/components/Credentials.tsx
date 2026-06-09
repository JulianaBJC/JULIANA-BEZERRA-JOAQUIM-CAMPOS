/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { GraduationCap, Award, Brain, Activity, FileCheck, Users, Code2, LineChart } from "lucide-react";

export default function Credentials() {
  const academicCredentials = [
    {
      title: "Mestrado em Ciências da Saúde",
      institution: "UNIFESP · Escola Paulista de Enfermagem",
      desc: 'Dissertação: "Educação Permanente em Saúde: critérios de qualidade para o Curso de Especialização Saúde da Família, da Universidade Aberta do SUS-UNA-SUS/UNIFESP."',
      link: "http://repositorio.unifesp.br/handle/11600/45804",
      icon: GraduationCap,
      color: "from-blue-600/10 to-blue-600/5 text-blue-700 border-blue-200/60"
    },
    {
      title: "Licenciatura Plena em Pedagogia",
      institution: "Formação de Professores & Ensino",
      desc: "Base teórica para a arquitetura de processos de aprendizagem de alta retenção cognitiva e transformação de comportamentos corporativos.",
      icon: Award,
      color: "from-gold-500/10 to-gold-500/5 text-gold-750 border-gold-300/30"
    },
    {
      title: "Especialização em Design Instrucional",
      institution: "Modelagem Curricular & Trilhas Digitais",
      desc: "Arquitetura curricular avançada para Ambientes Virtuais de Aprendizagem (AVAs), integrando UX contemporânea e estratégias pedagógicas corporativas.",
      icon: FileCheck,
      color: "from-emerald-600/10 to-emerald-600/5 text-emerald-700 border-emerald-200/60"
    },
    {
      title: "Enfermagem em Cardiologia",
      institution: "Especialização em Alta Complexidade",
      desc: "Aprimoramento técnico e prático focado na beira do leito coronariológico, integrando protocolos avançados de suporte de vida (ACLS).",
      icon: Activity,
      color: "from-red-650/10 to-red-650/5 text-red-700 border-red-200/60"
    },
    {
      title: "MBA em Gestão em Saúde",
      institution: "Liderança de Sistemas de Saúde de Alto Risco",
      desc: "Domínio de faturamento, eficiência operacional de leitos e planejamento estratégico em unidades clínicas sob pressões de custos e demanda.",
      icon: LineChart,
      color: "from-purple-600/10 to-purple-600/5 text-purple-750 border-purple-200/60"
    },
    {
      title: "Terapia Cognitivo-Comportamental",
      institution: "TCC Aplicada à Soluções Organizacionais",
      desc: "Formação teórica direcionada ao mapeamento clínico do estresse focado no cuidador, desenvolvendo protocolos para regulação em cenários críticos.",
      icon: Brain,
      color: "from-teal-600/10 to-teal-600/5 text-teal-700 border-teal-200/60"
    },
    {
      title: "Liderança & Gestão de Pessoas",
      institution: "Cultura Organizacional Integrada",
      desc: "Capacitação para mediação de conflitos, desenvolvimento de segurança psicológica organizacional e refinamento da inteligência social de times.",
      icon: Users,
      color: "from-indigo-600/10 to-indigo-600/5 text-indigo-750 border-indigo-200/60"
    },
    {
      title: "Desenvolvimento Web Instrumental",
      institution: "Prototipagem de Soluções com HTML & CSS",
      desc: "Domínio prático de interfaces web modernas (HTML, CSS, JS, TS, Git), estabelecendo diálogo direto e assertivo entre times de tecnologia e especialistas hospitalares.",
      icon: Code2,
      color: "from-slate-650/10 to-slate-650/5 text-slate-750 border-slate-300/30"
    }
  ];

  return (
    <section id="credenciais" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4 text-left">
          <span className="text-[10px] font-mono text-gold-650 tracking-widest uppercase font-semibold">Consistência Intelectiva</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0b1a30] font-semibold tracking-tight">
            Formação e Credenciais
          </h2>
          <div className="accent-line w-24" />
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            Uma trajetória intelectual única que cruza as fronteiras da assistência médica crítica, governança clínica, ciência comportamental e tecnologia educacional aplicada.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {academicCredentials.map((cred, index) => {
            const Icon = cred.icon;
            return (
              <motion.div
                key={cred.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-gold-500/30 hover:bg-gold-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shadow-xl shadow-slate-100"
              >
                <div className="space-y-4">
                  {/* Icon Panel */}
                  <div className={`w-11 h-11 rounded-2xl bg-gradient-to-tr border flex items-center justify-center shrink-0 ${cred.color}`}>
                    <Icon className="w-5.5 h-5.5" />
                  </div>

                  {/* Title and Institution */}
                  <div className="space-y-1">
                    <h4 className="font-serif text-sm sm:text-base text-[#0b1a30] font-bold leading-tight">
                      {cred.title}
                    </h4>
                    <p className="text-[10px] font-mono text-gold-700 tracking-wider font-semibold uppercase leading-tight">
                      {cred.institution}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-[11.5px] text-slate-600 leading-relaxed font-normal">
                    {cred.desc}
                  </p>
                  
                  {cred.link && (
                    <a
                      href={cred.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[10.5px] font-mono font-bold text-[#0b1a30] hover:text-gold-700 underline underline-offset-4 mt-2.5 hover:no-underline transition-all duration-300"
                    >
                      Acesse a Dissertação (UNIFESP) →
                    </a>
                  )}
                </div>

                <div className="w-8 h-0.5 bg-gold-500/50 rounded mt-6" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
