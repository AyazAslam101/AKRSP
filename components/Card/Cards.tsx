import React from "react";
import Image from "next/image";

function Cards({ img, title, description, readMore,}: any) {
  return (
    <div className="w-[300px]">
      <div>
      <div className="mb-2">
        <Image src={img} alt="alt" width={50} height={10} />
      </div>
      <div className="mt-2 px-2">
        <h6 className="font-bold mb-2 text-xl">{title}</h6>
        <p className="text-lg overflow-hidden">{description}</p>
        <button className="mt-2 text-lg py-2 rounded text-primary flex items-center">
          {readMore}
          <svg
            width="10"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2"
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
  );
}

export default Cards;
