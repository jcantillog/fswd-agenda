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
  const { contacts, error, isLoading, searchTerm } = useContext(ContactContext);

  return (
    <>
      <Spin isLoading={isLoading} />
      {contacts && !error ? (
        <ContactsList
          contacts={
            searchTerm
              ? contacts.users.filter(
                  (user) =>
                    user.firstName.includes(searchTerm) ||
                    user.lastName.includes(searchTerm) ||
                    user.maidenName.includes(searchTerm)
                )
              : contacts.users
          }
        />
      ) : (
        !isLoading && <Empty />
      )}
    </>
  );
};

export default MyAgenda;
