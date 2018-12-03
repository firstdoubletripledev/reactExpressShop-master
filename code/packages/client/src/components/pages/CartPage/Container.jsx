import Axios from 'axios';
import React, { PureComponent } from 'react';

import LeftColumn from './Column/LeftColumn/LeftColumn';
import RightColumn from './Column/RightColumn/RightColumn';

class Container extends PureComponent {
  state = {
    cart: {},
  };
  componentDidMount = async () => {
    try {
      await this.getData();
      //console.log(this.cart);
    } catch (error) {
      console.log(error);
    }
  };

  getData = async () => {
    var cartData = await Axios.get(`/api/cart/`).catch(error => {
      return console.log(error.response);
    });
    if (!cartData) {
      return null;
    }

    this.setState({
      cart: cartData.data,
    });
  };

  render() {
    // const { cart } = this.state;

    return (
      <div className="container">
        <div className="cart-grid row">
          {/* Left Block: cart product informations & shpping */}
          <LeftColumn />

          {/* Right Block: cart subtotal & cart total */}
          <RightColumn />
        </div>
      </div>
    );
  }
}

export default Container;
