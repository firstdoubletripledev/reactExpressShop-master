import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Row, Col } from "antd";
import { Card, Icon, Avatar, Button } from "antd";

import { connect } from "react-redux";

const { Meta } = Card;

class ItemCard extends Component {
  addItemToCart() {
    var { dispatch } = this.props;
    dispatch({ type: "Add_Item_To_Cart" });
  }

  render() {
    return (
      <Card
        style={{ margin: "5px" }}
        cover={
          <img
            alt="example"
            src={this.props.imgPath}
            style={{ height: "180px" }}
          />
        }
        actions={[
          <Button
            size="small"
            icon="shopping-cart"
            onClick={this.addItemToCart.bind(this)}
          >
            ADD TO CART
          </Button>
        ]}
      >
        <Meta
          style={{ textAlign: "center" }}
          title="Hoa lan"
          description="Nhập khẩu từ mỹ"
        />
      </Card>
    );
  }
}

const ItemCardRedux = connect(function(state) {
  return { SLItemCart: state.SLItemCart.state, isLogin: state.isLogin };
})(ItemCard);

export default ItemCardRedux;
