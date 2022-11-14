import React from "react";

const data = [
  {
    update: "latest updates",
    created_at: "26-09-2022",
    description:
      " Aga Khan Rural Support Programme (AKRSP) Provides PPE worth PKR16,997,000 to Sindh Government",
  },
];

const Frame = () => {
  return (
    <div className="max-w-7xl mx-auto py-2 container lg:px-36">
      {data.map((item) => {
        return (
          <div className="bg-primary h-56 flex items-center rounded-md px-10">
            <div>
              <p className="mb-8 font-medium text-lg text-white">
                {item.update} - <span>{item.created_at}</span>
              </p>
              <p className="font-semibold text-xl ">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Frame;
