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
  category: {
    categoryColor = [],
    categoryHeight = [],
    categoryBrand = [],
    Availability = {}
  }
}) => {
  return (
    <div id="left-column" className="col-12 col-md-3">
      <div id="search_filters_wrapper">
        <SearchFilterControler />
        <div id="search_filters">
          <FilterBy />
          <Filter category={categoryColor} type="Color" />
          <Filter category={categoryHeight} type="Height" />
          {/* <HeightFilter categoryHeight={categoryHeight} /> */}
          <AvailabilityFilter Availability={Availability} />
          <Filter category={categoryBrand} type="Brand" />
          {/* <BrandFilter categoryBrand={categoryBrand} /> */}
          <PriceFilter />
        </div>
      </div>
    </div>
  );
};

export { LeftColumn };
