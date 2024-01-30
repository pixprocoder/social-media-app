import React from "react";
import NavbarSearchBar from "./NavbarSearchBar";
import DarkmodeToggle from "./DarkmodeToggle";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import { BsSearch } from "react-icons/bs";

const RightSideNavbar = () => {
  return (
    <div className="flex items-center gap-6">
      <div className="hidden  md:block">
        <NavbarSearchBar />
      </div>
      <div className="md:hidden ">
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
    </div>
  );
};

export default RightSideNavbar;
