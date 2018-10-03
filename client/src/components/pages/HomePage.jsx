import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import MenuNav from "../navigations/MenuNav.jsx";
import CarouselMain from "../carousel.jsx";
import MultipleItemsHomePage from '../Items/MultipleItemsHomePage'
import { Row, Col } from 'antd';
import ListItemsHomePage from '../Items/listItemsHomePage'
var {Provider} = require('react-redux');
var store = require('../../reduxx/storeConfig');




const { Header, Content, Footer } = Layout;
//Home page 
//cart page
//cagory page 
//checkout page 
//detail product page 
//dash board page 



const HomePage = () => {
  
  return (
  <Provider store={store}>
  <Layout className="layout">

    <MenuNav  />
 

    <Content style={{ paddingTop: '10px' }}>

      <div style={{ background: '#fff', padding: '20px 80px 0px 80px', minHeight: 280 }}>
        <CarouselMain />
        <Row>
          <Col xs={24} lg={24} style={{ textAlign: 'center', padding: '15px', height: '60px', marginTop: 20, borderTop: "1px solid #e8e8e8", borderBottom: "1px solid #e8e8e8" }}><h2 style={{ color: 'rgba(0, 0, 0, 0.65)' }}>NEW PRODUCTS</h2></Col>

        </Row>
        <ListItemsHomePage/>


        <Row>
          <Col xs={24} lg={24} style={{ textAlign: 'center', padding: '15px', height: '60px', marginTop: 20, borderTop: "1px solid #e8e8e8", borderBottom: "1px solid #e8e8e8" }}><h2 style={{ color: 'rgba(0, 0, 0, 0.65)' }}>BEST SELLER</h2></Col>

        </Row>

        <MultipleItemsHomePage  />
       








      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
  </Provider>



);}

export default HomePage;