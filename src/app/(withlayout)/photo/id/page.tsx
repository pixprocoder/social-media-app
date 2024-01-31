import { Avatar, Button } from "antd";
import React from "react";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import { UserOutlined } from "@ant-design/icons";
import { BiSolidLike } from "react-icons/bi";
import { FaComment } from "react-icons/fa6";

const PostDetailPage = () => {
  return (
    <section>
      <div className="flex min-h-[90vh]">
        <div className="w-9/12 bg-gray-200 flex justify-center items-center">
          <img
            alt="example"
            src="https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/422390498_877546237707359_1733397625107647164_n.jpg?stp=dst-jpg_p526x296&_nc_cat=1&ccb=1-7&_nc_sid=3635dc&_nc_ohc=g3d3qhUL6UEAX-4_dQ0&_nc_ht=scontent.fotp3-1.fna&oh=00_AfCYTrYGyk89oy8m1rgSeEmRjLn4UhCAmZ0QlNQT2CmhOg&oe=65BFB15D"
          />
        </div>
        <div className="w-3/12 ">
          {/* Parent */}
          <div className="bg-gray-300 ">
            <div className="flex justify-between mt-2">
              <div className="flex gap-2 ">
                <Avatar
                  className="border "
                  size="large"
                  src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                  icon={<UserOutlined />}
                />
                <div className="flex flex-col">
                  <span className="user_heading">John Smith</span>
                  <small className="user_sub_heading font-light">
                    July 26 2018, 01:03pm
                  </small>
                </div>
              </div>
              <Button
                shape="circle"
                className="flex justify-center items-center rounded-full bg-[#f4f4f4]"
              >
                <span>
                  <BsThreeDots className="font-bold" />
                </span>
              </Button>
            </div>
            <div className="flex justify-between my-4 px-4">
              <h1 className="text-sm color_dark-2">10 Likes</h1>
              <h1 className="text-sm color_dark-2">10 Comments</h1>
            </div>
            <hr className="" />
            {/* line comment */}
            <div className="flex ">
              <div className="hover:bg-[#f4f4f4] rounded-md w-full flex justify-center items-center my-2 gap-2 cursor-pointer p-1 ">
                {" "}
                <BiSolidLike />
                <span className="font_raleway">Like</span>
              </div>
              <div className="hover:bg-[#f4f4f4] rounded-md w-full flex justify-center items-center my-2 gap-2 cursor-pointer p-1 ">
                {" "}
                <FaComment />
                <span className="font_raleway">Comment</span>
              </div>
            </div>
          </div>
          {/* Comments */}
          <div>
            <div className="p-2 flex gap-2">
              <Avatar
                className="border "
                size="large"
                src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                icon={<UserOutlined />}
              />
              <div className="bg-gray-200 p-2 rounded-md mt-2">
                <h1 className="font-bold color_dark_1">John Smith</h1>
                <p className="text-sm   color_dark_2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-[12px] my-1 cursor-pointer hover:underline color_dark_2">
                    Like
                  </p>
                  <p className="text-[12px] my-1 cursor-pointer hover:underline color_dark_2">
                    Reply
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostDetailPage;
