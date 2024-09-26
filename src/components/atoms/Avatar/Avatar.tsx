import React from "react";
import { Avatar as ADAvatar } from "antd";

interface AvatarProps {
  children: React.ReactNode;
  src?: string;
}

const Avatar: React.FC<AvatarProps> = ({ children, src }) => (
  <ADAvatar
    /* style={{ borderColor: "green" }} */ size="large"
    src={src || "https://api.dicebear.com/7.x/miniavs/svg?seed=1"}
  >
    {children}
  </ADAvatar>
);

export default Avatar;
