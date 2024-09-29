import React, { useContext } from "react";
import { Modal } from "antd";
// context
import { ContactContext } from "contexts/ContactsContext";
// hooks
import { useAddContact, useEditContact } from "hooks";
// molecules
import { ContactForm } from "components/molecules";
// types
import { ContactType } from "types/contacts";

const ContactModal: React.FC = () => {
  const { showContactModal, setShowContactModal, setContacts } =
    useContext(ContactContext);
  const {
    addNewContact,
    contextHolder: addContextHolder,
    isLoading: isLoadingForAdding,
  } = useAddContact();
  const {
    editContact,
    contextHolder: editContextHolder,
    isLoading: isLoadingForEditing,
  } = useEditContact();
  const isNewContact = typeof showContactModal === "boolean";

  const handleSubmit = (values: Partial<ContactType>) => {
    if (isNewContact) {
      addNewContact(values).then((newContact) => {
        setContacts((contacts) =>
          contacts && newContact
            ? {
                ...contacts,
                users: [newContact, ...contacts.users],
                total: contacts.total + 1,
              }
            : contacts
        );
        setShowContactModal(false);
      });
    } else {
      editContact({ ...values, id: showContactModal.id }).then(
        (editedContact) => {
          setContacts((contacts) => {
            if (!contacts || !editedContact) return contacts;
            const editedContactIndex = contacts.users.findIndex(
              (contact) => contact.id === editedContact.id
            );

            const newUsers = [...contacts.users];
            newUsers[editedContactIndex] = editedContact;
            return {
              ...contacts,
              users: newUsers,
            };
          });
          setShowContactModal(false);
        }
      );
    }
  };

  const handleCancel = () => {
    setShowContactModal(false);
  };

  return (
    <>
      {addContextHolder}
      {editContextHolder}
      <Modal
        loading={isLoadingForAdding || isLoadingForEditing}
        title={isNewContact ? "New contact" : "Edit contact"}
        open={showContactModal as boolean}
        onCancel={handleCancel}
        footer={false}
      >
        <ContactForm
          initialValues={
            isNewContact ? undefined : (showContactModal as ContactType)
          }
          onSubmit={handleSubmit}
        />
      </Modal>
    </>
  );
};

export default ContactModal;
