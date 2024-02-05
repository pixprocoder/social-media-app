import React from "react";
import Image from "next/image";

import LeftSideNavBar from "./components/LeftSideNavBar";
import MobileNavRight from "./components/MobileNavRight";
import Link from "next/link";
import { Divider } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";

const logo: string = "/logo.jpg";

const MobileNavbar = () => {
  return (
    <div className="flex  flex-col   px-1 gap-2">
      <div className="flex justify-between items-center">
        <div className=" flex lg:hidden p-1 rounded  gap-2 items-center justify-center">
          <Image
            src={logo}
            alt="profile picture "
            width={30}
            height={30}
            className="rounded-full"
          />
          <Link
            href="/home"
            className="text-md text-violet-600 font-black font_montserrat"
          >
            CircleUp
          </Link>
          {/* <div className="hidden md:block">
          <NavbarSearchBar />
        </div> */}
        </div>
        <div>
          <GiHamburgerMenu className="text-xl cursor-pointer " />
        </div>
      </div>

      <div>
        <div>
          <LeftSideNavBar />
          {/* <Divider className="m-0" /> */}
          <hr className="mt-2" />
        </div>

        {/* <div>
          <MobileNavRight />
        </div> */}
      </div>
      {/*
     
       */}
    </div>
  );
};

export default MobileNavbar;
