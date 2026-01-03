import { Link } from "react-router-dom"

export default function Footer(){
  const links = [
    {
      to: "/",
      name: "Home",
    },
    {
      to: "/about",
      name: "About Us",
    },
    {
      to: "/works",
      name: "Our Work",
    },
    {
      to: "/philosophy",
      name: "Philosophy",
    },
  ]

  return(
    <div id="footer"
      className="relative w-[100vw] !text-[#1C1C1C] z-2"
    >
      <div className="flex flex-col w-full h-full text-3xl items-center justify-top bg-[#C6A982]">

        <hr className="w-[90vw] mt-20 border-t border-[#D8C8A5] text-base flex justify-between font-light"/>

        <div className="w-full flex flex-col justify-center items-center py-4">
          <div className="grid grid-cols-2 gap-8 w-[90vw] mx-auto">
            <div className="flex flex-col gap-y-1 text-lg font-light font-montserrat md:flex-row md:gap-x-10">
              {links.map((title)=>(
                <Link key={title.name} to={title.to} className="hover:underline">{title.name}</Link>
              ))}
            </div>
            <div>
              <ul className="space-y-1 text-lg font-light text-right font-montserrat">
                <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="w-[90vw] h-1 border-t border-[#D8C8A5] text-base flex justify-between font-light"/>

        <section className="w-[90vw] py-4 font-montserrat">
          <div className="">
            <div className="flex flex-row w-full justify-between">
              <p className="text-xl font-semibold font-playfairDisplay mb-4 tracking-wide">
              GET IN TOUCH
              </p>
              <div className="flex h-full justify-end items-bottom gap-4">
                <a href="https://instagram.com" aria-label="Instagram">
                  <img src="/img/Instagram_Glyph_White.png" className='w-8 h-8'></img>
                </a>
                <a href="https://facebook.com" aria-label="Facebook">
                  <img src="/img/Facebook_Logo_Secondary.png" className='w-8 h-8'></img>
                </a>
              </div>
            </div>

            <div className="flex flex-row w-full justify-between gap-6 text-base text-gray-600">
              <p className="font-light leading-relaxed">
                123 Design St, Suite 400<br />
                New York, NY 10001
              </p>

              <div className="flex flex-col items-end font-light leading-relaxed">
                <a href="tel:5551234567" className="hover:text-black transition-colors">(555) 123-4567</a>
                <a href="mailto:hello@yoursite.com" className="hover:text-black transition-colors">hello@yoursite.com</a>
              </div>
            </div>
          </div>
        </section>

        <hr className="w-[90vw] h-1 border-t border-[#D8C8A5] text-base flex justify-between font-light"/>

        <div className="w-full flex flex-col justify-center items-center py-6">
          <div className="grid grid-cols-2 gap-2 w-[90vw] mx-auto text-sm text-gray-600 font-montserrat">
            <p>&copy; {new Date().getFullYear()} Your Studio Name. All Rights Reserved.</p>
            <div className="flex flex-col text-right gap-2">
              <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
