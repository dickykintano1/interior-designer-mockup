export default function Project1View(){
  return(
    <div className="ml-20 bg-[#FCECD2]">
      <div className={`relative w-[calc(100vw-80px)] h-[200vh] text-black flex flex-col bg-red-100 pl-5`}>
        <div className="mt-5 mr-auto inline-block ">
          <span className="text-2xl">Ardell's - Cafe</span>
          <hr className="border-t border-black w-full h-1" />
        </div>
        <div>
          Ardell's cafe short summarization. Explain the ambience.
        </div>
      </div>
      

      <div className={`relative w-[calc(100vw-80px)] h-[100vh] text-black flex flex-col bg-blue-100`}>
        <div className="ml-5 mt-5 mr-auto inline-block ">
          <span className="text-2xl">MATERIAL SELECTION</span>
          <hr className="border-t border-black w-full h-1" />
        </div>
      </div>

      {/* <div className={`relative w-[calc(100vw-80px)] h-[100vh] text-black flex flex-col bg-yellow-100`}>
        <div className="ml-5 mt-5 mr-auto inline-block">
          <span className="text-xl">MANAGEMENT & COORDINATION</span>
          <hr className="border-t border-black w-full h-1" />
        </div>
      </div> */}
    </div>
    
  )
}