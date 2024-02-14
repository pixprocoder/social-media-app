"use client";

import { useSubmitComment_replyMutation } from "@/Redux/api/replyCommentApi";
import { FormEvent, useState } from "react";
import { BsXCircle, BsEmojiSmile, BsCamera, BsSend } from "react-icons/bs";
const CommentReply = () => {
  const [isCollapse, setCollapse] = useState(false);

  // redux
  const [seubmitReply] = useSubmitComment_replyMutation();

  const handlePostReplyComment = (e: FormEvent<HTMLFormElement>) => {};
  return (
    <div className="w-full mt-4 bg-gray-200 rounded-md  transition-all duration-300 ">
      <form
        onClick={() => setCollapse(true)}
        onSubmit={handlePostReplyComment}
        className={`${!isCollapse && "flex justify-between items-center p-2"}`}
      >
        <input
          required
          name="commentbox"
          className="outline-none w-full p-2 text-sm bg-gray-200 rounded-md "
          placeholder="Write your reply..."
        />

        <div
          className={`flex w-full justify-between  items-center gap-2 p-2 ${!isCollapse && "hidden"}`}
        >
          <div className="flex gap-2">
            <button>
              <BsEmojiSmile className="text-xl" />
            </button>
            <button>
              <BsCamera className="text-xl" />
            </button>
          </div>

          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-violet-500  font-semibold text-white hover:bg-violet-800"
          >
            <BsSend />
          </button>
        </div>

        <button
          type="submit"
          className={`px-4 py-2 rounded-lg bg-violet-500  font-semibold text-white hover:bg-violet-800 ${isCollapse && "hidden"}`}
        >
          <BsSend />
        </button>
      </form>
    </div>
  );
};

export default CommentReply;
