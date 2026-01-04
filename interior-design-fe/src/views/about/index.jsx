import { Link } from "react-router-dom"
import BasicPage from "../../components/BasicPage"

export default function AboutView() {
  return(
    <div className="!text-black bg-[#F9EED2]">
      <div className='min-h-screen flex flex-col md:min-h-[80svh]'>
        <span className="w-fit text-4xl pl-6 mt-45 mb-15 border-b border-black md:pl-[12.5%]">About</span>
        <BasicPage className="">
          <div className="mb-15 text-8xl font-playfairDisplay flex justify-center items-center">
            <p>Ambiex</p>
          </div>

          <div className="mb-15 -mx-6 shrink-0 md:mx-0">
            <img src="/img/office3.png" className="w-full h-72 object-cover md:h-108 md:object-[0%_65%]"/>
          </div>

          <div className="space-y-4 mb-30 pr-[20dvw]">
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
          <div className="space-y-6 mb-30 pr-[20dvw]">
            <p className="text-2xl">Communication</p>
            <p>Communication is always open with Design Manager and Field Manager. We assess every problem, and give creative solutions. Feel free to connect for updates, follow-ups, and suggestions.</p>
          </div>
        </BasicPage>
        

        <div className="relative -mx-6">  
          <img src="/img/armchair.png" className="w-full h-[50dvw] object-cover md:h-[25dvh]"/>
          <img src="/img/office4.png" className="w-full h-[50dvw] object-cover object-[0%_80%] md:h-[25dvh] md:object-[0%_50%]"/>
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply flex items-center justify-center"/>
          <div className="absolute inset-0 flex items-center justify-center">
            <Link to="/works" 
            className="text-white whitespace-nowrap text-5xl underline 
              transition-all duration-500 hover:text-[#F9EED2]"
            >
              See all work
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}