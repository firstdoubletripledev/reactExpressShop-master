// import Axios module from axios for Promise based HTTP request
import Axios from 'axios';

// import React module from react for JSX
import React, { PureComponent } from 'react';

// import successMessage module
import { successMessage } from '../../../utils/Message';

/**
 *
 *
 * @class LeftColumn
 * @extends {PureComponent}
 */
class LeftColumn extends PureComponent {
  /**
   *Creates an instance of LeftColumn.
   * @memberof LeftColumn
   */
  state = {
    user: localStorage.getItem('userid'),
    firstName: '',
    lastName: '',
    addressShip: '',
    phoneNumberShip: '',
  };

  /**
   *
   *
   */
  // componentDidMount = async () => {};

  /**
   *
   *
   * @param {*} e
   */
  onChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  /**
   *
   *
   * @param {*} e
   */
  onSubmit = e => {
    e.preventDefault();

    const {
      user,
      firstName,
      lastName,
      addressShip,
      phoneNumberShip,
    } = this.state;

    Axios.post('/api/orders', {
      user,
      firstName,
      lastName,
      addressShip,
      phoneNumberShip,
    })
      .then(result => {
        successMessage('đặt hàng thành công');
        window.location.href = '/account';
      })
      .catch(error => {
        return console.log(error.response);
      });
  };

  /**
   *
   *
   * @returns
   * @memberof LeftColumn
   */
  render() {
    const { firstName, lastName, addressShip, phoneNumberShip } = this.state;
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
                <form
                  onSubmit={this.onSubmit}
                  id="customer-form"
                  className="js-customer-form"
                  method="post"
                >
                  <section>
                    <div className="form-group row ">
                      <label className="col-md-3 form-control-label required">
                        First name
                      </label>
                      <div className="col-md-6">
                        <input
                          className="form-control"
                          type="text"
                          required
                          name="firstName"
                          value={firstName}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="col-md-3 form-control-comment" />
                    </div>
                    <div className="form-group row ">
                      <label className="col-md-3 form-control-label required">
                        Last name
                      </label>
                      <div className="col-md-6">
                        <input
                          className="form-control"
                          type="text"
                          required
                          name="lastName"
                          value={lastName}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="col-md-3 form-control-comment" />
                    </div>

                    <div className="form-group row ">
                      <label className="col-md-3 form-control-label required">
                        Address
                      </label>
                      <div className="col-md-6">
                        <input
                          className="form-control"
                          type="text"
                          required
                          name="addressShip"
                          value={addressShip}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="col-md-3 form-control-comment" />
                    </div>
                    <div className="form-group row ">
                      <label className="col-md-3 form-control-label required">
                        Phone Number
                      </label>
                      <div className="col-md-6  ">
                        <input
                          className="form-control"
                          type="text"
                          required
                          name="phoneNumberShip"
                          value={phoneNumberShip}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="col-md-3 form-control-comment" />
                    </div>
                  </section>
                  <footer
                    className="form-footer clearfix"
                    style={{ textAlign: 'center' }}
                  >
                    <button
                      className="continue btn btn-primary float-xs-right"
                      name="submit"
                      type="submit"
                    >
                      Checkout{' '}
                    </button>
                  </footer>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

// export component
export default LeftColumn;
