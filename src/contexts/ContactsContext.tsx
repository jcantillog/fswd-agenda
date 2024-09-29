import React, { createContext } from "react";
// hooks
import { useGetContacts } from "hooks";
import { UseGetContactsReturn } from "hooks/useGetContacts";

export const ContactContext = createContext<UseGetContactsReturn>({
  isLoading: false,
  contacts: undefined,
  error: undefined,
});

interface ContactProviderType {
  children: React.ReactNode;
}

export const ContactProvider: React.FC<ContactProviderType> = ({
  children,
}) => {
  const { contacts, error, isLoading } = useGetContacts();

  return (
    <ContactContext.Provider value={{ contacts, error, isLoading }}>
      {children}
    </ContactContext.Provider>
  );
};
