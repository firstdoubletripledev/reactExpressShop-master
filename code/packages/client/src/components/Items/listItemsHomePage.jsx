// import custom css
import 'slick-carousel/slick/slick-theme.css';

// import custom css
import 'slick-carousel/slick/slick.css';

// import Button, Card component from antd
import { Col, Row } from 'antd';

// import React module from react for JSX
import React, { PureComponent } from 'react';

// import ItemCard component
import ItemCard from '../Items/ItemCard';

/**
 *
 *
 * @class MultipleItems
 * @extends {PureComponent}
 */
class MultipleItems extends PureComponent {
  /**
   *
   *
   * @returns
   * @memberof MultipleItems
   */
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

// export component
export default MultipleItems;
