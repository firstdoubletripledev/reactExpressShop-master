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
  },
  getDataByColor = () => null,
  filterByClearAll = () => null,
  filterByClick = () => null,
  filterBy = ""
}) => {
  return (
    <div id="left-column" className="col-12 col-md-3">
      <div id="search_filters_wrapper">
        <SearchFilterControler />
        <div id="search_filters">
          <FilterBy filterByClearAll={filterByClearAll} />
          <div className="filters-by-list make-it-gap">
            {filterBy.map(data => {
              if (data.name === "Color") {
                return (
                  <div className="filters-by-list">
                    <span
                      className="color"
                      style={{
                        backgroundColor: data.value
                      }}
                    />
                    <p className="_gray-darker search-link js-search-link">
                      {data.value}
                    </p>
                  </div>
                );
              } else {
                return (
                  <div>
                    <p className="_gray-darker search-link js-search-link">
                      {data.value}
                    </p>
                  </div>
                );
              }
            })}
          </div>
          <Filter
            filterByClick={filterByClick}
            category={categoryColor}
            type="Color"
            getDataByColor={getDataByColor}
          />
          <Filter
            filterByClick={filterByClick}
            category={categoryHeight}
            type="Height"
          />
          {/* <HeightFilter categoryHeight={categoryHeight} /> */}
          <AvailabilityFilter
            filterByClick={filterByClick}
            Availability={Availability}
          />
          <Filter
            filterByClick={filterByClick}
            category={categoryBrand}
            type="Brand"
          />
          {/* <BrandFilter categoryBrand={categoryBrand} /> */}
          {/* <PriceFilter /> */}
        </div>
      </div>
    </div>
  );
};

export { LeftColumn };
