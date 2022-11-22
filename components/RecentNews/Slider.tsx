import React from "react";
import RecentNews from "./RecentNews";
import { Chip } from "../Chip/Chip";
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
      img: "/../public/project2.png",
      name: "Naeem Hassan",
      description: "Earthly matters: A bright future",
      readMore: "readmore",
    },
    {
      img: "/../public/project3.png",
      name: "Naeem Hassan",
      description: "Earthly matters: A bright future",
      readMore: "readmore",
    },
    {
      img: '/../public/project4.png"',
      name: "Naeem Hassan",
      description: "Earthly matters: A bright future",
      readMore: "readmore",
    },
  ];
  return (
    <div className="container mx-auto">
      <div>
        <h2 className="text-4xl font-bold">Recent News</h2>
        <div className="flex  space-x-5">
          {data.map((item, index) => {
            return (
              <Chip
                key={index}
                value={item.value}
                isActive={index === 0}
                onClick={(val: any) => {
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
