import React from "react";
import { Flex } from "antd";
// components
import { Avatar, Text, Title } from "components/atoms";
import { TitleVariants } from "components/atoms/Title/Title";
// icons
import { ContactsFilled, RightOutlined } from "@ant-design/icons";
// styles
import "./MyContact.scss";

interface MyContactProps {
  avatarProps?: {
    letters?: string;
    src?: string;
  };
  contactsActive: number;
  contactsTotal: number;
}

const MyContact: React.FC<MyContactProps> = ({
  avatarProps = {},
  contactsActive,
  contactsTotal,
}) => {
  const { letters: avatarLetters = "Avatar", src: avatarSrc = "" } =
    avatarProps;
  return (
    <Flex
      className="my-contact-container"
      align="center"
      gap="middle"
      justify="space-between"
    >
      <Flex align="center" gap="middle">
        <Avatar src={avatarSrc}>{avatarLetters}</Avatar>
        <Flex align="flex-start" justify="center" vertical>
          <Title variant={TitleVariants.SUBTITLE}>Jonathan Cantillo</Title>
          <Flex
            className="contacts-section"
            align="center"
            justify="flex-start"
            gap="small"
          >
            <Text>{contactsTotal} contacts</Text>
            <ContactsFilled className="contact-icon" />
            <Text type="success">{contactsActive} active</Text>
          </Flex>
        </Flex>
      </Flex>
      <RightOutlined className="right-icon" />
    </Flex>
  );
};

export default MyContact;
