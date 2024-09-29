import React, { useContext } from "react";
import { Modal } from "antd";
// context
import { ContactContext } from "contexts/ContactsContext";
// molecules
import { ContactForm } from "components/molecules";
import { ContactType } from "types/contacts";

const ContactModal: React.FC = () => {
  const { showContactModal, setShowContactModal } = useContext(ContactContext);
  const isNewContact = showContactModal instanceof Boolean;

  const handleSubmit = () => {
    setShowContactModal(false);
  };

  const handleCancel = () => {
    setShowContactModal(false);
  };

  return (
    <Modal
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
  );
};

export default ContactModal;
