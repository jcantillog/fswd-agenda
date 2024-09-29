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
  onDelete: (id: number) => void;
}

const ContactsList: React.FC<ContactsListProps> = ({ contacts, onDelete }) => {
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
            description={contact.phone}
          />
          <ContactActions onDelete={() => onDelete(contact.id)} />
        </List.Item>
      )}
    />
  );
};

export default ContactsList;
