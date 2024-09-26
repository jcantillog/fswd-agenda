import React from "react";
import { Typography } from "antd";
// styles
import "./Title.scss";

const { Title: ADTitle } = Typography;

export enum TitleVariants {
  MAIN = 1,
  SUBTITLE = 2,
}

interface TitleProps {
  children: React.ReactNode;
  variant: TitleVariants;
}

const Title: React.FC<TitleProps> = ({ children, variant }) => (
  <ADTitle level={variant}>{children}</ADTitle>
);

export default Title;
