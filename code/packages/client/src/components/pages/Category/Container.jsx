import React, { Component } from "react";
import Axios from "axios";

import { LeftColumn } from "./Column/Left/LeftColumn";
import { RightColumn } from "./Column/Right/RightColumn";

class Container extends Component {
  state = {
    data: [],
    categoryColor: [],
    categoryHeight: [],
    categoryBrand: []
  };
  componentDidMount = async () => {
    try {
      const responseProducts = await Axios.get("/api/products");
      const { data = [] } = responseProducts;
      const category = data.map(({ category, code }) => {
        if (category && category.length > 0) {
          return category;
        }
      });

      const categoryMerge = [].concat.apply([], category);
      const categoryColor = categoryMerge.filter(({ name }) => {
        return name === "Color";
      });
      const categoryHeight = categoryMerge.filter(({ name }) => {
        return name === "Height";
      });
      const categoryBrand = categoryMerge.filter(({ name }) => {
        return name === "Brand";
      });

      this.setState({
        data,
        categoryColor,
        categoryHeight,
        categoryBrand
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { data, categoryColor, categoryHeight, categoryBrand } = this.state;

    return (
      <div className="container">
        <div className="row">
          <LeftColumn
            category={{ categoryColor, categoryHeight, categoryBrand }}
          />
          <RightColumn data={data} />
        </div>
      </div>
    );
  }
}

export default Container;
