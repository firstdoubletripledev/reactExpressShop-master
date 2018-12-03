import { Col, Layout, Row } from 'antd';
import React from 'react';

import LoginForm from '../forms/LoginForm';
import { HeaderNav } from '../navigations/Header/HeaderNav.jsx';
import { TopTitle } from '../navigations/Header/TopTitle.jsx';
import themeLogo from '../navigations/theme-logo.jpg';

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
      <header id="header">
        <TopTitle />
        <HeaderNav themeLogo={themeLogo} />
      </header>

      <Content style={{ paddingTop: '10px' }}>
        <Row style={{ paddingTop: '50px' }}>
          <Col xs={{ span: 8 }} lg={{ span: 8 }} />
          <Col xs={{ span: 8 }} lg={{ span: 8 }}>
            <LoginForm />
          </Col>
          <Col xs={{ span: 8 }} lg={{ span: 8 }} />
        </Row>
      </Content>

      <Footer style={{ background: 'none', textAlign: 'center' }}>
        @2018 made by T&G
      </Footer>
    </Layout>
  );
};

export default LoginPage;
