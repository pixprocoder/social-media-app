import FeedCard from "./FeedCard";
import FeedPostCard from "./FeedPostCard";

const MainFeed = () => {
  return (
    <section className="">
      <div className="  min-h-[90vh]  ">
        <div className="bg-white  rounded-md">
          <FeedPostCard />
        </div>
        <div className="bg-white px-6 pt-2 mt-6 rounded-md">
          <FeedCard />
        </div>
      </div>
    </section>
  );
};

export default MainFeed;
