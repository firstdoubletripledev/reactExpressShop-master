import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Row, Col } from 'antd';
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;



class MultipleItems extends Component {
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
      slidesToScroll: 1
    };
    var dataItem = [{id:1,imagePath:'images/example-slide-1.jpg'},
    {id:2,imagePath:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'},
    {id:3,imagePath:'images/example-slide-1.jpg'},
    {id:4,imagePath:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'}
  ];
   var itemsRender = dataItem.map((item,index)=>
    <div key={index} >
    <Card
      style={{ margin:'5px'}}
      cover={<img alt="example" src={item.imagePath} style={{height:'120px'}} />}
      actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
    >
      <Meta
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title="Card title"
        description="This is the description"
      />
    </Card>
  </div>
   
  );
  
    return (
      <Row style={{ margin: '20px', border: "1px solid #e8e8e8" }}>
        <Col lg={4} >
          <div style={{ textAlign: "center", paddingTop: '30px' }}>
            <button className="button" onClick={this.previous}>
              Previous
          </button>
            <button className="button" onClick={this.next}>
              Next
          </button>
          </div>
        </Col>
        <Col lg={20} style={{ padding: '10px' }} >
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
