import React, { createContext, useState } from "react";
// hooks
import { useGetContacts } from "hooks";
import { UseGetContactsReturn } from "hooks/useGetContacts";

export const ContactContext = createContext<
  UseGetContactsReturn & {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
  }
>({
  isLoading: false,
  contacts: undefined,
  error: undefined,
  searchTerm: "",
  setSearchTerm: () => {},
});

interface ContactProviderType {
  children: React.ReactNode;
}

export const ContactProvider: React.FC<ContactProviderType> = ({
  children,
}) => {
  const { contacts, error, isLoading } = useGetContacts();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ContactContext.Provider
      value={{ contacts, error, isLoading, searchTerm, setSearchTerm }}
    >
      {children}
    </ContactContext.Provider>
  );
};
