"use client";
import { IoLocationSharp } from "react-icons/io5";
import FeedCard from "../home/shared/FeedCard";
import { useGetAllPostQuery } from "@/Redux/api/postApi";
import Loading from "@/app/loading";
import { IPost } from "@/types/newsfeed";

const ProfilePosts = () => {
  const { data: allPost, isLoading } = useGetAllPostQuery(null);
  return (
    <div className="flex gap-4">
      {/* Post */}
      <div className="flex-1  p-2 text-gray-200">
        <h1 className="font-bold bg-slate-900 rounded-md p-2 text-md">Posts</h1>
        <div className="flex flex-col mt-4  gap-4">
          {isLoading ? (
            <Loading />
          ) : (
            allPost?.map((post: IPost) => (
              <FeedCard key={post?._id} data={post} />
            ))
          )}
        </div>
      </div>
      {/* Intro */}
      <div className="flex-1 rounded-md  p-2 text-gray-200">
        <h1 className="font-bold text-md p-2  bg-slate-900">Intro</h1>
        <div className="bg-slate-900   p-2">
          <h1 className="text-sm my-2">
            👋🏻 I am software Developer with over years fo experiences 💻
          </h1>
          <hr className="my-2" />
          <p className="flex gap-2 items-center ">
            <IoLocationSharp />
            <span className="text-sm">Bangladesh</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePosts;
