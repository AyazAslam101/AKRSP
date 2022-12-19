import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Player from "react-player";

const Documentries = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const data = [
    {
      url: "https://www.youtube.com/watch?v=D896tmECywo",
      title: "Changing Valleys",
    },
    {
      url: "https://www.youtube.com/embed/7MY8w8aZhTE",
      title: "Harnesing The Elements",
    },
    {
      url: "https://www.youtube.com/watch?v=vnVDbpmttYo",
      title: "Changing Valleys",
    },
  ];
  return (
    <div data-aos="fade-right" data-aos-duration="800">
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-1">MEDIA / DOCUMENTARIES</h2>
      </div>
      <div className="lg:grid lg:grid-cols-3 items-center md:justify-center mt-10 mb-16 justify-center flex-rows grid md:grid-cols-2 lg:justify-evenly">
        {data.map((data: any) => {
          return (
            <div className="bg-playerbg px-3 py-7 mb-6 ml-2 mr-2  cursor-pointer">
              <Player
                url={data.url}
                width="100%"
                height="23rem"
                controls={true}
              />
              <p className="mt-5 text-xl font-bold">{data.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Documentries;
