import React from "react";
import { Flex, Layout } from "antd";
// components
import { Text } from "components/atoms";
// styles
import "./ContactsTemplate.scss";

const { Content, Footer, Header } = Layout;

interface ContactsTemplateProps {
  children: React.ReactNode;
  header: React.ReactNode;
}

const ContactsTemplate: React.FC<ContactsTemplateProps> = ({
  children,
  header,
}) => (
  <Layout className="contacts-layout">
    <Header className="contacts-header">{header}</Header>
    <Content className="contacts-content">
      <Flex align="center" justify="center" vertical>
        {children}
      </Flex>
    </Content>
    <Footer className="contacts-footer">
      <Text>FSWD Bootcamp ©2024 Created by Jonathan Cantillo</Text>
    </Footer>
  </Layout>
);

export default ContactsTemplate;
