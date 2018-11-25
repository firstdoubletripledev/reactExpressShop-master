import { Col, Layout, Row } from 'antd';
import React from 'react';

import RegisterForm from '../forms/RegisterForm';
import { HeaderNav } from '../navigations/Header/HeaderNav.jsx';
import { TopTitle } from '../navigations/Header/TopTitle.jsx';
import themeLogo from '../navigations/theme-logo.jpg';

// import MenuNav from '../navigations/MenuNav.jsx';
const { Content, Footer } = Layout;
//Home page
//cart page
//cagory page
//checkout page
//detail product page
//dash board page

const RegisterPage = () => {
  return (
    <Layout className="layout">
      <header id="header">
        <TopTitle />
        <HeaderNav themeLogo={themeLogo} />
      </header>
      <Content style={{ paddingTop: '10px' }}>
        <Row style={{ paddingTop: '50px' }}>
          <Col xs={{ span: 4 }} lg={{ span: 4 }} />
          <Col xs={{ span: 14 }} lg={{ span: 14 }}>
            <RegisterForm />
          </Col>
          <Col xs={{ span: 6 }} lg={{ span: 6 }} />
        </Row>
      </Content>
      <Footer style={{ background: 'none', textAlign: 'center' }}>
        @2018 made by T&G
      </Footer>{' '}
    </Layout>
  );
};

export default RegisterPage;
