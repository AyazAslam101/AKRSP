import React, { FC } from "react";

export interface ChipProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick: (value: string) => void;
  value: string;
}

export const Chip: FC<ChipProps> = ({ children, onClick, isActive, value }) => {
  return (
    <span
      className={`px-4 py-2 rounded-3xl cursor-pointer ${isActive ? 'bg-green-500 text-white' : 'bg-green-300 text-gray-900'}`}
      onClick={() => {
        onClick(value);
      }}
    >
      {children}
    </span>
  );
};
