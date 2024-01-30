import type { MenuProps } from "antd";
import FriendsRequestLabel from "../NavbarLebel/FriendsRequestLabel";
export const friendRequestItems: MenuProps["items"] = [
  {
    key: "1",
    label: <FriendsRequestLabel />,
  },
];
