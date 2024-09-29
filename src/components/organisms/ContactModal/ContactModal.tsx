import React, { useContext } from "react";
import { Modal } from "antd";
// context
import { ContactContext } from "contexts/ContactsContext";
// hooks
import useAddContact from "hooks/useAddContact";
// molecules
import { ContactForm } from "components/molecules";
// types
import { ContactType } from "types/contacts";

const ContactModal: React.FC = () => {
  const { showContactModal, setShowContactModal, setContacts } =
    useContext(ContactContext);
  const { addNewContact, contextHolder, isLoading } = useAddContact();
  const isNewContact = showContactModal instanceof Boolean;

  const handleSubmit = (values: Partial<ContactType>) => {
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
  };

  const handleCancel = () => {
    setShowContactModal(false);
  };

  return (
    <>
      {contextHolder}
      <Modal
        loading={isLoading}
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
