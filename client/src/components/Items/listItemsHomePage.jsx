import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Row, Col } from 'antd';
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;



class MultipleItems extends Component {


  render() {
    var dataItem = [{id:1,imagePath:'images/example-slide-1.jpg'},
    {id:2,imagePath:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'},
    {id:3,imagePath:'images/example-slide-1.jpg'},
    {id:4,imagePath:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'}
  ];
   var itemsRender = dataItem.map((item,index)=>
   <Col lg={6} >
    <div key={index} >
    <Card
      style={{ margin:'5px'}}
      cover={<img alt="example" src={item.imagePath} style={{height:'150px'}} />}
      actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
    >
      <Meta
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title="Card title"
        description="This is the description"
      />
    </Card>
  </div>
  </Col>
   
  );
   
  
    return (
        <Row style={{ margin: '20px 0px 20px 0px', border: "1px solid #e8e8e8" }}>
       
        {itemsRender}
        </Row>

    );
  }
}

export default MultipleItems;
