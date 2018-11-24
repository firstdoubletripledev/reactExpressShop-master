import React from 'react';
import { Button } from 'antd';

import { TableUser } from './Components/Table';
import {
  onChangeItem,
  dataItem,
  columnsItem,
} from './Components/table/columnsItem';

export const ItemContent = () => (
  <div>
    {' '}
    <Button
      onClick={() => {
        console.log('add news');
      }}
      type="primary"
      style={{ marginBottom: 16 }}
    >
      Add a row
    </Button>
    <TableUser
      columns={columnsItem}
      dataSource={dataItem}
      onChange={onChangeItem}
    />
  </div>
);
