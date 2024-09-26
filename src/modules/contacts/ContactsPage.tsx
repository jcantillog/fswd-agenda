import React from "react";
// components
import { MyContact } from "components/molecules";
// templates
import { ContactsTemplate } from "templates";

const ContactsPage: React.FC = () => (
  <>
    <ContactsTemplate header={<span>Header</span>}>
      <MyContact
        avatarProps={{
          letters: "JC",
          src: "https://avatars.githubusercontent.com/u/22524458?v=4",
        }}
        contactsActive={7}
        contactsTotal={10}
      />
    </ContactsTemplate>
  </>
);

export default ContactsPage;
