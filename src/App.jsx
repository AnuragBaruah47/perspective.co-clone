import React, { useRef } from "react";
import Navbar from "./Components/Navbar";
import Herosec from "./Components/Herosec";
import { background } from "./assets/assets";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {
  const imgRef=useRef(null)
  useGSAP(()=>{
    gsap.to(imgRef.current,{
      rotation:360,
      repeat:-1,
      duration:15
    })
  })
  return (
    <div>
      <Navbar />

      <div className="relative z-20 top-35">
        <Herosec />
      </div>
      <div className="w-full flex justify-center">
   <img ref={imgRef} className="w-[60%] absolute inset-y-100 bg-red-700" src={background} alt="" />
        </div>
    </div>
  );
};

export default App;
