import Login from "@/Components/authentication/Login";
import React from "react";

const Authentication = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="lg:w-[500px] border p-10 shadow-lg shadow-violet-500 rounded-lg">
        <h2 className="text-center font-bold text-5xl mb-10 ">Login</h2>
        <Login />
      </div>
    </div>
  );
};

export default Authentication;
