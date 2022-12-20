import React, { useState, useEffect } from "react";
import Card from "./Card";
import "pure-react-carousel/dist/react-carousel.es.css";
import HeroCard from "./HeroCard";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  [
    {
      update: "Latest Updates",
      created_at: "26-09-2022",
      description:
        "Aga Khan Rural Support Programme (AKRSP) Provides PPE worth PKR16,997,000 to Sindh Government",
    },
  ],
  [
    {
      update: "Latest Updates",
      created_at: "10-04-2010",
      description:
        "Aga Khan Rural Support Programme (AKRSP) Provides PPE worth PKR16,997,000 Chitral Government",
    },
  ],
];

const Hero = () => {
  const [active, setActive] = useState("FirstCard");
  const [isactive, setIsActive] = useState(0);

  const navigate = (index: any) => {
    setIsActive(index);
    setActive(active === "FirstCard" ? "SecondCard" : "FirstCard");
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const Label = [
    {
      label: "",
      index: 0,
    },
    {
      label: "",
      index: 1,
    },
    {
      label: "",
      index: 2,
    },
    {
      label: "",
      index: 3,
    },
    {
      label: "",
      index: 4,
    },
  ];
  return (
    <div
      className="container mt-20"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="">
        <div className="bg-primary p-8 py-14 transition ease-in-out">
          {active === "FirstCard" ? (
            <HeroCard data={data}></HeroCard>
          ) : (
            <Card data={data} />
          )}
          <div className="flex pt-8 space-x-3 first:bg-red-900 ">
            {Label.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => navigate(item.index)}
                  className={`h-2 w-12 bg-white opacity-100 rounded first:bg-white ${
                    index === isactive
                      ? "bg-white opacity-100"
                      : "bg-white opacity-40"
                  }`}
                >
                  {item.label}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
