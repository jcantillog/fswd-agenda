import React from "react";
import { List } from "antd";
// components
import { Avatar } from "components/atoms";
// molecules
import ContactActions from "../ContactActions/ContactActions";
// styles
import "./ContactsList.scss";
// types
import { ContactType } from "types/contacts";
// utils
import { getContactAvatarSrc } from "utils";

interface ContactsListProps {
  contacts: ContactType[];
}

const ContactsList: React.FC<ContactsListProps> = ({ contacts }) => {
  return (
    <List
      className="contact-list-container"
      itemLayout="horizontal"
      dataSource={contacts}
      renderItem={(contact, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={getContactAvatarSrc()}>Profile</Avatar>}
            title={`${contact.firstName} ${contact.lastName}`}
          />
          <ContactActions />
        </List.Item>
      )}
    />
  );
};

export default ContactsList;
