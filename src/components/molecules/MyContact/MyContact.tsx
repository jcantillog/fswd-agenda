import React from "react";
import { Flex } from "antd";
// components
import { Avatar, Text, Title } from "components/atoms";
import { TitleVariants } from "components/atoms/Title/Title";
// icons
import { RightOutlined } from "@ant-design/icons";
// styles
import "./MyContact.scss";

interface MyContactProps {}

const MyContact: React.FC<MyContactProps> = ({}) => (
  <Flex
    className="my-contact-container"
    align="center"
    gap="middle"
    justify="space-between"
  >
    <Avatar>JC</Avatar>
    <Flex align="flex-start" justify="center" vertical>
      <Title variant={TitleVariants.MAIN}>Jonathan Cantillo</Title>
      <Flex className="contacts-section" align="center" justify="flex-start">
        <Text>1109 contacts</Text> . <Text type="success">34 active</Text>
      </Flex>
    </Flex>
    <RightOutlined className="right-icon" />
  </Flex>
);

export default MyContact;
