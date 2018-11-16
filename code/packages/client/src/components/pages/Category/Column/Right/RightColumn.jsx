import React from "react";
// import Axios from "axios";

import { NavPagination } from "./NavPagination";
import { TopProductNav } from "./TopProductNav";
import { Description } from "./Description";
import { ProductItem } from "./ProductItem";
// import { data } from "./data";

const RightColumn = ({
  data = [],
  current,
  pages,
  getData,
  loading = false,
  onClickSortBy = () => null
}) => {
  return (
    <div id="content-wrapper" className="left-column col-12 col-md-9">
      <section id="main">
        <Description />
        <section id="products">
          <TopProductNav data={data} onClickSortBy={onClickSortBy} />
          <div className="hidden-sm-down">
            <section id="js-active-search-filters" className="hide">
              <h5 className="hidden-xs-up">Active filters</h5>
            </section>
          </div>
          <div>
            <div id="js-product-list">
              <div className="products row">
                {loading
                  ? "loading..."
                  : data.map(dataItem => (
                      <ProductItem key={dataItem._id} {...dataItem} />
                    ))}
              </div>
              <NavPagination
                getData={getData}
                current={current}
                pages={pages}
              />
            </div>
          </div>
          <div id="js-product-list-bottom" />
        </section>
      </section>
    </div>
  );
};

export { RightColumn };
