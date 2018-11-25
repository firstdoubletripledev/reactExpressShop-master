import { Icon, Menu } from 'antd';
import React from 'react';

export function HomeColumn() {
  return (
    <Menu.Item>
      <Icon type="home" theme="outlined" style={{ marginRight: '0px' }} />
      HOME
    </Menu.Item>
  );
}
