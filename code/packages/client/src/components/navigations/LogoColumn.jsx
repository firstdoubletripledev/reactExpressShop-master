import React from "react";
import { Menu } from "antd";
export function LogoColumn() {
  return (
    <Menu.Item style={{}}>
      <a href="/">
        <img alt="example" src="/images/logo.jpg" style={{ width: "30px" }} />
      </a>
    </Menu.Item>
  );
}
