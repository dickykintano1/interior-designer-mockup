export default function AboutView() {
  return(
    <>
      <div className='bg-[#F9EED2] !text-black px-6 pt-12'>
        <span className="text-4xl -mx-6 pl-6 mt-30 mb-15 border-b border-black inline-block">About</span>
        
        <div className="mb-15 text-8xl font-playfairDisplay flex justify-center items-center">
          <p>Ambiex</p>
        </div>

        <div className="mb-15 -mx-6">
          <img src="/img/office3.png" className="w-full h-72 object-cover"/>
        </div>

        <div className="space-y-6 mb-30 pr-[20dvw]">
          <p>Ambiex is an interior design company specializing in living and working space. We design, manage, and cooperate on projects.</p>
          <p>We are experienced in this field for over a decade. We strive for space efficiency, aesthetic appeal, and ergonomic comfort.</p>
        </div>

        <div className="space-y-6 mb-15 pr-[20dvw]">
          <p className="text-2xl">Send in your inquiry</p>
          <p>Email or contact us for the. Our team will goes through each message, following back to you during on reception hours.</p>
        </div>
        <div className="space-y-6 mb-15 pr-[20dvw]">
          <p className="text-2xl">First meeting</p>
          <p>Conversation of the space, coordination, and timeline.</p>
        </div>
        <div className="space-y-6 mb-15 pr-[20dvw]">
          <p className="text-2xl">Agenda</p>
          <p>Our team will be deployed on the disclosed date. The team that will communicate, design, and renovate.</p>
        </div>
        <div className="space-y-6 mb-15 pr-[20dvw]">
          <p className="text-2xl">Communication</p>
          <p>Communication is always open with Design Manager and Field Manager. We assess every problem, and give creative solutions. Feel free to connect for updates, follow-ups, and suggestions.</p>
        </div>

        <div className="relative -mx-6">  
          <img src="/img/armchair.png" className="w-full h-[50dvw] object-cover"/>
          <img src="/img/office4.png" className="w-full h-[50dvw] object-cover object-[0%_80%]"/>
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply flex items-center justify-center"/>
          <div className="absolute inset-0 flex items-center justify-center">
            <a href="/" 
            className="text-white whitespace-nowrap text-5xl underline 
              transition-all duration-500 hover:text-[#F9EED2]"
            >
              See all work
            </a>
          </div>
        </div>
      </div>
    </>
  )
}