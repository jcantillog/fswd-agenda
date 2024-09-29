import React, { useContext } from "react";
import { Divider } from "antd";
// context
import { ContactContext } from "contexts/ContactsContext";
// molecules
import { Header } from "components/molecules";
// organisms
import {
  ContactModal,
  FavoritesContacts,
  MyAgenda,
} from "components/organisms";
// templates
import { ContactsTemplate } from "templates";

const ContactsPage: React.FC = () => {
  const { setSearchTerm, showContactModal, setShowContactModal } =
    useContext(ContactContext);
  return (
    <ContactsTemplate
      header={
        <Header
          onSearch={(value) => setSearchTerm(value)}
          onAdd={() => setShowContactModal(!showContactModal)}
        />
      }
    >
      <FavoritesContacts withOwnContact />
      <Divider />
      <MyAgenda />
      <ContactModal />
    </ContactsTemplate>
  );
};

export default ContactsPage;
