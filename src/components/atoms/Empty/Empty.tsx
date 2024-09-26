import React from "react";
import { Empty as ADEmpty } from "antd";
import Text from "../Text/Text";

const Empty: React.FC = () => (
  <ADEmpty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{ height: 60 }}
    description={<Text>There is no data to show</Text>}
  />
);

export default Empty;
