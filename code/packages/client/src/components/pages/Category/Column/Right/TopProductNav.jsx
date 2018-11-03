import React from "react";

export function TopProductNav({ data }) {
  return (
    <div>
      <div id="js-product-list-top" className="row products-selection">
        <div className="col-5 total-products">
          <p className="hidden-sm-down">There are {data.length} products.</p>
          <div className="hidden-md-up filter-button">
            <button
              id="search_filter_toggler"
              className="btn btn-md btn-default"
            >
              Filter
            </button>
          </div>
        </div>
        <div className="col-7">
          <div className="sort-by-row">
            <span className="hidden-xs-down sort-by">Sort by:</span>
            <div className="products-sort-order dropdown">
              <button
                className="btn-unstyle select-title"
                rel="nofollow"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Relevance <i className="material-icons float-xs-right"></i>
              </button>
              <div className="dropdown-menu">
                <a
                  rel="nofollow"
                  href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=category&id_category=14&id_lang=1&order=product.position.asc"
                  className="select-list current js-search-link"
                >
                  Relevance
                </a>
                <a
                  rel="nofollow"
                  href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=category&id_category=14&id_lang=1&order=product.name.asc"
                  className="select-list js-search-link"
                >
                  Name, A to Z
                </a>
                <a
                  rel="nofollow"
                  href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=category&id_category=14&id_lang=1&order=product.name.desc"
                  className="select-list js-search-link"
                >
                  Name, Z to A
                </a>
                <a
                  rel="nofollow"
                  href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=category&id_category=14&id_lang=1&order=product.price.asc"
                  className="select-list js-search-link"
                >
                  Price, low to high
                </a>
                <a
                  rel="nofollow"
                  href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=category&id_category=14&id_lang=1&order=product.price.desc"
                  className="select-list js-search-link"
                >
                  Price, high to low
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
