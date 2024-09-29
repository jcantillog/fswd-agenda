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
const editContact = <T>(
  body: Partial<ContactType>
): Promise<ApiResponse<T>> => {
  return axios
    .put(`https://dummyjson.com/users/${body.id}`, body)
    .then((response: AxiosResponse<T>) => ({
      data: response.data,
      error: undefined,
    }))
    .catch((error) => ({
      data: undefined,
      error: axios.isAxiosError(error) ? error.message : "Unknown Error",
    }));
};

export default editContact;
