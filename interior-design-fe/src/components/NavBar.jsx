import { useEffect, useState, useRef } from "react";
import { useLocation, Link } from 'react-router-dom';
import { useLenisContext } from "../contexts/LenisProvider";

const NavBar = ({ color }) => {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const curr = window.scrollY;

      if (curr > lastScroll && curr > 50) {
        navRef.current.style.backgroundColor = '';
        console.log('nav hidden')
      } else {
        navRef.current.style.backgroundColor = color;
        console.log('nav show')
      }

      lastScroll = curr;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <div ref={navRef} className="fixed w-full h-20 z-50 top-0 px-5 flex flex-wrap items-center justify-center transition-all duration-300" style={{ backgroundColor: color }}>
        <button
          onClick={() => setOpen((o) => !o)}
          className="!bg-transparent !p-0"
        >
          <img src="/img/menu.png" className="w-8 h-8" alt="menu" />
        </button>
        <div className="block flex-8"></div>
        <Link to="/contact" className="flex-1 text-center !text-black font-crimsonPro md:text-2xl">Contact</Link>
      </div>
      <div>
        {/* Overlay */}
        <div
          className={`
            fixed inset-0 bg-black/50 transition-opacity duration-300 z-99
            ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          `}
          onClick={() => setOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`
            fixed left-0 top-0 h-screen w-[40vw] bg-[#795548] shadow-xl z-99
            transform transition-transform duration-300
            ${open ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <div className="p-4 ">
            <h2 className="text-xl font-bold">Sidebar Panel</h2>
            <p className="mt-4">Reserve</p>
            
            <p className="mt-4">Location</p>

            <p className="mt-4">Contact</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar;
