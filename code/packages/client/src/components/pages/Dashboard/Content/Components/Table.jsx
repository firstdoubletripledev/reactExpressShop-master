import React from 'react';
import { Table } from 'antd';
import { columnsUser, dataUser, onChangeUser } from './table/columnsUser';

const TableUser = ({
  columns = columnsUser,
  dataSource = dataUser,
  onChange = onChangeUser,
}) => (
  <>
    {console.log(dataSource)}
    <Table
      className="dashboard-table"
      columns={columns}
      dataSource={dataSource}
      onChange={onChange}
    />
  </>
);

export { TableUser };
