// import Button, Col, Input, Row, Table component from antd
import { Button, Col, Input, Row, Table } from 'antd';

// import React module from react for JSX
import React, { PureComponent } from 'react';

/**
 *
 *
 * @class CartTable
 * @extends {PureComponent}
 */
class CartTable extends PureComponent {
  /**
   *
   *
   * @memberof CartTable
   */
  state = {
    itemsInCart: [],
  };
  /**
   *
   *
   * @memberof CartTable
   */
  componentDidMount() {
    //const res = await Axios.get("/api/books");
    /* const datasave =res.data.map(item => {
        const dataItem = {
        };
        return dataItem;
      });
      */
    const datasave = [
      {
        key: '1',
        image: 'John Brown',
        productName: 32,
        unitPrice: 'New York No. 1 Lake Park',
        qty: ['nice', 'developer'],
        subtotal: '4000',
      },
      {
        key: '2',
        image: 'John Brown',
        productName: 32,
        unitPrice: 'New York No. 1 Lake Park',
        qty: ['nice', 'developer'],
        subtotal: '4000',
      },
      {
        key: '3',
        image: 'John Brown',
        productName: 32,
        unitPrice: 'New York No. 1 Lake Park',
        qty: ['nice', 'developer'],
        subtotal: '4000',
      },
    ];
    this.setState({ itemsInCart: datasave });
  }

  /**
   *
   *
   * @returns
   * @memberof CartTable
   */
  render() {
    const columns = [
      {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render: text => <a href="#0">{text}</a>,
      },
      {
        title: 'PRODUCT NAME',
        dataIndex: 'productName',
        key: 'productName',
        render: text => <a href="#0">{text}</a>,
      },
      {
        title: 'UNIT PRICE',
        dataIndex: 'unitPrice',
        key: 'unitPrice',
      },
      {
        title: 'QTY',
        dataIndex: 'qty',
        key: 'qty',
        render: dataIndex => (
          <span>
            <Button type="primary" size="small">
              -
            </Button>
            <Input defaultValue={dataIndex} size="small" />
            <Button type="primary" size="small">
              +
            </Button>
          </span>
        ),
      },
      {
        title: 'SUBTOTAL',
        key: 'subtotal',
        dataIndex: 'subtotal',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a href="#0">Delete</a>
          </span>
        ),
      },
    ];

    const { itemsInCart } = this.state;

    return (
      <div>
        <Table columns={columns} dataSource={itemsInCart} />
        <Row>
          <Col lg={12}>
            <Button> CONTINUE SHOPPING </Button>
          </Col>
          <Col lg={12}>
            <Button> CLEAR CART </Button>
            <Button> UPDATE CART </Button>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <p>Enter your coupon code if you have one:</p>
            <Input placeholder="Coupon code" />
            <Button> APPLY COUPON </Button>
          </Col>
          <Col lg={12}>
            <p>Subtotal: 10000</p>
            <p>Shipping: 200</p>
            <p>Total: 10200</p>
            <Button>
              {' '}
              <a href="/checkout"> PROCEED TO CHECKOUT </a>{' '}
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

// export component
export default CartTable;
