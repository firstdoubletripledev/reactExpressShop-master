// import Col, Layout, Row component from antd
import { Col, Layout, Row } from 'antd';

// import React module from react for JSX
import React from 'react';

// import LoginForm component
import LoginForm from '../forms/LoginForm';

// import HeaderNav component
// import { HeaderNav } from '../navigations/Header/HeaderNav';

// // import TopTitle component
// import { TopTitle } from '../navigations/Header/TopTitle';

// // import themeLogo image
// import themeLogo from '../navigations/theme-logo.jpg';

// create Content, Footer from Layout
const { Content, Footer } = Layout;

/**
 *
 *
 * @returns
 */
const LoginPageAdmin = () => {
  return (
    <Layout className="layout login-admin">
      {/* <header id="header">
        <TopTitle />
        <HeaderNav themeLogo={themeLogo} />
      </header> */}

      <Content>
        <Row>
          <Col xs={{ span: 8 }} lg={{ span: 8 }} />
          <Col xs={{ span: 8 }} lg={{ span: 8 }}>
            <div className="login-admin-card">
              <LoginForm isAdmin={true} />
            </div>
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
export default LoginPageAdmin;
