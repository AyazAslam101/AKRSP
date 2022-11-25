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
    <div className="py-2 px-6 container">
      {data.map((item , index) => {
        return (
          <div key={index} >
            <div className="bg-primary p-8 py-16 rounded-md">
              <div className="flex items-center">
                <p className="mb-4 font-medium text-xl text-white -mt-4">
                  {item.update} - <span>{item.created_at}</span>
                </p>
              </div>
              <div>
                <div>
                  <p className="font-bold text-4xl tracking-widest leading-relaxed text-white leading-10">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="flex pt-8 space-x-3">
                <div className="h-2 w-12 bg-white opacity-40 rounded"></div>
                <div className="h-2 w-12 bg-white rounded"></div>
                <div className="h-2 w-12 bg-white opacity-40 rounded"></div>
                <div className="h-2 w-12 bg-white opacity-40 rounded"></div>
                <div className="h-2 w-12 bg-white opacity-40 rounded"></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Hero;
