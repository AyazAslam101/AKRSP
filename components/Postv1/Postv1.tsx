import React from "react";
import Image from "next/image";
import image1 from "../../public/image5.png";
import image2 from "../../public/image6.png";
import image3 from "../../public/image7.png";
import image4 from "../../public/image8.png";
import image5 from "../../public/image9.png";
import image6 from "../../public/image10.png";
import image7 from "../../public/image11.png";
import image8 from "../../public/image12.png";

const Postv1 = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-2 overflow-hidden container sm:px-4 lg:px-10">
      <div className="text-center">
        <h2 className="text-3xl leading-10 font-extrabold">Media Gallery</h2>
        <h4 className="text-2xl leading-10 font-semibold mt-2">
          Enhancing Employability and Leadership for Youth (EELY)
        </h4>
        <p className="text-xl leading-8 container lg:px-32 px-4 py-4 mx-auto text-center">
          Funded by: foreign affairs, trafe and development canada (DFATD) and
          the aga khan foundation, canada (AKFC) project period: 6 years (march
          2011-march 2017) geographic focus: all districts of gilgit-baltistan
          and district chitral of khyber pakhtunkhwa. to improve the
          socio-economic conditions of young men and women in gilgit baltistan
          and chitral 9GBC
        </p>
      </div>
      <div className="container lg:px-10 lg:pb-20 py-2 mx-auto">
        <div className="grid grid-cols-4 gap-1 sm:gap-1 md:gap-2 lg:gap-2 xl:gap-2">
          <div className="w-full">
            <Image src={image1} alt="akrsp" />
          </div>
          <div>
            <Image src={image2} alt="akrsp" />
          </div>
          <div>
            <Image src={image5} alt="akrsp" />
          </div>
          <div>
            <Image src={image7} alt="akrsp" />
          </div>
          <div>
            <Image src={image3} alt="akrsp" className="inset-0 object-cover" />
          </div>

          <div className="relative">
            <Image
              src={image4}
              alt="akrsp"
              className="absolute xl:-top-42 lg:-top-30 md:-top-26 sm:-bottom-0 bottom-0"
            />
          </div>
          <div>
            <Image src={image6} alt="akrsp" />
          </div>
          <div className="relative">
            <Image
              src={image8}
              alt="akrsp"
              className="absolute xl:-top-42 lg:-top-30 md:-top-26 sm:-bottom-0 bottom-0"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="border-primary border-solid border-2 py-1 px-2 rounded ">
          <svg
            width="10"
            height="12"
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
        <button className="border-primary border-solid border-2 py-1 px-2 rounded ml-3">
          <svg
            width="10"
            height="12"
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
  );
};

export default Postv1;

{
  /* 
   <div className="max-w-full flex justify-center items-cener flex-wrap gap-1 	h-auto relative">
        <div className="flex flex-wrap justify-center ">
          <Image src={image1} alt="alt" />
        </div>
        <div>
          <Image src={image2} alt="alt" />
        </div>
        <div>
          <Image src={image5} alt="alt" />
        </div>
        <div>
          <Image src={image7} alt="alt" />
        </div>
        <div>
          <Image src={image3} alt="alt" />
        </div>
        <div>
          <Image src={image4} alt="alt" className="relative bottom-44" />
        </div>
        <div>
          <Image src={image6} alt="alt" />
        </div>
        <div>
          <Image src={image8} alt="alt" className="relative bottom-44" />
        </div>
      </div>
  */
}
