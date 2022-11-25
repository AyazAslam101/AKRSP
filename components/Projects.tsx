import React from "react";
import Cards from "./Cards";
import project11 from "../public/project11.png";
import project12 from "../public/project12.png";
import project13 from "../public/project13.png";
import project14 from "../public/project14.png";
import Button from "../components/Button/Button"

function Projects() {
  const projects = [
    
    {
      img: project11,
      title: "Program for Poverty Reduction (PPR)",
      description:
        "PPR is a joint of initiative of PPAF and AKRP which has been developed in light of indigenous people framework to protect.  ",
      readMore: "readmore",
    },
    {
      img: project12,
      title: "Deepening Participatory Governance (DPG)",
      description:
        "This 48-month EU funded project, started in February 2014, is now approaching to its end and will be closed on December. ",
      readMore: "readmore",
    },
    {
      img: project13,
      title: "PEDO Micro-Hydro Project",
      description:
        "PEDO awarded the design, construction, operation and maintenance of 55 number of projects in Chitral to AKRSP.",
      readMore: "readmore",
    },                                                                                                                                                                                                                                                    
    {
      img: project14,
      title: "WES-II Project",
      description:
        "WES-II has been launched with a project period of three years (2015-2018) with extended grants from the Government of. ",
      readMore: "readmore",
    },
  ];
  return (
  <div>
    
    <div className="flex justify-center">
    <div className="">
        <button>ONGOING</button>
        <button>ACCOMPLISHED</button>
          </div>
 <div className="bg-indigo-500 justify-end">
          <button>ONGOING</button>
          <button>ACCOMPLISHED</button></div>
    </div>
    
    <div className="grid grid-cols-4 gap-5">
      {projects.map((project, index) => {
        const { img, description, title, readMore } = project;
        return (
          <Cards
          key={index}
            img={img}
            description={description}
            title={title}
            readMore={readMore}
          />
        );
      })}
    </div>
            </div>    
  );
}

export default Projects;


