import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { Col, Row } from 'antd';
import React, { PureComponent } from 'react';
import Slider from 'react-slick';

import ItemCard from '../Items/ItemCard';

// const { Meta } = Card;

class MultipleItems extends PureComponent {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
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
      <div key={index + 1}>
        <ItemCard imgPath={item.imagePath} />
      </div>
    ));

    return (
      <Row style={{ margin: '20px 0px 20px 0px', border: '1px solid #e8e8e8' }}>
        <Col lg={4}>
          <div style={{ textAlign: 'center', paddingTop: '30px' }}>
            <button className="button" onClick={this.previous}>
              Previous
            </button>
            <button className="button" onClick={this.next}>
              Next
            </button>
          </div>
        </Col>
        <Col lg={20} style={{ padding: '10px' }}>
          <div>
            <Slider ref={c => (this.slider = c)} {...settings}>
              {itemsRender}
            </Slider>
          </div>
        </Col>
      </Row>
    );
  }
}

export default MultipleItems;
