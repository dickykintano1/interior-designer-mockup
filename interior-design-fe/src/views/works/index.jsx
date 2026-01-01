import BasicPage from "../../components/BasicPage"
import ProjectList from "../../components/ProjectList"

export default function WorksView(){
  return(
    <div className="py-12 bg-[#FCECD2] text-black">
      <span className="text-4xl pl-6 mt-30 mb-30 border-b border-black inline-block">Our Works</span>
      <BasicPage className="projects-container flex flex-col px-6 pb-12">
        <ProjectList/>
      </BasicPage>
    </div>
  )
}