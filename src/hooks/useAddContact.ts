import { message } from "antd";
import { useState } from "react";
import { addNewContactService } from "services";
// types
import { ContactType } from "types/contacts";

export interface UseAddContactReturn {
  addNewContact: (
    body: Partial<ContactType>
  ) => Promise<void | ContactType | undefined>;
  contact?: ContactType;
  contextHolder: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >;
  error?: string;
  isLoading: boolean;
}

/**
 * Hook to get the contacts
 * @returns {UseAddContactReturn}
 */
const useAddContact = (): UseAddContactReturn => {
  const [contact, setContact] = useState<ContactType>();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const onSuccessMessage = () => {
    messageApi.open({
      type: "success",
      content: "New contact added!",
    });
  };

  const addNewContact = (body: Partial<ContactType>) => {
    setIsLoading(true);
    return addNewContactService<ContactType>(body)
      .then(({ data }) => {
        if (data) {
          onSuccessMessage();
          setContact(data);
          setIsLoading(false);
          return data;
        }
      })
      .catch(({ error }) => {
        setError(error);
        setIsLoading(false);
        return error;
      });
  };

  return {
    addNewContact,
    contact,
    contextHolder,
    error,
    isLoading,
  };
};

export default useAddContact;
