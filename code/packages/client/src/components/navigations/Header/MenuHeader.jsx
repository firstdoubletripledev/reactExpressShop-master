import React, { Component } from "react";

import { TopLevelMenu } from "./TopLevelMenu";

export class MenuHeader extends Component {
  state = {
    searchValue: ""
  };

  handleChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  render() {
    const { searchValue } = this.state;

    return (
      <div className="stickUpTop">
        <div className="stickUpHolder">
          <div className="wrapper it_UQMBLMZLVUVW header-top container stick-up hidden-md-down">
            <div className="row it_KIVGQZRQFTST full-width">
              <div className="it_VLYVFKYKVDJT col-12 top-box">
                <div className="module ">
                  <div id="_desktop_tmmegamenu">
                    <div className="displayTop_menu top-level tmmegamenu_item default-menu top-global">
                      <div className="menu-title tmmegamenu_item">Menu</div>
                      <TopLevelMenu />
                    </div>
                  </div>
                </div>
                <div className="module ">
                  <div id="_desktop_tmsearch">
                    <div id="tmsearchblock">
                      <span
                        className="search-toggle"
                        style={{ display: "none" }}
                        data-toggle="dropdown"
                      >
                        <i className="fl-chapps-search70" />
                      </span>
                      <input
                        className="tm_search_query form-control"
                        type="text"
                        // id="tm_search_query"
                        // name="search_query"
                        onChange={this.handleChange}
                        value={searchValue ? searchValue : ""}
                        placeholder="Search"
                        autoComplete="off"
                      />
                      <a
                        href={`/category/search/${searchValue}`}
                        type="submit"
                        style={{
                          background: "#fff",
                          color: "#141414"
                        }}
                        // name="tm_submit_search"
                        className="btn btn-default button-search"
                      >
                        <span>Search</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
