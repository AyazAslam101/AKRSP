import React, { FC, useState } from "react";
export interface ChipProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick: (value: string) => void;

  value: string;
}
const Chip: FC<ChipProps> = ({ children, onClick, isActive, value }) => {
  return (
    <button
      onClick={() => onClick(value)}
      className={`lg:px-8 lg:py-3 md:px-6 mr-2 md:py-4 sm:px-1 sm:py-2 mt-2 px-2 py-2 border-2 rounded-full cursor-pointer ${
        true
          ? "border-primary focus:bg-primary focus:text-white focus:z-10 focus:ring-1 focus:ring-primary-500 focus:border-2 text-primary mt-3"
          : "border-primary focus:bg-white focus:text-primary focus:z-10 focus:ring-1 focus:ring-primary-500 focus:border-2 text-primary mt-3"
      }`}
    >
      {children}
    </button>
  );
};
export default Chip;
