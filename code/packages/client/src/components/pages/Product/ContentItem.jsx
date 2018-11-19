import React from "react";
import { l10nUSD } from "../../../l10nUSD";
import { AddToCard } from "./AddToCard";

const ContentItem = ({ product: { category = [] } = {}, product = {} }) => {
  return (
    <>
      <h2 className="h4" itemProp="name">
        Autumn Basket
      </h2>
      <div className="product-quantities">
        <label className="label">In stock:</label>
        <span>{product.stock} Items</span>
      </div>
      <div className="product-reference">
        <label className="label">Reference:</label>
        <span itemProp="sku">{product.code}</span>
      </div>
      <div className="product-out-of-stock" />
      <div className="product-prices">
        <div
          className="product-price has-discount"
          itemProp="offers"
          itemScope
          itemType="https://schema.org/Offer"
        >
          <link itemProp="availability" href="https://schema.org/InStock" />
          <meta itemProp="priceCurrency" content="USD" />
          <div className="current-price">
            <span itemProp="price" content="19.2">
              {l10nUSD.format(product.discountPrice)}
            </span>
          </div>
          <div className="product-discount">
            <span className="regular-price">
              {l10nUSD.format(product.price)}
            </span>
          </div>
        </div>
        <div className="tax-shipping-delivery-label" />
      </div>
      <div className="product-information">
        <div id="product-description-short-8" itemProp="description">
          <p>{product.description}</p>
        </div>
        <div className="product-actions">
          <form
            action="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=cart"
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
              defaultValue={8}
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
                  {category.map(data => {
                    if (data.name === "Color") {
                      return (
                        <li
                          key={`product-variants-${data._id}`}
                          className="float-xs-left input-container"
                        >
                          <label>
                            <input
                              className="input-color"
                              type="radio"
                              data-product-attribute={3}
                              name="group[3]"
                              defaultValue={24}
                            />
                            <span
                              className="color"
                              style={{ backgroundColor: data.value }}
                            >
                              <span className="sr-only">{data.value}</span>
                            </span>
                          </label>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            </div>
            <section className="product-discounts" />
            <AddToCard product={product} />
            <input
              className="product-refresh ps-hidden-by-js"
              name="refresh"
              type="submit"
              defaultValue="Refresh"
              style={{ display: "none" }}
            />
          </form>
        </div>
      </div>
      <div className="additional-info" />
    </>
  );
};

export { ContentItem };
