import React from "react";
import { Avatar as ADAvatar } from "antd";

interface AvatarProps {
  children: React.ReactNode;
}

const Avatar: React.FC<AvatarProps> = ({ children }) => (
  <ADAvatar>{children}</ADAvatar>
);

export default Avatar;
