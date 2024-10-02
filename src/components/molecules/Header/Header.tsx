import React, { useContext } from "react";
import { Flex, Switch } from "antd";
// contexts
import { GlobalContext } from "contexts/GlobalContext";
// components
import { Logo, Search } from "components/atoms";
import { ADSearchProps } from "components/atoms/Search/Search";
// icons
import { PlusCircleFilled, SunFilled, MoonFilled } from "@ant-design/icons";
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
  const { darkMode, setDarkMode } = useContext(GlobalContext);
  return (
    <Flex
      className="header-container"
      align="center"
      gap="middle"
      justify="space-between"
    >
      <Logo />
      <Search isLoading={false} onSearch={onSearch} />
      <PlusCircleFilled className="add-icon" onClick={onAdd} />
      <Switch
        checkedChildren={<MoonFilled className="dark-mode-icon" />}
        onChange={() => setDarkMode(!darkMode)}
        unCheckedChildren={<SunFilled className="light-mode-icon" />}
      />
    </Flex>
  );
};

export default Header;
