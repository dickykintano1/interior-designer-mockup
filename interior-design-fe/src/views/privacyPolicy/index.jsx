import BasicPage from "../../components/BasicPage"

export default function PrivacyPolicyView(){
  return(
    <main className="!text-black bg-[#F9EED2] md:pb-25">
      <div className='min-h-screen flex flex-col md:min-h-[80svh]'>
        <span className="text-4xl pl-6 mt-45 inline-block w-full md:pl-[12.5%]">Privacy Policy</span>
        <span className="w-fit text-2xl pl-6 mb-15 border-b border-black inline-block md:pl-[12.5%]">Last Updated: December 2025</span>

        <BasicPage>
        <div className="mb-6 text-3xl font-playfairDisplay">
          <p>01. Fictional Project Disclaimer</p>
        </div>
        <div className="mb-15 pr-[25dvw]">
          <p>This website is a conceptual project created for a professional web development portfolio. It does not represent a real-world interior design studio. All services, projects, and names mentioned are fictional and intended for demonstrational purposes only.</p>
        </div>

        <div className="mb-6 text-3xl font-playfairDisplay">
          <p>02. Data Collection & Usage</p>
        </div>
        <div className="mb-15 pr-[25dvw]">
          <p>We value privacy—even in a mockup. This site does not harvest, sell, or share personal information. Any data entered into the newsletter or contact forms (such as email addresses) is processed locally within your browser to simulate functionality and is immediately discarded upon refresh. No data is ever sent to a database or third-party server.</p>
        </div>

        <div className="mb-6 text-3xl font-playfairDisplay">
          <p>03. Cookies & Tracking</p>
        </div>
        <div className="mb-15 pr-[25dvw]">
          <p>In alignment with our minimalist approach, this website does not use tracking cookies, analytics pixels, or third-party advertising trackers. Your browsing experience remains entirely private and anonymous.</p>
        </div>

        <div className="mb-6 text-3xl font-playfairDisplay">
          <p>04. External Links</p>
        </div>
        <div className="mb-15 pr-[25dvw]">
          <p>Our website may contain links to external sites (such as LinkedIn, GitHub, or Instagram). Please be aware that we are not responsible for the content or privacy practices of these external platforms. We encourage you to read their respective policies when leaving our site.</p>
        </div>

        <div className="mb-6 text-3xl font-playfairDisplay">
          <p>05. Contact Information</p>
        </div>
        <div className="mb-30 pr-[25dvw]">
          <p>If you have questions regarding the technical construction of this portfolio or the creative process behind it, please reach out via the contact information provided in the footer.</p>
        </div>
        </BasicPage>

      </div>
    </main>
  )
}