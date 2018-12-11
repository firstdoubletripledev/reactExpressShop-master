// import Icon, Menu component from antd
import { Icon, Menu } from 'antd';

// import React module from react for JSX
import React from 'react';

/**
 *
 *
 * @returns
 */
function HomeColumn() {
  return (
    <Menu.Item>
      <Icon type="home" theme="outlined" style={{ marginRight: '0px' }} />
      HOME
    </Menu.Item>
  );
}

// export component
export { HomeColumn };
