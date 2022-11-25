import React from "react";
import Cards from "./Cards";
import project2 from "../public/project2.png";
import project3 from "../public/project3.png";
import project4 from "../public/project4.png";
import Button from "../components/Button/Button";
import RecentNews from "./RecentNews";
import { Chip } from "./Chip";

const data = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Our Stories",
    value: "our-stories",
  },
  {
    label: "Events",
    value: "events",
  },
  {
    label: "In The Media",
    value: "in-the-media",
  },
  {
    label: "Photographs",
    value: "photographs",
  },
  {
    label: "Videos",
    value: "videos",
  },
];

function Slider() {
  const Slider = [
    {
      img: project2,
      name: "Naeem Hassan",
      description: "Earthly matters: A bright future",
      readMore: "readmore",
    },
    {
      img: project3,
      name: "Naeem Hassan",
      description: "Earthly matters: A bright future",
      readMore: "readmore",
    },
    {
      img: project4,
      name: "Naeem Hassan",
      description: "Earthly matters: A bright future",
      readMore: "readmore",
    },
  ];
  return (
    <div>
      <div>
        <h2>recent news</h2>
        <div className="flex  space-x-3">
          {data.map((item, index) => {
            return (
              <Chip
                key={index}
                value={item.value}
                isActive={index === 0}
                onClick={(val) => {
                  console.log(val);
                }}
              >
                {item.label}
              </Chip>
            );
          })}
        </div>

        <div className="grid grid-cols-4 gap-5">
          {Slider.map((Slider, index) => {
            const { img, description, name, readMore } = Slider;
            return (
              <RecentNews
                key={index}
                img={img}
                description={description}
                name={name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Slider;
