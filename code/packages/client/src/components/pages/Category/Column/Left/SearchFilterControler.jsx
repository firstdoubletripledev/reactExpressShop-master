import React from "react";

export function SearchFilterControler({}) {
  return (
    <div id="search_filter_controls" className="hidden-md-up">
      <span id="_mobile_search_filters_clear_all" />
      <button className="ok btn-ok">
        <span>OK</span>
      </button>
      <button className="ok filter-close">
        <i className="material-icons"></i>
      </button>
    </div>
  );
}
