import { useEffect, useState, useRef } from "react";
import { useLocation, Link } from 'react-router-dom';
import { useLenisContext } from "../contexts/LenisProvider";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = ({ color }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

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
          <Link ref={contactRef} to="/contact" className={`block text-center !text-black font-crimsonPro md:text-2xl transition-all`}>Contact</Link>
        </div>
      </div>
      <button
        onClick={() => setOpen((o) => !o)}
        className={`!bg-transparent !p-0 fixed z-99 ml-6 mt-6`}
      >
        <img src="/img/menu.png" className="w-8 h-8" alt="menu" />
      </button>
      <AnimatePresence>
      {open &&(
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{opacity:0}}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className={`
              fixed inset-0 bg-black/50 z-98
            `}
          />

          {/* Sidebar */}
          <motion.div
            key="sidebar-menu"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-screen w-[50vw] md:w-[40vw] bg-[#795548] shadow-xl z-[98] flex flex-col"
          >
            <p className="py-5 pl-21 text-3xl font-bold font-playfairDisplay">Ambiex</p>
            <div className="px-6 flex flex-col">
              <Link to="/"            className="mt-4 text-xl hover:underline">Home</Link>
              <Link to="/about"       className="mt-4 text-xl hover:underline">About</Link>
              <Link to="/works"       className="mt-4 text-xl hover:underline">Our Work</Link>
              <Link to="/philosophy"  className="mt-4 text-xl hover:underline">Philosophy</Link>
              <Link to="/contact"     className="mt-4 text-xl hover:underline">Contact</Link>
            </div>

            <div className="mx-4 pb-3 h-full flex flex-col justify-end items-end gap-4">
              <div className="flex gap-4">
                <a href="https://instagram.com" aria-label="Instagram">
                  <img src="/img/Instagram_Glyph_White.png" className='w-8 h-8'></img>
                </a>
                <a href="https://facebook.com" aria-label="Facebook">
                  <img src="/img/Facebook_Logo_Secondary.png" className='w-8 h-8'></img>
                </a>
              </div>
              <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            </div>
          </motion.div>
        </>
      )}
      </AnimatePresence>
    </>
  )
}

export default NavBar;
