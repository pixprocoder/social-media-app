/**
 * Title: 'Fontend Authenticaion page design By Masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 26-01-2024
 *
 */

"use client";
import Login from "@/Components/authentication/Login";
import Register from "@/Components/authentication/Register";
import { useAppSelector } from "@/Redux/hooks";
import React from "react";

const Authentication = () => {
  // reduẋ
  const authState = useAppSelector((state) => state.authSlice.authState);

  return (
    <div className="flex justify-center items-center h-[100vh]">
<<<<<<< HEAD
      {/* <div>{authState ? <Login /> : <Register />}</div> */}
=======
      <div>{authState ? <Login /> : <Register />}</div>
>>>>>>> b5c033d50fb0df03bdd3b2aa6b742cc1b39df58d
    </div>
  );
};

export default Authentication;
