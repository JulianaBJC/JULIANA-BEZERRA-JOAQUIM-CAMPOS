/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Activity, ShieldAlert, Heart, Eye, Users, ChevronRight } from "lucide-react";

export default function Projects() {
  const projectsList = [
    {
      id: "pronto-atendimento",
      title: "Implantação de Pronto Atendimento",
      description: "Modelagem e implementação completa de serviços de urgência e emergência. Desenhando desde o fluxo físico de triagem até a integração de equipes multiprofissionais sob forte demanda assistencial, integrando processos digitais inovadores.",
      icon: Activity,
      color: "border-emerald-500/30 text-emerald-700 bg-emerald-50",
      pillars: ["Estruturação de Processos", "Desenvolvimento de Pessoas", "Modelagem de Serviços"],
      details: [
        "Mapeamento e estruturação de processos clínicos focados no Protocolo de Manchester para triagem inteligente.",
        "Desenvolvimento de pessoas por meio de capacitação humanizada para acolhimento e escuta ativa de alta resolutividade.",
        "Desenho do fluxo assistencial integrado que reduziu decisivamente o tempo de espera à beira do leito."
      ],
      impact: "Criação de um ambiente de rápido fluxo que responde com maestria em cenários caóticos de urgência."
    },
    {
      id: "sala-vermelha",
      title: "Implantação de Sala Vermelha (Alta Complexidade)",
      description: "Estruturação e ativação de unidades críticas de urgência para atendimento imediato de pacientes em risco iminente de morte, pautado por conformidade técnica rigorosa e alinhamento assistencial.",
      icon: ShieldAlert,
      color: "border-red-500/30 text-red-700 bg-red-50",
      pillars: ["Protocolos Assistenciais", "Governança Clínica", "Segurança do Paciente"],
      details: [
        "Elaboração de protocolos assistenciais imediatos com foco científico (Parada Cardiorrespiratória, Infarto e AVC).",
        "Promoção de governança clínica através de checklists diários rigorosos de insumos, baseados na aviação civil.",
        "Treinamento de equipes em condutas sob estresse, reduzindo drasticamente falhas de processo."
      ],
      impact: "Ambiente blindado para resposta rápida ao limiar entre a vida e a morte, minimizando falhas de processo."
    },
    {
      id: "time-resposta-rapida",
      title: "Time de Resposta Rápida (TRR)",
      description: "Criação e coordenação técnica de equipes de intervenção precoce em enfermarias, voltadas para avaliar criticamente os pacientes antes da deterioração neurológica ou de parada cardiorrespiratória.",
      icon: Heart,
      color: "border-purple-500/30 text-purple-750 bg-purple-50",
      pillars: ["Transformação Organizacional", "Desenvolvimento de Pessoas", "Governança Clínica"],
      details: [
        "Transformação organizacional com criação de fluxos rápidos de acionamento de enfermarias a leitos de UTI.",
        "Implementação de escores de deterioração clínica padronizados (como MEWS) integrados aos prontuários.",
        "Capacitação contínua e desenvolvimento de pessoas para atuação preventiva em medicina de urgência."
      ],
      impact: "Redução de até 40% nas paradas cardiorrespiratórias ocorridas fora do ambiente intensivo (UTI)."
    },
    {
      id: "centro-diagnostico-imagem",
      title: "Implantação de Centro de Diagnóstico por Imagem (CDI)",
      description: "Liderança de processos complexos no desenho de ativação de unidades de imagem diagnóstica robustas (Tomografia, Ressonância Magnética e Ultrassonografia) sintonizadas com a emergência.",
      icon: Eye,
      color: "border-blue-500/30 text-blue-700 bg-blue-50",
      pillars: ["Implantação de Sistemas", "Estruturação de Processos", "Integração Tecnológica"],
      details: [
        "Implantação de sistemas de gestão operacional integrando agendamentos, realização técnica e laudo célere.",
        "Mapeamento minucioso de fluxos de segurança física contra acidentes com blindagem radiológica e triagem magnética.",
        "Design de fluxos clínicos de contraste seguro, alinhando a eficiência assistencial de exames urgentes."
      ],
      impact: "Unidade de alta performance gerando diagnóstico assertivo que retroalimenta a urgência e UTI de forma segura."
    },
    {
      id: "proadi-sus",
      title: "Projetos PROADI-SUS & Ministério da Saúde",
      description: "Cooperação técnica estratégica para o fortalecimento do Sistema Único de Saúde (SUS), atuando ativamente no desenvolvimento operacional de projetos educacionais de abrangência nacional.",
      icon: Users,
      color: "border-amber-500/30 text-amber-800 bg-amber-50/50",
      pillars: ["Planejamento Educacional", "PROADI-SUS", "Gestão de Indicadores", "Criação de Trilhas"],
      details: [
        "Desenvolvimento e planejamento estratégico de projetos educacionais estruturados sob planos pedagógicos robustos.",
        "Gestão qualificada de cursos EaD voltados especificamente para a área da Saúde em escala nacional.",
        "Contribuição técnica ativa na modelagem e elaboração refinada de escopos de projetos para o PROADI-SUS.",
        "Gestão acadêmica e monitoramento contínuo de indicadores em plataformas virtuais de aprendizagem hospitalar.",
        "Apoio qualificado na gestão financeira, alocação de recursos materiais e elaboração de matrizes de curso com projeções de demanda.",
        "Criação de trilhas inovadoras de aprendizagem, design visual instrucional e gravação profissional de locução de conteúdo audiovisual."
      ],
      impact: "Fortalecimento do letramento clínico público do país por meio de trilhas escaláveis e curadoria técnico-científica de alta resolutividade."
    }
  ];

  return (
    <section id="projetos" className="py-24 relative overflow-hidden bg-slate-100/60">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mb-16">
          <span className="text-[10px] font-mono text-gold-650 tracking-widest uppercase font-semibold">Experiência Hospitalar Operacional</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0b1a30] font-semibold tracking-tight">
            Projetos de Transformação em Saúde
          </h2>
          <div className="accent-line w-24" />
        </div>

        {/* Highlighted Executive Statement (FRASE COM PESO E QUADRANTES) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0b1a30] border border-[#091526] shadow-2xl mb-16 relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 py-1.5 px-4 bg-gold-500/10 text-gold-400 font-mono text-[9px] tracking-widest uppercase rounded-bl-xl border-l border-b border-white/[0.05]">
            Matriz de Transformação Sistêmica
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Lado Esquerdo: Frase de Impacto */}
            <div className="lg:col-span-12 xl:col-span-5 space-y-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal tracking-tight leading-snug">
                Não implantamos apenas <span className="text-gold-400 font-semibold font-sans">estruturas</span>; redesenhamos a saúde de forma integral.
              </h3>
              <p className="font-sans text-sm sm:text-base text-gray-100 font-medium leading-relaxed border-l-2 border-gold-500 pl-4 py-1.5">
                “Liderança de processos de mudança organizacional envolvendo implantação de serviços, desenvolvimento de equipes, treinamento, protocolos assistenciais e transformação cultural.”
              </p>
            </div>

            {/* Lado Direito: Os Quatro Pilares Conceituais */}
            <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] space-y-2">
                <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block font-bold">01 · Sistemas</span>
                <p className="text-xs text-slate-200 leading-relaxed font-normal">
                  Integração técnica e operacional inteligente, alinhando tecnologias críticas corporativas (como Tasy, MV, Senior e soluções digitais de vanguarda) para uma governança de dados robusta e tomadas de decisão cirúrgicas.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] space-y-2">
                <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block font-bold">02 · Processos</span>
                <p className="text-xs text-slate-200 leading-relaxed font-normal">
                  Mapeamento minucioso de fluxos clínicos, protocolos de segurança do paciente (Manchester, MEWS, diretrizes internacionais de trauma e emergência), conformidade técnica total com JCI/ONA e eficiência de leitos.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] space-y-2">
                <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block font-bold">03 · Pessoas</span>
                <p className="text-xs text-slate-200 leading-relaxed font-normal">
                  Recrutamento estratégico, capacitação técnica de alto nível e qualificação humanitária profunda na beira do leito. Formação de times de resposta rápida e equipes integradas de enfermagem altamente qualificadas.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] space-y-2">
                <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block font-bold">04 · Cultura</span>
                <p className="text-xs text-slate-200 leading-relaxed font-normal">
                  A espinha dorsal das mudanças duradouras. Estabelecer o pilar de <span className="text-gold-300 font-semibold font-sans">Cuidar Sem Adoecer</span> como premissa essencial para ambientes saudáveis, sustentavelmente eficientes e emocionalmente inteligentes.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {projectsList.map((project, index) => {
            const Icon = project.icon;
            const isFullWidth = project.id === "proadi-sus";
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl flex flex-col justify-between glow-card ${isFullWidth ? 'md:col-span-2' : ''}`}
              >
                <div className="space-y-6">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${project.color} shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#0b1a30] leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Pillars / Badges */}
                  {project.pillars && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.pillars.map((pillar) => (
                        <span key={pillar} className="text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-gold-500/10 text-gold-750 border border-gold-500/20">
                          {pillar}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Bullet points */}
                  <div className="space-y-2.5 border-t border-slate-100 pt-5">
                    <h4 className="text-[10px] font-mono text-slate-500 tracking-wider uppercase font-semibold">Engenharia de Processos:</h4>
                    <ul className="space-y-2">
                      {project.details.map((detail, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start text-xs text-slate-700 font-normal leading-normal">
                          <ChevronRight className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Impact Highlight */}
                <div className="border-t border-slate-100 pt-5 mt-6">
                  <span className="text-[9px] font-mono text-gold-700 uppercase tracking-widest block mb-1.5 font-bold">Impacto Sistêmico Gerado:</span>
                  <p className="text-xs text-slate-700 italic bg-gold-500/5 p-3 rounded-xl border border-gold-500/10 font-medium">
                    {project.impact}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
