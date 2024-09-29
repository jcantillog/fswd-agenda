import axios, { AxiosResponse } from "axios";
// types
import { ContactType } from "types/contacts";

interface ApiResponse<T> {
  data?: T;
  error?: string;
}

/**
 * Add new contact.
 * @param body
 * @returns {Promise<ApiResponse<T>>}
 */
const addNewContact = <T>(
  body: Partial<ContactType>
): Promise<ApiResponse<T>> => {
  return axios
    .post("https://dummyjson.com/users/add", body)
    .then((response: AxiosResponse<T>) => ({
      data: response.data,
      error: undefined,
    }))
    .catch((error) => ({
      data: undefined,
      error: axios.isAxiosError(error) ? error.message : "Unknown Error",
    }));
};

export default addNewContact;
