import Axios from 'axios';
import React, { Component } from 'react';

import LeftColumn from './Collumn/LeftColumn/LeftColumn';
import RightColumn from './Collumn/RightColumn/RightColumn';

class Container extends Component {
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
    const { cart } = this.state;

    return (
      <div className="container">
        <div className="row">
          <LeftColumn />
          <RightColumn cart={cart} />
        </div>
      </div>
    );
  }
}

export default Container;
