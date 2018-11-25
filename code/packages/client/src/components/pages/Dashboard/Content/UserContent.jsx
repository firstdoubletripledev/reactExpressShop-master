import React from 'react';

import { TableUser } from './Components/Table';
import {
  columnsUser,
  dataUser,
  onChangeUser,
} from './Components/table/columnsUser';

export const UserContent = () => (
  <div>
    <TableUser
      columns={columnsUser}
      dataSource={dataUser}
      onChange={onChangeUser}
    />
  </div>
);
