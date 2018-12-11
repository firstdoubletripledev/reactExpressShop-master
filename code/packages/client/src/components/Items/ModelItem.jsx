// import React module from react for JSX
import React from 'react';

/**
 *
 *
 * @returns
 */
const ModelItem = () => {
  return (
    <div className="modal-content">
      <div className="modal-body">
        <button
          type="button"
          className="close fl-outicons-cancel29"
          data-dismiss="modal"
          aria-label="Close"
        />
        <div className="row">
          <div className="col-12 col-lg-6 img-wrap">
            <div className="images-container">
              <div className="product-cover">
                <ul className="product-flags">
                  <li className="product-flag new">New</li>
                </ul>
                <img
                  className="js-qv-product-cover"
                  src="/images/73-large_default.jpg"
                  alt="Little Duckling Watering Can Cream with Bailey Bear"
                  title="Little Duckling Watering Can Cream with Bailey Bear"
                  style={{ width: '100%' }}
                  itemProp="image"
                />
                <div
                  className="layer hidden-sm-down"
                  data-toggle="modal"
                  data-target="#product-modal"
                >
                  <i className="material-icons zoom-in"></i>
                </div>
                <span id="prev-img" />
                <span id="next-img" />
              </div>
              <div className="js-qv-mask mask">
                <div className="product-images js-qv-product-images slick-initialized slick-slider slick-vertical">
                  <div aria-live="polite" className="slick-list">
                    <div
                      className="slick-track"
                      role="listbox"
                      style={{
                        opacity: 1,
                        height: 630,
                        transform: 'translate3d(0px, 0px, 0px)',
                      }}
                    >
                      <div
                        className="thumb-container slick-slide slick-current slick-active"
                        data-slick-index={0}
                        aria-hidden="false"
                        tabIndex={-1}
                        role="option"
                        aria-selected="false"
                        aria-describedby="slick-slide00"
                        style={{ width: 86 }}
                      >
                        <img
                          className="thumb js-thumb  selected "
                          src="/images/73-home_default.jpg"
                          alt="Little Duckling Watering Can Cream with Bailey Bear"
                          title="Little Duckling Watering Can Cream with Bailey Bear"
                          itemProp="image"
                        />
                      </div>
                      <div
                        className="thumb-container slick-slide slick-active"
                        data-slick-index={1}
                        aria-hidden="false"
                        tabIndex={-1}
                        role="option"
                        aria-selected="false"
                        aria-describedby="slick-slide01"
                        style={{ width: 86 }}
                      >
                        <img
                          className="thumb js-thumb "
                          src="/images/74-home_default.jpg"
                          alt="Little Duckling Watering Can Cream with Bailey Bear"
                          title="Little Duckling Watering Can Cream with Bailey Bear"
                          itemProp="image"
                        />
                      </div>
                      <div
                        className="thumb-container slick-slide slick-active"
                        data-slick-index={2}
                        aria-hidden="false"
                        tabIndex={-1}
                        role="option"
                        aria-selected="false"
                        aria-describedby="slick-slide02"
                        style={{ width: 86 }}
                      >
                        <img
                          className="thumb js-thumb "
                          src="/images/75-home_default.jpg"
                          alt="Little Duckling Watering Can Cream with Bailey Bear"
                          title="Little Duckling Watering Can Cream with Bailey Bear"
                          itemProp="image"
                        />
                      </div>
                      <div
                        className="thumb-container slick-slide slick-active"
                        data-slick-index={3}
                        aria-hidden="false"
                        tabIndex={-1}
                        role="option"
                        aria-selected="false"
                        aria-describedby="slick-slide03"
                        style={{ width: 86 }}
                      >
                        <img
                          className="thumb js-thumb "
                          src="/images/76-home_default.jpg"
                          alt="Little Duckling Watering Can Cream with Bailey Bear"
                          title="Little Duckling Watering Can Cream with Bailey Bear"
                          itemProp="image"
                        />
                      </div>
                      <div
                        className="thumb-container slick-slide slick-active"
                        data-slick-index={4}
                        aria-hidden="false"
                        tabIndex={-1}
                        role="option"
                        aria-selected="false"
                        aria-describedby="slick-slide04"
                        style={{ width: 86 }}
                      >
                        <img
                          className="thumb js-thumb "
                          src="/images/77-home_default.jpg"
                          alt="Little Duckling Watering Can Cream with Bailey Bear"
                          title="Little Duckling Watering Can Cream with Bailey Bear"
                          itemProp="image"
                        />
                      </div>
                      <div
                        className="thumb-container slick-slide"
                        data-slick-index={5}
                        aria-hidden="true"
                        tabIndex={-1}
                        role="option"
                        aria-selected="false"
                        aria-describedby="slick-slide05"
                        style={{ width: 86 }}
                      >
                        <img
                          className="thumb js-thumb "
                          src="/images/78-home_default.jpg"
                          alt="Little Duckling Watering Can Cream with Bailey Bear"
                          title="Little Duckling Watering Can Cream with Bailey Bear"
                          itemProp="image"
                        />
                        shopbanhoa
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="social-sharing">
              <ul>
                <li className="facebook">
                  <a
                    href="http://www.facebook.com/sharer.php?u=https://shopbanhoa.herokuapp.com/category&rewrite=little-duckling-watering-can-cream-with-bailey-bear&controller=product&id_lang=1"
                    className="text-hide"
                    title="Share"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Share
                  </a>
                </li>
                <li className="twitter">
                  <a
                    href="https://twitter.com/intent/tweet?text=Little Duckling Watering Can Cream with Bailey Bear https://shopbanhoa.herokuapp.com/category?id_product=17&id_product_attribute=0&rewrite=little-duckling-watering-can-cream-with-bailey-bear&controller=product&id_lang=1"
                    className="text-hide"
                    title="Tweet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tweet
                  </a>
                </li>
                <li className="googleplus">
                  <a
                    href="https://plus.google.com/share?url=https://shopbanhoa.herokuapp.com/category?id_product=17&id_product_attribute=0&rewrite=little-duckling-watering-can-cream-with-bailey-bear&controller=product&id_lang=1"
                    className="text-hide"
                    title="Google+"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google+
                  </a>
                </li>
                <li className="pinterest">
                  <a
                    href="http://www.pinterest.com/pin/create/button/?media=https://ld-prestashop.template-help.com/prestashop_13106/img/p/7/3/73.jpg&url=https://shopbanhoa.herokuapp.com/category"
                    className="text-hide"
                    title="Pinterest"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-pin-custom="true"
                  >
                    Pinterest
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6 content-wrap">
            <h2 className="h4" itemProp="name">
              Little Duckling Watering Can Cream with Bailey Bear
            </h2>
            <div className="product-quantities">
              <label className="label">In stock:</label>
              <span>100 Items</span>
            </div>
            <div className="product-reference">
              <label className="label">Reference:</label>
              <span itemProp="sku">00110</span>
            </div>
            <div className="product-prices">
              <div
                className="product-price "
                itemProp="offers"
                itemScope
                itemType="https://schema.org/Offer"
              >
                <link
                  itemProp="availability"
                  href="https://schema.org/InStock"
                />
                <meta itemProp="priceCurrency" content="USD" />
                <div className="current-price">
                  <span itemProp="price" content={20}>
                    $20.00
                  </span>
                </div>
              </div>
              <div className="tax-shipping-delivery-label" />
            </div>
            <div className="product-information">
              <div className="product-actions">
                <form
                  action="https://shopbanhoa.herokuapp.com/category/#0"
                  method="post"
                  id="add-to-cart-or-refresh"
                >
                  <input
                    type="hidden"
                    name="token"
                    defaultValue="ff0806b313935b447701a7e4ec498a3e"
                  />
                  <input
                    type="hidden"
                    name="id_product"
                    defaultValue={17}
                    id="product_page_product_id"
                  />
                  <input
                    type="hidden"
                    name="id_customization"
                    defaultValue={0}
                    id="product_customization_id"
                  />
                  <div className="product-variants">
                    <div className="clearfix product-variants-item">
                      <span className="control-label">Color</span>
                      <ul id="group_3">
                        <li className="float-xs-left input-container">
                          <label>
                            <input
                              className="input-color"
                              type="radio"
                              data-product-attribute={3}
                              name="group[3]"
                              defaultValue={7}
                              defaultChecked="checked"
                            />
                            <span
                              className="color"
                              style={{ backgroundColor: '#f5f5dc' }}
                            >
                              <span className="sr-only">Beige</span>
                            </span>
                          </label>
                        </li>
                        <li className="float-xs-left input-container">
                          <label>
                            <input
                              className="input-color"
                              type="radio"
                              data-product-attribute={3}
                              name="group[3]"
                              defaultValue={8}
                            />
                            <span
                              className="color"
                              style={{ backgroundColor: '#ffffff' }}
                            >
                              <span className="sr-only">White</span>
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div className="clearfix product-variants-item">
                      <span className="control-label">Size</span>
                      <select
                        className="form-control form-control-select"
                        id="group_4"
                        data-product-attribute={4}
                        name="group[4]"
                      >
                        <option value={25} title="Standard" selected="selected">
                          Standard
                        </option>
                        <option value={26} title="Deluxe">
                          Deluxe
                        </option>
                        <option value={27} title="Premium">
                          Premium
                        </option>
                      </select>
                    </div>
                    <div className="clearfix product-variants-item">
                      <span className="control-label">Type</span>
                      <ul id="group_5">
                        <li className="input-container float-xs-left">
                          <label>
                            <input
                              className="input-radio"
                              type="radio"
                              data-product-attribute={5}
                              name="group[5]"
                              defaultValue={29}
                              defaultChecked="checked"
                            />
                            <span className="radio-label">Lilies</span>
                          </label>
                        </li>
                        <li className="input-container float-xs-left">
                          <label>
                            <input
                              className="input-radio"
                              type="radio"
                              data-product-attribute={5}
                              name="group[5]"
                              defaultValue={30}
                            />
                            <span className="radio-label">Daisies</span>
                          </label>
                        </li>
                        <li className="input-container float-xs-left">
                          <label>
                            <input
                              className="input-radio"
                              type="radio"
                              data-product-attribute={5}
                              name="group[5]"
                              defaultValue={31}
                            />
                            <span className="radio-label">Tulips</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-add-to-cart">
                    <div className="product-quantity clearfix">
                      <div className="qty">
                        <span className="control-label">Quantity</span>
                        <div className="input-group bootstrap-touchspin">
                          <span
                            className="input-group-addon bootstrap-touchspin-prefix"
                            style={{ display: 'none' }}
                          />
                          <input
                            type="text"
                            name="qty"
                            id="quantity_wanted"
                            defaultValue={1}
                            className="input-group form-control"
                            min={1}
                            aria-label="Quantity"
                            style={{ display: 'block' }}
                          />
                          <span
                            className="input-group-addon bootstrap-touchspin-postfix"
                            style={{ display: 'none' }}
                          />
                          <span className="input-group-btn-vertical">
                            <button
                              className="btn btn-touchspin js-touchspin bootstrap-touchspin-up"
                              type="button"
                            >
                              <i className="touchspin-up" />
                            </button>
                            <button
                              className="btn btn-touchspin js-touchspin bootstrap-touchspin-down"
                              type="button"
                            >
                              <i className="touchspin-down" />
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="add">
                      <button
                        className="btn btn-md btn-primary add-to-cart"
                        data-button-action="add-to-cart"
                        type="submit"
                      >
                        Add to cart
                      </button>
                    </div>
                    <span id="product-availability" />
                    <p className="product-minimal-quantity" />
                  </div>
                  <input
                    className="product-refresh"
                    data-url-update="false"
                    name="refresh"
                    type="submit"
                    defaultValue="Refresh"
                    hidden
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export component
export default ModelItem;
