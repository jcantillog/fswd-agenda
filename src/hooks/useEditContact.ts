import { message } from "antd";
import { useState } from "react";
import { editContactService } from "services";
// types
import { ContactType } from "types/contacts";

export interface UseAddContactReturn {
  editContact: (
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
const useEditContact = (): UseAddContactReturn => {
  const [contact, setContact] = useState<ContactType>();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const onSuccessMessage = () => {
    messageApi.open({
      type: "success",
      content: "Contact edited!",
    });
  };

  const editContact = (body: Partial<ContactType>) => {
    setIsLoading(true);
    return editContactService<ContactType>(body)
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
    editContact,
    contact,
    contextHolder,
    error,
    isLoading,
  };
};

export default useEditContact;
