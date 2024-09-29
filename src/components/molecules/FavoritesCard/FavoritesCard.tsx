import React, { useMemo } from "react";
import { Card, Flex } from "antd";
// components
import { Avatar, Text } from "components/atoms";
// molecules
import ContactActions from "../ContactActions/ContactActions";
// utils
import { getContactAvatarSrc } from "utils";
// styles
import "./FavoritesCard.scss";
// types
import { ContactType } from "types/contacts";

interface FavoritesCardProps {
  contact: ContactType;
}

const FavoritesCard: React.FC<FavoritesCardProps> = ({ contact }) => {
  const avatarSrc = useMemo(() => getContactAvatarSrc(), []);
  return (
    <Card className="favorites-card-container">
      <Flex align="center" gap={10} vertical>
        <Avatar src={avatarSrc}>Contact</Avatar>
        <Text>
          {contact.firstName} {contact.lastName}
        </Text>
        <ContactActions />
      </Flex>
    </Card>
  );
};

export default FavoritesCard;
