import React from "react";
import { Layout } from "antd";
import MenuNav from "../navigations/MenuNav.jsx";
import { Row, Col } from "antd";
import LoginForm from "../forms/LoginForm";

const { Content, Footer } = Layout;
//Home page
//cart page
//cagory page
//checkout page
//detail product page
//dash board page

const LoginPage = () => {
  return (
    <Layout className="layout">
      <MenuNav />

      <Content style={{ paddingTop: "10px" }}>
        <Row style={{ paddingTop: "50px" }}>
          <Col xs={{ span: 8 }} lg={{ span: 8 }} />
          <Col xs={{ span: 8 }} lg={{ span: 8 }}>
            <LoginForm />
          </Col>
          <Col xs={{ span: 8 }} lg={{ span: 8 }} />
        </Row>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default LoginPage;
