import React from "react";
import { Flex } from "antd";
// components
import { Avatar, Text, Title } from "components/atoms";
import { TitleVariants } from "components/atoms/Title/Title";
// icons
import { ContactsFilled, RightOutlined } from "@ant-design/icons";
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
    <Flex align="center" gap="middle">
      <Avatar src="https://avatars.githubusercontent.com/u/22524458?v=4">
        JC
      </Avatar>
      <Flex align="flex-start" justify="center" vertical>
        <Title variant={TitleVariants.SUBTITLE}>Jonathan Cantillo</Title>
        <Flex
          className="contacts-section"
          align="center"
          justify="flex-start"
          gap="small"
        >
          <Text>1109 contacts</Text>
          <ContactsFilled className="contact-icon" />
          <Text type="success">34 active</Text>
        </Flex>
      </Flex>
    </Flex>
    <RightOutlined className="right-icon" />
  </Flex>
);

export default MyContact;
