import BasicPage from "../../components/BasicPage";

function HomeView(){
  return(
    <div className="mt-20 bg-[#FCECD2]">
      <BasicPage className="bg-[url(/img/livingRoom.png)] bg-no-repeat bg-cover bg-center">
        <div className="
          flex h-[40%] justify-center items-center text-center
          bg-[linear-gradient(to_bottom,_rgba(252,236,210,1)_60%,_rgba(252,236,210,0))]
        ">
          Experienced in interior design for the longest time I've known.
        </div>
        <div className="
          absolute 
          w-full 
          h-[60%] 
          bottom-0
        ">
        </div>
      </BasicPage>

      <BasicPage>
        <div className="flex w-full h-[80px] text-3xl items-center justify-center bg-[#FFD296]">About us</div>
        <div 
          className="
            w-[80%] 
            h-[40vh]
            m-auto
            mt-10

            bg-[url(/img/office.png)] 
            bg-[120%_auto]
            bg-center
          "
        >
        </div>
        <div className="flex w-full h-[80px] text-2xl items-center justify-center">
          WEBSITE EXPLAINATION
        </div>
      </BasicPage>

      <BasicPage>
        <div className="flex w-full h-[80px] text-3xl items-center justify-center bg-[#FFD296]">Services</div>
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
        <div className="flex w-full h-[80px] text-3xl items-center justify-center bg-[#FFD296]">Projects</div>
        <div className="grid grid-cols-1 h-[calc(100vh-160px)]">
          <a href='/project/1' className="flex justify-center items-center bg-red-100">Project 1</a>
          <div className="flex justify-center items-center bg-yellow-100">Project 2</div>
          <div className="flex justify-center items-center bg-blue-100">Project 3</div>
          <div className="flex justify-center items-center">Project 4</div>
          <div className="flex justify-center items-center">Project 5</div>
          <div className="flex justify-center items-center">And more...</div>
        </div>
      </BasicPage>

      <BasicPage>
        <div className="flex w-full h-[80px] text-3xl items-center justify-center bg-[#FFD296]">Why us?</div>
      </BasicPage>

      <div id="footer"
        className="relative w-[100vw] h-[240px]"
      >
        <div className="flex w-full h-full text-3xl items-center justify-center bg-black">Footer</div>
      </div>
    </div>
  )
}

export default HomeView;