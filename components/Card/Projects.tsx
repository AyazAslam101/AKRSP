import React from "react";
import Cards from "./Cards";

function Projects() {
  const projects = [
    {
      img: "/../public/project1.png",
      title: "Program for Poverty Reduction (PPR)",
      description:
        "PPR is a joint of initiative of PPAF and AKRP which has been developed in light of indigenous people framework to protect.  ",
      readMore: "Real more",
    },
    {
      img: "/../public/project2.png",
      title: "Deepening Participatory Governance (DPG)",
      description:
        "This 48-month EU funded project, started in February 2014, is now approaching to its end and will be closed on December. ",
      readMore: "Real more",
    },
    {
      img: "/../public/project4.png",
      title: "WES-II Project",
      description:
        "WES-II has been launched with a project period of three years (2015-2018) with extended grants from the Government of. ",
      readMore: "Real more",
    },
    {
      img: "/../public/project3.png",
      title: "PEDO Micro-Hydro Project",
      description:
        "PEDO awarded the design, construction, operation and maintenance of 55 number of projects in Chitral to AKRSP.",
      readMore: "Real more",
    },
    
  ];
  return (
    <div className="py-5 mx-auto overflow-hidden sm:px:2 container">
      <div className="flex mt-4 items-center justify-between">
        <div className="mb-5 lg:ml-5">
          <button className="bg-primary px-5 py-2 rounded text-white mr-2">
            ONGOING
          </button>
          <button className="bg-white border-primary border-2 px-5 py-2 rounded text-primary mt-3">
            ACCOMPLISHED
          </button>
        </div>
        <div className="mb-5 flex lg:mr-5">
          <button className="border-primary border-solid border-2 py-1 px-2 rounded">
            <svg
              width="10"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.02354 1.14328C6.39688 0.769938 7.00218 0.769938 7.37552 1.14328C7.74858 1.51633 7.74891 2.12107 7.37626 2.49453L3.66162 6.21729L7.37626 9.94004C7.74891 10.3135 7.74858 10.9182 7.37553 11.2913C7.00218 11.6646 6.39688 11.6646 6.02354 11.2913L0.949532 6.21729L6.02354 1.14328Z"
                fill="#0C9A4A"
              />
            </svg>
          </button>
          <button className="border-primary border-solid border-2 py-1 px-2 rounded ml-3">
            <svg
              width="10"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.97646 10.8567C1.60312 11.2301 0.997816 11.2301 0.624475 10.8567C0.251422 10.4837 0.251093 9.87893 0.623739 9.50547L4.33838 5.78271L0.623738 2.05996C0.251092 1.6865 0.251422 1.08176 0.624475 0.708709C0.997816 0.335367 1.60312 0.335367 1.97646 0.708709L7.05047 5.78271L1.97646 10.8567Z"
                fill="#0C9A4A"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid lg:grid-cols-4 lg:gap-0 md:grid-cols-2 sm:grid-cols-2 gap-4">
        {projects.map((project, index) => {
          const { img, description, title, readMore } = project;
          return (
            <div key={index}>
              <Cards
              img={img}
              description={description}
              title={title}
              readMore={readMore}
            />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;