import React from "react";
// organisms
import { FavoritesContacts } from "components/organisms";
// templates
import { ContactsTemplate } from "templates";
import { Header } from "components/molecules";

const ContactsPage: React.FC = () => (
  <ContactsTemplate header={<Header />}>
    <FavoritesContacts withOwnContact />
  </ContactsTemplate>
);

export default ContactsPage;
