import React from "react";
import Image from "next/image";
function RecentNews({ img, name, description, }: any) {
  return (
    <div className="container mx-auto">
      <div className="shadow">
        <div className=" ">
          <Image src={img} width={300} height={300} alt="alt " layout="responsive" />
        </div>
        <div className="mt-3">
          <h6 className="font-bold mb-3 text-lg">{name}</h6>
          <p className="">{description}</p>
          <button className="mt-3 px-3 py-3 ">
          </button>
        </div>
      </div>
    </div>
  );
}
export default RecentNews;