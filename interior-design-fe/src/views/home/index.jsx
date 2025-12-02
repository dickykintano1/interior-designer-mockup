import BasicPage from "../../components/BasicPage";
import styles from './index.module.css'

function HomeView() {
  return (
    <div className="mt-20 bg-[#FCECD2]">
      <BasicPage>
        <div className="
          relative
          bg-[url(/img/livingRoom.png)] bg-no-repeat bg-center
          w-full 
          h-[calc(100svh-80px)]

          md:bg-cover
          md:bg-bottom
        ">
          <div className={`
            absolute 
            flex justify-center items-center
            bg-[linear-gradient(360deg,_rgba(252,236,210,1)_40%,_rgba(0,0,0,0))]
            w-full h-[40svh] bottom-0 
          `}>
            <span className="pt-30 text-center text-2xl justify-bottom">Designing spaces for you</span>
          </div>
        </div>
      </BasicPage>

      <BasicPage>
        <div className="flex flex-row h-[80px] items-center justify-center">
          <hr className="flex-1 border-0 h-1 w-full bg-[#D8C8A5]"></hr>
          <span className="flex-2 text-3xl text-center">About us</span>
          <hr className="flex-1 border-0 h-1 w-full bg-[#D8C8A5]"></hr>
        </div>
        <div className="relative w-[80%] h-[47.5svh] my-10 mx-auto">
          <img
            src="/img/office.png"
            className="absolute top-0 left-0 w-60"
          />
          <img
            src="/img/office2.png"
            className="absolute bottom-0 right-0 w-60"
          />
        </div>
        <div className="flex w-full h-[80px] items-center justify-center text-xl text-center my-20 px-5">
          At Ambiex, we make sure each materials get to be on their best form and compatibility.
        </div>
        <div className="flex justify-center items-center w-[80%] h-[47.5svh] mx-auto">
          <img
            src="/img/livingRoom2.png"
            className="w-80"
          />
        </div>
        <div className="flex w-full h-[80px] items-center justify-center text-xl text-center my-20 px-5">
          We pursuit beauty in both comfort and functionality.
        </div>
      </BasicPage>

      <BasicPage>
        <div className="flex flex-row h-[80px] items-center justify-center">
          <hr className="flex-1 border-0 h-1 w-full bg-[#D8C8A5]"></hr>
          <span className="flex-2 text-3xl text-center">Services</span>
          <hr className="flex-1 border-0 h-1 w-full bg-[#D8C8A5]"></hr>
        </div>
        <div className="grid grid-cols-2 h-[calc(100vh-160px)] mx-3">
          <div className="flex justify-center items-center">Layout Design</div>
          <div className="flex justify-center items-center bg-[url(/img/Layout.png)] bg-[80%_auto] bg-center bg-no-repeat"></div>
          <div className="flex justify-center items-center bg-[url(/img/Materials.png)] bg-[80%_auto] bg-center bg-no-repeat"></div>
          <div className="flex justify-center items-center">Materials Selection</div>
          <div className="flex justify-center items-center">Renovation Management & Coordination</div>
          <div className="flex justify-center items-center bg-[url(/img/Management.png)] bg-[80%_auto] bg-center bg-no-repeat"></div>
        </div>
      </BasicPage>

      <BasicPage>
        <div className="flex flex-row h-[80px] items-center justify-center">
          <hr className="flex-1 border-0 h-1 w-full bg-[#D8C8A5]"></hr>
          <span className="flex-2 text-3xl text-center">Projects</span>
          <hr className="flex-1 border-0 h-1 w-full bg-[#D8C8A5]"></hr>
        </div>
        <div className="grid grid-cols-1 h-[calc(100vh-160px)]">
          <a href='/project/1' className="flex justify-center items-center bg-red-100">Project 1</a>
          <div className="flex justify-center items-center bg-yellow-100">Project 2</div>
          <div className="flex justify-center items-center bg-blue-100">Project 3</div>
          <div className="flex justify-center items-center">And more...</div>
        </div>
      </BasicPage>

      <BasicPage>
        <div className="flex flex-row h-[80px] items-center justify-center">
          <hr className="flex-1 border-0 h-1 w-full bg-[#D8C8A5]"></hr>
          <span className="flex-2 text-3xl text-center">Why us?</span>
          <hr className="flex-1 border-0 h-1 w-full bg-[#D8C8A5]"></hr>
        </div>
        <div className="flex w-full h-[80px] text-xl items-center justify-center text-center my-20 px-5">
          We not only focus on the quality we give, but also the environment. We are mindful towards the longevity of both the materials we used and the surrounding area.
        </div>
      </BasicPage>

      <div id="footer"
        className="relative w-[100vw] h-[240px]"
      >
        <div className="flex w-full h-full text-3xl items-center justify-center bg-[#1C1C1C]">Footer</div>
      </div>
    </div>
  )
}

export default HomeView;