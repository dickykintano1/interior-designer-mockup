import { Link } from "react-router-dom";

export default function ProjectList(){
  const projects = [
    { id: 1, name: "Project Red", year: "2025", img: "/img/office.png" },
    { id: 2, name: "Project Blue", year: "2025", img: "/img/office2.png" },
    { id: 3, name: "Project Green", year: "2025", img: "/img/livingRoom2.png" },
    { id: 4, name: "Project White", year: "2025", img: "/img/livingRoom.png" },
  ];
  return (
    <div className="flex flex-col gap-x-8 gap-y-18 md:gap-y-30 z-2">
      {projects.map((project) => (
        <Link to={`/works/${project.id}`} key={project.id} className="flex flex-col group md:flex-row">
          {/* Image Container */}
          <div className="overflow-hidden mb-4 md:mb-0 md:flex-3">
            <img 
              src={project.img} 
              alt={project.name}
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-102 md:h-[40svh]"
            />
          </div>

          {/* Details Row */}
          <div className="flex justify-between w-full md:flex-col md:justify-center md:ml-5 md:flex-2">
            <div className="text-sm md:flex-1">
              <span className="font-medium">{project.name}</span>
              <br />
              <span className="text-gray-500">{project.year}</span>
            </div>
            <div className="text-sm text-right md:text-left md:flex-1">
              <span>Process</span>
              <br />
              <span className="text-gray-500">Materials</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}