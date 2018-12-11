import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    // User clicked submit
    //   let {token} = await this.props.stripe.createToken({name: "Name"});
    // let response = await fetch("/charge", {
    //   method: "POST",
    //   headers: {"Content-Type": "text/plain"},
    //   body: token.id
    // });

    //if (response.ok) console.log("Purchase Complete!")

    alert(`${this.props.firstName}`);
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <div className="checkout">
        <CardElement />
        <footer
          className="form-footer clearfix"
          style={{ textAlign: 'center' }}
        >
          <button
            className="continue btn btn-primary float-xs-right"
            name="submit"
            onClick={this.submit}
          >
            Checkout{' '}
          </button>
        </footer>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
