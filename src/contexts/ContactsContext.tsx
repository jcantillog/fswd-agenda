import React, { createContext, useState } from "react";
// hooks
import { useGetContacts } from "hooks";
import { UseGetContactsReturn } from "hooks/useGetContacts";
// types
import { ContactType } from "types/contacts";

export const ContactContext = createContext<
  UseGetContactsReturn & {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    showContactModal: ContactType | boolean;
    setShowContactModal: (isOpen: ContactType | boolean) => void;
  }
>({
  isLoading: false,
  contacts: undefined,
  error: undefined,
  setContacts: () => [],
  searchTerm: "",
  setSearchTerm: () => {},
  showContactModal: false,
  setShowContactModal: () => {},
});

interface ContactProviderType {
  children: React.ReactNode;
}

export const ContactProvider: React.FC<ContactProviderType> = ({
  children,
}) => {
  const { contacts, error, isLoading, setContacts } = useGetContacts();
  const [searchTerm, setSearchTerm] = useState("");
  const [showContactModal, setShowContactModal] = useState<
    ContactType | boolean
  >(false);

  return (
    <ContactContext.Provider
      value={{
        contacts,
        error,
        isLoading,
        searchTerm,
        setContacts,
        setSearchTerm,
        showContactModal,
        setShowContactModal,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
