import React from "react";
import Image from "next/image";
function RecentNews(props: {
  img: any;
  name: any;
  description: any;
  icon: any;
  date: any;
  calendar:any
}) {
  return (
    <div className="container overflow-hidden rounded h-full px-1">
      <div className="">
        <div className="lg:mb-0 mb-4">
          <Image src={props.img} width={450} height={400} alt="alt " />
        </div>
        <div className="lg:flex lg:justify-between mt-3 mb-4 container">
          <div className="flex items-center  -ml-2">
            <Image src={props.icon} width={30} height={20} alt="alt"/>
            <p className="text-lblack text-lg ml-2">{props.name}</p>
          </div>
          <div className="mr-6 flex items-center">
          <Image src={props.calendar} width={30} height={20} alt="alt"/>
            <p className="text-lblack text-lg ml-2">{props.date}</p>
          </div>
        </div>
        <div className="mt-5">
          <p className="font-bold text-2xl">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
export default RecentNews;
