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
  onEdit: (contact: ContactType) => void;
  onDelete: (id: number) => void;
}

const ContactsList: React.FC<ContactsListProps> = ({
  contacts,
  onEdit,
  onDelete,
}) => {
  return (
    <List
      className="contact-list-container"
      itemLayout="horizontal"
      dataSource={contacts}
      renderItem={(contact, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar src={getContactAvatarSrc(index + 1)}>Profile</Avatar>
            }
            title={`${contact.firstName} ${contact.lastName}`}
            description={contact.phone}
          />
          <ContactActions
            onEdit={() => onEdit(contact)}
            onDelete={() => onDelete(contact.id)}
          />
        </List.Item>
      )}
    />
  );
};

export default ContactsList;
