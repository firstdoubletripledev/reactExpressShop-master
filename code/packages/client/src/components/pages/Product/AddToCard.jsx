import React from "react";

export const AddToCard = ({ product }) => (
  <div className="product-add-to-cart">
    <div className="product-quantity clearfix">
      <span className="control-label">Quantity: </span>
      <br />
      <div className="qty">
        <div className="input-group bootstrap-touchspin">
          <span
            className="input-group-addon bootstrap-touchspin-prefix"
            style={{ display: "none" }}
          />
          <input
            type="text"
            name="qty"
            id="quantity_wanted"
            defaultValue={1}
            className="input-group form-control"
            min={1}
            aria-label="Quantity"
            style={{ display: "block" }}
          />
          <span
            className="input-group-addon bootstrap-touchspin-postfix"
            style={{ display: "none" }}
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
);
