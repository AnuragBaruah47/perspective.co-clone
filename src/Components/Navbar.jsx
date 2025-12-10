import React, { useRef, useState } from "react";
import { logo } from "../assets/assets";
import Button from "./Button";
import Badge from "./Badge";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

const Navbar = () => {
  const navRef=useRef(null)
  useGSAP(()=>{
    
  })
  const navItems = [
    "Product",
    "Templates",
    "Reviews",
    "Pricing",
    "Partner",
    "Careers",
  ];
  return (
    <nav ref={navRef} className="w-full fixed z-100 flex justify-between items-center shadow-none p-4 ">
      <div>
        <li className="flex font-semibold tracking-tight text-[20px] items-center gap-4 text-(--blackshade)">
          <img src={logo} className="w-8 h-8" alt="home" />
          Perspective
        </li>
      </div>

      <div className="flex gap-7.5 ">
        {navItems.map((each, index) => {
          const logo = index == 0 || index == 4 ? true : false;
          const badge = index == 5 ? true : false;
          return (
            <li
              className="list-none hover:text-black transition-all ease-in-out duration-500 flex justify-center items-center gap-1 font-semibold text-(--grayshade1)"
              key={index}
            >
              {each}
              {logo && (
                <div>
                  <svg
                    width="7"
                    height="4"
                    viewBox="0 0 7 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.205025 0.195262C0.478392 -0.0650874 0.921608 -0.0650874 1.19497 0.195262L3.5 2.39052L5.80503 0.195262C6.07839 -0.0650874 6.52161 -0.0650874 6.79497 0.195262C7.06834 0.455612 7.06834 0.877722 6.79497 1.13807L3.99497 3.80474C3.72161 4.06509 3.27839 4.06509 3.00503 3.80474L0.205025 1.13807C-0.0683418 0.877722 -0.0683418 0.455612 0.205025 0.195262Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              )}
              {badge && (
                <div className="relative bottom-2 right-1.5">
                  <Badge children={"5"} />
                </div>
              )}
            </li>
          );
        })}
      </div>



      <div className="flex justify-center items-center text-(--grayshade1) hover:text-black duration-300 ease-in-out cursor-pointer gap-2">
        <div className="mr-2 font-semibold">Login</div>

        <Button children={`Talk to sales`} className={`hover:bg-(--first-button-hover) hover:text-black`} />
        <Button
          children={`Try for free`}
          className={`bg-(--second-button-normal-state) shadow-none text-white transition-all ease-in-out duration-300 hover:bg-(--second-button-hover)`}
        />
      </div>
    </nav>
  );
};

export default Navbar;
