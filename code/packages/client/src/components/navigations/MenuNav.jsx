import React, { Component } from "react";
import { Menu, Icon, Form } from "antd";
import { connect } from "react-redux";

import LoginBar from "./LoginBar";
import { DashboardBar } from "./DashboardBar";
import { ContactsColumn } from "./ContactsColumn";
import { SearchColumn } from "./SearchColumn";
import { CategoryColumn } from "./CategoryColumn";
import { HomeColumn } from "./HomeColumn";
import { LogoColumn } from "./LogoColumn";

export const SubMenu = Menu.SubMenu;
export const MenuItemGroup = Menu.ItemGroup;
export const FormItem = Form.Item;

class MenuNav extends Component {
  //may cai key xem lai trong antd

  componentDidMount = () => {
    var sl = 5;
    var { dispatch } = this.props;
    dispatch({ type: "Get_SLItem_In_Session", item: sl });
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
              style={{ marginRight: "0px" }}
            />{" "}
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
          {!isLogin ? <LoginBar /> : DashboardBar()}
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
