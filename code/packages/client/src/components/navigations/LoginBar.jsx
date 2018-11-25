import { Menu } from 'antd';
import React from 'react';

export function LoginBar() {
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
