import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useLenisContext } from "../contexts/LenisProvider";

export default function NavBar({color}){
  console.log(color)

  const lenisRef = useLenisContext();

  const scrollToTop = () => {
    lenisRef.current?.scrollTo(0, { duration: 1});
  };

  useEffect(()=> {

  }, []);
  
  return(
    <div className="fixed w-20 h-full z-50 top-0 shadow-md flex flex-col items-center justify-top pt-5" style={{ backgroundColor:color }}>
      <Link to='/' className="h-20">Home</Link>
      <Link 
          onClick={scrollToTop}
          className="w-full h-20 text-center font-crimsonPro text-4xl !text-black"
      >T</Link> 
      <Link to="/about" className="h-20 text-center !text-black font-crimsonPro md:text-2xl">About</Link>
      <Link to="/contact" className="h-20 text-center !text-black font-crimsonPro md:text-2xl">Contact</Link>
    </div>
  )
}
