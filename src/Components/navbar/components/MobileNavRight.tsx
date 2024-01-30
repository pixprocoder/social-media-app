"use client";
import { FaAlignRight, FaMagnifyingGlass } from "react-icons/fa6";
const MobileNavRight = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="  ">
        <span>
          <FaMagnifyingGlass className="text-2xl" />
        </span>
      </div>
      <div className="   ">
        <FaAlignRight className="text-4xl text-white bg-violet-500 p-1" />
      </div>
    </div>
  );
};

export default MobileNavRight;
