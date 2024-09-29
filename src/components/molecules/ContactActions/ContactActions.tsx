import React from "react";
import { Flex } from "antd";
// components
import { Avatar } from "components/atoms";
// icons
import {
  PhoneFilled,
  VideoCameraFilled,
  MailFilled,
  EditFilled,
  DeleteFilled,
} from "@ant-design/icons";
// styles
import "./ContactActions.scss";

interface ContactActionsProps {
  onEdit?: () => void;
  onDelete?: () => void;
}

const ContactActions: React.FC<ContactActionsProps> = ({
  onEdit,
  onDelete,
}) => (
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
    {onEdit && (
      <Avatar onClick={onEdit} size="small">
        <EditFilled className="edit" />
      </Avatar>
    )}
    {onDelete && (
      <Avatar onClick={onDelete} size="small">
        <DeleteFilled className="delete" />
      </Avatar>
    )}
  </Flex>
);

export default ContactActions;
