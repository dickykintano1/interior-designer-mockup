import { useParams, Link } from "react-router-dom";

const projects = {
  "1": {
    title: "Project Red",
    area: 100,
    year: 2025,
    focus: "Warm Minimalism"

  },
  "2": {
    title: "Project Blue",
    area: 100,
    year: 2024,
  },
};

export default function ProjectView(){
  const { id } = useParams();
  const project = projects[id];

  if (!project) return <NotFound />;

  return (
    <main className="pt-20 bg-[#FCECD2] text-black">
      <span className="text-4xl pl-6 mt-30 mb-15 border-b border-black inline-block">{project.title}</span>
      <div className="flex flex-row px-6 mb-15">
        <div className="flex flex-col flex-1 text-base">
          <p className="opacity-50">Area</p>
          <p>{project.area}</p>
          <p className="opacity-50">Completion</p>
          <p>{project.year}</p>
        </div>
        <div className="flex flex-col flex-1 text-base self-end">
          <p className="opacity-50">Focus</p>
          <p>{project.focus}</p>
        </div>
      </div>

      <div className="flex flex-col gap-y-13 px-6">
        <img src="/img/office.png" className="w-full h-[25svh] object-cover"></img>
        <div className="flex flex-row h-[50svh] items-end">
          <span className="flex-1 pr-6 text-base">
            A warm and functional interior designed for a family of four, creating a supportive environment that balances everyday comfort with focused productivity.
          </span>
          <img src="/img/projects/red1.png" className=" flex-1 w-full h-full object-cover"></img>
        </div>
        <img src="/img/projects/red2.png" className="w-full h-[25svh] object-cover"></img>
        <div className="flex flex-row h-[50svh] items-end">
          <img src="/img/projects/red3.png" className=" flex-1 w-full h-full object-cover"></img>
          <span className="flex-1 pl-6 text-base">
            Our decisions on the kitchen focused on creating an environment that feels open, calm, and welcoming, encouraging family members to gather, converse, and spend time together beyond mealtimes.          
          </span>
        </div>
        <img src="/img/projects/red4.png" className="w-full h-[25svh] object-cover"></img>
      </div>

      <div className="flex justify-center items-center h-[100svw]">
        <Link to="/contact" className="text-4xl underline hover:opacity-40 transition-all transition-500">Contact Us</Link>
      </div>
    </main>
  );
}