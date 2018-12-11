// import Menu component from antd
import { Menu } from 'antd';

// import React module from react for JSX
import React from 'react';

/**
 *
 *
 * @returns
 */
function DashboardBar() {
  return (
    <Menu.Item>
      <a href="/dashboard">Dashboar</a>
    </Menu.Item>
  );
}

// export component
export { DashboardBar };
