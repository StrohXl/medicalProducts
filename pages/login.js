import React from "react";
import { Typography, Layout } from "antd";
import Link from "next/link";
const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const login = () => {
  return (
    <Layout>
      <header>
        <a href={"/"}>
          <Title level={3}>Medic Products</Title>
        </a>
      </header>
      <Content>
        <div className="content_form_login">
            <Title level={1}>
                Login
            </Title>

        </div>
      </Content>
      <Footer>footer</Footer>
    </Layout>
  );
};

export default login;
