"use client";

import DesktopNavbar from "@/Components/navbar/DesktopNavbar";
import React from "react";

const AfterLoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DesktopNavbar />
      <div>{children}</div>
    </div>
  );
};

export default AfterLoginLayout;
