// import Col, Layout, Row component from antd
import { Col, Layout, Row } from 'antd';

// import React module from react for JSX
import React from 'react';

// import CarouselMain component
import CarouselMain from '../carousel';

// import ListItemsHomePage component
import ListItemsHomePage from '../Items/listItemsHomePage';

// import ModelItem component
import ModelItem from '../Items/ModelItem';

// import MultipleItemsHomePage component
import MultipleItemsHomePage from '../Items/MultipleItemsHomePage';

// import MenuNav component
import MenuNav from '../navigations/MenuNav';

// create Content, Footer from Layout
const { Content, Footer } = Layout;

/**
 *
 *
 * @returns
 */
const HomePage = () => {
  return (
    <Layout className="layout">
      <MenuNav />
      <ModelItem />
      <Content style={{ paddingTop: '10px' }}>
        <div
          style={{
            background: '#fff',
            padding: '20px 80px 0px 80px',
            minHeight: 280,
          }}
        >
          <CarouselMain />
          <Row>
            <Col
              xs={24}
              lg={24}
              style={{
                textAlign: 'center',
                padding: '15px',
                height: '60px',
                marginTop: 20,
                borderTop: '1px solid #e8e8e8',
                borderBottom: '1px solid #e8e8e8',
              }}
            >
              <h2 style={{ color: 'rgba(0, 0, 0, 0.65)' }}>NEW PRODUCTS</h2>
            </Col>
          </Row>
          <ListItemsHomePage />

          <Row>
            <Col
              xs={24}
              lg={24}
              style={{
                textAlign: 'center',
                padding: '15px',
                height: '60px',
                marginTop: 20,
                borderTop: '1px solid #e8e8e8',
                borderBottom: '1px solid #e8e8e8',
              }}
            >
              <h2 style={{ color: 'rgba(0, 0, 0, 0.65)' }}>BEST SELLER</h2>
            </Col>
          </Row>

          <MultipleItemsHomePage />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2018 Created by T&G</Footer>
    </Layout>
  );
};

// export component
export default HomePage;
