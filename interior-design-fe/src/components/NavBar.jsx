import { useEffect, useState, useRef } from "react";
import { useLocation, Link } from 'react-router-dom';
import { useLenisContext } from "../contexts/LenisProvider";

const NavBar = ({ color }) => {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const curr = window.scrollY;

      if (curr > lastScroll && curr > 50) {
        navRef.current.style.backgroundColor = '';
        console.log('nav hidden')

        contactRef.current.style.transform = 'translateY(-100%)'
      } else {
        navRef.current.style.backgroundColor = color;
        console.log('nav show')

        contactRef.current.style.transform = 'translateY(0%)'
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
      <div ref={navRef} className="fixed w-full h-20 z-50 top-0 px-5 flex items-center justify-end transition-all duration-300 overflow-none" style={{ backgroundColor: color }}>
        <div className="overflow-hidden">
          <a  ref={contactRef} href="/contact" className={`block text-center !text-black font-crimsonPro md:text-2xl transition-all`}>Contact</a>
        </div>
      </div>
      <button
        onClick={() => setOpen((o) => !o)}
        className={`!bg-transparent !p-0 fixed z-99 ml-6 mt-6`}
      >
        <img src="/img/menu.png" className="w-8 h-8" alt="menu" />
      </button>
      <div>
        {/* Overlay */}
        <div
          className={`
            fixed inset-0 bg-black/50 transition-opacity duration-300 z-98
            ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          `}
          onClick={() => setOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`
            fixed left-0 top-0 h-screen w-[50vw] bg-[#795548] shadow-xl z-98
            transform transition-transform duration-300 flex flex-col
            ${open ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <p className="py-5 pl-21 text-3xl font-bold font-playfairDisplay">Ambiex</p>
          <div className="px-6 flex flex-col">
            <a href="/"         className="mt-4 text-xl hover:underline">Home</a>
            <a href="/about"    className="mt-4 text-xl hover:underline">About</a>
            <a href="/works"    className="mt-4 text-xl hover:underline">Our Work</a>
            <a href="/team"     className="mt-4 text-xl hover:underline">Our Team</a>
            <a href="/contact"  className="mt-4 text-xl hover:underline">Contact</a>
          </div>

          <div className="mx-6 pb-6 h-full flex items-end">
            <div className="flex">Logo Logo Privacy</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar;
