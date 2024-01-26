"use client";
import Image from "next/image";
import React from "react";
import welcomingpic from "/public/welcoming/joining-us.png";

const WelComingPage = () => {
  return (
    <div className="bg-violet-300 h-[100vh] flex justify-center items-center lg:gap-28 flex-wrap p-10">
      <div>
        <Image
          src={welcomingpic}
          width={600}
          height={500}
          alt="Picture of Welcoming"
        />
      </div>
      <div>
        <span className="lg:text-8xl text-5xl font-bold ">
          <h2 className="text-white ">WelCome To </h2>
          <h2 className="text-violet-500">CircleUp!</h2>
        </span>
        <p className="font-semibold text-xl my-2 lg:my-4">
          Connect with Friends,Chat with free!{" "}
        </p>
        <button className="font-bold text-xl bg-violet-500 hover:bg-violet-800 transition-colors duration-300 px-6 p-1 text-white rounded">
          Join Us
        </button>
      </div>
    </div>
  );
};

export default WelComingPage;
