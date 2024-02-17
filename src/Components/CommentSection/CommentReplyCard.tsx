import FullName from "@/service/name.service";
import { IName } from "@/types/auth";
import { IComment_reply } from "@/types/newsfeed";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";

const CommentReplyCard = ({
  comment_reply,
}: {
  comment_reply: IComment_reply;
}) => {
  const fullName = FullName(comment_reply?.user?.name as IName);
  const userProfilePicture =
    typeof comment_reply?.user === "object" &&
    "profilePicture" in comment_reply.user
      ? comment_reply.user.profilePicture
      : "";

  return (
    <div className="flex  justify-start gap-2 w-full">
      {/* user avatar  */}
      <Avatar
        className="border "
        src={userProfilePicture}
        size="large"
        icon={<UserOutlined />}
      />
      <div>
        {/* comment  */}
        <div className="bg-gray-300 p-2 rounded-md mt-2   ">
          <h1 className="font-bold color_dark_1">{fullName}</h1>
          <p className="text-sm   color_dark_2">
            {comment_reply?.comment_reply}
          </p>
        </div>

        {/* <div className="flex justify-between items-center  ">
          <button className="text-[12px] my-1 cursor-pointer hover:underline color_dark_2">
            Like
          </button>
          <button
            //   onClick={() => setReplyOpen(true)}
            className="text-[12px] my-1 cursor-pointer hover:underline color_dark_2"
          >
            Reply
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default CommentReplyCard;
