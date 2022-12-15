import React, { FC, useState } from "react";
import Link from "next/link";
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
      className={`lg:px-8 lg:py-3 md:px-6 mr-2 md:py-4 sm:px-4 sm:py-2 mt-2 px-4 py-2 focus:text-white focus:bg-primary rounded-full cursor-pointer whitespace-nowrap ${
        isActive
          ? "bg-primary text-white focus:z-10 focus:ring-1 text-primary mt-3"
          : "focus:z-10 focus:ring-1 text-primary mt-3 bg-playerbg text-buttontext"
      }`}
    >
      {children}
    </button>
  );
};
export default Chip;
