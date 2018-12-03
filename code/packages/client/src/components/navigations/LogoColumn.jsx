import { Menu } from 'antd';
import React from 'react';

export function LogoColumn() {
  return (
    <Menu.Item style={{}}>
      <a href="/">
        <img alt="example" src="/images/logo.jpg" style={{ width: '30px' }} />
      </a>
    </Menu.Item>
  );
}
