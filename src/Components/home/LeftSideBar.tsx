import { Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";
import { FaBookmark, FaLocationDot, FaRegBookmark } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
const LeftSideBar = () => {
  return (
    <section>
      <div className="flex flex-col justify-between min-h-[90vh] gap-4">
        {/* Weather card */}
        <div className="bg-blue-500 bg-opacity-20 p-4 rounded-md">
          <div className="flex flex-col justify-between items-center ">
            <h1 className="font_montserrat text-3xl">71°</h1>
            <span className="font_montserrat text-3xl">🌥️</span>
            <h1 className="font_montserrat text-2xl">Sunny</h1>
            <div className="flex gap-4 my-2">
              <span className="font_raleway text-sm">Real Feel: 78° </span>
              <span className="font_raleway text-sm">Rain Chance: 5%</span>
            </div>
            {/* Week */}
            <div className="grid grid-cols-7 bg-gray-100 gap-2 p-2 rounded-md my-2">
              <div className="flex flex-col ">
                <h1 className=" font-light text-sm">MON</h1>
                <span className=" font-normal text-sm">☀️</span>
                <h1 className="font_raleway font-light text-sm">69</h1>
              </div>
              <div className="flex flex-col ">
                <h1 className=" font-light text-sm">TUE</h1>
                <span className=" font-normal text-sm">🌥️</span>
                <h1 className="font_raleway font-light text-sm">69</h1>
              </div>
              <div className="flex flex-col ">
                <h1 className=" font-light text-sm">WED</h1>
                <span className=" font-normal text-sm">🌦️</span>
                <h1 className="font_raleway font-light text-sm">69</h1>
              </div>
              <div className="flex flex-col ">
                <h1 className=" font-light text-sm">THU</h1>
                <span className=" font-normal text-sm">🌦️</span>
                <h1 className="font_raleway font-light text-sm">63</h1>
              </div>
              <div className="flex flex-col ">
                <h1 className=" font-light text-sm">FRI</h1>
                <span className=" font-normal text-sm">🌧️</span>
                <h1 className="font_raleway font-light text-sm">69</h1>
              </div>
              <div className="flex flex-col ">
                <h1 className=" font-light text-sm">SAT</h1>
                <span className=" font-normal text-sm">🌥️</span>
                <h1 className="font_raleway font-light text-sm">50</h1>
              </div>
              <div className="flex flex-col ">
                <h1 className=" font-light text-sm">SUN</h1>
                <span className=" font-normal text-sm">🌧️</span>
                <h1 className="font_raleway font-light text-sm">69</h1>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1>Sunday, 18th 2018</h1>
              <h1 className="flex gap-2 justify-center items-center">
                {" "}
                <FaLocationDot className="text-sm" />
                <span> Los Angeles, CA</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Recommended Card */}
        <div className="bg-white p-4 rounded-md">
          <div>
            <div className="flex justify-between ">
              <h1 className="font_montserrat">Recommended Pages</h1>

              <Button
                shape="circle"
                className="flex justify-center items-center rounded-full bg-[#f4f4f4]"
              >
                <span>
                  <BsThreeDotsVertical className="font-bold" />
                </span>
              </Button>
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
              <BsThreeDotsVertical />
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
