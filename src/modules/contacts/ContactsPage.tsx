import React from "react";
// molecules
import { Header } from "components/molecules";
// organisms
import { FavoritesContacts, MyAgenda } from "components/organisms";
// templates
import { ContactsTemplate } from "templates";

const ContactsPage: React.FC = () => (
  <ContactsTemplate header={<Header />}>
    <FavoritesContacts withOwnContact />
    <MyAgenda />
  </ContactsTemplate>
);

export default ContactsPage;
