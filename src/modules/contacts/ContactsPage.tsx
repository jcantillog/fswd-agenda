import React from "react";
// components
import { MyContact } from "components/molecules";
// templates
import { ContactsTemplate } from "templates";

const ContactsPage: React.FC = () => (
  <>
    <ContactsTemplate header={<span>Header</span>}>
      <MyContact />
    </ContactsTemplate>
  </>
);

export default ContactsPage;
