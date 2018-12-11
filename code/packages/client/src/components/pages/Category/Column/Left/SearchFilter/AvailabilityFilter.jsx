// import React module from react for JSX
import React from 'react';

/**
 *
 *
 * @export
 * @param {*} {
 *   Availability: { notAvl = 0, avl = 0 },
 *   filterByClick,
 * }
 * @returns
 */
export function AvailabilityFilter({
  Availability: { notAvl = 0, avl = 0 },
  filterByClick,
}) {
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
              <input id="facet_input_24152_0" type="checkbox" />
              <span className="ps-shown-by-js">
                <i className="material-icons checkbox-checked"></i>
              </span>
            </span>
            <a
              href="#0"
              className="_gray-darker search-link js-search-link"
              rel="nofollow"
              onClick={() => {
                filterByClick({ name: 'Stock', value: 'Not available' });
              }}
            >
              Not available
              <span className="magnitude">({notAvl})</span>
            </a>
          </label>
        </li>
        <li>
          <label className="facet-label" htmlFor="facet_input_24152_1">
            <span className="custom-checkbox">
              <input id="facet_input_24152_1" type="checkbox" />
              <span className="ps-shown-by-js">
                <i className="material-icons checkbox-checked"></i>
              </span>
            </span>
            <a
              href="#0"
              className="_gray-darker search-link js-search-link"
              rel="nofollow"
              onClick={() => {
                filterByClick({ name: 'Stock', value: 'In stock' });
              }}
            >
              In stock
              <span className="magnitude">({avl})</span>
            </a>
          </label>
        </li>
      </ul>
    </section>
  );
}
