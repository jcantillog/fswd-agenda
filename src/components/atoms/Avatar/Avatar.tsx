import React from "react";
import { Avatar as ADAvatar, AvatarProps as ADAvatarProps } from "antd";
// styles
import "./Avatar.scss";

interface AvatarProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: ADAvatarProps["size"];
  src?: string;
}

const Avatar: React.FC<AvatarProps> = ({ children, onClick, size, src }) => (
  <ADAvatar
    className="avatar-base-element"
    onClick={onClick}
    size={size || "large"}
    src={src}
  >
    {children}
  </ADAvatar>
);

export default Avatar;
