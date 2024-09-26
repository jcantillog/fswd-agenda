import React from "react";
import { Flex } from "antd";
// molecules
import { MyContact } from "components/molecules";
// styles
import "./FavoritesContacts.scss";

interface FavoritesContactsProps {
  withOwnContact: boolean;
}

const FavoritesContacts: React.FC<FavoritesContactsProps> = ({
  withOwnContact,
}) => (
  <Flex className="favorites-contacts-container" vertical>
    {withOwnContact && (
      <MyContact
        avatarProps={{
          letters: "JC",
          src: "https://avatars.githubusercontent.com/u/22524458?v=4",
        }}
        contactsActive={7}
        contactsTotal={10}
      />
    )}
  </Flex>
);

export default FavoritesContacts;
