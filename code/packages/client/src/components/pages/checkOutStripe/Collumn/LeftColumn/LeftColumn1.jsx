import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './checkoutForm1';

class LeftColumn extends Component {
  constructor() {
    super();
  }
  componentDidMount = async () => {};

  render() {
    return (
      <div className="col-md-8">
        <section
          id="checkout-personal-information-step"
          className="checkout-step -reachable -complete -current js-current-step"
          style={{
            border: '1px solid #a3a3a3',
            padding: '15px',
          }}
        >
          <h1 className="step-title h3">
            Personal Information
            <span className="step-edit text-muted">
              <i className="material-icons edit">mode_edit</i> Fill
            </span>
          </h1>
          <div className="content">
            <div className="tab-content">
              <div
                className="tab-pane active"
                id="checkout-guest-form"
                role="tabpanel"
              >
                <StripeProvider apiKey="pk_test_Wk5JrAUQHwFNUVwteDXaGFJv">
                  <div className="example">
                    <Elements>
                      <CheckoutForm />
                    </Elements>
                  </div>
                </StripeProvider>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default LeftColumn;
