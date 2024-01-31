"use client";
<<<<<<< HEAD

import DesktopNavbar from "@/Components/navbar/DesktopNavbar";
=======
import Navbar from "@/Components/navbar/Navbar";
>>>>>>> b5c033d50fb0df03bdd3b2aa6b742cc1b39df58d
import React from "react";

const AfterLoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
<<<<<<< HEAD
      <DesktopNavbar />
=======
      <Navbar />
>>>>>>> b5c033d50fb0df03bdd3b2aa6b742cc1b39df58d
      <div>{children}</div>
    </>
  );
};

export default AfterLoginLayout;
