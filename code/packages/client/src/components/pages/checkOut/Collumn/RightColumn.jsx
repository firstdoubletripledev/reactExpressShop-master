// import React module from react for JSX
import React from 'react';

/**
 *
 *
 */
const RightColumn = () => (
  <div className="col-md-4">
    <section
      id="js-checkout-summary"
      className="card js-cart"
      data-refresh-url="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=cart?ajax=1&action=refresh"
    >
      <div className="card-block">
        <div className="cart-summary-products">
          <p>1 item</p>
          <p>
            <a
              href="#0"
              data-toggle="collapse"
              data-target="#cart-summary-product-list"
            >
              show details
            </a>
          </p>
          <div className="collapse" id="cart-summary-product-list">
            <ul className="media-list">
              <li className="media">
                <div className="media-left">
                  <a
                    href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_product=10&id_product_attribute=80&rewrite=baby-boy-perfect-gift&controller=product&id_lang=1#/8,color,white/25,size,standard/29,type,lilies"
                    title="Baby-Boy Perfect Gift"
                  >
                    <img
                      className="media-object"
                      src="https://ld-prestashop.template-help.com/prestashop_13106/img/p/3/4/34-small_default.jpg"
                      alt="Baby-Boy Perfect Gift"
                    />
                  </a>
                </div>
                <div className="media-body">
                  <span className="product-name">Baby-Boy Perfect Gift</span>
                  <span className="product-quantity">x1</span>
                  <span className="product-price float-xs-right">$28.00</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="cart-summary-line cart-summary-subtotals"
          id="cart-subtotal-products"
        >
          <span className="label">Subtotal</span>
          <span className="value">$28.00</span>
        </div>
        <div
          className="cart-summary-line cart-summary-subtotals"
          id="cart-subtotal-shipping"
        >
          <span className="label">Shipping</span>
          <span className="value">$7.00</span>
        </div>
      </div>
      <hr className="separator" />
      <div className="card-block cart-summary-totals">
        <div className="cart-summary-line cart-total">
          <span className="label">Total (tax excl.)</span>
          <span className="value">$35.00</span>
        </div>
        <div className="cart-summary-line">
          <span className="label sub">Taxes</span>
          <span className="value sub">$0.00</span>
        </div>
      </div>
    </section>
  </div>
);

export { RightColumn };
