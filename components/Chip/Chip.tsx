import React, { FC } from "react";
export interface ChipProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick: (value: string) => void;
  value: string;
}
export const Chip: FC<ChipProps> = ({ children, onClick, isActive, value }) => {
  return (
      <button
      className={`lg:px-8 lg:py-3 md:px-6 md:py-4 sm:px-1 sm:py-2 mt-2 px-2 py-0 rounded-full cursor-pointer ${isActive ? 'bg-primary flex items-center justify-center text-white' : 'bg-playerbg text-black'}`}
      onClick={() => {
        onClick(value);
      }}
    >
      {children}
    </button>
  );
};