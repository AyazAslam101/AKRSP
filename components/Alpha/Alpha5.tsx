import React from "react";
import ReactPlayer from "react-player";

const Alpha5 = () => {
  const handleWatchComplete = (played: any) => {
    console.log(played);
  };
  return (
    <div className="py-10 px-2 mx-auto overflow-hidden sm:px-4 lg:px-10">
      <h2 className="text-3xl font-bold mb-4">MEDIA / DOCUMENTARIES</h2>
      <div className="lg:grid lg:grid-cols-3 md:grid-row-3">
        {[1, 2, 3].map(() => {
          return (
            <div className="pl-6 pr-1 pt-2 p-2 bg-playerbg">
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
      </div>
    </div>
  );
};

export default Alpha5;
