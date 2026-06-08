/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle, Mail, Linkedin, FileText } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden bg-slate-100/60">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Informational Column Left */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-between text-left">
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-gold-650 tracking-widest uppercase font-semibold">Contato & Parcerias</span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#0b1a30] font-semibold tracking-tight">
                  Inicie uma Parceria Científica ou Educacional
                </h2>
                <div className="accent-line w-20" />
              </div>
              
              <p className="text-sm text-slate-650 leading-relaxed font-normal">
                Disponível para consultorias focadas em implantação de serviços de saúde, palestras corporativas sobre cuidado sustentável, design de currículos médicos e projetos especiais ligando educação clínica de alta fidelidade e tecnologia.
              </p>

              {/* Direct channels */}
              <div className="space-y-4 pt-6">
                <a 
                  href="mailto:Juliana.jbj2013@gmail.com" 
                  className="flex items-center gap-3.5 text-slate-700 hover:text-gold-700 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-450 group-hover:text-gold-700 group-hover:border-gold-550/30 transition-all shrink-0">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-slate-500 uppercase font-semibold">E-mail Profissional</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#0b1a30]">Juliana.jbj2013@gmail.com</span>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-3.5 text-slate-700 hover:text-gold-700 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-450 group-hover:text-gold-700 group-hover:border-gold-550/30 transition-all shrink-0">
                    <Linkedin className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-slate-500 uppercase font-semibold">LinkedIn Executivo</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#0b1a30]">Juliana Bezerra Joaquim Campos</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 text-slate-700 group">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-450 shrink-0">
                    <FileText className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-slate-500 uppercase font-semibold">Curriculum Lattes / CNPq</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#0b1a30]">Acessível via consulta UNIFESP</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200 text-[10px] font-mono text-slate-500 tracking-wider font-semibold uppercase mt-8">
              SÃO PAULO · SP · ATENDIMENTO GLOBAL
            </div>
          </div>

          {/* Form Column Right */}
          <div className="lg:col-span-12 xl:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-2xl glow-gold">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-12 h-12 bg-gold-550/10 border border-gold-500/30 rounded-full flex items-center justify-center text-gold-750 mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-xl text-[#0b1a30] font-semibold">Mensagem Enviada!</h3>
                    <p className="text-xs text-slate-600 font-normal">Obrigado por iniciar este diálogo. Juliana responderá assim que possível.</p>
                  </div>
                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", institution: "", message: "" });
                    }}
                    className="text-xs font-mono font-bold text-gold-700 hover:text-[#0b1a30] hover:underline cursor-pointer"
                  >
                    Enviar Outra Mensagem
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-[10px] font-mono text-slate-505 uppercase tracking-wider block font-bold">Nome Completo</label>
                      <input 
                        type="text" 
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="Ex: Dra. Ana Silva"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#0b1a30] placeholder-slate-400 hover:border-slate-300 focus:border-gold-500/50 focus:bg-white outline-none transition-all duration-350"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-[10px] font-mono text-slate-505 uppercase tracking-wider block font-bold">E-mail Corporativo</label>
                      <input 
                        type="email" 
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        placeholder="Ex: ana.silva@hospital.com.br"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#0b1a30] placeholder-slate-400 hover:border-slate-300 focus:border-gold-500/50 focus:bg-white outline-none transition-all duration-350"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="institution" className="text-[10px] font-mono text-slate-505 uppercase tracking-wider block font-bold">Instituição / Hospital / Empresa</label>
                    <input 
                      type="text" 
                      id="institution"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      placeholder="Ex: Faculdade Beneficente de Saúde"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#0b1a30] placeholder-slate-400 hover:border-slate-300 focus:border-gold-500/50 focus:bg-white outline-none transition-all duration-350"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[10px] font-mono text-slate-505 uppercase tracking-wider block font-bold">Seu Escopo de Interesse ou Consulta</label>
                    <textarea 
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      placeholder="Descreva brevemente com qual projeto, palestra ou consultoria de ensino você gostaria de contar com a expertise de Juliana."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#0b1a30] placeholder-slate-400 hover:border-slate-300 focus:border-gold-500/50 focus:bg-white outline-none transition-all duration-350 resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 rounded-xl text-xs sm:text-sm font-bold bg-[#0b1a30] text-gold-450 hover:bg-[#091526] hover:text-gold-400 flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-all hover:scale-101 border-none"
                  >
                    <Send className="w-4 h-4" />
                    Enviar Proposta ou Consulta
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
