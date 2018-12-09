import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import axios from "axios";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: localStorage.getItem("userid"),
      firstName: "",
      lastName: "",
      addressShip: "",
      phoneNumberShip: "",
      complete: false
    };
    this.submit = this.submit.bind(this);
  }
  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  async submit(ev) {
    ev.preventDefault(); // chua hieu ham hay, thay no k load lai trang
    // User clicked submit
    //   let {token} = await this.props.stripe.createToken({name: "Name"});
    // let response = await fetch("/charge", {
    //   method: "POST",
    //   headers: {"Content-Type": "text/plain"},
    //   body: token.id
    // });
    //if (response.ok) console.log("Purchase Complete!")
    
   
    let {token} = await this.props.stripe.createToken({name: "Name"});
    const {
        user,
        firstName,
        lastName,
        addressShip,
        phoneNumberShip
      } = this.state;
     axios.post("/api/orders/stripe", {
        user,
        firstName,
        lastName,
        addressShip,
        phoneNumberShip,
        stripeToken : token.id,
        
      })
      .then(result => {
        if(result.data.code==1){
            const state = this.state;
            state["complete"] = true;
            this.setState(state);
        }
        else{
            alert(result.data.msg);
        }
        //đưa về trang chủ.
      });

  }
  // ben duoi co mot cai form va phai onclick, va cai nut submit thi de la type = "submit", khong nen de nut thuc thi cai ham
  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    const {
      firstName,
      lastName,
      addressShip,
      phoneNumberShip,
      user
    } = this.state;
    return (
      <form
        onSubmit={this.submit}
        id="customer-form"
        className="js-customer-form"
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
        <div className="form-group row ">
          <label className="col-md-3 form-control-label required">
            Card Information
          </label>
          <div className="col-md-6  ">
            <div className="checkout">
              <CardElement />
            </div>
          </div>
          <div className="col-md-3 form-control-comment" />
        </div>
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
    );
  }
}

export default injectStripe(CheckoutForm);
