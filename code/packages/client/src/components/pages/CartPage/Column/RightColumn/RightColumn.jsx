// import React module from react for JSX
import React, { PureComponent } from 'react';

// import connect function from react-redux for connect redux state
import { connect } from 'react-redux';

/**
 *
 *
 * @class RightColumn
 * @extends {PureComponent}
 */
class RightColumn extends PureComponent {
  /**
   *
   *
   * @memberof RightColumn
   */
  state = {};

  /**
   *
   *
   * @memberof RightColumn
   */
  componentDidMount = async () => {};

  /**
   *
   *
   * @returns
   * @memberof RightColumn
   */
  render() {
    return (
      <div className="cart-grid-right col-12 col-lg-4">
        <div className="card cart-summary">
          <div className="cart-detailed-totals">
            <div className="card-block">
              <div className="cart-summary-line" id="cart-subtotal-products">
                <span className="label js-subtotal">
                  {this.props.Cart.totalQty} items
                </span>
                <span className="value">${this.props.Cart.totalPrice}</span>
              </div>
              <div className="cart-summary-line" id="cart-subtotal-shipping">
                <span className="label">Shipping</span>
                <span className="value">$0.00</span>
                <div>
                  <small className="value" />
                </div>
              </div>
            </div>
            <hr className="separator" />
            <div className="card-block">
              <div className="cart-summary-line cart-total">
                <span className="label">Total (tax excl.)</span>
                <span className="value">${this.props.Cart.totalPrice}</span>
              </div>
              <div className="cart-summary-line">
                <small className="label">Taxes</small>
                <small className="value">$0.00</small>
              </div>
            </div>
            <hr className="separator" />
          </div>
          <div className="checkout cart-detailed-actions card-block">
            <div className="text-sm-center">
              <a href="/checkout" className="btn btn-primary">
                Proceed to checkout
              </a>
              <br />
              <br />
              <a href="/checkoutonline" className="btn btn-primary">
                Proceed to checkout online
              </a>
            </div>
          </div>
        </div>
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
const RightColumnRedux = connect(function(state) {
  return { Cart: state.Cart || { products: [], totalQty: '', totalPrice: '' } };
})(RightColumn);

// export component
export default RightColumnRedux;
