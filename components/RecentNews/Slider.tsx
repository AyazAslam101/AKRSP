import React, { useState, useRef } from "react";
import Chip from "../Chip/Chip";
import RecentNews from "./RecentNews";

function Slider() {
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
  const [showEvents, setShowEvents] = useState("all");
  const handleClick = (value: string) => {
    setShowEvents(value);
  };

  const slider = [
    {
      img: "/Rectangle1.png",
      name: "Naeem Hassan",
      date: "06/19/2022",
      value: "in-the-media",
      description: "Earthly matters: A bright future",
    },
    {
      img: "/Rectangle2.png",
      name: "Naeem Hassan",
      date: "06/19/2022",
      value: "in-the-media",
      description: "Sadpara Development Project",
    },
    {
      img: "/Rectangle3.png",
      name: "Naeem Hassan",
      date: "06/19/2022",
      value: "events",
      description: "Community mobilisation paying off in Chitral",
    },
    {
      img: "/Rectangle1.png",
      name: "Naeem Hassan",
      date: "06/19/2022",
      value: "our-stories",
      description: "Earthly matters: A bright future",
    },
    {
      img: "/Rectangle2.png",
      name: "Naeem Hassan",
      date: "06/19/2022",
      value: "in-the-media",
      description: "Earthly matters: A bright future",
    },
    {
      img: "/Rectangle3.png",
      name: "Naeem Hassan",
      date: "06/19/2022",
      value: "events",
      description: "Earthly matters: A bright future",
    },

    {
      img: "/Rectangle1.png",
      name: "Naeem Hassan",
      date: "06/19/2022",
      value: "in-the-media",
      description: "Earthly matters: A bright future",
    },
    {
      img: "/Rectangle2.png",
      name: "Naeem Hassan",
      date: "06/19/2022",
      value: "videos",
      description: "Sadpara Development Project",
    },
    {
      img: "/Rectangle2.png",
      name: "Naeem Hassan",
      date: "06/19/2022",
      value: "events",
      description: "Sadpara Development Project",
    },

    {
      img: "/Rectangle3.png",
      name: "Naeem Hassan",
      date: "06/19/2022",
      value: "photographs",
      description: "Community mobilisation paying off in Chitral",
    },
    {
      img: "/Rectangle2.png",
      name: "Naeem Hassan",
      date: "06/19/2022",
      value: "photographs",
      description: "Community mobilisation paying off in Chitral",
    },
    {
      img: "/Rectangle3.png",
      name: "Naeem Hassan",
      date: "06/19/2022",
      value: "our-stories",
      description: "Community mobilisation paying off in Chitral",
    },
    {
      img: "/Rectangle1.png",
      name: "Naeem Hassan",
      date: "06/19/2022",
      value: "videos",
      description: "Community mobilisation paying off in Chitral",
    },
  ];
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
  return (
    <div className="container mb-8">
      <div>
        <h2 className="text-4xl font-bold">Recent News</h2>
        <div className="flex mt-4 justify-between items-baseline">
          <div className="lg:flex md:grid md:grid-cols-3 grid-cols-2 mt-6 items-center text-xl">
            {data.map((item, index) => {
              return (
                <Chip
                key={index}
                value={item.value}
                isActive={index === 0}
                onClick={()=>handleClick(item.value)}
              >
                {item.label}
              </Chip>
              );
            })}
          </div>
          <div className="flex lg:mr-4">
            <button
              className="border-primary border-solid border-2 py-2 px-3 rounded"
              onClick={() => {
                handleSlide("left");
              }}
            >
              <svg
                width="16"
                height="16"
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
            <button
              className="border-primary border-solid border-2 py-2 px-3 rounded ml-3"
              onClick={() => {
                handleSlide("right");
              }}
            >
              <svg
                width="14"
                height="16"
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
      </div>
      <div
        className="mt-4 flex overflow-x-auto overflow-y-hidden scrollbar-hide mb-5 transition gap-6 w-full bg-transparent"
        ref={sliderDiv}
      >
        {slider
          .filter((item) => {
            if (showEvents === "all") return item;
            else if (showEvents === item.value) return item;
            return;
          })
          .map((slider, index) => {
            return (
              <div key={index}>
                <RecentNews
                  key={index}
                  img={slider.img}
                  date={slider.date}
                  description={slider.description}
                  name={slider.name}
                ></RecentNews>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default Slider;
