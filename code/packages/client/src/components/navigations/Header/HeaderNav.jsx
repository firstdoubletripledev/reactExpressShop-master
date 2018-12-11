// import Icon component from antd
import { Icon } from 'antd';

// import Axios module from axios for Promise based HTTP request
import Axios from 'axios';

// import React module from react for JSX
import React from 'react';

// import connect function from react-redux
import { connect } from 'react-redux';

// import Route module from react-router-dom for router in react
import { Link } from 'react-router-dom';

/**
 *
 *
 * @param {*} { themeLogo, isLogin, LoginData = {} }
 * @returns
 */
function HeaderNavContent({ themeLogo, isLogin, LoginData = {} }) {
  return (
    <div className="wrapper it_TUJDRTYXJALO header-nav container">
      <div className="row it_RBDJREZNOFAC ">
        <div className="it_NNGQMVLBKGOY    col-lg-4  hidden-md-down">
          <div className="module ">
            <div id="_desktop_language_selector">
              <div className="language-selector-wrapper">
                <div className="language-selector dropdown js-dropdown" />
              </div>
            </div>
          </div>
          <div className="module ">
            <div id="_desktop_currency_selector">
              <div className="currency-selector dropdown js-dropdown" />
            </div>
          </div>
        </div>
        <div className="it_EEISLMKPEOHR col-12   col-lg-4  text-center">
          <div className="logo">
            <Link to="/">
              <img className="img-responsive" src={themeLogo} alt="Flower" />
            </Link>
          </div>
        </div>

        <div className="it_RNWZTOTYHPYR col-lg-4 hidden-md-down">
          <div className="module ">
            <div id="_desktop_cart">
              <div className="blockcart cart-preview inactive">
                <div className="header">
                  <Link to="/cart">
                    <i className="fl-chapps-hand135 shopping-cart" />
                    <span className="hidden-sm-down">Cart</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {isLogin || LoginData.role ? (
            <div className="module ">
              <div id="_desktop_user_info" style={{ marginLeft: '30px' }}>
                <div className="header_user_info user-info current">
                  <a
                    href="/#0"
                    onClick={async () => {
                      await Axios.get('/api/users/logout').catch(error => {
                        return console.log(error.response);
                      });
                      localStorage.removeItem('token');
                      window.location.href = '/';
                    }}
                  >
                    <Icon type="logout" />
                    {/* <i className="fl-chapps-user139" /> */}
                    <span>Logout</span>
                  </a>
                </div>
              </div>
            </div>
          ) : null}
          <div className="module ">
            <div id="_desktop_user_info">
              <div className="header_user_info user-info current">
                {isLogin || LoginData.role ? (
                  LoginData.role !== 'admin' ? (
                    <Link to="/account">
                      <i className="fl-chapps-user139" />
                      <span>Hi. {LoginData.email} </span>
                    </Link>
                  ) : (
                    <Link to="/dashboard">
                      <i className="fl-chapps-user139" />
                      <span>Hi. {LoginData.email} </span>
                    </Link>
                  )
                ) : (
                  <Link to="/login">
                    <i className="fl-chapps-user139" />
                    <span>Sign in</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 *
 *
 * @param {*} { isLogin, LoginData }
 */
const mapStateToProps = ({ isLogin, LoginData }) => ({
  isLogin,
  LoginData,
});
const HeaderNav = connect(mapStateToProps)(HeaderNavContent);

// export component
export { HeaderNav };
