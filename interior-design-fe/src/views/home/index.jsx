import BasicPage from "../../components/BasicPage";
import styles from './index.module.css'

function HomeView() {
  return (
    <div className="bg-[#FCECD2]">
      <BasicPage className="flex flex-col">
        <div className="
          bg-[url(/img/livingRoom.png)] bg-no-repeat bg-center
          w-full 
          h-[50svh]
          bg-top
          bg-cover
          bg-no-repeat

          transition-all
          translate-opacity-0

          md:bg-cover
          md:bg-bottom
        ">
        </div>
        <div className={`
          flex flex-col justify-top items-left
          bg-[#FCECD2]
          w-full h-[50svh]
        `}>
          <span className="px-5 pt-5 text-left text-6xl">Ambiex</span>
          <hr className="w-[80vw] h-10 px-5"></hr>
          <div className="px-5 pr-10">
            <span className="text-left text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut porro, rerum repudiandae reiciendis quam harum. Ducimus, fugiat distinctio nam omnis quod itaque perspiciatis, mollitia at culpa, aliquam earum accusantium minima.</span>
          </div>
        </div>
      </BasicPage>

      <BasicPage className="projects-container flex flex-col px-5">
        <div className="project-1 grid justify-center items-center pb-5">
          <img src="/img/office.png" className="w-[100vw] h-60 object-cover"/>
          <div className="flex flex-row w-full h-25">
            <span className="flex-2 text-sm">Project Red</span>
            <span className="flex-1 text-sm text-left">Area<br></br>300m²<br></br>Completion<br></br>2025</span>
            <span className="flex-1 text-sm text-right">Process<br></br>Materials</span>
          </div>
        </div>
        <div className="project-1 grid justify-center items-center pb-5">
          <img src="/img/office2.png" className="w-[100vw] h-60 object-cover"/>
          <div className="flex flex-row w-full h-25">
            <span className="flex-2 text-sm">Project Blue</span>
            <span className="flex-1 text-sm text-left">Area<br></br>250m²<br></br>Completion<br></br>2025</span>
            <span className="flex-1 text-sm text-right">Process<br></br>Materials</span>
          </div>
        </div>
        <div className="project-1 grid justify-center items-center pb-5">
          <img src="/img/livingRoom2.png" className="w-[100vw] h-60 object-cover"/>
          <div className="flex flex-row w-full h-25">
            <span className="flex-2 text-sm">Project Green</span>
            <span className="flex-1 text-sm text-left">Area<br></br>400m²<br></br>Completion<br></br>2025</span>
            <span className="flex-1 text-sm text-right">Process<br></br>Materials</span>
          </div>
        </div>
        <div className="project-1 grid justify-center items-center pb-5">
          <img src="/img/livingRoom.png" className="w-[100vw] h-60 object-cover"/>
          <div className="flex flex-row w-full h-25">
            <span className="flex-2 text-sm">Project White</span>
            <span className="flex-1 text-sm text-left">Area<br></br>650m²<br></br>Completion<br></br>2025</span>
            <span className="flex-1 text-sm text-right">Process<br></br>Materials</span>
          </div>
        </div>
      </BasicPage>

      <BasicPage className="bg-[#D8C8A5]">
        <div className="flex flex-row h-[80px] items-center justify-center">
          <hr className="flex-1 border-0 h-1 w-full bg-[#C6A982]"></hr>
          <span className="flex-2 text-3xl text-center">About</span>
          <hr className="flex-1 border-0 h-1 w-full bg-[#C6A982]"></hr>
        </div>
        <div className="w-[100vw] px-10 flex">
          <span className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptates, soluta repudiandae earum eveniet aperiam sequi numquam vero, odio voluptas est unde. Nisi, consequuntur vitae deserunt doloremque non dolores eius.</span>
        </div>
        <div className="flex justify-center items-center">
          <img src="/img/writing.png" className="py-10 max-w-60 h-100 object-cover"/>
        </div>
      </BasicPage>

      <BasicPage>
        <div className="flex flex-row h-[80px] items-center justify-center">
          <hr className="flex-1 border-0 h-1 w-full bg-[#D8C8A5]"></hr>
          <span className="flex-2 text-3xl text-center">Services</span>
          <hr className="flex-1 border-0 h-1 w-full bg-[#D8C8A5]"></hr>
        </div>
        <div className="grid grid-cols-3 grid-rows-20 h-[100svh] mx-5">
          <div className="row-span-1">Layout Design</div>
          <div className="row-span-1 col-span-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          <div className="row-span-5"></div>
          <div className="row-span-5 col-span-2 bg-[url(/img/Layout.png)] bg-[80%_auto] bg-center bg-no-repeat"></div>

          <hr className="col-span-3 h-1 w-[100vw] border-none -mx-5" style={{ backgroundColor: '#D8C8A5' }}></hr>

          <div className="row-span-1">Material Selection</div>
          <div className="row-span-1 col-span-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          <div className="row-span-5"></div>
          <div className="row-span-5 col-span-2 bg-[url(/img/Materials.png)] bg-[80%_auto] bg-center bg-no-repeat"></div>

          <hr className="col-span-3 h-1 w-[100vw] border-none -mx-5" style={{ backgroundColor: '#D8C8A5' }}></hr>

          <div className="row-span-1">Management & Coordination</div>
          <div className="row-span-1 col-span-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          <div className="row-span-5"></div>
          <div className="row-span-5 col-span-2 bg-[url(/img/Management.png)] bg-[80%_auto] bg-center bg-no-repeat"></div>
        </div>
      </BasicPage>

      <BasicPage className="flex justify-center items-center my-20">
        <div className="flex flex-col w-70 h-100 bg-[#D8C8A5] justify-top items-center">
          <span className="h-15 w-full text-left text-3xl p-3">Contact</span>
          <div className="flex justify-center items-center w-full p-3"><img src='img/typing.png' className="max-w-40 h-50 object-cover"></img></div>
          <div className="flex justify-center items-center flex-1">
            <span className="h-15 w-full text-left text-sm p-3 flex items-center">We'd like to hear from you!</span>
            <button
              onClick={()=>nothing}
              className="!bg-transparent !p-0"
            >
              <img src="/img/arrow.png" className="w-8 h-8" alt="menu" />
            </button>
          </div>
        </div>
      </BasicPage>

      <div id="footer"
        className="relative w-[100vw] h-[80svh] !text-[#E8E4DA]"
      >
        <div className="flex flex-col w-full h-full text-3xl items-center justify-center bg-[#C6A982]">
          <div className="relative flex-1 w-full">
            <hr className="absolute bottom-0 col-span-3 h-[2px] w-[100vw] border-none" style={{ backgroundColor: '#D8C8A5' }}></hr>
          </div>
          <div className="relative flex-2 w-full">
            <hr className="absolute bottom-0 col-span-3 h-[2px] w-[100vw] border-none" style={{ backgroundColor: '#D8C8A5' }}></hr>
          </div>
          <div className="relative flex-1 w-full">
            <hr className="absolute bottom-0 col-span-3 h-[2px] w-[100vw] border-none" style={{ backgroundColor: '#D8C8A5' }}></hr>
          </div>
          <div className="flex-2 w-full">
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeView;