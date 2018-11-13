import React from "react";
import { Link } from "react-router-dom";

export function HeaderNav({ themeLogo }) {
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
        <div className="it_RNWZTOTYHPYR    col-lg-4  hidden-md-down">
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
          <div className="module ">
            <div id="_desktop_user_info">
              <div className="header_user_info user-info current">
                <Link to="/login">
                  <i className="fl-chapps-user139" />
                  <span>Sign in</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
