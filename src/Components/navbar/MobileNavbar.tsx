<<<<<<< HEAD
import React from "react";

const MobileNavbar = () => {
  return (
    <div>
      <h3>This is Mobile Navbar</h3>
      
=======
import Image from "next/image";
import React from "react";
import logo from "/public/logo.jpg";
import LeftSideNavBar from "./components/LeftSideNavBar";
import MobileNavRight from "./components/MobileNavRight";

const MobileNavbar = () => {
  return (
    <div className="flex justify-between items-center px-1">
      <div className="w-[40px] h-[40px] bg-violet-500 p-1 rounded">
        <Image
          src={logo}
          alt="profile picture "
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <div>
        <LeftSideNavBar />
      </div>
      <div>
        <MobileNavRight />
      </div>
>>>>>>> b5c033d50fb0df03bdd3b2aa6b742cc1b39df58d
    </div>
  );
};

export default MobileNavbar;
