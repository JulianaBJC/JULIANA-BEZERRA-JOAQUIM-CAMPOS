import { createContext, useContext, useState, useEffect, useRef, ReactNode } from "react";

interface PresentationContextType {
  isActive: boolean;
  isPlaying: boolean;
  startPresentation: () => void;
  pausePresentation: () => void;
  resumePresentation: () => void;
  stopPresentation: () => void;
  scrollUp: () => void;
  scrollDown: () => void;
}

const PresentationContext = createContext<PresentationContextType | undefined>(undefined);

export function PresentationProvider({ children }: { children: ReactNode }) {
  const [isActive, setIsActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const isScrollingProgrammatically = useRef(false);

  // Slow continuous smooth scroll loop using requestAnimationFrame
  useEffect(() => {
    if (!isActive || !isPlaying) return;

    let lastTime = performance.now();
    let frameId: number;
    let accumulatedScroll = window.scrollY;

    const tick = (now: number) => {
      const elapsed = Math.min(now - lastTime, 50); // Segurança contra saltos bruscos em abas em segundo plano
      lastTime = now;

      // Velocidade ideal e super confortável de leitura (aprox. 35 pixels por segundo)
      const pxPerMs = 0.035;
      accumulatedScroll += elapsed * pxPerMs;

      const targetScrollY = Math.round(accumulatedScroll);
      if (Math.abs(targetScrollY - window.scrollY) >= 1) {
        window.scrollTo({ top: targetScrollY, behavior: "auto" });
      }

      // Verifica se chegou ao fim da página
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5;
      if (isAtBottom) {
        setIsPlaying(false);
      } else {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [isActive, isPlaying]);

  // Desativa temporariamente o "scroll-behavior: smooth" em nível de CSS/HTML quando o modo apresentação está ativo.
  // Isso evita choke de threads e garante cliques instantâneos, permitindo que a rolagem do RAF seja leve e direta.
  useEffect(() => {
    if (isActive) {
      document.documentElement.style.scrollBehavior = "auto";
    } else {
      document.documentElement.style.scrollBehavior = "";
    }
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, [isActive]);

  const startPresentation = () => {
    // Altera temporariamente para auto para ir ao topo instantaneamente e suavemente via behavior opcional
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    setIsActive(true);
    // Pequeno intervalo para o início da rolagem lenta
    setTimeout(() => {
      setIsPlaying(true);
    }, 400);
  };

  const pausePresentation = () => {
    setIsPlaying(false);
  };

  const resumePresentation = () => {
    setIsPlaying(true);
  };

  const stopPresentation = () => {
    setIsActive(false);
    setIsPlaying(false);
  };

  const scrollUp = () => {
    // Pausa primeiro para que o ciclo automático não invalide ou compita com a rolagem suave
    setIsPlaying(false);
    setTimeout(() => {
      window.scrollBy({ top: -250, behavior: "smooth" });
    }, 20);
  };

  const scrollDown = () => {
    // Pausa primeiro para que o ciclo automático não invalide ou compita com a rolagem suave
    setIsPlaying(false);
    setTimeout(() => {
      window.scrollBy({ top: 250, behavior: "smooth" });
    }, 20);
  };

  // Pausa ao detectar rolagem manual do usuário (wheel ou touch) para dar controle total a ele
  useEffect(() => {
    if (!isActive || !isPlaying) return;

    const handleManualScroll = () => {
      setIsPlaying(false);
    };

    window.addEventListener("wheel", handleManualScroll, { passive: true });
    window.addEventListener("touchstart", handleManualScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleManualScroll);
      window.removeEventListener("touchstart", handleManualScroll);
    };
  }, [isActive, isPlaying]);

  return (
    <PresentationContext.Provider
      value={{
        isActive,
        isPlaying,
        startPresentation,
        pausePresentation,
        resumePresentation,
        stopPresentation,
        scrollUp,
        scrollDown,
      }}
    >
      {children}
    </PresentationContext.Provider>
  );
}

export function usePresentation() {
  const context = useContext(PresentationContext);
  if (!context) {
    throw new Error("usePresentation must be used within a PresentationProvider");
  }
  return context;
}
