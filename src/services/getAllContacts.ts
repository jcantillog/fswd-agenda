import axios, { AxiosResponse } from "axios";

interface ApiResponse<T> {
  data?: T;
  error?: string;
}

/**
 * Get all users. By default you will get 30 items, use Limit to change the returned value.
 * @param limit
 * @returns {Promise<ApiResponse<T>>}
 */
const getAllContacts = <T>(limit: number = 30): Promise<ApiResponse<T>> => {
  return axios
    .get(`https://dummyjson.com/users?limit=${limit}`)
    .then((response: AxiosResponse<T>) => ({
      data: response.data,
      error: undefined,
    }))
    .catch((error) => ({
      data: undefined,
      error: axios.isAxiosError(error) ? error.message : "Unknown Error",
    }));
};

export default getAllContacts;
