// import Menu component from antd
import { Menu } from 'antd';

// import React module from react for JSX
import React from 'react';

/**
 *
 *
 * @returns
 */
function LoginBar() {
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

// export component
export { LoginBar };
