import '../carousel.css';

import { Carousel } from 'antd';
import React, { PureComponent } from 'react';

class CaroselMain extends PureComponent {
  render() {
    return (
      <Carousel autoplay speed="800" style={{ border: '1px solid #e8e8e8' }}>
        <div>
          <img
            alt="example"
            src="images/slide-img1.jpg"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div>
          <img
            alt="example"
            src="images/slide-img2.jpg"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div>
          <img
            alt="example"
            src="images/slide-img3.jpg"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div>
          <img
            alt="example"
            src="images/slide-img5.jpg"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </Carousel>
    );
  }
}

export default CaroselMain;
