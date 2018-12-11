// import Col, Layout, Row component from antd
import { Col, Layout, Row } from 'antd';

// import React module from react for JSX
import React from 'react';

// import LoginForm component
import LoginForm from '../forms/LoginForm';

// import HeaderNav component
import { HeaderNav } from '../navigations/Header/HeaderNav.jsx';

// import TopTitle component
import { TopTitle } from '../navigations/Header/TopTitle.jsx';

// import themeLogo image
import themeLogo from '../navigations/theme-logo.jpg';

// create Content, Footer from Layout
const { Content, Footer } = Layout;

/**
 *
 *
 * @returns
 */
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

// export component
export default LoginPage;
