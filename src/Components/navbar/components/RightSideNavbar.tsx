import React from "react";
import NavbarSearchBar from "./NavbarSearchBar";
import DarkmodeToggle from "./DarkmodeToggle";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import { BsSearch } from "react-icons/bs";
import { FaAlignRight } from "react-icons/fa6";

const RightSideNavbar = () => {
  return (
    <div className="flex items-center gap-6">
      <div className="hidden  md:block">
        <NavbarSearchBar />
      </div>
      <div>
        <span>
          <BsSearch className="text-3xl" />
        </span>
      </div>
      <DarkmodeToggle />
      <div className="hidden md:block">
        <Space wrap size={16}>
          <Avatar size={45} icon={<UserOutlined />} />
        </Space>
      </div>
      <div className="md:hidden  ">
        <FaAlignRight className="text-4xl text-white bg-violet-500 p-1" />
      </div>
    </div>
  );
};

export default RightSideNavbar;
