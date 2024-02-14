"use client";
import React, { useState } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { IComment } from "@/types/newsfeed";
import { IName } from "@/types/auth";
import FullName from "@/service/name.service";
import CommentReply from "@/Components/PostCard/CommentReply";

const Comment = ({ comment }: { comment: IComment }) => {
  const [isReplyOpen, setReplyOpen] = useState(false);
  const fullName = FullName(comment?.user?.name as IName);
  const userProfilePicture =
    typeof comment?.user === "object" && "profilePicture" in comment.user
      ? comment.user.profilePicture
      : "";

  const handlePostReplyComment = () => {};
  return (
    <div className="p-2 flex gap-2   ">
      <Avatar
        className="border "
        src={userProfilePicture}
        size="large"
        icon={<UserOutlined />}
      />
      <div>
        <div>
          <div className="bg-gray-300 p-2 rounded-md mt-2   ">
            <h1 className="font-bold color_dark_1">{fullName}</h1>
            <p className="text-sm   color_dark_2">{comment?.comment}</p>
          </div>
        </div>
        <div className="flex justify-between items-center w-[600px]">
          <button className="text-[12px] my-1 cursor-pointer hover:underline color_dark_2">
            Like
          </button>
          <button
            onClick={() => setReplyOpen(true)}
            className="text-[12px] my-1 cursor-pointer hover:underline color_dark_2"
          >
            Reply
          </button>
        </div>
        {isReplyOpen && <CommentReply />}
      </div>
    </div>
  );
};

export default Comment;
