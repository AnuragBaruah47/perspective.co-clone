import React from "react";
import Navbar from "./Components/Navbar";
import Herosec from "./Components/Herosec";
import { background } from "./assets/assets";

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="relative z-20 top-19.5">
        <Herosec />
      </div>
      <div className="w-full flex justify-center">
        <img className="absolute z-0" src={background} alt="" />
      </div>

      <div className="h-screen"></div>
    </div>
  );
};

export default App;
