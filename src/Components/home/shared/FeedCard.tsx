import { Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";
import Image from "next/image";
import { BiSolidLike } from "react-icons/bi";
import { FaComment } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";

const FeedCard = () => {
  return (
    <section>
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
      {/* Image and text */}
      <div>
        <p className="font-light text-sm my-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic sed,
          sequi id Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Beatae expedita quibusdam ut dolores? Nobis, magni nulla asperiores
          illo voluptas enim inventore recusandae laudantium, tenetur eligendi
          obcaecati itaque delectus vel provident. dicta est officiis,
          cupiditate debitis beatae non
        </p>
      </div>
      <Link href={`/photo/id`}>
        <div className="w-full h-[300px] overflow-hidden rounded-md bg-[#f4f4f4] flex justify-center items-center ">
          <img
            alt="example"
            src="https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/422390498_877546237707359_1733397625107647164_n.jpg?stp=dst-jpg_p526x296&_nc_cat=1&ccb=1-7&_nc_sid=3635dc&_nc_ohc=g3d3qhUL6UEAX-4_dQ0&_nc_ht=scontent.fotp3-1.fna&oh=00_AfCYTrYGyk89oy8m1rgSeEmRjLn4UhCAmZ0QlNQT2CmhOg&oe=65BFB15D"
          />
        </div>
      </Link>
      {/* Footer */}
      <div className="flex justify-between gap-2 py-2">
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
        <div className="hover:bg-[#f4f4f4] rounded-md w-full flex justify-center items-center my-2 gap-2 cursor-pointer p-1 ">
          {" "}
          <IoSend />
          <span className="font_raleway">Share</span>
        </div>
      </div>
    </section>
  );
};

export default FeedCard;
