import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import CartAction from '../../../../../reduxx/actions/CartAction';

//import axios from "axios";
class ProductsInCart extends PureComponent {
  constructor() {
    super();

    this.state = {};
  }
  componentDidMount = async () => {
    const { dispatch } = this.props;
    await dispatch(CartAction.getCartAction());
  };

  addItemCart = async productId => {
    const { dispatch } = this.props;

    await dispatch(CartAction.addItemCartAction(productId));
  };
  removeItemCart = async productId => {
    const { dispatch } = this.props;

    await dispatch(CartAction.removeItemCartAction(productId));
  };

  decreaseItemCart = async productId => {
    const { dispatch } = this.props;
    await dispatch(CartAction.decreaseItemCartAction(productId));
  };

  render() {
    return this.props.products.map((data, index) => {
      var productHref = '/product/' + data.item._id;
      return (
        <li key={index} className="cart-item">
          <div className="product-line-grid row">
            {/*  product left content: image*/}
            <div className="product-line-grid-left col-md-2 col-4">
              <span className="product-image media-middle">
                <img src={data.item.pathImg} alt="Autumn Basket" />
              </span>
            </div>
            {/*  product left body: description */}
            <div className="product-line-grid-body col-md-3 col-8">
              <div className="product-line-info">
                <a
                  className="label"
                  href={productHref}
                  data-id_customization={0}
                >
                  {data.item.name}
                </a>
              </div>
              <div className="product-line-info product-price h5 has-discount">
                <div className="current-price">
                  <div className="unit-price-cart">
                    {data.item.discountPrice}
                  </div>
                </div>
                <div className="product-discount">
                  <span className="regular-price">{data.item.price}</span>
                  <span className="discount discount-percentage" />
                </div>
              </div>
              <br />
              <div className="product-line-info">
                <span className="label">Color:</span>
                <span className="value" />
              </div>
            </div>
            {/*  product left body: description */}
            <div className="product-line-grid-right product-line-actions col-md-7 col-12">
              <div className="row">
                <div className="col-4 hidden-md-up" />
                <div className="col-md-10 col-6">
                  <div className="row">
                    <div className="col-md-7 col-12 qty">
                      <div className="product-quantity clearfix">
                        <div className="qty">
                          <span className="control-label">
                            {data.qty} items{' '}
                          </span>
                          <div className="input-group bootstrap-touchspin">
                            <span
                              className="input-group-addon bootstrap-touchspin-prefix"
                              style={{ display: 'none' }}
                            />

                            <span
                              className="input-group-addon bootstrap-touchspin-postfix"
                              style={{ display: 'none' }}
                            />
                            <span className="input-group-btn-vertical">
                              <button
                                onClick={() => this.addItemCart(data.item._id)}
                                className="btn btn-touchspin js-touchspin js-increase-product-quantity bootstrap-touchspin-up"
                                type="button"
                              >
                                <i className="touchspin-up" />
                              </button>
                              <button
                                onClick={() =>
                                  this.decreaseItemCart(data.item._id)
                                }
                                className="btn btn-touchspin js-touchspin js-decrease-product-quantity bootstrap-touchspin-down"
                                type="button"
                              >
                                <i className="touchspin-down" />
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 col-12 price">
                      <span className="product-price">
                        <strong>{data.price}</strong>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-2 text-xsright">
                  <div className="cart-line-product-actions">
                    <a
                      href="#0"
                      className="remove-from-cart"
                      rel="nofollow"
                      onClick={() => this.removeItemCart(data.item._id)}
                    >
                      <i className="material-icons float-xs-left">delete</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix" />
          </div>
        </li>
      );
    });
  }
}
const ProductsInCartRedux = connect(function(state) {
  return { products: state.Cart.products || [] };
})(ProductsInCart);

export default ProductsInCartRedux;
