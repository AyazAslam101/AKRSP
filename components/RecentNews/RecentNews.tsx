import React, { useEffect } from "react";
import Image from "next/image";
import { UserSvg, CalendarSvg } from "../Icons/svg";
import AOS from "aos";
import "aos/dist/aos.css";
function RecentNews(props: {
  img: any;
  name: any;
  description: any;
  date: any;
}) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="container rounded mt-4">
      <div className="w-[435px]">
        <div className="lg:mb-0 mb-4 cursor-pointer">
          <Image src={props.img} width={435} height={400} alt="alt " />
        </div>
        <div className="lg:flex lg:justify-between block mt-3 mb-4 container">
          <div className="flex items-center">
            <UserSvg />
            <p className="text-lblack text-lg ml-2">{props.name}</p>
          </div>
          <div className="flex items-center cursor-pointer lg:mt-0 mt-2">
            <CalendarSvg />
            <p className="text-lblack text-lg ml-2">{props.date}</p>
          </div>
        </div>
        <div className="mt-5">
          <p className="font-bold text-xl">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
export default RecentNews;
