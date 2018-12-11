// import Icon, Menu component from antd
import { Icon, Menu } from 'antd';

// import React module from react for JSX
import React from 'react';

// import MenuItemGroup, SubMenu component
import { MenuItemGroup, SubMenu } from './MenuNav';

/**
 *
 *
 * @returns
 */
function CategoryColumn() {
  return (
    <SubMenu
      title={
        <span className="submenu-title-wrapper">
          <a href="/category">
            {' '}
            <Icon type="bars" theme="outlined" style={{ marginRight: '0px' }} />
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

// export component
export { CategoryColumn };
