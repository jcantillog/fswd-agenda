import React from "react";
import { Flex } from "antd";
// components
import { Avatar } from "components/atoms";
// icons
import {
  PhoneFilled,
  VideoCameraFilled,
  MailFilled,
  DeleteFilled,
} from "@ant-design/icons";
// styles
import "./ContactActions.scss";

interface ContactActionsProps {
  onDelete?: () => void;
}

const ContactActions: React.FC<ContactActionsProps> = ({ onDelete }) => (
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
    {onDelete && (
      <Avatar onClick={onDelete} size="small">
        <DeleteFilled className="red" />
      </Avatar>
    )}
  </Flex>
);

export default ContactActions;
