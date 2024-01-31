"use client";
import { setOpenDrawer } from "@/Redux/Slices/navbarSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { Drawer } from "antd";

const NavbarProfileDrawer = ({ width }: { width: string }) => {
  // redux
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.navbarSlice.drawerOpen);

  return (
    <div>
      <Drawer
        width={width}
        
        title="Profile"
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

export default NavbarProfileDrawer;
