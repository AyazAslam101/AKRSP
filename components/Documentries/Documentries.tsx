import React from "react";
// import ReactPlayer from "react-player";
import Image from "next/image";

const Documentries = () => {
  // const handleWatchComplete = (played: any) => {
  //   console.log(played);
  // };
  return (
    <div className="py-5 px-2 mx-auto overflow-hidden sm:px:2 container">
      <div className="px-4">
        <h2 className="text-3xl font-bold mb-6">MEDIA / DOCUMENTARIES</h2>
      </div>
      <div className="lg:flex items-center md:justify-center justify-center mx-auto flex-rows grid md:grid-cols-2 justify-evenly">
      <div className="bg-playerbg px-3 py-10 ml-2 mr-2 mt-10 mb-10">
          <Image src="/../public/imam.png" width={450} height={100} alt="alt" className="mx-auto"/>
          <p className="mt-2 text-xl font-medium">Changing Valleys</p>
        </div>
        <div className="bg-playerbg px-3 py-10 ml-2 mr-2 mt-10 mb-10">
          <Image src="/../public/imam.png" width={450} height={100} alt="alt" className="mx-auto"/>
          <p className="mt-2 text-xl font-medium">Changing Valleys</p>
        </div>
        <div className="bg-playerbg px-3 py-10 ml-2 mr-2 mt-10 mb-10">
          <Image src="/../public/imam.png" width={450} height={100} alt="alt"className="mx-auto" />

          <p className="mt-2 text-xl font-medium ">Changing Valleys</p>
        </div>
      </div>
    </div>
  );
};

export default Documentries;
