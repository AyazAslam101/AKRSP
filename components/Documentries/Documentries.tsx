import React from "react";
import Image from "next/image";

const Documentries = () => {
 
  return (
    <div className="py-5 px-2 mx-auto overflow-hidden sm:px:2 container">
      <div className="px-4">
        <h2 className="text-4xl font-bold mb-1 -ml-2">MEDIA / DOCUMENTARIES</h2>
      </div>
      <div className="lg:flex items-center md:justify-center justify-center mx-auto flex-rows grid md:grid-cols-2 lg:justify-evenly">
        <div className="bg-playerbg px-3 py-10 ml-2 mr-2 mt-10 mb-10 cursor-pointer">
          <Image
            src="/imam.png"
            width={450}
            height={100}
            alt="alt"
            className="mx-auto"
          />
          <p className="mt-2 text-xl font-bold">Changing Valleys</p>
        </div>
        <div className="bg-playerbg px-3 py-10 ml-2 mr-2 mt-10 mb-10 cursor-pointer">
          <Image
            src="/image14.png"
            width={450}
            height={100}
            alt="alt"
            className="mx-auto"
          />
          <p className="mt-2 text-xl font-bold">Harnesing The Elements</p>
        </div>
        <div className="bg-playerbg px-3 py-10 ml-2 mr-2 mt-10 mb-10 cursor-pointer">
          <Image
            src="/image15.png"
            width={450}
            height={100}
            alt="alt"
            className="mx-auto"
          />
          <p className="mt-2 text-xl font-bold">My Dream</p>
        </div>
      </div>
    </div>
  );
};

export default Documentries;
