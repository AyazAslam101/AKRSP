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
      icon: () => {
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
            stroke="#0C9A4A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
            stroke="#0C9A4A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>;
      },
      name: "Naeem Hassan",
      date: "06/19/2022",
      description: "Earthly matters: A bright future",
    },
    {
      img: "/../public/Rectangle2.png",
      icon: () => {
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
            stroke="#0C9A4A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
            stroke="#0C9A4A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>;
      },
      name: "Naeem Hassan",
      date: "06/19/2022",
      description: "Sadpara Development Project",
    },
    {
      img: "/../public/Rectangle3.png",
      icon: () => {
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
            stroke="#0C9A4A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
            stroke="#0C9A4A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>;
      },
      name: "Naeem Hassan",
      date: "06/19/2022",
      description: "Community mobilisation paying off in Chitral",
    },
  ];
  return (
    <div className="container mx-auto">
      <div>
        <h2 className="text-4xl font-bold">Recent News</h2>
        <div className="flex space-x-8 mt-6 items-center text-xl">
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
                icon={slider.icon}
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
