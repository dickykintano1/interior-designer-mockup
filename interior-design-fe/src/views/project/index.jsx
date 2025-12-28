import { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import {motion, useScroll, useTransform} from "framer-motion";

const projects = {
  "1": {
    title: "Project Red",
    area: 100,
    year: 2025,
    focus: "Warm Minimalism",
    img1: "/img/office.png",
    img2: "/img/projects/red1.png",
    img3: "/img/projects/red2.png",
    img4: "/img/projects/red3.png",
    img5: "/img/projects/red4.png",
    quote1: "A warm and functional interior designed for a family of four, creating a supportive environment that balances everyday comfort with focused productivity.",
    quote2: "Our decisions on the kitchen focused on creating an environment that feels open, calm, and welcoming, encouraging family members to gather, converse, and spend time together beyond mealtimes."
  },
  "2": {
    title: "Project Blue",
    area: 150,
    year: 2024,
    focus: "Productive Professional",
    img1: "/img/office2.png",
    img2: "/img/projects/blue2.png",
    img3: "/img/projects/blue1.png",
    img4: "/img/projects/blue3.png",
    img5: "/img/projects/blue4.png",
    quote1: "",
    quote2: ""
  },
  "3": {
    title: "Project Green",
    area: 100,
    year: 2024,
    focus: "Cozy Natural",
    img1: "/img/livingRoom2.png",
    img2: "/img/projects/green4.png",
    img3: "/img/projects/green1.png",
    img4: "/img/projects/green3.png",
    img5: "/img/projects/green2.png",
    quote1: "",
    quote2: ""
  },
  "4": {
    title: "Project White",
    area: 150,
    year: 2022,
    focus: "Calm Modern",
    img1: "/img/livingRoom.png",
    img2: "/img/projects/white2.png",
    img3: "/img/projects/white1.png",
    img4: "/img/projects/white3.png",
    img5: "/img/projects/white4.png",
    quote1: "",
    quote2: ""
  },
};

export default function ProjectView(){
  const { id } = useParams();
  const project = projects[id];

  //parallax scroll
  const container1 = useRef()
  const container2 = useRef()
  const { scrollYProgress: scroll1 } = useScroll({target: container1, offset: ["start end", "end start"]});
  const { scrollYProgress: scroll2 } = useScroll({target: container2, offset: ["start end", "end start"]});
  const x1 = useTransform(scroll1, [0, 1], ["0%", "-30%"]);
  const x2 = useTransform(scroll2, [0, 1], ["0%", "-30%"]);

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

      <div className="relative flex flex-col gap-y-13 px-6">
        <img src={project.img1} className="w-full h-[25svh] object-cover"></img>
        <div className="flex flex-row h-[50svh] items-end">
          <span className="flex-1 pr-6 text-base">
            {project.quote1}
          </span>
          <div ref={container1} className="relative overflow-hidden flex-1 w-full h-full">
            <motion.img src={project.img2} style={{x: x1}} className="absolute inset-0 h-full max-w-none object-cover"></motion.img>
          </div>
        </div>
        <img src={project.img3} className="w-full h-[25svh] object-cover"></img>
        <div className="flex flex-row h-[50svh] items-end">
          <div ref={container2} className="relative overflow-hidden flex-1 w-full h-full">
            <motion.img src={project.img4} style={{x: x2}} className="absolute inset-0 h-full max-w-none object-cover"></motion.img>
          </div>
          <span className="flex-1 pl-6 text-base">
            {project.quote2}
          </span>
        </div>
        <img src={project.img5} className="w-full h-[25svh] object-cover"></img>
      </div>

      <div className="flex justify-center items-center h-[100svw]">
        <Link to="/contact" className="text-4xl underline hover:opacity-40 transition-all transition-500">Contact Us</Link>
      </div>
    </main>
  );
}