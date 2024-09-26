import React from "react";
import { Flex } from "antd";
// components
import { Empty, Spin } from "components/atoms";
// hooks
import { useGetContacts } from "hooks";
// molecules
import { MyContact } from "components/molecules";
// styles
import "./FavoritesContacts.scss";

interface FavoritesContactsProps {
  withOwnContact: boolean;
}

const FavoritesContacts: React.FC<FavoritesContactsProps> = ({
  withOwnContact,
}) => {
  const { contacts, error, isLoading } = useGetContacts();

  return (
    <>
      <Spin isLoading={isLoading} />
      {contacts && !error ? (
        <Flex className="favorites-contacts-container" vertical>
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
        </Flex>
      ) : (
        !isLoading && <Empty />
      )}
    </>
  );
};

export default FavoritesContacts;
