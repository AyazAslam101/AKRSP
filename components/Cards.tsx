import React from "react";
import Image from "next/image";

function Cards({ img, title, description, readMore }: any) {
  return (
    <div className="container mx-auto">
      <div className="shadow">
        <div className=" ">
          <Image src={img} alt="alt " layout="responsive" />
        </div>
        <div className="mt-2">
          <h6 className="font-bold mb-2 text-lg">{title}</h6>
          <p className="">{description}</p>
          <button className="mt-2 px-2 py-2 rounded">
            {readMore }
          </button> 
        </div>
      </div>
    </div>
  );
}

export default Cards;
