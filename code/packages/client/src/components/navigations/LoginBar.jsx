import React from "react";
import { Menu } from "antd";

function LoginBar({}) {
  return (
    <>
      <Menu.Item>
        <a href="/login">Sign in</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/register">Sign up</a>
      </Menu.Item>
    </>
  );
}

export default LoginBar;
