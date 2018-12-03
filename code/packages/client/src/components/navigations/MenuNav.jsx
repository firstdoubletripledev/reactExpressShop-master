import { Form, Icon, Menu } from 'antd';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { CategoryColumn } from './CategoryColumn';
import { ContactsColumn } from './ContactsColumn';
import { DashboardBar } from './DashboardBar';
import { HomeColumn } from './HomeColumn';
import { LogoColumn } from './LogoColumn';
import { SearchColumn } from './SearchColumn';

// import { LoginBar } from "./LoginBar";
export const SubMenu = Menu.SubMenu;
export const MenuItemGroup = Menu.ItemGroup;
export const FormItem = Form.Item;

class MenuNav extends PureComponent {
  //may cai key xem lai trong antd

  componentDidMount = () => {
    var sl = 5;
    var { dispatch } = this.props;
    dispatch({ type: 'Get_SLItem_In_Session', item: sl });
  };

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
const MenuNavRedux = connect(function(state) {
  return { SLItemCart: state.SLItemCart, isLogin: state.isLogin };
})(MenuNav);

export default MenuNavRedux;
