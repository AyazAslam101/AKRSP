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
