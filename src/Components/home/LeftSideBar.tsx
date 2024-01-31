import { Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
const LeftSideBar = () => {
  return (
    <section>
      <div className="flex flex-col justify-between min-h-[90vh]">
        <div className="bg-white p-4 rounded-md">
          <h1>Weather card</h1>
        </div>

        {/* Recommended */}
        <div className="bg-white p-4 rounded-md">
          <div>
            <div className="flex justify-between ">
              <h1>Recommended Pages</h1>
              <span>...</span>
            </div>
            <hr className="mt-2" />
            {/* pages 1 */}
            <div className="flex justify-between items-center my-2">
              <div className="flex gap-2 items-center">
                <Avatar size="large" icon={<UserOutlined />} />
                <div className="flex flex-col">
                  <span className="text-sm">Pizza</span>
                  <small className="font-light">Pizza & Fast Food</small>
                </div>
              </div>
              <span>
                <FaRegBookmark />
              </span>
            </div>
            <hr className="" />
            {/* pages 2 */}
            <div className="flex justify-between items-center my-2">
              <div className="flex gap-2 items-center">
                <Avatar size="large" icon={<UserOutlined />} />
                <div className="flex flex-col">
                  <span className="text-sm">Pizza</span>
                  <small className="font-light">Pizza & Fast Food</small>
                </div>
              </div>
              <span>
                <FaRegBookmark />
              </span>
            </div>
            <hr className="" />
            {/* pages 3 */}
            <div className="flex justify-between items-center my-2">
              <div className="flex gap-2 items-center">
                <Avatar size="large" icon={<UserOutlined />} />
                <div className="flex flex-col">
                  <span className="text-sm">Pizza</span>
                  <small className="font-light">Pizza & Fast Food</small>
                </div>
              </div>
              <span>
                <FaRegBookmark />
              </span>
            </div>
          </div>
        </div>

        {/* Latest activity */}
        <div className="bg-white p-4 rounded-md">
          <div>
            <div className="flex justify-between ">
              <h1>Latest Activity</h1>
              <span>...</span>
            </div>
            <hr className="mt-2" />
            {/* pages 1 */}
            <div className="flex justify-between items-center my-2">
              <div className="flex gap-2 items-center">
                <Avatar size="large" icon={<UserOutlined />} />
                <div className="flex flex-col">
                  <span className="text-sm">Css Ninja</span>
                  <small className="font-light">3 hours ago</small>
                </div>
              </div>
              <span>
                <MdOutlineRemoveRedEye />
              </span>
            </div>
            <hr className="" />
            {/* pages 2 */}
            <div className="flex justify-between items-center my-2">
              <div className="flex gap-2 items-center">
                <Avatar size="large" icon={<UserOutlined />} />
                <div className="flex flex-col">
                  <span className="text-sm">Js Ninja</span>
                  <small className="font-light">1 second ago</small>
                </div>
              </div>
              <span>
                <MdOutlineRemoveRedEye />
              </span>
            </div>
            <hr className="" />
            {/* pages 3 */}
            <div className="flex justify-between items-center my-2">
              <div className="flex gap-2 items-center">
                <Avatar size="large" icon={<UserOutlined />} />
                <div className="flex flex-col">
                  <span className="text-sm">React Icons</span>
                  <small className="font-light">5 hours ago</small>
                </div>
              </div>
              <span>
                <MdOutlineRemoveRedEye />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftSideBar;

// meeting tomorrow 6:15 pm
