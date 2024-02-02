import React, { useState } from "react";
import { BsXCircle, BsEmojiSmile, BsCamera } from "react-icons/bs";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import EmojiPicker from "emoji-picker-react";
import {
  useGetAllCommentQuery,
  useSubmitCommentMutation,
} from "@/Redux/api/commentApi";
import { IComment } from "@/types/newsfeed";
import Comment from "./Comment";



const PostCommentBox = ({ setShowComments, postId }: any) => {
  // const [comment, setComment] = useState("");
  // const [showEmojiPicker, setShowEmojiPicker] = useState(true);

  // const handleEmojiClick = (emoji) => {
  //   console.log(emoji);
  //   setComment((prevComment) => prevComment + emoji);
  // };

  // const handleToggleEmojiPicker = () => {
  //   // setShowEmojiPicker((prev) => !prev);

  // };

  const [submitComment] = useSubmitCommentMutation();
  const { data: comments } = useGetAllCommentQuery(postId);
  const handlePostComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.commentbox.value as string;
    const commentData = {
      post: postId,
      comment: comment,
    };

    const res = await submitComment(commentData);
    console.log(res);

    form.reset();
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center border-b-2 border-gray-300 p-3">
        <h3>Comments ({comments?.length})</h3>
        <button onClick={() => setShowComments(false)}>
          <BsXCircle className="text-xl" />
        </button>
      </div>
      <div className=" w-full">
        {comments?.map((comment: IComment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </div>
      <div className="mt-5 border-2 border-gray-300 rounded-lg shadow-lg">
        <form onSubmit={handlePostComment}>
          <textarea
            required
            name="commentbox"
            className="outline-none w-full h-[100px] p-5 bg-gray-200"
            placeholder="Write a comment..."
          />

          <div className="flex justify-between px-2">
            <Avatar
              className="border-2"
              size="large"
              src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
              icon={<UserOutlined />}
            />
            {/* {showEmojiPicker && <EmojiPicker />} */}
            <div className="flex  items-center gap-2 my-2">
              <button>
                <BsEmojiSmile className="text-xl" />
              </button>
              <button>
                <BsCamera className="text-xl" />
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-violet-500  font-semibold text-white hover:bg-violet-800"
              >
                Post Comment
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostCommentBox;
