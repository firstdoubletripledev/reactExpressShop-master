// import React module from react for JSX
import React from 'react';

// import Route module from react-router-dom for router in react
import { Link } from 'react-router-dom';

// import Popconfirm component from antd
import { Popconfirm } from 'antd';

/**
 *
 *
 * @param {*} [onClickLink=() => null]
 * @param {*} [handleDelete=() => null]
 * @param {number} [dataSourceLength=0]
 * @returns
 */
const columnsItem = (
  onClickLink = () => null,
  handleDelete = () => null,
  dataSourceLength = 0
) => {
  return [
    {
      title: 'Name',
      dataIndex: 'customColumn',
      render: (data = {}) => (
        <div
          className="center-flex"
          onClick={() => onClickLink(data._id, 'item')}
        >
          <div className="dashboard-item-collum-image">
            <img src={data.pathImg} alt={data.name} />
          </div>
          <Link
            className="dashboard-item-collum-title Link-blue"
            to={`/dashboard/products/edit/${data._id}`}
          >
            {data.name}
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
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (
        { name: { name: nameA = '' } = '' },
        { name: { name: nameB = '' } = '' }
      ) => nameA.length - nameB.length,
    },
    {
      title: 'Inventory',
      dataIndex: 'stock',
      defaultSortOrder: 'descend',
      sorter: ({ stock: stockA = '' }, { stock: stockB = '' }) => {
        if (stockA !== null && stockB !== null) {
          return stockA.length - stockB.length;
        }
      },
    },
    {
      title: 'Price',
      dataIndex: 'price',
      defaultSortOrder: 'descend',
      sorter: ({ price: priceA = '' }, { price: priceB = '' }) => {
        return priceA - priceB;
      },
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

const dataItem = [
  {
    _id: '1',
    name: {
      name: 'Autumn Shades Perfect Gift',
      pathImg: '/images/shutterstock-157015517.png',
    },
    stock: '9 in stock',
    price: 160,
  },
  {
    _id: '2',
    name: {
      name: 'Julien Macdonald Dazzling...1',
      pathImg: '/images/shutterstock-313501865.png',
    },
    stock: '1 in stock',
    price: 634,
  },
  {
    _id: '3',
    name: {
      name: 'Autumn Shades Perfect Gift 2',
      pathImg: '/images/shutterstock-1110861971.png',
    },
    stock: '6 in stock',
    price: 124,
  },
  {
    _id: '4',
    name: {
      name: 'Autumn Shades Perfect Gift 3',
      pathImg: '/images/shutterstock-519968677.png',
    },
    stock: '10 in stock',
    price: 201,
  },
  {
    _id: '5',
    name: {
      name: 'Autumn Shades Perfect Gift 4',
      pathImg: '/images/shutterstock-325938194.png',
    },
    stock: '0 in stock',
    price: 293,
  },
];

/**
 *
 *
 * @param {*} pagination
 * @param {*} filters
 * @param {*} sorter
 */
function onChangeItem(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

// export component
export { columnsItem, dataItem, onChangeItem };
