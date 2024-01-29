"use client";

import DesktopNavbar from "@/Components/navbar/DesktopNavbar";
import React from "react";

const AfterLoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DesktopNavbar />
      <div>{children}</div>
    </>
  );
};

export default AfterLoginLayout;
