// import Button, Form, Icon, Input, Menu component from antd
import { Button, Form, Icon, Input, Menu } from 'antd';

// import React module from react for JSX
import React from 'react';

// import FormItem compponent
import { FormItem } from './MenuNav';

/**
 *
 *
 * @returns
 */
function SearchColumn() {
  return (
    <Menu.Item>
      <Form layout="inline" style={{ marginBottom: '3px' }}>
        <FormItem style={{ marginRight: '3px' }}>
          <Input
            prefix={<Icon type="search" theme="outlined" />}
            placeholder="Search in Shop..."
          />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </FormItem>
      </Form>
    </Menu.Item>
  );
}

// export component
export { SearchColumn };
