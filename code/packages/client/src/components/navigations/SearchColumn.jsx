import { Button, Form, Icon, Input, Menu } from 'antd';
import React from 'react';

import { FormItem } from './MenuNav';

export function SearchColumn() {
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
