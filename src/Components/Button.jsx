import React from "react";
import { cn } from "../../src/Utils";

const Button = ({ className, children, svg }) => {
  return (
    <div
      className={cn(
        "px-4 py-[9px] flex justify-center items-center rounded-[9px] font-semibold transition-all hover:shadow-none text-(--grayshade2) ease-in-out duration-200 bg-white shadow-[0px_1px_5px_0.5px_rgba(0,0,0,0.1)]",
        className
      )}
    >
      {svg}
      {children}
    </div>
  );
};

export default Button;
