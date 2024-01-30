import { Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";
import Image from "next/image";

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
      <div>
        <p className="font-light text-sm my-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic sed,
          sequi id dicta est officiis, cupiditate debitis beatae non
        </p>
      </div>
      <div className="w-full h-[200px] overflow-hidden rounded-md ">
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      </div>
      <div>
        <p>Footer</p>
      </div>
    </div>
  );
};

export default FeedCard;
