import React from "react";

export function ColorFilter({ categoryColor = [] }) {
  return (
    <section className="facet clearfix">
      <h3 className="facet-title hidden-sm-down">Color</h3>
      <div
        className="title hidden-md-up"
        data-target="#facet_21941"
        data-toggle="collapse"
      >
        <h3 className="facet-title">Color</h3>
        <span className="navbar-toggler collapse-icons">
          <i className="material-icons add"></i>
          <i className="material-icons remove"></i>
        </span>
      </div>
      <ul id="facet_21941" className="collapse">
        {categoryColor.map(({ value = null, _id }) => {
          if (value !== null) {
            return (
              <li key={_id}>
                <label className="facet-label" htmlFor="facet_input_21941_0">
                  <span className="custom-checkbox">
                    <input
                      id="facet_input_21941_0"
                      data-search-url="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=category&id_category=14&id_lang=1&q=Color-Grey"
                      type="checkbox"
                    />
                    <span
                      className="color"
                      style={{
                        backgroundColor: "#AAB2BD"
                      }}
                    />
                  </span>
                  <a
                    href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=category&id_category=14&id_lang=1&q=Color-Grey"
                    className="_gray-darker search-link js-search-link"
                    rel="nofollow"
                  >
                    {value}
                    <span className="magnitude">(7)</span>
                  </a>
                </label>
              </li>
            );
          }
        })}
      </ul>
    </section>
  );
}
