import React from "react";

import {
  FilterBy,
  // ColorFilter,
  // HeightFilter,
  AvailabilityFilter,
  // BrandFilter,
  PriceFilter,
  Filter
} from "./SearchFilter";
import { SearchFilterControler } from "./SearchFilterControler";

const LeftColumn = ({
  category: { categoryColor = [], categoryHeight = [], categoryBrand = [] }
}) => {
  return (
    <div id="left-column" className="col-12 col-md-3">
      <div id="search_filters_wrapper">
        <SearchFilterControler />
        <div id="search_filters">
          <FilterBy />
          <Filter category={categoryColor} />
          <Filter category={categoryHeight} />
          {/* <HeightFilter categoryHeight={categoryHeight} /> */}
          <AvailabilityFilter />
          <Filter category={categoryBrand} />
          {/* <BrandFilter categoryBrand={categoryBrand} /> */}
          <PriceFilter />
        </div>
      </div>
    </div>
  );
};

export { LeftColumn };
