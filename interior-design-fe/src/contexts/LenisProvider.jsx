import { createContext, useContext, useRef, useEffect } from "react";
import Lenis from "lenis";
import { useLocation } from "react-router-dom";

const LenisContext = createContext(null);

export function LenisProvider({ children }) {
  const lenisRef = useRef(null);
  const { pathname } = useLocation();

  const isDesktop = () => !('ontouchstart' in window || navigator.maxTouchPoints > 0);

  useEffect(() => {
    if (!isDesktop()) {
      // Don't enable Lenis on mobile
      return;
    }

    lenisRef.current = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      smoothTouch: true,
    });

    let rafId;
    const raf = (time) => {
      lenisRef.current.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenisRef.current?.destroy();
    };
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      lenisRef.current?.scrollTo(0, { immediate: true });
    });
  }, [pathname]);

  return (
    <LenisContext.Provider value={lenisRef}>
      {children}
    </LenisContext.Provider>
  );
}

export function useLenisContext() {
  return useContext(LenisContext);
}
