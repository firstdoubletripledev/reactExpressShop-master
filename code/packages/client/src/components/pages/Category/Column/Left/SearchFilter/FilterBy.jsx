import React from "react";

export function FilterBy({}) {
  return (
    <>
      <h2 className="h3 hidden-sm-down">Filter By</h2>
      <div
        id="_desktop_search_filters_clear_all"
        className="hidden-sm-down clear-all-wrapper"
      >
        <button className="btn js-search-filters-clear-all">
          Clear all
          <i className="material-icons"></i>
        </button>
      </div>
    </>
  );
}
