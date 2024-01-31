import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { Avatar, Button, Card, Input } from "antd";

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-camera"
            >
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
              <circle cx="12" cy="13" r="4"></circle>
            </svg>
            <span>Media</span>
          </p>
          <p className="px-2 py-1 rounded-full cursor-pointer font-light bg-[#f4f4f4] flex gap-1 justify-center items-center">
            😃
            <span>Activity</span>
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
