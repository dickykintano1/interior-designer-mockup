import BasicPage from "../../components/BasicPage"
import ProjectList from "../../components/ProjectList"

export default function WorksView(){
  return(
    <main className="!text-black bg-[#F9EED2] pb-12 md:pb-25">
      <div className='min-h-screen flex flex-col md:min-h-[80svh]'>
        <span className="w-fit text-4xl pl-6 mt-45 mb-15 border-b border-black md:pl-[12.5%]">Our Works</span>
        <BasicPage className="projects-container flex flex-col px-6">
          <ProjectList/>
        </BasicPage>
      </div>
    </main>
  )
}