import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import MenuNav from "../navigations/MenuNav.jsx";
import { Row, Col } from "antd";
import CartTable from "../tables/CartTable";

const { Header, Content, Footer } = Layout;
//Home page
//cart page
//cagory page
//checkout page
//detail product page
//dash board page

const CartPage = () => {
  return (
    <Layout className="layout">
      <MenuNav />

      <Content style={{ paddingTop: "10px" }}>
        <CartTable />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default CartPage;
