import React, { useContext } from "react";
import { Divider } from "antd";
// context
import { ContactContext } from "contexts/ContactsContext";
// molecules
import { Header } from "components/molecules";
// organisms
import { FavoritesContacts, MyAgenda } from "components/organisms";
// templates
import { ContactsTemplate } from "templates";

const ContactsPage: React.FC = () => {
  const { setSearchTerm } = useContext(ContactContext);
  return (
    <ContactsTemplate
      header={<Header onSearch={(value) => setSearchTerm(value)} />}
    >
      <FavoritesContacts withOwnContact />
      <Divider />
      <MyAgenda />
    </ContactsTemplate>
  );
};

export default ContactsPage;
