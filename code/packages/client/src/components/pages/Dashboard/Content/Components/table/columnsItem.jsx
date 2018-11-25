import React from 'react';

const columnsItem = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (data = {}) => (
      <div className="center-flex">
        <div className="dashboard-item-collum-image">
          <img src={data.pathImg} alt={data.name} />
        </div>
        <a className="dashboard-item-collum-title" href="#0">
          {data.name}
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
      return stockA.length - stockB.length;
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
];

const dataItem = [
  {
    key: '1',
    name: {
      name: 'Autumn Shades Perfect Gift',
      pathImg: '/images/shutterstock-157015517.png',
    },
    stock: '9 in stock',
    price: 160,
  },
  {
    key: '2',
    name: {
      name: 'Julien Macdonald Dazzling...1',
      pathImg: '/images/shutterstock-313501865.png',
    },
    stock: '1 in stock',
    price: 634,
  },
  {
    key: '3',
    name: {
      name: 'Autumn Shades Perfect Gift 2',
      pathImg: '/images/shutterstock-1110861971.png',
    },
    stock: '6 in stock',
    price: 124,
  },
  {
    key: '4',
    name: {
      name: 'Autumn Shades Perfect Gift 3',
      pathImg: '/images/shutterstock-519968677.png',
    },
    stock: '10 in stock',
    price: 201,
  },
  {
    key: '5',
    name: {
      name: 'Autumn Shades Perfect Gift 4',
      pathImg: '/images/shutterstock-325938194.png',
    },
    stock: '0 in stock',
    price: 293,
  },
];

function onChangeItem(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

export { columnsItem, dataItem, onChangeItem };
