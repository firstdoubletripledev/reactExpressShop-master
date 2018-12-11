// import Menu component from antd
import { Menu } from 'antd';

// import React module from react for JSX
import React from 'react';

function LogoColumn() {
  return (
    <Menu.Item style={{}}>
      <a href="/">
        <img alt="example" src="/images/logo.jpg" style={{ width: '30px' }} />
      </a>
    </Menu.Item>
  );
}

// export component
export { LogoColumn };
