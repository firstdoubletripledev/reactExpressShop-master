import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import MenuNav from "../navigations/MenuNav.jsx";
import { Row, Col } from 'antd';
import LoginForm from '../forms/LoginForm'

var {Provider} = require('react-redux');
var store = require('../../reduxx/storeConfig');



const { Header, Content, Footer } = Layout;
//Home page 
//cart page
//cagory page 
//checkout page 
//detail product page 
//dash board page 



const LoginPage = () => {
  
  return (
    <Provider store={store}>
  <Layout className="layout">

    <MenuNav  />
   
    

    <Content style={{ paddingTop: '10px' }}>
    <Row style={{paddingTop:'50px'}}>
    <Col xs={{ span: 8}} lg={{ span: 8}}></Col>
    <Col xs={{ span: 8}} lg={{ span: 8 }}><LoginForm /></Col>
    <Col xs={{ span: 8 }} lg={{ span: 8}}></Col>
  </Row>
      
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
  </Provider>



);}

export default LoginPage;