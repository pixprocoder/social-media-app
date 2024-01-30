import Image from "next/image";
import React from "react";
import logo from "/public/logo.jpg";
import LeftSideNavBar from "./components/LeftSideNavBar";
import RightSideNavbar from "./components/RightSideNavbar";

const MobileNavbar = () => {
  return (
    <div className="flex justify-between items-center">
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
        <RightSideNavbar />
      </div>
    </div>
  );
};

export default MobileNavbar;
