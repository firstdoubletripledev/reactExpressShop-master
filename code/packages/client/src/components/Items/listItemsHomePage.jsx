import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { Col, Row } from 'antd';
import React, { Component } from 'react';

import ItemCard from '../Items/ItemCard';

// const { Meta } = Card;

class MultipleItems extends Component {
  render() {
    var dataItem = [
      { id: 1, imagePath: 'images/example-slide-1.jpg' },
      {
        id: 2,
        imagePath:
          'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      },
      { id: 3, imagePath: 'images/example-slide-1.jpg' },
      {
        id: 4,
        imagePath:
          'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      },
    ];
    var itemsRender = dataItem.map((item, index) => (
      <Col lg={6}>
        <div key={index}>
          <ItemCard imgPath={item.imagePath} />
        </div>
      </Col>
    ));

    return (
      <Row style={{ margin: '20px 0px 20px 0px', border: '1px solid #e8e8e8' }}>
        {itemsRender}
      </Row>
    );
  }
}

export default MultipleItems;
