// import Layout component from antd
import { Layout } from 'antd';

// import React module from react for JSX
import React from 'react';

// import MenuNav component
import MenuNav from '../navigations/MenuNav.jsx';

// import CartTable component
import CartTable from '../tables/CartTable';

// create Content, Footer from Layout
const { Content, Footer } = Layout;

/**
 *
 *
 * @returns
 */
const CartPage = () => {
  return (
    <Layout className="layout">
      <MenuNav />

      <Content style={{ paddingTop: '10px' }}>
        <CartTable />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

// export component
export default CartPage;
