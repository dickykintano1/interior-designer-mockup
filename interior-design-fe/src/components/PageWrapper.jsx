import {motion} from 'framer-motion'; 
import { useLocation } from "react-router-dom"; 
import { useEffect, useState } from "react"; 

function PageWrapper({children }){ 
  const { pathname } = useLocation(); 
  
  // useEffect(() => {
  //   const timeout = setTimeout(() => { 
  //     window.scrollTo(0, 0);
  //   }, 200); 
  //   return () => clearTimeout(timeout); 
  // }, [pathname]); 
  
  return( 
    <> 
    <motion.div 
      key={pathname} 
      initial= {{opacity:1, x:0}} 
      animate= {{opacity:0, x:0}} 
      exit= {{opacity:1, x:0}} 
      transition= {{duration:.4}} 
      className="fixed inset-0 w-screen h-screen bg-black z-50 pointer-events-none" 
      onAnimationComplete={() => {
        window.scrollTo(0, 0);
      }}
    /> 
      {children} 
    </> 
  ); 
} 
export default PageWrapper;