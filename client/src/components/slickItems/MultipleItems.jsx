import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Row, Col } from 'antd';

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
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <Row style={{margin:'20px',height:'400px',border:"1px solid black"}}>
      <Col lg={4} >
      <div style={{ textAlign: "center",paddingTop:'30px'}}>
          <button className="button" onClick={this.previous}>
            Previous
          </button>
          <button className="button" onClick={this.next}>
            Next
          </button>
        </div>
      </Col>
      <Col lg={20} >
      <div>
        
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1} >
          <img alt="example" src="/images/example-slide-1.jpg" style={{height:'400px',border:"1px solid red"}} />
          </div>
          <div key={2}>
          <img alt="example" src="/images/logo.jpg"style={{height:'400px',border:"1px solid red"}} />
          </div>
          <div key={3} >
          <img alt="example" src="/images/krasivyi_korabl_-1024x768.jpg"style={{height:'400px',border:"1px solid red"}} />
          </div>
          <div key={4}>
          <img alt="example" src="/images/example-slide-1.jpg"style={{height:'400px',border:"1px solid red"}} />
          </div>
          <div key={5} >
          <img alt="example" src="/images/krasivyi_korabl_-1024x768.jpg"style={{height:'400px',border:"1px solid red"}} />
          </div>
          <div key={6}>
          <img alt="example" src="/images/example-slide-1.jpg" style={{height:'400px',border:"1px solid red"}} />
          </div>
        </Slider>
       
      </div>
      
      
      </Col>
      
    </Row>
      
   
    );
  }
}

export default MultipleItems;
