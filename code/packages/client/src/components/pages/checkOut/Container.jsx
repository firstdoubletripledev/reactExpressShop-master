// import Axios module from axios for Promise based HTTP request
import Axios from 'axios';

// import React module from react for JSX
import React, { PureComponent } from 'react';

// import LeftColumn component
import LeftColumn from './Collumn/LeftColumn/LeftColumn';

// import RightColumn component
import RightColumn from './Collumn/RightColumn/RightColumn';

/**
 *
 *
 * @class Container
 * @extends {PureComponent}
 */
class Container extends PureComponent {
  /**
   *
   *
   * @memberof Container
   */
  state = {
    cart: {},
  };

  /**
   *
   *
   */
  componentDidMount = async () => {
    try {
      await this.getData();
      //console.log(this.cart);
    } catch (error) {
      console.log(error);
    }
  };

  /**
   *
   *
   * @returns
   */
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

  /**
   *
   *
   * @returns
   * @memberof Container
   */
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

// export component
export default Container;
