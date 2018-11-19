import React, { Component } from "react";
//import axios from "axios";
import { connect } from "react-redux";
import CartAction from  "../../../../../reduxx/actions/CartAction"


class ProductsInCart extends Component {
  constructor() {
    super();
    
    this.state = {
    
    };
  }
  componentDidMount = async () => {
    const { dispatch } = this.props;
    await dispatch(CartAction.getCartAction ());

     
    
  };


  addItemCart = async () =>{
    const { dispatch } = this.props;

    await dispatch(CartAction.addItemCartAction("5be3ee66e5daac145c1b437b"));
    
  }
  decreaseItemCart =  async ()=>{
    const { dispatch } = this.props;
    await dispatch(CartAction.decreaseItemCartAction("5be3ee66e5daac145c1b437b"));
    
  }

  render() {
   
     return ( 
     
           this.props.products.map((data,index)=>{
                return(
                <li key = {index} className="cart-item">
                <div className="product-line-grid row">
                  {/*  product left content: image*/}
                  <div className="product-line-grid-left col-md-2 col-4">
                    <span className="product-image media-middle">
                      <img
                        src="https://ld-prestashop.template-help.com/prestashop_13106/img/p/2/4/24-cart_default.jpg"
                        alt="Autumn Basket"
                      />
                    </span>
                  </div>
                  {/*  product left body: description */}
                  <div className="product-line-grid-body col-md-3 col-8">
                    <div className="product-line-info">
                      <a
                        className="label"
                        href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_product=8&id_product_attribute=54&rewrite=autumn-basket&controller=product&id_lang=1#/10,color,red/25,size,standard/28,type,roses"
                        data-id_customization={0}
                      >
                        Autumn Basket
                      </a>
                    </div>
                    <div className="product-line-info product-price h5 has-discount">
                      <div className="current-price">
                        <span className="price">$19.20</span>
                        <div className="unit-price-cart">$15.36 </div>
                      </div>
                      <div className="product-discount">
                        <span className="regular-price">$24.00</span>
                        <span className="discount discount-percentage">
                          -20%
                        </span>
                      </div>
                    </div>
                    <br />
                    <div className="product-line-info">
                      <span className="label">Color:</span>
                      <span className="value">Red</span>
                    </div>
                    <div className="product-line-info">
                      <span className="label">Size:</span>
                      <span className="value">Standard</span>
                    </div>
                    <div className="product-line-info">
                      <span className="label">Type:</span>
                      <span className="value">Roses</span>
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
                                <span className="control-label">Quantity</span>
                                <div className="input-group bootstrap-touchspin">
                                  <span
                                    className="input-group-addon bootstrap-touchspin-prefix"
                                    style={{ display: "none" }}
                                  />
                                  <input
                                    className="js-cart-line-product-quantity form-control"
                                    data-down-url="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=cart&update=1&id_product=8&id_product_attribute=54&token=ff0806b313935b447701a7e4ec498a3e&op=down"
                                    data-up-url="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=cart&update=1&id_product=8&id_product_attribute=54&token=ff0806b313935b447701a7e4ec498a3e&op=up"
                                    data-update-url="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=cart&update=1&id_product=8&id_product_attribute=54&token=ff0806b313935b447701a7e4ec498a3e"
                                    data-product-id={8}
                                    type="text"
                                    defaultValue={4}
                                    name="product-quantity-spin"
                                    min={1}
                                    style={{
                                      display: "block",
                                      width: 16
                                    }}
                                  />
                                  <span
                                    className="input-group-addon bootstrap-touchspin-postfix"
                                    style={{ display: "none" }}
                                  />
                                  <span className="input-group-btn-vertical">
                                    <button

                                      onClick={this.addItemCart.bind(this)}
                                      className="btn btn-touchspin js-touchspin js-increase-product-quantity bootstrap-touchspin-up"
                                      type="button"
                                    >
                                      <i className="touchspin-up" />
                                    </button>
                                    <button
                                    onClick={this.decreaseItemCart.bind(this)}
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
                              <strong>$76.80</strong>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2 col-2 text-xsright">
                        <div className="cart-line-product-actions">
                          <a
                            className="remove-from-cart"
                            rel="nofollow"
                            href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=cart&delete=1&id_product=8&id_product_attribute=54&token=ff0806b313935b447701a7e4ec498a3e"
                            data-link-action="delete-from-cart"
                            data-id-product={8}
                            data-id-product-attribute={54}
                            data-id-customization
                          >
                            <i className="material-icons float-xs-left">
                              delete
                            </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix" />
                </div>
              </li>)

            })
    );
    
  }
}
const ProductsInCartRedux = connect(function(state) {
  return { products: state.Cart.products ||[] };
})(ProductsInCart);

export default ProductsInCartRedux;
