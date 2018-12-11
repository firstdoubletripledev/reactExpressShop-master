// import React module from react for JSX
import React from 'react';

// import Route module from react-router-dom for router in react
import { Link } from 'react-router-dom';

// import Popconfirm component from antd
import { Popconfirm } from 'antd';

export const columnsOrder = (
  onClickLink = () => null,
  handleDelete = () => null,
  dataSourceLength = 0
) => {
  return [
    {
      title: 'Name',
      dataIndex: 'customColumn',
      render: (data = {}) => (
        <div onClick={() => onClickLink(data._id, 'order')}>
          <Link className="Link-blue" to={`/dashboard/order/edit/${data._id}`}>
            {data.name}
          </Link>
        </div>
      ),
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.email.indexOf(value) === 0,
      sorter: ({ email: emailA = '' }, { email: emailB = '' }) =>
        emailA.length - emailB.length,
    },
    {
      title: 'Address',
      dataIndex: 'addressShip',
      defaultSortOrder: 'descend',
      onFilter: (value, record) => record.address.indexOf(value) === 0,
      sorter: ({ password: passwordA = '' }, { password: passwordB = '' }) =>
        passwordA.length - passwordB.length,
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumberShip',
      onFilter: (value, record) => record.address.indexOf(value) === 0,
      sorter: ({ address: addressA = '' }, { address: addressB = '' }) =>
        addressA.length - addressB.length,
    },
    {
      title: 'Price',
      dataIndex: 'cart',
      onFilter: (value, record) => record.address.indexOf(value) === 0,
      sorter: ({ address: addressA = '' }, { address: addressB = '' }) =>
        addressA.length - addressB.length,
      render: (data = {}) => data.totalPrice,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      onFilter: (value, record) => record.address.indexOf(value) === 0,
      sorter: ({ address: addressA = '' }, { address: addressB = '' }) =>
        addressA.length - addressB.length,
    },
    {
      title: 'Option',
      dataIndex: 'operation',
      render: (text, record) => {
        return dataSourceLength >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record._id)}
          >
            <a className="Link-blue" href="#0">
              Delete
            </a>
          </Popconfirm>
        ) : null;
      },
    },
  ];
};

export const dataOrder = [
  {
    _id: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    _id: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    _id: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    _id: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

/**
 *
 *
 * @export
 * @param {*} pagination
 * @param {*} filters
 * @param {*} sorter
 */
export function onChangeOrder(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}
