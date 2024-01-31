"use client";
import { FaAlignRight, FaMagnifyingGlass } from "react-icons/fa6";
import { Drawer } from "antd";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { setOpenDrawer } from "@/Redux/Slices/navbarSlice";
import NavbarProfileDrawer from "./NavbarProfileDrawer";
const MobileNavRight = () => {
  // redux
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center gap-3">
      <div>
        <span>
          <FaMagnifyingGlass className="text-2xl" />
        </span>
      </div>
      <div>
        <button onClick={() => dispatch(setOpenDrawer(true))}>
          <FaAlignRight className="text-3xl  " />
        </button>
      </div>
    </div>
  );
};

export default MobileNavRight;
