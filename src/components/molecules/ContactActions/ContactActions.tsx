import React from "react";
import { Flex } from "antd";
// components
import { Avatar } from "components/atoms";
// icons
import { PhoneFilled, VideoCameraFilled, MailFilled } from "@ant-design/icons";
// styles
import "./ContactActions.scss";

const ContactActions: React.FC = () => (
  <Flex className="contact-actions-container" align="center" gap={10}>
    <Avatar size="small">
      <PhoneFilled className="phone" />
    </Avatar>
    <Avatar size="small">
      <VideoCameraFilled className="other" />
    </Avatar>
    <Avatar size="small">
      <MailFilled className="other" />
    </Avatar>
  </Flex>
);

export default ContactActions;
