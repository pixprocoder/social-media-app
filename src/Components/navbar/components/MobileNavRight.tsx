"use client";
import { FaAlignRight, FaMagnifyingGlass } from "react-icons/fa6";
import { Drawer } from "antd";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { setOpenDrawer } from "@/Redux/Slices/navbarSlice";
const MobileNavRight = () => {
  // redux
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.navbarSlice.drawerOpen);

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

      <Drawer
        width={250}
        title="Basic Drawer"
        onClose={() => dispatch(setOpenDrawer(false))}
        open={isOpen}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default MobileNavRight;
