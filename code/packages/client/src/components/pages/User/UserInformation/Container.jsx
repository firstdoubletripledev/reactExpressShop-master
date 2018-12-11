// import React module from react for JSX
import React, { Component } from 'react';

// import Axios module from axios for Promise based HTTP request
import Axios from 'axios';

// import $ module from jquery for jquery style
import $ from 'jquery';

/**
 *
 *
 * @class Container
 * @extends {Component}
 */
class Container extends Component {
  /**
   *
   *
   * @memberof Container
   */
  state = {
    userDataShow: {
      email: '',
      address: '',
      phonenumber: '',
      firstName: '',
      lastName: '',
      birthday: '',
    },
    userid: localStorage.getItem('userid'),
    email: '',
    address: '',
    phonenumber: '',
    firstName: '',
    lastName: '',
    birthday: '',
    password: '',
    newPassword: '',
  };
  /**
   *
   *
   */
  componentDidMount = async () => {
    try {
      await this.getData();
    } catch (error) {
      console.log(error);
    }
    var showP = false;
    $('#btnShow1').click(function() {
      if (showP === false) {
        $('#password').attr('type', 'text');
        showP = true;
      } else {
        $('#password').attr('type', 'password');
        showP = false;
      }
    });
    var showP2 = false;
    $('#btnShow2').click(function() {
      if (showP2 === false) {
        $('#newPassword').attr('type', 'text');
        showP2 = true;
      } else {
        $('#newPassword').attr('type', 'password');
        showP2 = false;
      }
    });
  };

  /**
   *
   *
   */
  getData = async () => {
    var userData = await Axios.get(
      `/api/users/${localStorage.getItem('userid')}`
    );

    this.setState({
      userDataShow: userData.data,
    });
  };

  /**
   *
   *
   * @param {*} e
   */
  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  /**
   *
   *
   * @param {*} e
   */
  onSubmit = e => {
    e.preventDefault();

    const {
      userid,
      email,
      address,
      phonenumber,
      firstName,
      lastName,
      birthday,
      password,
      newPassword,
    } = this.state;

    Axios.post('/api/users/update', {
      userid,
      email,
      address,
      phonenumber,
      firstName,
      lastName,
      birthday,
      password,
      newPassword,
    }).then(result => {
      if (result.data.code === 0) {
        return alert('old Password is wrong');
      }
      alert('complete change ');
    });
  };

  /**
   *
   *
   * @returns
   * @memberof Container
   */
  render() {
    const {
      userDataShow,
      // email,
      // address,
      // phonenumber,
      // firstName,
      // lastName,
      // birthday,
      password,
      newPassword,
    } = this.state;
    return (
      <div id="content-wrapper" className="container">
        <section id="main">
          <header className="page-header">
            <h1>Your personal information</h1>
          </header>
          <section id="content" className="page-content">
            <aside id="notifications">
              <div className="container" />
            </aside>
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
                      defaultValue={userDataShow.firstName}
                      name="firstName"
                      //value={firstName}
                      onChange={this.onChange}
                      required
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
                      name="lastName"
                      defaultValue={userDataShow.lastName}
                      // value={lastName}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="col-md-3 form-control-comment" />
                </div>
                <div className="form-group row ">
                  <label className="col-md-3 form-control-label required">
                    Email
                  </label>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      defaultValue={userDataShow.email}
                      //value={email}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="col-md-3 form-control-comment" />
                </div>
                <div className="form-group row ">
                  <label className="col-md-3 form-control-label required">
                    Password
                  </label>
                  <div className="col-md-6">
                    <div className="input-group js-parent-focus">
                      <input
                        id="password"
                        className="form-control js-child-focus js-visible-password"
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        type="password"
                        pattern=".{5,}"
                        required
                      />
                      <span className="input-group-btn">
                        <button
                          className="btn"
                          type="button"
                          id="btnShow1"
                          style={{ background: '#a3a3a3' }}
                        >
                          Show
                        </button>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3 form-control-comment" />
                </div>
                <div className="form-group row ">
                  <label className="col-md-3 form-control-label">
                    New password
                  </label>
                  <div className="col-md-6">
                    <div className="input-group js-parent-focus">
                      <input
                        id="newPassword"
                        className="form-control js-child-focus js-visible-password"
                        name="newPassword"
                        value={newPassword}
                        onChange={this.onChange}
                        type="password"
                        pattern=".{5,}"
                      />
                      <span className="input-group-btn">
                        <button
                          className="btn"
                          type="button"
                          id="btnShow2"
                          style={{ background: '#a3a3a3' }}
                        >
                          Show
                        </button>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3 form-control-comment">Optional</div>
                </div>
                <div className="form-group row ">
                  <label className="col-md-3 form-control-label">
                    Birthdate
                  </label>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      name="birthday"
                      defaultValue={userDataShow.birthday}
                      //value={birthday}
                      onChange={this.onChange}
                      type="text"
                      placeholder="MM/DD/YYYY"
                    />
                    <span className="form-control-comment">
                      (E.g.: 05/31/1970)
                    </span>
                  </div>
                  <div className="col-md-3 form-control-comment">Optional</div>
                </div>
                <div className="form-group row ">
                  <label className="col-md-3 form-control-label required">
                    Phone Number
                  </label>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      type="text"
                      name="phonenumber"
                      defaultValue={userDataShow.phonenumber}
                      //value={phonenumber}
                      onChange={this.onChange}
                      required
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
                      name="address"
                      defaultValue={userDataShow.address}
                      // value={address}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="col-md-3 form-control-comment" />
                </div>
              </section>
              <footer className="form-footer clearfix">
                <input type="hidden" name="submitCreate" defaultValue={1} />
                <button
                  className="btn btn-primary form-control-submit float-xs-right"
                  data-link-action="save-customer"
                  type="submit"
                >
                  Save
                </button>
              </footer>
            </form>
          </section>
          <a
            href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=my-account"
            className="account-link"
          >
            <i className="material-icons"></i>
            <span>Back to your account</span>
          </a>
          <a
            href="https://ld-prestashop.template-help.com/prestashop_13106/index.php"
            className="account-link"
          >
            <i className="material-icons"></i>
            <span>Home</span>
          </a>
        </section>
      </div>
    );
  }
}

// export component
export default Container;
