// types
import { ContactType } from "types/contacts";
// utils
import { getRandomNumber } from "utils";

interface UseGetFavoritesParams {
  contacts: ContactType[];
}

interface UseGetFavoritesReturn {
  favorites: ContactType[];
}

/**
 * Hook to get the favorites contacts
 * @returns {UseGetFavoritesReturn}
 */
const useGetFavorites = ({
  contacts,
}: UseGetFavoritesParams): UseGetFavoritesReturn => {
  const favorites = [];
  for (let i = 1; i <= 3; i++) {
    const number = getRandomNumber(contacts.length - 1);
    favorites.push(contacts[number]);
  }
  return { favorites };
};

export default useGetFavorites;
