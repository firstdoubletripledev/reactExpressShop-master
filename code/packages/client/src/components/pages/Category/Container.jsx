import React, { Component } from "react";
import Axios from "axios";

import { LeftColumn } from "./Column/Left/LeftColumn";
import { RightColumn } from "./Column/Right/RightColumn";

class Container extends Component {
  state = {
    data: [],
    categoryColor: [],
    categoryHeight: [],
    categoryBrand: [],
    current: 1,
    pages: 1
  };
  componentDidMount = async () => {
    try {
      const { page = 1 } = this.props;
      await this.getData(page);
    } catch (error) {
      console.log(error);
    }
  };

  getData = async page => {
    const responseProducts = await Axios.get(`/api/products/page/${page}`);
    const {
      data: { data_products = [], current, pages } = []
    } = responseProducts;
    const category = data_products.map(({ category, code }) => {
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
      data: data_products,
      categoryColor,
      categoryHeight,
      categoryBrand,
      current,
      pages
    });
  };

  render() {
    const {
      data,
      categoryColor,
      categoryHeight,
      categoryBrand,
      current,
      pages
    } = this.state;

    return (
      <div className="container">
        <div className="row">
          <LeftColumn
            category={{ categoryColor, categoryHeight, categoryBrand }}
          />
          <RightColumn
            data={data}
            current={current}
            pages={pages}
            getData={this.getData}
          />
        </div>
      </div>
    );
  }
}

export default Container;
