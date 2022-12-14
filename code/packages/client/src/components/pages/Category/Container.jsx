// import React module from react for JSX
import React, { PureComponent } from 'react';

// import Axios module from axios for Promise based HTTP request
import Axios from 'axios';

// import LeftColumn component
import { LeftColumn } from './Column/Left/LeftColumn';

// import RightColumn component
import { RightColumn } from './Column/Right/RightColumn';

/**
 *
 *
 * @class Container
 * @extends {PureComponent}
 */
class Container extends PureComponent {
  /**
   *
   *
   * @memberof Container
   */
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
      avl: 0,
    },
    filterBy: [],
    typeSort: null,
  };

  /**
   *
   *
   */
  componentDidMount = async () => {
    try {
      const { page = 1 } = this.props;
      // if (typeEvent !== null) {
      //   await this.getDataByColor(typeEvent);
      // }
      await this.getData(page);
    } catch (error) {
      console.log(error);
    }
  };

  /**
   *
   *
   * @param {*} name
   */
  onClickSortBy = async name => {
    await this.setTypeSort(name);
    const { page = 1 } = this.props;
    await this.getData(page);
  };

  /**
   *
   *
   * @param {*} name
   */
  setTypeSort = async name => {
    this.setState({
      typeSort: name,
    });
  };

  /**
   *
   *
   * @param {*} page
   * @returns
   */
  getData = async page => {
    if (this.state.loading === false) {
      this.setState({ loading: true });
    }
    const { typeSort } = this.state;
    const { searchvalue } = this.props;
    let responseProducts = [];
    if (searchvalue !== null) {
      responseProducts = await Axios.get(
        `/api/products/search/${searchvalue}`
      ).catch(error => {
        return console.log(error.response);
      });
      if (!responseProducts) {
        return null;
      }
    } else {
      responseProducts = await getDataByType(typeSort, page);
      if (!responseProducts) {
        return null;
      }
    }
    const {
      data: { data_products = [], current, pages } = [],
    } = responseProducts;
    const stockState = {
      notAvl: 0,
      avl: 0,
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
      return null;
    });
    if (category !== null) {
      const categoryMerge = [].concat.apply([], category);
      const Color = MergeDeepByTag(categoryMerge, 'Color');
      const Height = MergeDeepByTag(categoryMerge, 'Height');
      const Brand = MergeDeepByTag(categoryMerge, 'Brand');

      this.setState({
        data: data_products,
        categoryColor: Color,
        categoryHeight: Height,
        categoryBrand: Brand,
        current,
        pages,
        loading: false,
        Availability: stockState,
      });
    }
  };

  /**
   *
   *
   * @param {*} name
   * @param {*} value
   * @returns
   */
  getDataByColor = async (name, value) => {
    try {
      const res = await Axios.get(
        `/api/categories/search/${name}/${value}/1`
      ).catch(error => {
        return console.log(error.response);
      });
      if (!res) {
        return null;
      }

      if (!res.data || !res.data.products) {
        return;
      }
      this.setState({
        data: res.data.products,
      });
    } catch (error) {
      console.log(error);
    }
  };

  /**
   *
   *
   * @param {*} event
   */
  filterByClearAll = async event => {
    this.setState({
      filterBy: [],
    });
    await this.componentDidMount();
  };

  /**
   *
   *
   * @param {*} [data={}]
   */
  filterByClick = async (data = {}) => {
    const { filterBy = [] } = this.state;
    const check = filterBy.findIndex(function(dataFilterBy) {
      return dataFilterBy.name === data.name;
    });
    if (check === -1) {
      filterBy.push(data);
    } else {
      filterBy[check].value = data.value;
    }
    await this.setState({
      filterBy,
    });
  };

  /**
   *
   *
   * @returns
   * @memberof Container
   */
  render() {
    const {
      data,
      categoryColor,
      categoryHeight,
      categoryBrand,
      current,
      pages,
      loading,
      Availability,
      filterBy,
    } = this.state;

    return (
      <div className="container">
        <div className="row">
          <LeftColumn
            filterByClearAll={this.filterByClearAll}
            filterByClick={this.filterByClick}
            getDataByColor={this.getDataByColor}
            filterBy={filterBy}
            category={{
              categoryColor,
              categoryHeight,
              categoryBrand,
              Availability,
            }}
          />
          <RightColumn
            data={data}
            current={current}
            pages={pages}
            getData={this.getData}
            loading={loading}
            onClickSortBy={this.onClickSortBy}
          />
        </div>
      </div>
    );
  }
}

export default Container;

/**
 *
 *
 * @param {*} type
 * @param {*} page
 * @returns
 */
async function getDataByType(type, page) {
  console.log(type, page);
  try {
    if (type === null) {
      return await Axios.get(`/api/products/page/${page}`);
    } else if (type === 'Name, A to Z') {
      return await Axios.get(`/api/products/sortname/${page}`);
    } else if (type === 'Name, Z to A') {
      return await Axios.get(`/api/products/sortnamedesc/${page}`);
    } else if (type === 'Price, low to high') {
      return await Axios.get(`/api/products/price/${page}`);
    } else if (type === 'Price, high to low') {
      return await Axios.get(`/api/products/pricedesc/${page}`);
    }
    return null;
  } catch (error) {
    console.log(error);
  }
}

/**
 *
 *
 * @param {*} categoryMerge
 * @param {*} typeName
 * @returns
 */
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

    if (findIndexColor === -1) {
      Color.push({ value: data.value, lengthData: 1 });
    } else {
      Color[findIndexColor] = dataColor;
    }
    return null;
  });
  return Color;
}
