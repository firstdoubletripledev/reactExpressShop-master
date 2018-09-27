import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import MenuNav from "../navigations/MenuNav.jsx";
import CarouselMain from "../carousel.jsx";
import MultipleItems from '../slickItems/MultipleItems.jsx'
	



const { Header, Content, Footer } = Layout;



const HomePage = () => (

    <Layout className="layout">
    
    <MenuNav/>
   
    <Content style={{ paddingTop: '10px' }}>
    
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
      <CarouselMain/>
    
      <MultipleItems/>






      
      
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>


);

export default HomePage;