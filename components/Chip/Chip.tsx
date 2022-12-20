import React, { FC, useState } from "react";
export interface ChipProps {
  children?: React.ReactNode;
  state: number;
  onClick?: (value: string) => void | undefined;
  item?: any;
  index?: any;
}
const Chip: FC<ChipProps> = ({ children, onClick, state, item, index }) => {
  return (
    <div>
      <button
        onClick={() => onClick(index)}
        className={`btn-cli px-8 py-3 mr-2 hover:bg-primary hover:text-white mt-2 px-4 py-2 rounded-full cursor-pointer whitespace-nowrap ${
          index === state ? "bg-primary text-white" : "bg-playerbg text-primary"
        }
      `}
      >
        {children}
      </button>
    </div>
  );
};
export default Chip;
