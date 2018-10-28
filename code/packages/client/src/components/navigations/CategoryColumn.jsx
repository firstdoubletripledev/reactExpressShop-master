import React from "react";

import { Menu, Icon } from "antd";
import { SubMenu, MenuItemGroup } from "./MenuNav";
export function CategoryColumn() {
  return (
    <SubMenu
      title={
        <span className="submenu-title-wrapper">
          <a href="/category">
            {" "}
            <Icon type="bars" theme="outlined" style={{ marginRight: "0px" }} />
            CATEGORY
          </a>
        </span>
      }
    >
      <MenuItemGroup title="Everyday">
        <Menu.Item>Favourite Flowers</Menu.Item>
        <Menu.Item>Flowers</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="Occasions">
        <Menu.Item>Birthday Flowers</Menu.Item>
        <Menu.Item>Wedding Flowers</Menu.Item>
        <Menu.Item>Womens Day Flower</Menu.Item>
      </MenuItemGroup>
    </SubMenu>
  );
}
