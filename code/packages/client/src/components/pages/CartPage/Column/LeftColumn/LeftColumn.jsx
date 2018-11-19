import React, { Component } from "react";
//import axios from "axios";
import { connect } from "react-redux";
import ProductsInCart from "./ProductsInCart";


class LeftColumn extends Component {
  constructor() {
    super();
    this.state = {};
  }
 

  render() {

    return (
      <div className="cart-grid-body col-12 col-lg-8">
        {/* cart products detailed */}
        <div className="card cart-container">
          <div className="card-block">
            <h1 className="h3">Shopping Cart ${this.props.Cart.totalQty}</h1>
          </div>
          <hr className="separator" />
          <div
            className="cart-overview js-cart"
            data-refresh-url="//ld-prestashop.template-help.com/prestashop_13106/index.php?controller=cart&ajax=1&action=refresh"
          >
            <ul className="cart-items">
            <ProductsInCart/>
              
            </ul>
          </div>
        </div>
        <a
          className="label"
          href="https://ld-prestashop.template-help.com/prestashop_13106/index.php"
        >
          <i className="material-icons">chevron_left</i>Continue shopping
        </a>
        {/* shipping informations */}
      </div>
    );
  }
}
const LeftColumnRedux = connect(function(state) {
  return { Cart: state.Cart || {totalQty:"1"}};
})(LeftColumn);

export default LeftColumnRedux;
