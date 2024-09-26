import React from "react";
import { Spin as ADSpin } from "antd";

interface SpinProps {
  isLoading: boolean;
}

const Spin: React.FC<SpinProps> = ({ isLoading }) => (
  <ADSpin spinning={isLoading} fullscreen />
);

export default Spin;
