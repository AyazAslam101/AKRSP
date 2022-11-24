import React from "react";

const data = [
  {
    update: "Latest Updates",
    created_at: "26-09-2022",
    description:
      "Aga Khan Rural Support Programme (AKRSP) Provides PPE worth PKR16,997,000 to Sindh Government",
  },
];

const Hero = () => {
  return (
    <div className="py-2 lg:px-52 md:px:30 sm:px-30 px-100 container max-w-6xl">
      {data.map((item) => {
        return (
       <div>
           <div className="bg-primary p-8 rounded-md">
            <div className="flex items-center">
              <p className="mb-4 font-medium text-lg text-white -mt-4">
                {item.update} - <span>{item.created_at}</span>
              </p>
            </div>
            <div>
              <div>
                <p className="font-medium text-2xl text-white leading-10">
                  {item.description}
                </p>
              </div>
            </div>
           <div className="flex pt-8 space-x-3">
           <div className="h-2 w-10 bg-white opacity-40 rounded"></div>
            <div className="h-2 w-10 bg-white rounded"></div>
            <div className="h-2 w-10 bg-white opacity-40 rounded"></div>
            <div className="h-2 w-10 bg-white opacity-40 rounded"></div>
           </div>
          </div>
       </div>
        );
      })}
    </div>
  );
};

export default Hero;
