import React from "react";
import { TopLevelMenu } from "./TopLevelMenu";

export function MenuHeader() {
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
                    <span className="search-toggle" data-toggle="dropdown">
                      <i className="fl-chapps-search70" />
                    </span>
                    <form id="tmsearchbox" method="get" action="#0">
                      <input
                        className="tm_search_query form-control"
                        type="text"
                        id="tm_search_query"
                        name="search_query"
                        placeholder="Search"
                        autoComplete="off"
                      />
                      <button
                        type="submit"
                        name="tm_submit_search"
                        className="btn btn-default button-search"
                      >
                        <span>Search</span>
                      </button>
                    </form>
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
