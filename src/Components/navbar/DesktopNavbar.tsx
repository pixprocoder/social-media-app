/**
 * Title: 'DesktopNavbar navbar define by Masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 29-01-2024
 *
 */

"use client";
import React, { useState } from "react";
import LeftSideNavBar from "./components/LeftSideNavBar";
import RightSideNavbar from "./components/RightSideNavbar";

const DesktopNavbar = () => {
  return (
    <div
      className="flex justify-between gap-5 shadow-lg  px-10 
    py-3 dark:bg-dark "
    >
      <nav>
        <LeftSideNavBar />
      </nav>
      <nav>
        <RightSideNavbar />
      </nav>
    </div>
  );
};

export default DesktopNavbar;
