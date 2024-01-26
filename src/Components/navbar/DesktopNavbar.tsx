"use client";
import React, { useState } from "react";
import { AiOutlineBell, AiOutlineHome, AiOutlineUserAdd } from "react-icons/ai";
import { UserOutlined } from "@ant-design/icons";
import { BsChatRight } from "react-icons/bs";
import NavbarSearchBar from "./components/NavbarSearchBar";
import { Avatar, Space } from "antd";

const DesktopNavbar = () => {
  const [navbarState, setNavbarState] = useState(1);
  return (
    <div className="flex justify-between gap-5 shadow-lg  px-10 py-3">
      <nav className="flex items-center gap-4">
        <AiOutlineUserAdd
          onClick={() => setNavbarState(4)}
          className={`text-4xl font-bold p-1  transition-colors duration-300  rounded ${navbarState == 4 ? "text-white  bg-violet-700" : "text-violet-700"}`}
        />
        <AiOutlineBell
          onClick={() => setNavbarState(3)}
          className={`text-4xl font-bold p-1  transition-colors duration-300  rounded ${navbarState == 3 ? "text-white  bg-violet-700" : "text-violet-700"}`}
        />
        <BsChatRight
          onClick={() => setNavbarState(2)}
          className={`text-4xl font-bold p-1  transition-colors duration-300  rounded ${navbarState == 2 ? "text-white  bg-violet-700" : "text-violet-700"}`}
        />

        <AiOutlineHome
          onClick={() => setNavbarState(1)}
          className={`text-4xl font-bold p-1  transition-colors duration-300  rounded ${navbarState == 1 ? "text-white  bg-violet-700" : "text-violet-700"}`}
        />
      </nav>
      <nav className="flex items-center gap-6">
        <NavbarSearchBar />
        <Space wrap size={16}>
          <Avatar size={45} icon={<UserOutlined />} />
        </Space>
      </nav>
    </div>
  );
};

export default DesktopNavbar;
