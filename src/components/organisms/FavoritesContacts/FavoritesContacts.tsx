import React, { useContext } from "react";
import { Flex } from "antd";
// components
import { Empty, Spin } from "components/atoms";
// context
import { ContactContext } from "contexts/ContactsContext";
// hooks
import { useGetFavorites } from "hooks";
// molecules
import { FavoritesCard, MyContact } from "components/molecules";
// styles
import "./FavoritesContacts.scss";

interface FavoritesContactsProps {
  withOwnContact: boolean;
}

const FavoritesContacts: React.FC<FavoritesContactsProps> = ({
  withOwnContact,
}) => {
  const { contacts, error, isLoading } = useContext(ContactContext);
  const { favorites } = useGetFavorites({ contacts: contacts?.users ?? [] });

  return (
    <>
      <Spin isLoading={isLoading} />
      {contacts && !error ? (
        <Flex
          className="favorites-contacts-container"
          gap={20}
          align="center"
          vertical
        >
          {withOwnContact && (
            <MyContact
              avatarProps={{
                letters: "JC",
                src: "https://avatars.githubusercontent.com/u/22524458?v=4",
              }}
              contactsActive={contacts.limit}
              contactsTotal={contacts.total}
            />
          )}
          <Flex align="center" gap={10}>
            {favorites.map((favorite) => (
              <FavoritesCard
                key={`${favorite.id}-favorite`}
                contact={favorite}
              />
            ))}
          </Flex>
        </Flex>
      ) : (
        !isLoading && <Empty />
      )}
    </>
  );
};

export default FavoritesContacts;
