import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { Avatar, Button, Card, Input } from "antd";
import { MdPermMedia } from "react-icons/md";
import { FaSmile } from "react-icons/fa";

const FeedPostCard = () => {
  return (
    <Card title="What's your mind!" bordered={false}>
      <div className="flex ">
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
        <Input placeholder="Write something" variant="borderless" />
      </div>
      <div className="mt-8 flex justify-between">
        <div className="flex gap-2">
          <p className="px-2 py-1 rounded-full cursor-pointer font-light bg-[#f4f4f4] flex gap-1 justify-center items-center">
            <MdPermMedia className="color_primary" />
            <span className="font_raleway">Media</span>
          </p>
          <p className="px-2 py-1 rounded-full cursor-pointer font-light bg-[#f4f4f4] flex gap-1 justify-center items-center">
            <FaSmile className="color_primary" />
            <span className="font_raleway">Activity</span>
          </p>

          <p className="px-2 py-1 rounded-full cursor-pointer font-light bg-[#f4f4f4] flex gap-1 justify-center items-center">
            <span>
              <BsThreeDots />
            </span>
          </p>
        </div>
        <Button type="primary">Post</Button>
      </div>
    </Card>
  );
};

export default FeedPostCard;
