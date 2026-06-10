import { motion, AnimatePresence } from "motion/react";
import { usePresentation } from "../context/PresentationContext";
import {
  Play,
  Pause,
  ChevronUp,
  ChevronDown,
  X,
  Presentation
} from "lucide-react";

export default function PresentationControls() {
  const {
    isActive,
    isPlaying,
    startPresentation,
    pausePresentation,
    resumePresentation,
    stopPresentation,
    scrollUp,
    scrollDown,
  } = usePresentation();

  return (
    <div id="presentation-controls" className="fixed bottom-24 sm:bottom-10 right-4 sm:right-8 z-[99999] flex flex-col items-end gap-3 pointer-events-auto">
      <AnimatePresence mode="wait">
        {!isActive ? (
          /* Subtle, discrete starter button placed at the bottom right corner */
          <motion.div
            key="start-btn-container"
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="pointer-events-auto"
          >
            <button
              id="btn-start-presentation"
              onClick={startPresentation}
              className="flex items-center gap-2.5 px-4 py-2.5 bg-[#0b1a30] hover:bg-[#0f2445] text-gold-400 hover:text-gold-300 font-serif font-medium text-xs tracking-wider uppercase rounded-full shadow-xl border border-gold-500/30 cursor-pointer transition-all hover:scale-105 active:scale-95 duration-200"
              title="Iniciar Apresentação Guiada (leitura automática lenta)"
            >
              <Presentation className="w-3.5 h-3.5 text-gold-400" />
              <span>Modo Leitura</span>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold-500"></span>
              </span>
            </button>
          </motion.div>
        ) : (
          /* Premium, miniature and ultra-discrete vertical slide/scroll deck controls */
          <motion.div
            key="presentation-mini-deck"
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            className="pointer-events-auto bg-[#0b1a30]/95 backdrop-blur-md p-2 rounded-2xl shadow-2xl border border-gold-500/40 flex flex-col items-center gap-2 w-11 sm:w-12"
          >
            {/* Scroll Up Button ("seta subindo") */}
            <button
              id="btn-slide-up"
              onClick={scrollUp}
              className="p-1.5 rounded-lg text-gold-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Rolar para cima"
            >
              <ChevronUp className="w-4 h-4 sm:w-5 h-5" />
            </button>

            {/* Play/Pause Button */}
            <button
              id="btn-play-pause-mini"
              onClick={isPlaying ? pausePresentation : resumePresentation}
              className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${
                isPlaying
                  ? "bg-gold-500 text-slate-950 hover:bg-gold-400"
                  : "bg-white/10 text-gold-400 hover:text-white hover:bg-white/20"
              }`}
              title={isPlaying ? "Pausar rolagem" : "Retomar rolagem lenta"}
            >
              {isPlaying ? (
                <Pause className="w-3 h-3 sm:w-3.5 h-3.5 fill-current" />
              ) : (
                <Play className="w-3 h-3 sm:w-3.5 h-3.5 fill-current ml-0.5" />
              )}
            </button>

            {/* Scroll Down Button ("seta descendo") */}
            <button
              id="btn-slide-down"
              onClick={scrollDown}
              className="p-1.5 rounded-lg text-gold-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Rolar para baixo"
            >
              <ChevronDown className="w-4 h-4 sm:w-5 h-5" />
            </button>

            {/* Micro spacer / line */}
            <div className="w-6 h-[1px] bg-white/15 my-0.5" />

            {/* Stop Presentation Button */}
            <button
              id="btn-stop-presentation"
              onClick={stopPresentation}
              className="p-1.5 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors cursor-pointer"
              title="Sair do modo leitura"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
