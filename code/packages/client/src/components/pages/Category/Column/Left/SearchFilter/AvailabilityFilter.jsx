import React from "react";

export function AvailabilityFilter({}) {
  return (
    <section className="facet clearfix">
      <h3 className="facet-title hidden-sm-down">Availability</h3>
      <div
        className="title hidden-md-up"
        data-target="#facet_24152"
        data-toggle="collapse"
      >
        <h3 className="facet-title">Availability</h3>
        <span className="navbar-toggler collapse-icons">
          <i className="material-icons add"></i>
          <i className="material-icons remove"></i>
        </span>
      </div>
      <ul id="facet_24152" className="collapse">
        <li>
          <label className="facet-label" htmlFor="facet_input_24152_0">
            <span className="custom-checkbox">
              <input
                id="facet_input_24152_0"
                data-search-url="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=category&id_category=14&id_lang=1&q=Availability-Not+available"
                type="checkbox"
              />
              <span className="ps-shown-by-js">
                <i className="material-icons checkbox-checked"></i>
              </span>
            </span>
            <a
              href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=category&id_category=14&id_lang=1&q=Availability-Not+available"
              className="_gray-darker search-link js-search-link"
              rel="nofollow"
            >
              Not available
              <span className="magnitude">(1)</span>
            </a>
          </label>
        </li>
        <li>
          <label className="facet-label" htmlFor="facet_input_24152_1">
            <span className="custom-checkbox">
              <input
                id="facet_input_24152_1"
                data-search-url="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=category&id_category=14&id_lang=1&q=Availability-In+stock"
                type="checkbox"
              />
              <span className="ps-shown-by-js">
                <i className="material-icons checkbox-checked"></i>
              </span>
            </span>
            <a
              href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=category&id_category=14&id_lang=1&q=Availability-In+stock"
              className="_gray-darker search-link js-search-link"
              rel="nofollow"
            >
              In stock
              <span className="magnitude">(19)</span>
            </a>
          </label>
        </li>
      </ul>
    </section>
  );
}
