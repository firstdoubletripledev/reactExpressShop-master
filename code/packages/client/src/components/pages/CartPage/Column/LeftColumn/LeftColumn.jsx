// import React module from react for JSX
import React, { PureComponent } from 'react';

// import connect function from react-redux for connect redux state
import { connect } from 'react-redux';

// import ProductsInCart component
import ProductsInCart from './ProductsInCart';

/**
 *
 *
 * @class LeftColumn
 * @extends {PureComponent}
 */
class LeftColumn extends PureComponent {
  /**
   *Creates an instance of LeftColumn.
   * @memberof LeftColumn
   */
  constructor() {
    super();
    this.state = {};
  }

  /**
   *
   *
   * @returns
   * @memberof LeftColumn
   */
  render() {
    return (
      <div className="cart-grid-body col-12 col-lg-8">
        {/* cart products detailed */}
        <div className="card cart-container">
          <div className="card-block">
            <h1 className="h3">
              Shopping Cart || {this.props.Cart.totalQty} items
            </h1>
          </div>
          <hr className="separator" />
          <div className="cart-overview js-cart">
            <ul className="cart-items">
              <ProductsInCart />
            </ul>
          </div>
        </div>
        <a className="label" href="/">
          <i className="material-icons">chevron_left</i>Continue shopping
        </a>
        {/* shipping informations */}
      </div>
    );
  }
}

/**
 *
 *
 * @param {*} state
 * @returns
 */
const LeftColumnRedux = connect(function(state) {
  return { Cart: state.Cart || { totalQty: '1' } };
})(LeftColumn);

// export component
export default LeftColumnRedux;
