/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Sparkles, 
  HelpCircle, 
  Cpu, 
  Database, 
  ShieldCheck, 
  BrainCircuit, 
  GraduationCap, 
  Compass, 
  CheckCircle2, 
  Bookmark, 
  FileText
} from "lucide-react";

export default function Manifesto() {
  const techSyllabus = [
    "Inteligência Artificial e IA Generativa",
    "Prompt Engineering",
    "Análise de Dados com Excel, SQL e Python",
    "HTML, HTML5 e CSS",
    "JavaScript e TypeScript",
    "Git e GitHub",
    "Desenvolvimento de aplicações digitais",
    "Fundamentos de Cibersegurança"
  ];

  const scientificAreas = [
    "Educação em Saúde",
    "Design Instrucional",
    "Neurociências da Aprendizagem",
    "Psicologia Cognitiva",
    "Terapia Cognitivo-Comportamental",
    "Desenvolvimento Humano",
    "Saúde Mental",
    "Segurança Psicológica",
    "Liderança",
    "Aprendizagem Organizacional",
    "Ciência da Implementação",
    "Educação Permanente em Saúde"
  ];

  const competencies = [
    "Inteligência emocional",
    "Comunicação interpessoal",
    "Escuta ativa",
    "Empatia clínica",
    "Colaboração interprofissional",
    "Pensamento crítico",
    "Tomada de decisão",
    "Resolução de problemas complexos",
    "Adaptabilidade",
    "Liderança",
    "Gestão de conflitos",
    "Resiliência profissional",
    "Autorregulação emocional",
    "Aprendizagem contínua",
    "Segurança psicológica"
  ];

  const methodologies = [
    "Simulação Realística",
    "Debriefing Estruturado",
    "Aprendizagem Baseada em Problemas (PBL)",
    "Aprendizagem Experiencial",
    "Trilhas de Aprendizagem",
    "Mentoria",
    "Feedback Formativo",
    "Design Thinking",
    "Educação Permanente em Saúde",
    "Avaliação por Competências",
    "Frameworks de desenvolvimento humano e profissional"
  ];

  return (
    <section id="manifesto" className="py-24 relative overflow-hidden bg-slate-50 border-b border-slate-200/50 text-left">
      {/* Dynamic Background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-16 space-y-4">
          <span className="text-[10px] font-mono text-gold-650 tracking-widest uppercase font-bold block">
            Eixo Visionário e Científico
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0b1a30] font-normal tracking-tight leading-tight">
            Tecnologia, Inteligência Artificial e <br />
            <strong className="font-bold text-gold-750">Formação Sustentável</strong> de Profissionais da Saúde
          </h2>
          <div className="accent-line w-28" />
        </div>

        {/* Narrative Block 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7 space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
            <p>
              Ao longo de minha trajetória profissional na saúde, na educação e na gestão de pessoas, compreendi que o maior desafio da formação contemporânea não está apenas na transmissão de conhecimentos técnicos, mas na construção de profissionais capazes de sustentar o cuidado sem comprometer sua própria saúde física, emocional e relacional.
            </p>
            <p>
              Essa inquietação me levou a ampliar minha formação para áreas como Inteligência Artificial, Desenvolvimento Web, Dados, Neurociências, Comportamento Humano e Tecnologias Educacionais, buscando compreender de que forma as transformações tecnológicas podem contribuir para o desenvolvimento de ambientes de aprendizagem mais inteligentes, humanizados e sustentáveis.
            </p>
          </div>

          {/* Rocketseat Tech Syllabus Accent Card on right */}
          <div className="lg:col-span-5">
            <div className="bg-[#0b1a30] text-gray-100 p-6 sm:p-8 rounded-3xl border border-slate-900 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl" />
              <div className="space-y-4 relative">
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-gold-400" />
                  <span className="text-[9px] font-mono text-gold-400 uppercase tracking-widest font-bold">
                    Letramento Full Stack, IA & Dados
                  </span>
                </div>
                
                <h4 className="font-serif text-base text-white font-semibold">
                  Syllabus Tecnológico Dominado
                </h4>
                
                <div className="flex flex-wrap gap-2 pt-1">
                  {techSyllabus.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-[9px] font-mono bg-white/5 border border-white/10 text-gray-300 px-2.5 py-1 rounded-full hover:bg-gold-500/10 hover:text-gold-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Central Pivot Question Section */}
        <div className="my-16 bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-500 via-[#0b1a30] to-gold-650" />
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <HelpCircle className="w-10 h-10 text-gold-700 mx-auto" />
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold block">
              A Inquietação Diretriz de Cuidar Sem Adoecer
            </span>
            <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#0b1a30] font-normal italic leading-relaxed">
              "Como formar profissionais capazes de permanecer saudáveis, humanos e sustentáveis ao longo da vida profissional?"
            </blockquote>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
              A resposta para essa pergunta não pode ser construída apenas pela experiência prática ou por percepções individuais. Ela exige fundamentação científica robusta e diálogo constante com o conhecimento de ponta produzido nacional e internacionalmente.
            </p>
          </div>
        </div>

        {/* Foundations & Literature Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start my-16">
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-[9px] font-mono text-gold-650 tracking-widest uppercase font-bold block">Fundamentação Científica</span>
              <h3 className="font-serif text-2xl text-[#0b1a30] font-bold">
                Pilares com Respaldos Acadêmicos Mundiais
              </h3>
              <div className="w-12 h-0.5 bg-gold-500 rounded" />
            </div>
            
            <p className="text-slate-700 text-sm leading-relaxed font-normal">
              Por esse motivo, a proposta defendida em <strong className="text-[#0b1a30] font-semibold">"Cuidar Sem Adoecer"</strong> está apoiada em teorias, modelos, frameworks, instrumentos, escalas, estratégias educacionais e métodos de avaliação publicados, validados e amplamente reconhecidos na literatura científica mundial.
            </p>
            <p className="text-slate-650 text-sm leading-relaxed font-normal">
              O objetivo não é criar mais um modelo teórico, mas integrar metodologicamente contribuições intelectuais consolidadas que facilitem a aprendizagem organizacional duradoura e empática à beira do leito.
            </p>
          </div>

          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-100">
            <span className="text-[9px] font-mono text-gold-700 uppercase tracking-widest font-bold block mb-4">
              Integração Metodológica de 12 Grandes Áreas
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {scientificAreas.map((area, idx) => (
                <div 
                  key={area} 
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-gold-500/20 hover:bg-gold-500/5 transition-all duration-300"
                >
                  <Bookmark className="w-3.5 h-3.5 text-gold-700 shrink-0" />
                  <span className="text-xs font-bold text-slate-800 font-sans">{area}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 font-normal leading-relaxed mt-5 italic border-l-2 border-gold-450 pl-3">
              "Nesse percurso, dialogam autores e referenciais que investigam motivação, engajamento, aprendizagem significativa, autorregulação, competências socioemocionais, resiliência profissional, bem-estar ocupacional e desenvolvimento de equipes de alta performance."
            </p>
          </div>
        </div>

        {/* Neglected Competencies (The 15 Soft Skills) */}
        <div className="my-16 text-left">
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-[9px] font-mono text-gold-650 tracking-widest uppercase font-bold block">
              Refinamento Curricular Essencial
            </span>
            <h3 className="font-serif text-2xl text-[#0b1a30] font-bold">
              Desafios Intelectuais e Competências Transversais
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              A proposta central é que a formação dos profissionais da saúde incorpore, de forma intencional e mensurável, competências frequentemente negligenciadas nos currículos tradicionais:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {competencies.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="bg-white p-4 rounded-2xl border border-slate-200/80 text-center hover:border-gold-500/40 hover:bg-gold-500/5 transition-all duration-300 flex flex-col justify-center items-center gap-2 shadow-sm"
              >
                <div className="w-7 h-7 bg-gold-500/15 text-gold-800 rounded-full flex items-center justify-center font-mono text-[10px] font-bold">
                  {index + 1}
                </div>
                <span className="text-xs font-bold text-[#0b1a30] font-sans leading-snug">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Evidence-Based Methodologies Grid */}
        <div className="mt-16 bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-100">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-[9px] font-mono text-gold-650 tracking-widest uppercase font-bold block">
              Estratégias de Aplicação Prática
            </span>
            <h3 className="font-serif text-2xl text-[#0b1a30] font-bold">
              Metodologias e Estratégias Educacionais Baseadas em Evidências
            </h3>
            <p className="text-xs text-slate-500 font-normal">
              Métodos de formação avançados de engajamento contínuo para desenvolver as condições sistêmicas de aprendizagem e segurança duradouras:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {methodologies.map((method, i) => (
              <div 
                key={method} 
                className="flex items-start gap-2.5 p-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span className="text-xs font-bold text-slate-800 font-sans leading-snug">{method}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Elegant Closing Statement Box */}
        <div className="mt-16 border-t border-slate-200 pt-12 text-center max-w-4xl mx-auto space-y-6">
          <p className="font-serif text-base sm:text-lg text-slate-700 font-light leading-relaxed italic">
            "Mais do que transmitir conhecimento, acredito que a educação precisa desenvolver condições para que profissionais permaneçam aprendendo, crescendo e cuidando ao longo de toda a vida."
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Em um cenário marcado pela transformação digital, pela Inteligência Artificial e pelo aumento da complexidade assistencial, o futuro da educação em saúde dependerá da nossa capacidade de integrar tecnologia, ciência, desenvolvimento humano e sustentabilidade profissional em uma mesma arquitetura formativa.
          </p>
          <div className="inline-flex gap-2 items-center text-[#0b1a30] font-serif font-bold text-sm bg-gradient-to-r from-gold-500/10 to-gold-550/5 px-6 py-2 border border-gold-500/20 rounded-full mt-2">
            Uma educação capaz de formar profissionais tecnicamente competentes, emocionalmente saudáveis e preparados para cuidar sem adoecer.
          </div>
        </div>

      </div>
    </section>
  );
}
