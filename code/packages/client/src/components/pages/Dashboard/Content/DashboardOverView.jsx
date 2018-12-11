// import Card, Col, Row component from antd
import { Card, Col, Row } from 'antd';

// import React module from react for JSX
import React from 'react';

// import NumberCard component
import NumberCard from './Components/NumberCard';

// import Quote component
import Quote from './Components/Quote';

// import SaleChart component
import SaleChart from './Components/SaleChart';

// import SimpleRadialBarChart component
import SimpleRadialBarChart from './Components/SimpleRadialBarChart';

const item1 = {
  icon: 'dollar',
  color: '#f8c82e',

  title: 'Online Review',
  number: 3246,
  countUp: {},
};

const item2 = {
  icon: 'usergroup-add',
  color: '#f69899',

  title: 'New Customers',
  number: 246,
  countUp: {},
};
const item3 = {
  icon: 'skin',
  color: '#64ea91',

  title: 'Item',
  number: 2246,
  countUp: {},
};

const item4 = {
  icon: 'shopping-cart',
  color: '#f797d6',

  title: 'Order',
  number: 6246,
  countUp: {},
};

/**
 *
 *
 */
const DashboardOverView = () => (
  <div>
    <Row gutter={24}>
      <Col key="NumberCard1" lg={6} md={12}>
        <NumberCard {...item1} />
      </Col>
      <Col key="NumberCard2" lg={6} md={12}>
        <NumberCard {...item2} />
      </Col>
      <Col key="NumberCard3" lg={6} md={12}>
        <NumberCard {...item3} />
      </Col>
      <Col key="NumberCard4" lg={6} md={12}>
        <NumberCard {...item4} />
      </Col>

      <Col lg={24} md={24}>
        <Card
          bordered={false}
          bodyStyle={{
            padding: '24px 36px 24px 0',
            height: '400px',
          }}
        >
          <SaleChart />
        </Card>
      </Col>
      <Col lg={10} md={24}>
        <Card
          bordered={false}
          bodyStyle={{
            padding: '24px 36px 24px 0',
            height: '600px',
          }}
        >
          <SimpleRadialBarChart />
        </Card>
      </Col>
      <Col lg={{ span: 12, offset: 2 }} md={24}>
        <Row gutter={24}>
          <Card
            bordered={false}
            bodyStyle={{
              padding: '24px 36px 24px 0',
            }}
          >
            <Quote />
          </Card>
        </Row>
        <Row gutter={24}>
          <Card
            bordered={false}
            bodyStyle={{
              padding: '24px 36px 24px 0',
            }}
          >
            <Quote />
          </Card>
        </Row>
      </Col>
    </Row>
  </div>
);

// export component
export { DashboardOverView };
