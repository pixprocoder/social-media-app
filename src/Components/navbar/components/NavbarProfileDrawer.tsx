"use client";
import { setOpenDrawer } from "@/Redux/Slices/navbarSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { Drawer } from "antd";

const NavbarProfileDrawer = () => {
  // redux
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.navbarSlice.drawerOpen);
  console.log(isOpen);
  return (
    <Drawer
      title="profile Drawer"
      onClose={() => dispatch(setOpenDrawer(false))}
      open={isOpen}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

export default NavbarProfileDrawer;
