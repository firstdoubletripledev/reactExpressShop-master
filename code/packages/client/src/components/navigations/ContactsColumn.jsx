// import Icon, Menu component from antd
import { Icon, Menu } from 'antd';

// import React module from react for JSX
import React from 'react';

/**
 *
 *
 * @returns
 */
function ContactsColumn() {
  return (
    <Menu.Item>
      <Icon type="contacts" theme="outlined" /> CONTACT US
    </Menu.Item>
  );
}

// export component
export { ContactsColumn };
