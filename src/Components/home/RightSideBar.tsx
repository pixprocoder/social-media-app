import { Avatar } from "antd";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { UserOutlined } from "@ant-design/icons";

const RightSideBar = () => {
  return (
    <section>
      <div className="flex flex-col justify-between min-h-[90vh] ">
        <div className="bg-white p-4 rounded-md">
          <div>
            <div className="flex justify-between ">
              <h1>Stories</h1>
              <BsThreeDotsVertical />
            </div>
            <hr className="mt-2" />
            {/* pages 1 */}
            <div className="flex justify-between items-center my-2">
              <div className="flex gap-2 items-center">
                <Avatar size="large" icon={<UserOutlined />} />
                <div className="flex flex-col">
                  <span className="text-sm">Add a new Story</span>
                  <small className="font-light  text-[12px]">
                    Share an image, a video or some text
                  </small>
                </div>
              </div>
            </div>
            <hr className="" />
            {/* pages 2 */}
            <div className="flex justify-between items-center my-2">
              <div className="flex gap-2 items-center">
                <Avatar size="large" icon={<UserOutlined />} />
                <div className="flex flex-col">
                  <span className="text-sm">Dan Walker</span>
                  <small className="font-light">1 hour ago</small>
                </div>
              </div>
            </div>
            <hr className="" />
            {/* pages 3 */}
            <div className="flex justify-between items-center my-2">
              <div className="flex gap-2 items-center">
                <Avatar size="large" icon={<UserOutlined />} />
                <div className="flex flex-col">
                  <span className="text-sm">John Walker</span>
                  <small className="font-light">1 hour ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md">
          <h1>This is right side bar</h1>
        </div>
        <div className="bg-white p-4 rounded-md">
          <h1>This is right side bar</h1>
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
