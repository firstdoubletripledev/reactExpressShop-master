// import Dropdown, Menu component from antd
import { Dropdown, Menu } from 'antd';

// import React module from react for JSX
import React, { PureComponent } from 'react';

/**
 *
 *
 * @param {*} changeSortName
 */
const menu = changeSortName => (
  <Menu>
    <Menu.Item>
      <a
        href="#0"
        rel="nofollow"
        className="select-list current js-search-link"
        onClick={() => {
          changeSortName('Relevance');
        }}
      >
        Relevance
      </a>{' '}
    </Menu.Item>
    <Menu.Item>
      <a
        href="#0"
        rel="nofollow"
        className="select-list js-search-link"
        onClick={() => {
          changeSortName('Name, A to Z');
        }}
      >
        Name, A to Z
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        href="#0"
        rel="nofollow"
        className="select-list js-search-link"
        onClick={() => {
          changeSortName('Name, Z to A');
        }}
      >
        Name, Z to A
      </a>{' '}
    </Menu.Item>
    <Menu.Item>
      {' '}
      <a
        href="#0"
        rel="nofollow"
        className="select-list js-search-link"
        onClick={() => {
          changeSortName('Price, low to high');
        }}
      >
        Price, low to high
      </a>{' '}
    </Menu.Item>
    <Menu.Item>
      {' '}
      <a
        href="#0"
        rel="nofollow"
        className="select-list js-search-link"
        onClick={() => {
          changeSortName('Price, high to low');
        }}
      >
        Price, high to low
      </a>{' '}
    </Menu.Item>
  </Menu>
);

/**
 *
 *
 * @export
 * @class TopProductNav
 * @extends {PureComponent}
 */
export class TopProductNav extends PureComponent {
  /**
   *
   *
   * @memberof TopProductNav
   */
  state = {
    sortName: 'Relevance',
  };

  /**
   *
   *
   * @param {*} name
   */
  changeSortName = name => {
    this.setState({
      sortName: name,
    });
    const { onClickSortBy } = this.props;
    onClickSortBy(name);
  };

  /**
   *
   *
   * @returns
   * @memberof TopProductNav
   */
  render() {
    const { sortName } = this.state;
    const { data = [] } = this.props;
    return (
      <div>
        <div id="js-product-list-top" className="row products-selection">
          <div className="col-5 total-products">
            <p className="hidden-sm-down">There are {data.length} products.</p>
            <div className="hidden-md-up filter-button">
              <button
                id="search_filter_toggler"
                className="btn btn-md btn-default"
              >
                Filter
              </button>
            </div>
          </div>
          <div className="col-7">
            <div className="sort-by-row">
              <span className="hidden-xs-down sort-by">Sort by:</span>
              <div className="products-sort-order dropdown">
                <Dropdown overlay={menu(this.changeSortName)}>
                  <a className="ant-dropdown-link" href="#0">
                    {sortName}{' '}
                    <i className="material-icons float-xs-right"></i>
                  </a>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
