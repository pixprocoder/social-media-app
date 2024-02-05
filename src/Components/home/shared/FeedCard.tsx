"use client";
import { Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import { FaComment } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";
import PostCommentBox from "../shared/PostCommentBox";
import { IPost } from "@/types/newsfeed";
import Image from "next/image";
import img from "/public/unnamed.webp";
import Reactions from "@/Components/newsfeed/reaction/Reaction";
import { Dropdown } from "antd";
import like from "/public/assets/reaction/like.png";
import { reactionItem } from "@/Components/newsfeed/reaction/ReactionItem";
import { useAppDispatch } from "@/Redux/hooks";
import { setPostId } from "@/Redux/Slices/unitlitySlice";

const FeedCard = ({ data }: { data: IPost }) => {
  const dispatch = useAppDispatch();
  dispatch(setPostId(data?._id as string));
  const [showComments, setShowComments] = useState(false);

  return (
    <section className="bg-white p-4 rounded-md">
      <div className="flex justify-between mt-2 ">
        <div className="flex gap-2 ">
          <Avatar className="border " size="large" icon={<UserOutlined />} />

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
        <div>
          <p className="font-light text-sm my-2">{data?.postText}</p>
        </div>
        <Link href={`/photo/id`}>
          <div className="w-full h-[300px] overflow-hidden rounded-md bg-[#f4f4f4] flex justify-center items-center ">
            <Image src={img} width={300} height={300} alt="user post img" />
          </div>
        </Link>
      </div>

      {/* Footer */}
      <div className="flex justify-between gap-2 py-2">
        <div className="hover:bg-[#f4f4f4] rounded-md w-full flex justify-center items-center my-2 gap-2 cursor-pointer p-1 ">
          <Dropdown menu={{ items: reactionItem }} placement="top" arrow>
            <div className="flex gap-2">
              <Image
                src={like}
                width={20}
                height={20}
                alt="like icon"
                className=" transion-all duration-300"
              />
              <h2>Like</h2>
            </div>
          </Dropdown>
        </div>
        <div className="hover:bg-[#f4f4f4] rounded-md w-full flex justify-center items-center my-2 gap-2 cursor-pointer p-1 ">
          <button
            onClick={() => setShowComments(true)}
            className="flex items-center gap-2"
          >
            {" "}
            <FaComment />
            <span className="font_raleway">Comment</span>
          </button>
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
