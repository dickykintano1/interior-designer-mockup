import BasicPage from "../../components/BasicPage";

export default function ToSView(){
  return(

    <main className="!text-black bg-[#F9EED2] md:pb-25">
      <div className='min-h-screen flex flex-col md:min-h-[80svh]'>
        <span className="text-4xl pl-6 mt-45 inline-block w-full md:pl-[12.5%]">Terms of Service</span>
        <span className="w-fit text-2xl pl-6 mb-15 border-b border-black inline-block md:pl-[12.5%]">Last Updated: December 2025</span>

        <BasicPage>
          <div className="mb-6 text-3xl font-playfairDisplay">
            <p>01. Agreement to Terms</p>
          </div>
          <div className="mb-15 pr-[25dvw]">
            <p>This site is a fictional showcase. By browsing, you acknowledge this is a conceptual portfolio and not a commercial interior design service.</p>
          </div>

          <div className="mb-6 text-3xl font-playfairDisplay">
            <p>02. Intellectual Property</p>
          </div>
          <div className="mb-15 pr-[25dvw]">
            <p>All architectural concepts, site code, and visual assets are the creative property of the developer. Reproduction for commercial use is prohibited.</p>
          </div>

          <div className="mb-6 text-3xl font-playfairDisplay">
            <p>03. Nature of Content</p>
          </div>
          <div className="mb-15 pr-[25dvw]">
            <p>Interior design descriptions and "quotes" are artistic expressions and do not constitute professional architectural or structural advice.</p>
          </div>

          <div className="mb-6 text-3xl font-playfairDisplay">
            <p>04. User Conduct</p>
          </div>
          <div className="mb-15 pr-[25dvw]">
            <p>This mockup is for viewing purposes. Any attempts to reverse engineer or use the newsletter form for spam are prohibited.</p>
          </div>

          <div className="mb-6 text-3xl font-playfairDisplay">
            <p>05. Limitation of Liability</p>
          </div>
          <div className="mb-30 pr-[25dvw]">
            <p>As a fictional project, the creator is not liable for any "decisions" made based on the mock design concepts shown here.</p>
          </div>

        </BasicPage>

      </div>
    </main>
  )
}