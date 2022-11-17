import React from "react";

const data = [
  {
    update: "Latest Updates",
    created_at: "26-09-2022",
    description:
      "Aga Khan Rural Support Programme (AKRSP) Provides PPE worth PKR16,997,000 to Sindh Government",
  },
];

const Alpha3 = () => {
  return (
    <div className="py-2 lg:px-40">
      {data.map((item) => {
        return (
          <div className="bg-primary p-12 flex items-center justify-center rounded-md px-10">
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

export default Alpha3;
