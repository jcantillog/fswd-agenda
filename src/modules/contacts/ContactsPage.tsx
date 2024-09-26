import React from "react";
// organisms
import { FavoritesContacts } from "components/organisms";
// templates
import { ContactsTemplate } from "templates";

const ContactsPage: React.FC = () => (
  <ContactsTemplate header={<span>Header</span>}>
    <FavoritesContacts withOwnContact />
  </ContactsTemplate>
);

export default ContactsPage;
