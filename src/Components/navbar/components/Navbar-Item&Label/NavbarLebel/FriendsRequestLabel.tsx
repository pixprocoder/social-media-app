import FullName from "@/service/name.service";
import { IName } from "@/types/auth";
import Image from "next/image";
import React from "react";
import { BsPersonCheck, BsPersonDash } from "react-icons/bs";

const FriendsRequestLabel = () => {
  const profile = {
    name: {
      firstName: "Masum",
      lastName: "Rana",
    },
    profilePicture:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    mutualFriends: 5,
  };
  const fullName = FullName(profile.name as IName);

  return (
    <div className="lg:w-[300px]">
      <h2 className="font-semibold text-md text-gray-500 ">FRIEND REQUESTS</h2>
      <hr className="mt-5" />
      <div className=" h-[300px] overflow-auto   ">
        <div className="py-2 flex gap-3 items-center justify-center hover:bg-gray-200 rounded transition-opacity duration-300 border-b-2 ">
          <Image
            src={profile.profilePicture}
            alt="profile picture "
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <h2 className="font-bold text-md">{fullName}</h2>
            <p className="text-gray-500">
              {profile.mutualFriends} mutual{" "}
              {profile.mutualFriends >= 1 ? "friends" : "friend"}
            </p>
          </div>
          <div className="flex gap-3">
            <button className="p-2 bg-gray-300 rounded-lg hover:bg-violet-500 hover:text-white font-bold transition-colors duration-300 text-2xl">
              <BsPersonCheck />
            </button>
            <button className="p-2 bg-gray-300 rounded-lg hover:bg-violet-500 hover:text-white font-bold transition-colors duration-300 text-2xl">
              <BsPersonDash />
            </button>
          </div>
        </div>
      </div>

      <p className="mt-4 py-1  bg-gray-300 text-center rounded font-semibold text-gray-600 hover:bg-violet-500 hover:text-white transition-colors duration-300">
        VIEW ALL
      </p>
    </div>
  );
};

export default FriendsRequestLabel;
