import { NavPagination } from "./NavPagination";
import { TopProductNav } from "./TopProductNav";
import { Description } from "./Description";
import React from "react";
import { ProductItem } from "./ProductItem";
import { data } from "./data";

export const RightColumn = () => (
  <div id="content-wrapper" className="left-column col-12 col-md-9">
    <section id="main">
      <Description />
      <section id="products">
        <TopProductNav data={data} />
        <div className="hidden-sm-down">
          <section id="js-active-search-filters" className="hide">
            <h5 className="hidden-xs-up">Active filters</h5>
          </section>
        </div>
        <div>
          <div id="js-product-list">
            <div className="products row">
              {data.map(dataItem => (
                <ProductItem key={dataItem.name} {...dataItem} />
              ))}
            </div>
            <NavPagination />
          </div>
        </div>
        <div id="js-product-list-bottom" />
      </section>
    </section>
  </div>
);
