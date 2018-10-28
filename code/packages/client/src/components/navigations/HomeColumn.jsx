import React from "react";
import { Menu, Icon } from "antd";
export function HomeColumn() {
  return (
    <Menu.Item>
      <Icon type="home" theme="outlined" style={{ marginRight: "0px" }} />
      HOME
    </Menu.Item>
  );
}
