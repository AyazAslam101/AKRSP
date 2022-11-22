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
      className={`px-8 py-3 rounded-full cursor-pointer ${isActive ? 'bg-primary flex items-center justify-center  text-white' : 'bg-playerbg text-black'}`}
      onClick={() => {
        onClick(value);
      }}
    >
      {children}
    </button>
  );
};