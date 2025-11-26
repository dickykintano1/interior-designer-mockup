export default function AboutView() {
  return(
    <div className="mt-20 bg-[#FCECD2]">
      <div id="page1"
        className="relative w-[100vw] h-[calc(100dvh-80px)] !text-black"
      >
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
      </div>

      <div id="page2"
        className="relative w-[100vw] h-[calc(100dvh-80px)] !text-black"
      >
        <div className="flex w-full h-[80px] text-3xl items-center justify-center bg-[#FFD296]">How it starts</div>
      </div>

      <div id="footer"
        className="relative w-[100vw] h-[240px]"
      >
        <div className="flex w-full h-full text-3xl items-center justify-center bg-black">Footer</div>
      </div>
    </div>
  )
}