import React, { Component } from "react";
import axios from "axios";

class LeftColumn extends Component {
  constructor() {
    super();
    this.state = {
      user: localStorage.getItem("userid"),
      firstName: "",
      lastName: "",
      addressShip: "",
      phoneNumberShip: ""
    };
  }
  // state = {
  //   user: "",
  //   firstName: "",
  //   lastName: "",
  //   addressShip: "",
  //   phoneNumberShip: ""
  // };
  componentDidMount = async () => {};
  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();

    const {
      user,
      firstName,
      lastName,
      addressShip,
      phoneNumberShip
    } = this.state;

    axios
      .post("/api/orders", {
        user,
        firstName,
        lastName,
        addressShip,
        phoneNumberShip
      })
      .then(result => {
        alert("đặt hàng thành công");
       //return this.props.history.push('/')
        
      });
  };

  render() {
    const {
    user,
      firstName,
      lastName,
      addressShip,
      phoneNumberShip
    } = this.state;
    return (
      <div className="col-md-8">
        <section
          id="checkout-personal-information-step"
          className="checkout-step -reachable -complete -current js-current-step"
          style={{
            border: "1px solid #a3a3a3",
            padding: "15px"
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
                          name="lastname"
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
                    style={{ textAlign: "center" }}
                  >
                    <button
                      className="continue btn btn-primary float-xs-right"
                      name="submit"
                      type="submit"
                    >
                      Checkout{" "}
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

export default LeftColumn;
