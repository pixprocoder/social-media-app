<<<<<<< HEAD
import LeftSideBar from "@/Components/home/LeftSideBar";
import MainFeed from "@/Components/home/MainFeed";
import RightSideBar from "@/Components/home/RightSideBar";
import "../../../Components/home/home.modules.css";

const AfterLoginHomePage = () => {
  return (
    <section className="home_container ">
      <div className="feed_container ">
        <LeftSideBar />
        <MainFeed />
        <RightSideBar />
      </div>
    </section>
=======
import React from "react";

const AfterLoginHomePage = () => {
  return (
    <div className="bg-primary-color">
      {" "}
      <h2>After Login Home Page</h2>
    </div>
>>>>>>> b5c033d50fb0df03bdd3b2aa6b742cc1b39df58d
  );
};

export default AfterLoginHomePage;
