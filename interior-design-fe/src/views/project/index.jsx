import { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import {motion, useScroll, useTransform} from "framer-motion";

import BasicPage from "../../components/BasicPage";

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
    quote1: "This office project combines professionalism with warmth through rich wood tones, deep blue accents, and clean architectural lines. Layered lighting and subtle textures create a modern yet welcoming first impression.",
    quote2: "The layout supports productivity with cohesive materials, natural light, and intuitive circulation throughout the space. Every area is designed to encourage focus, collaboration, and long-term functionality."
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
    quote1: "This residential project harmonizes soft sage tones with warm oak textures to create a sanctuary of organic modernism. We balanced clean lines with tactile elements like woven lighting and linen fabrics to ensure every space feels both curated and serene.",
    quote2: "In the bedrooms, custom wood paneling and integrated lighting provide a seamless, high-end finish designed for relaxation. Our team used a cohesive palette throughout the home to weave a sense of effortless tranquility into every room."
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
    quote1: "This commercial project blends minimalist sophistication with vibrant, functional zones to redefine the modern office experience. We paired a sleek reception with airy corridors and architectural lighting to create an inviting professional environment.",
    quote2: "The design includes a light-filled children's area featuring custom wood play structures and geometric accents. Throughout the office, natural textures and greenery soften clean lines to ensure a high-end yet approachable feel."
  },
};

export default function ProjectView(){
  const { id } = useParams();
  const project = projects[id];

  //parallax scroll
  const container1 = useRef()
  const container2 = useRef()
  const { scrollYProgress: scroll1 } = useScroll({target: container1, offset: ["start end", "end center"]});
  const { scrollYProgress: scroll2 } = useScroll({target: container2, offset: ["start end", "end start"]});
  const x1 = useTransform(scroll1, [0, 1], ["0%", "-30%"], {clamp: true});
  const x2 = useTransform(scroll2, [0, 1], ["0%", "-30%"], {clamp: true});

  if (!project) return <NotFound />;

  return (
    <main className="!text-black bg-[#F9EED2]">
      <div className='min-h-screen flex flex-col md:min-h-[80svh]'>
        <span className="w-fit text-4xl pl-6 mt-45 mb-15 border-b border-black md:pl-[12.5%]">{project.title}</span>

        <BasicPage className="px-6">
          <div className="flex flex-row mb-15">
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

          <div className="relative flex flex-col gap-y-13">
            <img src={project.img1} className="w-full h-[25svh] object-cover md:h-[40svh]"></img>
            <div className="flex flex-row h-[50svh] items-end">
              <span className=" pr-6 text-base min-w-[50%] max-w-[50%]">
                {project.quote1}
              </span>
              <div ref={container1} className="relative overflow-hidden w-full h-full md:max-w-[20%]">
                <motion.img src={project.img2} style={{x: x1}} className="absolute inset-0 h-full max-w-none object-cover"></motion.img>
              </div>
            </div>
            <img src={project.img3} className="w-full h-[25svh] object-cover md:h-[40svh]"></img>
            <div className="flex flex-row h-[50svh] items-end justify-end">
              <div ref={container2} className="relative overflow-hidden w-full h-full md:max-w-[20%]">
                <motion.img src={project.img4} style={{x: x2}} className="absolute inset-0 h-full max-w-none object-cover"></motion.img>
              </div>
              <span className="pl-6 text-base min-w-[50%] max-w-[50%]">
                {project.quote2}
              </span>
            </div>
            <img src={project.img5} className="w-full h-[25svh] object-cover md:h-[40svh]"></img>
          </div>
        </BasicPage>

        <div className="flex justify-center items-center h-[100svw] md:h-[25svh]">
          <Link to="/contact" className="text-4xl underline hover:opacity-40 transition-all transition-500">Contact Us</Link>
        </div>
      </div>
    </main>
  );
}