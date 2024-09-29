import React, { useContext } from "react";
// components
import { Empty, Spin } from "components/atoms";
// context
import { ContactContext } from "contexts/ContactsContext";
// molecules
import { ContactsList } from "components/molecules";
// styles
import "./MyAgenda.scss";

const MyAgenda: React.FC = () => {
  const { contacts, error, isLoading } = useContext(ContactContext);

  return (
    <>
      <Spin isLoading={isLoading} />
      {contacts && !error ? (
        <ContactsList contacts={contacts.users} />
      ) : (
        !isLoading && <Empty />
      )}
    </>
  );
};

export default MyAgenda;
