import { Button, Table } from 'antd';
import React, { PureComponent } from 'react';

import {
  columnsUser,
  dataUser,
  onChangeUser,
  demoColumn,
} from './table/columnsUser';
import { FormUser } from './FormUser';

const ListInput = {
  User: [
    {
      label: 'Email',
      value: 'email',
    },
    {
      label: 'Password',
      value: 'password',
    },
    {
      label: 'Address',
      value: 'address',
    },
    {
      label: 'Phone Number',
      value: 'phonenumber',
    },
    {
      label: 'Role',
      value: 'role',
    },
  ],
  Item: [
    {
      label: 'Code',
      value: 'code',
    },
    {
      label: 'Name',
      value: 'name',
    },
    {
      label: 'PathImg',
      value: 'pathImg',
    },
    {
      label: 'Price',
      value: 'price',
    },
    {
      label: 'Discount Price',
      value: 'discountPrice',
    },
    {
      label: 'Description',
      value: 'description',
    },
    {
      label: 'Stock',
      value: 'stock',
    },
    {
      label: 'Category',
      value: 'category',
    },
    {
      label: 'Status',
      value: 'status',
    },
    {
      label: 'Gallery Image',
      value: 'galleryImage',
    },
  ],
  Order: [
    {
      label: 'Code',
      value: 'code',
    },
    {
      label: 'Create Date',
      value: 'createdate',
    },
    {
      label: 'Status',
      value: 'status',
    },
    {
      label: 'User',
      value: 'user',
    },
    {
      label: 'First Name',
      value: 'firstName',
    },
    {
      label: 'Last Name',
      value: 'lastName',
    },
    {
      label: 'Address Ship',
      value: 'addressShip',
    },
    {
      label: 'Phone Number Ship',
      value: 'phoneNumberShip',
    },
    {
      label: 'Cart',
      value: 'cart',
    },
  ],
};

class TableDashboard extends PureComponent {
  state = {
    isActiveForm: 0,
  };

  onClickAddNew = () => {
    this.setState({
      isActiveForm: 1,
    });
  };

  render() {
    const {
      columns = demoColumn,
      dataSource = dataUser,
      onChange = onChangeUser,
      typeTable = '',
      loading = false,
      isActiveFormEdit = 0,
      dataInput = {},
    } = this.props;

    const listInput = ListInput[typeTable];

    const { isActiveForm = 0 } = this.state;
    if (isActiveFormEdit === true) {
      return (
        <FormUser
          listInput={listInput}
          typeTable={typeTable}
          typeInput="edit"
          dataInput={dataInput}
        />
      );
    } else if (isActiveForm === 1) {
      return (
        <FormUser
          listInput={listInput}
          typeTable={typeTable}
          typeInput="addnew"
        />
      );
    } else {
      return (
        <>
          <Button
            onClick={this.onClickAddNew}
            type="primary"
            style={{ marginBottom: 16 }}
          >
            Add new
          </Button>

          <Table
            className="dashboard-table"
            columns={columns}
            dataSource={dataSource}
            onChange={onChange}
            rowKey="_id"
            loading={loading}
          />
        </>
      );
    }
  }
}

export { TableDashboard };
