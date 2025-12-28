import BasicPage from "../../components/BasicPage"
import { Link } from "react-router-dom"

export default function WorksView(){
  return(
    <div className="py-12 bg-[#FCECD2] text-black">
      <span className="text-4xl pl-6 mt-30 mb-30 border-b border-black inline-block">Our Works</span>
      <BasicPage className="projects-container flex flex-col px-6">
        <Link to="/works/1" className="project-1 grid justify-center items-center mb-18">
          <img src="/img/office.png" className="w-[100vw] h-60 object-cover"/>
          <div className="flex flex-row w-full">
            <span className="flex-1 text-sm">Project Red<br/>2025</span>
            <span className="flex-1 text-sm text-left">Process<br/>Materials</span>
          </div>
        </Link>
        <Link to="/works/2" className="project-1 grid justify-center items-center mb-18">
          <img src="/img/office2.png" className="w-[100vw] h-60 object-cover"/>
          <div className="flex flex-row w-full">
            <span className="flex-1 text-sm">Project Blue<br/>2025</span>
            <span className="flex-1 text-sm text-left">Process<br/>Materials</span>
          </div>
        </Link>
        <Link to="/works/3" className="project-1 grid justify-center items-center mb-18">
          <img src="/img/livingRoom2.png" className="w-[100vw] h-60 object-cover"/>
          <div className="flex flex-row w-full">
            <span className="flex-1 text-sm">Project Green<br/>2025</span>
            <span className="flex-1 text-sm text-left">Process<br/>Materials</span>
          </div>
        </Link>
        <Link to="/works/4" className="project-1 grid justify-center items-center mb-18">
          <img src="/img/livingRoom.png" className="w-[100vw] h-60 object-cover"/>
          <div className="flex flex-row w-full">
            <span className="flex-1 text-sm">Project White<br/>2025</span>
            <span className="flex-1 text-sm text-left">Process<br/>Materials</span>
          </div>
        </Link>
      </BasicPage>
    </div>
  )
}