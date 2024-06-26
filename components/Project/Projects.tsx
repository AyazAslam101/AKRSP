import React, { useRef, useEffect, useState } from "react";
import Cards from "../Card/Cards";
import AOS from "aos";
import "aos/dist/aos.css";
import Chip from "../Chip/Chip";

const Projects = () => {
  const [showEvents, setShowEvents] = useState("ongoing");
  const [active, setActive] = useState(0);
  const [button, setButton] = useState(null);

  const navigate = (index: any) => {
    setActive(index);
  };
  const handleClick = (value: any) => {
    setShowEvents(value);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const sliderDiv = useRef<HTMLDivElement | null>(null);

  const handleSlide = (direction: string) => {
    const scrollWidth: number | any = sliderDiv?.current?.scrollWidth;
    if (sliderDiv.current) {
      const { scrollLeft, clientWidth } = sliderDiv.current;
      const scrollTo =
        direction == "left"
          ? Math.floor(scrollLeft - clientWidth)
          : Math.floor(scrollLeft + clientWidth);

      if (scrollTo >= scrollWidth) {
        sliderDiv.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        sliderDiv.current.scrollTo({ left: scrollTo, behavior: "smooth" });
      }
    }
  };
  const projects = [
    {
      img: "/project11.png",
      title: "Program for Poverty Reduction (PPR)",
      description:
        "PPR is a joint of initiative of PPAF and AKRP which has been developed in light of indigenous people framework to protect.  ",
      readMore: "Real more",
    },
    {
      img: "/project12.png",
      title: "Deepening Participatory Governance (DPG)",
      description:
        "This 48-month EU funded project, started in February 2014, is now approaching to its end and will be closed on December. ",
      readMore: "Real more",
      value: "accomplished",
    },
    {
      img: "/project13.png",
      title: "PEDO Micro-Hydro Project",
      description:
        "WES-II has been launched with a project period of three years (2015-2018) with extended grants from the Government of. ",
      readMore: "Real more",
    },
    {
      img: "/project14.png",
      title: "WES-II Project ",
      description:
        "PEDO awarded the design, construction, operation and maintenance of 55 number of projects in Chitral to AKRSP.",
      readMore: "Real more",
      value: "accomplished",
    },
    {
      img: "/project14.png",
      title: "WES-II Project",
      description:
        "PEDO awarded the design, construction, operation and maintenance of 55 number of projects in Chitral to AKRSP.",
      readMore: "Real more",
      value: "accomplished",
    },
  ];
  const data = [
    {
      label: "ONGOING",
      value: "ongoing",
    },
    {
      label: "ACCOMPLISHED",
      value: "accomplished",
    },
  ];
  const label = [
    {
      icon: (props: any) => (
        <svg
          width="16"
          height="16"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.02354 1.14328C6.39688 0.769938 7.00218 0.769938 7.37552 1.14328C7.74858 1.51633 7.74891 2.12107 7.37626 2.49453L3.66162 6.21729L7.37626 9.94004C7.74891 10.3135 7.74858 10.9182 7.37553 11.2913C7.00218 11.6646 6.39688 11.6646 6.02354 11.2913L0.949532 6.21729L6.02354 1.14328Z"
          />
        </svg>
      ),
      value: "first",
    },
    {
      icon: (props: any) => (
        <svg
          width="14"
          height="16"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.97646 10.8567C1.60312 11.2301 0.997816 11.2301 0.624475 10.8567C0.251422 10.4837 0.251093 9.87893 0.623739 9.50547L4.33838 5.78271L0.623738 2.05996C0.251092 1.6865 0.251422 1.08176 0.624475 0.708709C0.997816 0.335367 1.60312 0.335367 1.97646 0.708709L7.05047 5.78271L1.97646 10.8567Z"
          />
        </svg>
      ),
      value: "second",
    },
  ];
  return (
    <div className="py-5 mt-32" data-aos="fade-right" data-aos-duration="800">
      <h2 className="text-4xl font-bold mb-6">Projects</h2>
      <div className="flex mt-4 items-center justify-between items-center">
        <div className="mb-5 flex ">
          {data.map((item: any, index) => {
            return (
              <div key={index} onClick={() => handleClick(item.value)}>
                <button
                  onClick={() => navigate(index)}
                  className={` border-primary hover:bg-primary hover:text-white ring-primary-500 border-2 border-2 px-4 py-2.5 rounded text-primary mt-3 mr-3 ${
                    index === active ? "bg-primary text-white" : "bg-white"
                  }`}
                >
                  {item.label}
                </button>
              </div>
            );
          })}
        </div>
        <div className="flex">
          {label.map((item: any) => (
            <div
              key={item.value}
              className="first:mr-3"
              onClick={
                item.value === "first"
                  ? () => handleSlide("left")
                  : () => handleSlide("right")
              }
            >
              <button
                key={item.name}
                className="border-primary  border-solid border-2 py-2 px-3 hover:bg-primary rounded svg-fill"
              >
                {item.name}
                <item.icon className="fill-primary svg-fill" aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div
        className="mt-4 flex overflow-x-auto overflow-y-hidden scrollbar-hide mb-5 transition gap-6 bg-transparent"
        ref={sliderDiv}
      >
        {projects
          .filter((item) => {
            if (showEvents === "ongoing") return item;
            else if (showEvents === item.value) return item;
            return;
          })
          .map((project, index) => {
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
      <div className="container">
        <hr className="border-1 shadow w-h-screen mt-14 mb-14" />
      </div>
    </div>
  );
};

export default Projects;
