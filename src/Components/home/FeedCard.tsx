import { Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";
import Image from "next/image";
import { BiSolidLike } from "react-icons/bi";
import { FaComment } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const FeedCard = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-2 ">
          <Avatar size="large" icon={<UserOutlined />} />
          <div className="flex flex-col">
            <span>John Smith</span>
            <small className="font-light">July 26 2018, 01:03pm</small>
          </div>
        </div>
        <Button className="bg-[#f4f4f4]" shape="circle">
          A
        </Button>
      </div>
      {/* Image and text */}
      <div>
        <p className="font-light text-sm my-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic sed,
          sequi id dicta est officiis, cupiditate debitis beatae non
        </p>
      </div>
      <div className="w-full h-[200px] overflow-hidden rounded-md bg-[#f4f4f4] flex justify-center items-center ">
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      </div>
      {/* Footer */}
      <div className="flex justify-between gap-2">
        <div className="hover:bg-[#f4f4f4] rounded-md w-full flex justify-center items-center my-2 gap-2 cursor-pointer p-1 ">
          {" "}
          <BiSolidLike />
          <span>Like</span>
        </div>
        <div className="hover:bg-[#f4f4f4] rounded-md w-full flex justify-center items-center my-2 gap-2 cursor-pointer p-1 ">
          {" "}
          <FaComment />
          <span>Comment</span>
        </div>
        <div className="hover:bg-[#f4f4f4] rounded-md w-full flex justify-center items-center my-2 gap-2 cursor-pointer p-1 ">
          {" "}
          <IoSend />
          <span>Share</span>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
