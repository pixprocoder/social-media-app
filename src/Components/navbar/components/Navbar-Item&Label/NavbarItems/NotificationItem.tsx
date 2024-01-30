import type { MenuProps } from "antd";
import FriendsRequestLabel from "../NavbarLebel/FriendsRequestLabel";
import NotificationLabel from "../NavbarLebel/NotificationLabel";
export const notificationItems: MenuProps["items"] = [
  {
    key: "1",
    label: <NotificationLabel />,
  },
];
