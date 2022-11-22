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
          <div className="bg-primary p-12 flex items-center justify-center rounded-md">
            <div>
              <p className="mb-4 font-medium text-lg text-white -mt-4">
                {item.update} - <span>{item.created_at}</span>
              </p>
              <p className="font-medium text-2xl text-white leading-10">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Hero;
