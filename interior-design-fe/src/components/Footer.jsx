export default function Footer(){
  return(
    <div id="footer"
      className="relative w-[100vw] !text-[#1C1C1C] z-2"
    >
      <div className="flex flex-col w-full h-full text-3xl items-center justify-top bg-[#C6A982]">

        <hr className="w-[90vw] mt-20 border-t border-[#D8C8A5] text-base flex justify-between font-light"/>

        <div className="w-full flex flex-col justify-center items-center py-4">
          <div className="grid grid-cols-2 gap-8 w-[90vw] mx-auto">
            <div>
              <ul className="space-y-1 text-lg font-light font-montserrat">
                <li><a href="/about" className="hover:underline">About Us</a></li>
                <li><a href="/philosophy" className="hover:underline">Our Work</a></li>
                <li><a href="#" className="hover:underline">The Team</a></li>
                <li><a href="#" className="hover:underline">Portfolio</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-1 text-lg font-light text-right font-montserrat">
                <li><a href="/contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="w-[90vw] h-1 border-t border-[#D8C8A5] text-base flex justify-between font-light"/>

        <div className="w-full flex flex-col justify-center items-center py-4">
          <div className="grid grid-cols-2 gap-2 w-[90vw] mx-auto text-lg">
            <div className="col-span-2 font-playfairDisplay">
              <h3 className="text-xl font-semibold">GET IN TOUCH</h3>
            </div>
            <div className="h-full text-base text-gray-600 font-montserrat">
              <p className="font-light">123 Design St, Suite 400</p>
              <p className="font-light">New York, NY 10001</p>
            </div>
            <div className="text-right text-base text-gray-600 font-montserrat">
              <p className="font-light"><a href="tel:5551234567" className="hover:underline">(555) 123-4567</a></p>
              <p className="font-light"><a href="mailto:hello@yoursite.com" className="hover:underline">hello@yoursite.com</a></p>
            </div>
          </div>
        </div>

        <hr className="w-[90vw] h-1 border-t border-[#D8C8A5] text-base flex justify-between font-light"/>

        <div className="w-full flex flex-col justify-center items-center py-4">
          <div className="grid grid-cols-2 gap-2 w-[90vw] mx-auto text-sm text-gray-600 font-montserrat">
            <p>&copy; {new Date().getFullYear()} Your Studio Name. All Rights Reserved.</p>
            <div className="flex flex-col text-right">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Service</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
