import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import MenuNav from "../navigations/MenuNav.jsx";
import { Row, Col } from "antd";
import RegisterForm from "../forms/RegisterForm";

const { Header, Content, Footer } = Layout;
//Home page
//cart page
//cagory page
//checkout page
//detail product page
//dash board page

const RegisterPage = () => {
  return (
    <Layout className="layout">
      <MenuNav />

      <Content style={{ paddingTop: "10px" }}>
        <Row style={{ paddingTop: "50px" }}>
          <Col xs={{ span: 4 }} lg={{ span: 4 }} />
          <Col xs={{ span: 14 }} lg={{ span: 14 }}>
            <RegisterForm />
          </Col>
          <Col xs={{ span: 6 }} lg={{ span: 6 }} />
        </Row>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default RegisterPage;
