import React, { Component } from "react";
import Axios from "axios";
import { mergeAll, concat, mergeDeepWithKey } from "ramda";

import { LeftColumn } from "./Column/Left/LeftColumn";
import { RightColumn } from "./Column/Right/RightColumn";

class Container extends Component {
  state = {
    data: [],
    categoryColor: [],
    categoryHeight: [],
    categoryBrand: [],
    current: 1,
    pages: 1,
    loading: false,
    Availability: {
      notAvl: 0,
      avl: 0
    }
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
    if (this.state.loading === false) {
      this.setState({ loading: true });
    }
    const responseProducts = await Axios.get(`/api/products/page/${page}`);
    const {
      data: { data_products = [], current, pages } = []
    } = responseProducts;
    const stockState = {
      notAvl: 0,
      avl: 0
    };
    const category = data_products.map(({ category, stock }) => {
      if (Number(stock) > 0) {
        stockState.avl++;
      }
      if (Number(stock) === 0) {
        stockState.notAvl++;
      }
      if (category && category.length > 0) {
        return category;
      }
    });
    const categoryMerge = [].concat.apply([], category);
    const Color = MergeDeepByTag(categoryMerge, "Color");
    const Height = MergeDeepByTag(categoryMerge, "Height");
    const Brand = MergeDeepByTag(categoryMerge, "Brand");

    this.setState({
      data: data_products,
      categoryColor: Color,
      categoryHeight: Height,
      categoryBrand: Brand,
      current,
      pages,
      loading: false,
      Availability: stockState
    });
  };

  render() {
    const {
      data,
      categoryColor,
      categoryHeight,
      categoryBrand,
      current,
      pages,
      loading,
      Availability
    } = this.state;

    return (
      <div className="container">
        <div className="row">
          <LeftColumn
            category={{
              categoryColor,
              categoryHeight,
              categoryBrand,
              Availability
            }}
          />
          <RightColumn
            data={data}
            current={current}
            pages={pages}
            getData={this.getData}
            loading={loading}
          />
        </div>
      </div>
    );
  }
}

export default Container;
function MergeDeepByTag(categoryMerge, typeName) {
  const categoryColor = categoryMerge.map(({ name, value }) => {
    if (name === typeName) {
      return { name, value };
    }
    return null;
  });
  const categoryColorNotUndefind = categoryColor.filter(
    data => data !== null && data.name === typeName
  );
  let Color = [];
  categoryColorNotUndefind.map(data => {
    let dataColor = {};
    let findIndexColor = -1;

    if (Color[0]) {
      findIndexColor = Color.findIndex(function(element) {
        const ColorSum = categoryColorNotUndefind.filter(
          data => data.value === element.value
        );

        dataColor = { value: element.value, lengthData: ColorSum.length };
        return element.value === data.value;
      });
    }
    console.log(findIndexColor, dataColor);

    if (findIndexColor === -1) {
      Color.push({ value: data.value, lengthData: 1 });
    } else {
      Color[findIndexColor] = dataColor;
    }
  });
  return Color;
}
