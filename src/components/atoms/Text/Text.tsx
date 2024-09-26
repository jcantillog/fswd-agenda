import React from "react";
import { Typography, GetProps } from "antd";

const { Text: ADText } = Typography;

interface TextProps {
  children: React.ReactNode;
}

const Text: React.FC<GetProps<typeof ADText> & TextProps> = ({
  children,
  ...rest
}) => <ADText {...rest}>{children}</ADText>;

export default Text;
