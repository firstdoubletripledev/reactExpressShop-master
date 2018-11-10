import React from "react";

export function FilterBy({}) {
  return (
    <>
      <h2 className="h3 hidden-sm-down">Filter By</h2>
      <div
        id="_desktop_search_filters_clear_all"
        className="hidden-sm-down clear-all-wrapper"
      >
        <button
          data-search-url="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=category&id_category=14&id_lang=1"
          className="btn js-search-filters-clear-all"
        >
          Clear all
          <i className="material-icons"></i>
        </button>
      </div>
    </>
  );
}
