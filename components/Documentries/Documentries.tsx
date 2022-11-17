import React from "react";
// import ReactPlayer from "react-player";
import Image from "next/image";

const Documentries = () => {
  const handleWatchComplete = (played: any) => {
    console.log(played);
  };
  return (
    <div className="py-10 px-2 mx-auto overflow-hidden sm:px-4 lg:px-10">
      <h2 className="text-3xl font-bold mb-6">MEDIA / DOCUMENTARIES</h2>
      <div className="grid grid-cols-3 justify-around">
        <div className="bg-playerbg px-3 py-4">
          <Image src="/../public/imam.png" width={300} height={100} alt="alt" />

          <p className="mt-2">Changing Valleys</p>
        </div>
        <div className="bg-playerbg px-3 py-4 ml-2 mr-2">
          <Image src="/../public/imam.png" width={300} height={100} alt="alt" />

          <p className="mt-2">Changing Valleys</p>
        </div>
        <div className="bg-playerbg px-3 py-4">
          <Image src="/../public/imam.png" width={300} height={100} alt="alt" />

          <p className="mt-2">Changing Valleys</p>
        </div>
      </div>
      {/* <div className="lg:grid lg:grid-cols-3 md:grid-row-3">
        {[1, 2, 3].map(() => {
          return (
            <div className="bg-playerbg">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                controls={true}
                onProgress={handleWatchComplete}
                width={300}
                height={260}
              />
              <p className="mt-2">Changing Valleys</p>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Documentries;
