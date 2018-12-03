// import React module from react for JSX
import React, { PureComponent } from 'react';

/**
 *
 *
 * @class AddToCard
 * @extends {PureComponent}
 */
class AddToCard extends PureComponent {
  /**
   *
   *
   * @memberof AddToCard
   */
  state = {
    quantity: 1,
  };

  /**
   *
   *
   */
  plusOne = () => {
    const { quantity: preQuantity } = this.state;
    this.setState({
      quantity: preQuantity + 1,
    });
  };
  /**
   *
   *
   */
  minusOne = () => {
    const { quantity: preQuantity } = this.state;
    if (preQuantity > 1) {
      this.setState({
        quantity: preQuantity - 1,
      });
    }
  };

  /**
   *
   *
   * @returns
   * @memberof AddToCard
   */
  render() {
    const { quantity = 1 } = this.state;
    return (
      <div className="product-add-to-cart">
        <div className="product-quantity clearfix">
          <span className="control-label">Quantity: </span>
          <br />
          <div className="qty">
            <div className="input-group bootstrap-touchspin">
              <span
                className="input-group-addon bootstrap-touchspin-prefix"
                style={{
                  display: 'none',
                }}
              />
              <input
                type="text"
                name="qty"
                id="quantity_wanted"
                defaultValue={1}
                value={quantity}
                className="input-group form-control"
                min={1}
                aria-label="Quantity"
                style={{
                  display: 'block',
                }}
              />
              <span
                className="input-group-addon bootstrap-touchspin-postfix"
                style={{
                  display: 'none',
                }}
              />
              <span className="input-group-btn-vertical">
                <button
                  className="btn btn-touchspin js-touchspin bootstrap-touchspin-up"
                  type="button"
                  onClick={this.plusOne}
                >
                  <i className="touchspin-up" />
                </button>
                <button
                  className="btn btn-touchspin js-touchspin bootstrap-touchspin-down"
                  type="button"
                  onClick={this.minusOne}
                >
                  <i className="touchspin-down" />
                </button>
              </span>
            </div>
          </div>
        </div>
        <div
          className="btn btn-md btn-primary add-to-cart"
          onClick={() => {
            console.log('add to card');
            console.log(this.state);
            console.log(this.props);
          }}
        >
          Add to cart
        </div>

        <span id="product-availability" />
        <p className="product-minimal-quantity" />
      </div>
    );
  }
}

// export component
export { AddToCard };
