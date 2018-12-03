// import custom css
import 'slick-carousel/slick/slick-theme.css';

// import custom css
import 'slick-carousel/slick/slick.css';

// import Button, Card component from antd
import { Button, Card } from 'antd';

// import React, PureComponent module from react for JSX
import React, { PureComponent } from 'react';

// import connect function from react-redux
import { connect } from 'react-redux';

// create Meta from card
const { Meta } = Card;

/**
 *
 *
 * @class ItemCard
 * @extends {PureComponent}
 */
class ItemCard extends PureComponent {
  /**
   *
   *
   * @memberof ItemCard
   */
  addItemToCart() {
    var { dispatch } = this.props;
    dispatch({ type: 'Add_Item_To_Cart' });
  }

  /**
   *
   *
   * @returns
   * @memberof ItemCard
   */
  render() {
    return (
      <Card
        style={{ margin: '5px' }}
        cover={
          <img
            alt="example"
            src={this.props.imgPath}
            style={{ height: '180px' }}
          />
        }
        actions={[
          <Button
            size="small"
            icon="shopping-cart"
            onClick={this.addItemToCart.bind(this)}
          >
            ADD TO CART
          </Button>,
        ]}
      >
        <Meta
          style={{ textAlign: 'center' }}
          title="Hoa lan"
          description="Nhập khẩu từ mỹ"
        />
      </Card>
    );
  }
}

/**
 *
 *
 * @param {*} state
 * @returns
 */
const ItemCardRedux = connect(state => {
  return { SLItemCart: state.SLItemCart.state, isLogin: state.isLogin };
})(ItemCard);

// export component
export default ItemCardRedux;
