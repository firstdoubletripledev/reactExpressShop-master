import React, { Component } from "react";
import Axios from "axios";
import { ProductsInCart } from "./ProductsInCart.jsx";
import $ from "jquery";

class RightColumn extends Component {
  state = {};
  componentDidMount = async () => {
    $("#showDetail").click(function() {
      $("#cart-summary-product-list").toggleClass(function() {
        if (
          $("#cart-summary-product-list")
            .parent()
            .is(".collapse")
        ) {
          return "showdetailCheckout";
        } else {
          return "collapse";
        }
      });
    });
  };

  render() {
    return (
      <div className="col-md-4">
        <section
          id="js-checkout-summary"
          className="card js-cart"
          data-refresh-url="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=cart?ajax=1&action=refresh"
        >
          <div className="card-block">
            <div className="cart-summary-products">
              <p>{this.props.cart.totalQty} items</p>
              <p>
                <a id="showDetail">show details</a>
              </p>
              <div id="cart-summary-product-list" className="collapse">
                <ul className="media-list">
                  <ProductsInCart products={this.props.cart.products} />
                </ul>
              </div>
            </div>
            <div
              className="cart-summary-line cart-summary-subtotals"
              id="cart-subtotal-products"
            >
              <span className="label">Subtotal</span>
              <span className="value">${this.props.cart.totalPrice}</span>
            </div>
            <div
              className="cart-summary-line cart-summary-subtotals"
              id="cart-subtotal-shipping"
            >
              <span className="label">Shipping</span>
              <span className="value">Free</span>
            </div>
          </div>
          <hr className="separator" />
          <div className="card-block cart-summary-totals">
            <div className="cart-summary-line cart-total">
              <span className="label">Total (tax excl.)</span>
              <span className="value">${this.props.cart.totalPrice}</span>
            </div>
            <div className="cart-summary-line">
              <span className="label sub">Taxes</span>
              <span className="value sub">$0.00</span>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default RightColumn;
