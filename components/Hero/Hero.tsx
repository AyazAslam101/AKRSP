import React, { useState } from "react";
import Card from "./Card";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import HeroCard from "./HeroCard";

const data = [
  [
    {
      update: "Latest Updates",
      created_at: "26-09-2021",
      description:
        "Aga Khan Rural Support Programme (AKRSP) Provides PPE worth PKR16,997,000 to Sindh Government",
    },
  ],
  [
    {
      update: "Latest Updates",
      created_at: "26-09-2022",
      description:
        "Aga Khan Rural Support Programme (AKRSP) Provides PKR16,997,000 to Chitral Government",
    },
  ],
];

const Hero = () => {
  const [Active, setActive] = useState("FirstCard");

  return (
    <div className="container mt-20">
      <div className="">
        <div className="bg-primary p-8 py-14 transition ease-in-out rounded-md">
          {Active === "FirstCard" && <HeroCard data={data} />}
          {Active === "SecondCard" && <Card data={data} />}
          <div className="flex pt-8 space-x-3 ">
            <button
              onClick={() => setActive("FirstCard")}
              className="h-2 w-12 bg-white opacity-40 border-primary focus:bg-white focus:opacity-100 focus:z-10 focus:ring-1 focus:ring-primary-500 rounded"
            ></button>
            <button
              onClick={() => setActive("SecondCard")}
              className="h-2 w-12 bg-white opacity-40 border-primary focus:bg-white focus:opacity-100 focus:z-10 focus:ring-1 focus:ring-primary-500 rounded"
            ></button>
            <button
              onClick={() => setActive("FirstCard")}
              className="h-2 w-12 bg-white opacity-40 border-primary focus:bg-white focus:opacity-100 focus:z-10 focus:ring-1 focus:ring-primary-500 rounded"
            ></button>
            <button
              onClick={() => setActive("SecondCard")}
              className="h-2 w-12 bg-white opacity-40 border-primary focus:bg-white focus:opacity-100 focus:z-10 focus:ring-1 focus:ring-primary-500 rounded"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
