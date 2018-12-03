import React from 'react';
import { Link } from 'react-router-dom';
import { Popconfirm } from 'antd';

export const columnsUser = (
  onClickLink = () => null,
  handleDelete = () => null,
  dataSourceLength = 0
) => {
  return [
    {
      title: 'Email',
      dataIndex: 'customColumn',
      render: (data = {}) => (
        <div onClick={() => onClickLink(data._id, 'user')}>
          <Link className="Link-blue" to={`/dashboard/user/edit/${data._id}`}>
            {data.email}
          </Link>
        </div>
      ),
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.email.indexOf(value) === 0,
      sorter: ({ email: emailA = '' }, { email: emailB = '' }) =>
        emailA.length - emailB.length,
    },
    {
      title: 'Password',
      dataIndex: 'password',
      defaultSortOrder: 'descend',
      sorter: ({ password: passwordA = '' }, { password: passwordB = '' }) =>
        passwordA.length - passwordB.length,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.address.indexOf(value) === 0,
      sorter: ({ address: addressA = '' }, { address: addressB = '' }) =>
        addressA.length - addressB.length,
    },
    {
      title: 'operation',
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

export const demoColumn = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: name => (
      <div>
        <a className="Link-blue" href="#0">
          {name}
        </a>
      </div>
    ),
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: ({ name: nameA = '' }, { name: nameB = '' }) =>
      nameA.length - nameB.length,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: ({ age: ageA = '' }, { age: ageB = '' }) =>
      ageA.length - ageB.length,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: ({ address: addressA = '' }, { address: addressB = '' }) =>
      addressA.length - addressB.length,
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    render: (text, record) => (
      <Popconfirm
        title="Sure to delete?"
        onConfirm={() => console.log('delete')}
      >
        <a href="#0" className="Link-blue">
          Delete
        </a>
      </Popconfirm>
    ),
  },
];

export const dataUser = [
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

export function onChangeUser(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}
