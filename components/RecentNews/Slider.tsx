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
      img: "/../public/Rectangle1.png",
      name: "Naeem Hassan",
      date: "06/19/2022",

      description: "Earthly matters: A bright future",
    },
    {
      img: "/../public/Rectangle2.png",
      name: "Naeem Hassan",
      date: "06/19/2022",

      description: "Sadpara Development Project",
    },
    {
      img: "/../public/Rectangle3.png",
      name: "Naeem Hassan",
      date: "06/19/2022",

      description: "Community mobilisation paying off in Chitral",
    },
  ];
  return (
    <div className="container mx-auto">
      <div>
        <h2 className="text-4xl font-bold">Recent News</h2>
        <div className="lg:flex grid md:grid-cols-4 grid-cols-2 space-x-4 mt-6 items-center text-xl">
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
        <div className="grid grid-cols-2 lg:grid lg:grid-cols-3 lg:gap-0 md:grid-cols-2 sm:grid-cols-2 gap-4 mt-6">
          {Slider.map((slider, index) => {
            return (
              <RecentNews
                key={index}
                img={slider.img}
                date={slider.date}
                description={slider.description}
                name={slider.name}
              ></RecentNews>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Slider;
