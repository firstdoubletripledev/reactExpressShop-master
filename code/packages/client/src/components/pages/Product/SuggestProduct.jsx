import React from "react";
import { ProductItem } from "../Category/Column/Right/ProductItem";

const SuggestProduct = ({ productSuggest = [] }) => {
  return (
    <section className="featured-products products-carousel clearfix">
      <h2 className="products-section-title">You might also like</h2>
      <div className="products slick-initialized slick-slider">
        <button
          type="button"
          data-role="none"
          className="slick-prev slick-arrow"
          aria-label="Previous"
          role="button"
          style={{ display: "block" }}
        >
          Previous
        </button>
        {productSuggest.map(data => (
          <ProductItem key={`productSuggest-${data._id}`} {...data} />
        ))}
        <button
          type="button"
          data-role="none"
          className="slick-next slick-arrow"
          aria-label="Next"
          role="button"
          style={{ display: "block" }}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export { SuggestProduct };
