// types
import { useEffect, useState } from "react";
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
  const [favorites, setFavorites] = useState<ContactType[]>([]);

  useEffect(() => {
    if (contacts.length && !favorites.length) {
      const theFavorites = [];
      for (let i = 1; i <= 3; i++) {
        const number = getRandomNumber(contacts.length - 1);
        theFavorites.push(contacts[number]);
      }
      setFavorites(theFavorites);
    }
  }, [contacts.length]);

  return { favorites };
};

export default useGetFavorites;
