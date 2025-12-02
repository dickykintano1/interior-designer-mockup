import { useEffect } from "react";
import { useLocation, Link } from 'react-router-dom';
import { useLenisContext } from "../contexts/LenisProvider";

const NavBar = ({ color }) => {
  const location = useLocation();
  console.log(color)

  const lenisRef = useLenisContext();

  const scrollToTop = () => {
    lenisRef.current?.scrollTo(0, { duration: 1 });
  };

  useEffect(() => {

  }, [location.pathname]);

  return (
    <div className="fixed w-full h-20 z-50 top-0 shadow-md flex items-center justify-center" style={{ backgroundColor: color }}>
      <Link to="/about" className="flex-1 text-center !text-black font-crimsonPro md:text-2xl">About</Link>
      <div id="title" className="flex flex-1">
        {location.pathname === '/' ? (
          <Link
            onClick={scrollToTop}
            className="w-full text-center font-crimsonPro text-4xl !text-black"
          >Ambiex</Link>
        ) : (
          <Link
            to="/"
            className="w-full text-center font-crimsonPro text-4xl !text-black"
          >Ambiex</Link>
        )}
      </div>
      <Link to="/contact" className="flex-1 text-center !text-black font-crimsonPro md:text-2xl">Contact</Link>
    </div>
  )
}

export default NavBar;
