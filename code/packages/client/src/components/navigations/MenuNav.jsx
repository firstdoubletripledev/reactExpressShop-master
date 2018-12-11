// import Form, Icon, Menu component from antd
import { Form, Icon, Menu } from 'antd';

// import React module from react for JSX
import React, { PureComponent } from 'react';

// import connect function from react-redux
import { connect } from 'react-redux';

// import CategoryColumn component
import { CategoryColumn } from './CategoryColumn';

// import ContactsColumn component
import { ContactsColumn } from './ContactsColumn';

// import DashboardBar component
import { DashboardBar } from './DashboardBar';

// import HomeColumn component
import { HomeColumn } from './HomeColumn';

// import LogoColumn component
import { LogoColumn } from './LogoColumn';

// import SearchColumn component
import { SearchColumn } from './SearchColumn';

// create and export SubMenu from Menu
export const SubMenu = Menu.SubMenu;

// create and export MenuItemGroup from Menu
export const MenuItemGroup = Menu.ItemGroup;

// create and export FormItem from Menu
export const FormItem = Form.Item;

/**
 *
 *
 * @class MenuNav
 * @extends {PureComponent}
 */
class MenuNav extends PureComponent {
  /**
   *
   *
   */
  componentDidMount = () => {
    var sl = 5;
    var { dispatch } = this.props;
    dispatch({ type: 'Get_SLItem_In_Session', item: sl });
  };

  /**
   *
   *
   * @returns
   * @memberof MenuNav
   */
  render() {
    const { isLogin } = this.props;
    return (
      <Menu onClick={this.handleClick1} mode="horizontal">
        {LogoColumn()}
        {HomeColumn()}
        {CategoryColumn()}
        {SearchColumn()}
        <Menu.Item>
          <a href="/cart">
            <Icon
              type="shopping-cart"
              theme="outlined"
              style={{ marginRight: '0px' }}
            />{' '}
            {this.props.SLItemCart} items in cart
          </a>
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="user" theme="outlined" />
              USER ACCOUNT
            </span>
          }
        >
          {!isLogin ? (
            <Menu.Item>
              <a href="/login">Sign in</a>
            </Menu.Item>
          ) : (
            DashboardBar()
          )}
          {!isLogin ? (
            <Menu.Item>
              <a href="/register">Sign up</a>
            </Menu.Item>
          ) : null}
        </SubMenu>
        {ContactsColumn()}
      </Menu>
    );
  }
}

/**
 *
 *
 * @param {*} state
 * @returns
 */
const MenuNavRedux = connect(function(state) {
  return { SLItemCart: state.SLItemCart, isLogin: state.isLogin };
})(MenuNav);

// export component
export default MenuNavRedux;
