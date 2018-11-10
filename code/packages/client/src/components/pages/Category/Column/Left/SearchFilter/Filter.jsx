import React from "react";

export function Filter({ category = [], type = null }) {
  if (type === null) {
    return null;
  }
  return (
    <section className="facet clearfix">
      <h3 className="facet-title hidden-sm-down">{type}</h3>
      <div
        className="title hidden-md-up"
        data-target="#facet_21941"
        data-toggle="collapse"
      >
        <h3 className="facet-title">{type}</h3>
        <span className="navbar-toggler collapse-icons">
          <i className="material-icons add"></i>
          <i className="material-icons remove"></i>
        </span>
      </div>
      <ul id="facet_21941" className="collapse">
        {category.map((data, i) => {
          if (data !== null) {
            return (
              <li key={`facet_21941-${data}-${i}`}>
                <label className="facet-label" htmlFor="facet_input_21941_0">
                  <span className="custom-checkbox">
                    <input
                      id="facet_input_21941_0"
                      data-search-url="#0"
                      type="checkbox"
                    />
                    <span
                      className="color"
                      style={{
                        backgroundColor: data
                      }}
                    />
                  </span>
                  <a
                    href="#0"
                    className="_gray-darker search-link js-search-link"
                    rel="nofollow"
                  >
                    {data}
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
