import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Programmes = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="py-5 overflow-hidden container">
        <div
          className="lg:grid lg:grid-cols-2 md:block sm:block block md:gap-4 lg:gap-4 md:gap-4 sm:gap-4 gap-4  items-center"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="h-full rounded object-cover mb-3 flex-none">
            <Image
              src="/people.png"
              width={850}
              height={200}
              alt="alt"
              className="h-full rounded object-cover mb-3"
            />
          </div>
          <div className="lg:ml-3 lg:pb-8">
            <h1 className="text-primary font-medium text-2xl cursor-pointer">
              PROGRAMMES
            </h1>
            <p className="text-4xl font-semibold xl:mt-6 lg:mt-3 md:mt-4 sm:mt-2">
              Social Pillar
            </p>
            <p className="text-xl tracking-wide font-medium max-w-xl leading-8 lg:mb-6 md:mb-6 sm:mb-4 lxl:mt-8 lg:mt-4 md:mt-4 sm:mt-4 md:mt-2 mt-2 mb-1">
              AKRSP has built a strong foundation of people institutions
              comprising more than 3700 Village and Women Organizations,
              majority of whom have come together to establish more than 60
              Local Support Organizations as their representative institutions.
              These LSOs take on a multi-sector agenda in partnership with a
              wide array of partners including the local government departments.
            </p>
            <button className="bg-white px-4 py-3 border-primary border-2 rounded-md focus:bg-primary focus:text-white focus:z-10 focus:ring-2 focus:ring-primary-500 focus:border-2 text-primary text-lg ">
              Read More
            </button>
          </div>
        </div>
        <div
          className="lg:grid lg:grid-cols-2 md:block md:gap-4 lg:gap-4 items-center mt-16"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <div className="lg:pb-8">
            <h1 className="text-2xl text-primary cursor-pointer lg:mt-6 md:mt-2">
              PROGRAMMES
            </h1>
            <p className="text-4xl font-semibold xl:mt-6 lg:mt-4 md:mt-4 sm:mt-2">
              Economic Pillar
            </p>
            <p className="text-xl tracking-wide font-medium max-w-xl leading-8 lg:mb-6 md:mb-6 sm:mb-4 xl:mt-6 lg:mt-3 md:mt-4 sm:mt-4 md:mt-2 mt-2 mb-1">
              Sustained improvements in the quality of life GBC population
              hinges upon inclusive economic growth and shared employment
              opportunities. AKRSP efforts in developing economic
              infrastructure (e.g. roads, irrigation and land development
              projects), promoting agricultural productivity, and improving
              farming skills have been instrumental in this regard by increasing
              farm surplus.
            </p>
            <button className="bg-white px-4 py-3 border-primary border-2 rounded-md focus:bg-primary focus:text-white focus:z-10 focus:ring-2 focus:ring-primary-500 focus:border-2 text-primary text-lg">
              Read More
            </button>
          </div>
          <div className="lg:mt-0 sm:mt-3 md:mt-3 mt-3 lg:ml-4 h-full rounded object-cover cursor-pointer">
            <Image
              src="/image13.png"
              width={850}
              height={100}
              alt="alt"
              className="h-full rounded object-cover cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Programmes;
