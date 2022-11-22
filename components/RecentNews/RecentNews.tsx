import React from "react";
import Image from "next/image";
function RecentNews(props: {
  img: any;
  name: any;
  description: any;
  date: any;
  icon: () => any;
}) {
  return (
    <div className="container overflow-hidden rounded h-full">
      <div className="">
        <div className=" ">
          <Image src={props.img} width={450} height={400} alt="alt " />
        </div>
        <div className="lg:flex justify-between mt-3 mb-4 container">
          <div className="bg-pr">
            <p className="text-lblack text-lg">{props.name}</p>
          </div>
          <div className="mr-6">
            <p className="text-lblack text-lg">{props.date}</p>
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
