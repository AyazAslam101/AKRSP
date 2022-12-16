import React from "react";
import Image from "next/image";

function Cards({ img, title, description, readMore }: any) {
  return (
    <div className="w-[400px]">
      <div>
        <div className="mb-2">
          <Image src={img} alt="alt" width={400} height={100} />
        </div>
        <div className="mt-3">
          <h6 className="font-medium mb-2 text-xl h-16">{title}</h6>
          <p className="text-base font-normal">{description}</p>
          <div>
            <button className="mt-2 text-lg py-2 rounded text-primary flex items-center">
              <span className="mr-2 hover:mr-3 transition-all">{readMore}</span>
              <svg
                width="19"
                height="19"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.33301 8.5H11.663"
                  stroke="#0C9A4A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 3.83337L12.6667 8.50004L8 13.1667"
                  stroke="#0C9A4A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
