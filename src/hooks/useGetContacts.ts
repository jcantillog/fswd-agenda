import { useState, useEffect } from "react";
import { getAllContactsService } from "services";
import { ContactsResponseAPI } from "types/contacts";

export interface UseGetContactsReturn {
  contacts?: ContactsResponseAPI;
  error?: string;
  isLoading: boolean;
  setContacts: React.Dispatch<
    React.SetStateAction<ContactsResponseAPI | undefined>
  >;
}

/**
 * UHook to get the contacts
 * @returns {UseGetContactsReturn}
 */
const useGetContacts = (): UseGetContactsReturn => {
  const [contacts, setContacts] = useState<ContactsResponseAPI>();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllContactsService<ContactsResponseAPI>()
      .then(({ data }) => {
        if (data) {
          setContacts(data);
          setIsLoading(false);
        }
      })
      .catch(({ error }) => {
        setError(error);
        setIsLoading(false);
      });
    return () => {};
  }, []);

  return {
    contacts,
    error,
    isLoading,
    setContacts,
  };
};

export default useGetContacts;
