"use client";
import React, { useState } from "react";
import { AiOutlineBell, AiOutlineHome, AiOutlineUserAdd } from "react-icons/ai";
import { BsChatRight } from "react-icons/bs";
import { Dropdown } from "antd";
import { friendRequestItems } from "./Navbar-Item&Label/NavbarItems/FriendsRequestItem";
import { notificationItems } from "./Navbar-Item&Label/NavbarItems/NotificationItem";
import Image from "next/image";
import logo from "/public/logo.jpg";

const LeftSideNavBar = () => {
  const [navbarState, setNavbarState] = useState(1);
  return (
    <div className="flex items-center gap-4">
      <div className="w-[60px]  hidden md:block bg-violet-500 p-1 rounded">
        <Image
          src={logo}
          alt="profile picture "
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>

      <div className="flex  items-center gap-2  ">
        <Dropdown
          menu={{ items: friendRequestItems }}
          placement="bottomLeft"
          arrow
        >
          <AiOutlineUserAdd
            onClick={() => setNavbarState(4)}
            className={`md:text-4xl text-3xl  font-bold p-1  transition-colors duration-300  rounded ${navbarState == 4 ? "text-white  bg-violet-700" : "text-violet-700"}`}
          />
        </Dropdown>

        <Dropdown
          menu={{ items: notificationItems }}
          placement="bottomLeft"
          arrow
        >
          <AiOutlineBell
            onClick={() => setNavbarState(3)}
            className={`md:text-4xl text-3xl font-bold p-1  transition-colors duration-300  rounded ${navbarState == 3 ? "text-white  bg-violet-700" : "text-violet-700"}`}
          />
        </Dropdown>
        <BsChatRight
          onClick={() => setNavbarState(2)}
          className={`md:text-4xl text-3xl font-bold p-1  transition-colors duration-300  rounded ${navbarState == 2 ? "text-white  bg-violet-700" : "text-violet-700"}`}
        />

        <AiOutlineHome
          onClick={() => setNavbarState(1)}
          className={`md:text-4xl text-3xl font-bold p-1  transition-colors duration-300  rounded ${navbarState == 1 ? "text-white  bg-violet-700" : "text-violet-700"}`}
        />
      </div>
    </div>
  );
};

export default LeftSideNavBar;
