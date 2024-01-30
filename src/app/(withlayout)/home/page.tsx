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
  );
};

export default AfterLoginHomePage;
