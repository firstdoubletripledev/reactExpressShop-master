import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import MenuNav from "../navigations/MenuNav.jsx";
import CarouselMain from "../carousel.jsx";
import MultipleItems from '../slickItems/MultipleItems.jsx'
import { Row, Col } from 'antd';	



const { Header, Content, Footer } = Layout;



const HomePage = () => (

    <Layout className="layout">
    
    <MenuNav/>
   
    <Content style={{ paddingTop: '10px' }}>
    
      <div style={{ background: '#fff', padding:'20px 80px 0px 80px', minHeight: 280 }}>
      <CarouselMain />

       <Row>
    <Col xs={24} lg={24} style={{textAlign:'center',padding:'15px',height:'60px', marginTop:20,borderTop: "1px solid #e8e8e8",borderBottom: "1px solid #e8e8e8"}}><h2 style={{color:'rgba(0, 0, 0, 0.65)'}}>BEST SELLER</h2></Col>
    
    </Row>
    
      <MultipleItems/>






      
      
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>


);

export default HomePage;