import { createContext, useContext, useRef, useEffect } from "react";
import Lenis from "lenis";
import { useLocation } from "react-router-dom";


const LenisContext = createContext(null);

export function LenisProvider({ children }) {
  const lenisRef = useRef(null);
   const { pathname } = useLocation();

  useEffect(() => {
    lenisRef.current = new Lenis({ duration: 1 });

    // lenisRef.current?.scrollTo(0);
    setTimeout(() => {
        lenisRef.current?.scrollTo(0, {immediate:true});
    }, 400);
    

    let rafId;
    function raf(time) {
      lenisRef.current.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenisRef.current?.destroy?.();
    };
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
