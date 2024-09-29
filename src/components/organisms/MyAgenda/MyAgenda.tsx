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
  const {
    contacts,
    error,
    isLoading,
    searchTerm,
    setShowContactModal,
    setContacts,
  } = useContext(ContactContext);

  const handleDelete = (id: number) => {
    setContacts((contacts) => {
      if (!contacts) return contacts;
      const editedContactIndex = contacts.users.findIndex(
        (contact) => contact.id === id
      );

      const newUsers = [...contacts.users];
      newUsers.splice(editedContactIndex, 1);
      return {
        ...contacts,
        users: newUsers,
        limit: contacts.limit - 1,
        total: contacts.total - 1,
      };
    });
  };

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
          onEdit={(contact) => setShowContactModal(contact)}
          onDelete={handleDelete}
        />
      ) : (
        !isLoading && <Empty />
      )}
    </>
  );
};

export default MyAgenda;
