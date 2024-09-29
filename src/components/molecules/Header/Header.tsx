import React from "react";
import { Flex } from "antd";
// components
import { Logo, Search } from "components/atoms";
import { ADSearchProps } from "components/atoms/Search/Search";
// icons
import { PlusCircleFilled } from "@ant-design/icons";
// styles
import "./Header.scss";

interface MyContactProps {
  onSearch?: ADSearchProps["onSearch"];
  onAdd?: () => void;
}

const Header: React.FC<MyContactProps> = ({
  onSearch = () => {},
  onAdd = () => {},
}) => {
  return (
    <Flex
      className="header-container"
      align="center"
      gap="middle"
      justify="space-between"
    >
      <Logo />
      <Search isLoading={false} onSearch={onSearch} />
      <PlusCircleFilled className="right-icon" onClick={onAdd} />
    </Flex>
  );
};

export default Header;
