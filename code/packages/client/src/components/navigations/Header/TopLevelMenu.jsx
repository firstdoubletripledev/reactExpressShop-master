import React from "react";
import { Link } from "react-router-dom";

export function TopLevelMenu({}) {
  return (
    <ul className="menu clearfix top-level-menu tmmegamenu_item sf-js-enabled sf-arrows">
      <li className="top-level-menu-li tmmegamenu_item it_30664364">
        <Link to="/category">
          <p className="it_30664364 top-level-menu-li-a tmmegamenu_item sf-with-ul">
            FLOWERS{" "}
          </p>
        </Link>
      </li>
      <li className="top-level-menu-li tmmegamenu_item it_30664364">
        <Link to="/category">
          <p className="it_30664364 top-level-menu-li-a tmmegamenu_item sf-with-ul">
            WEDDINGS{" "}
          </p>
        </Link>
      </li>
      <li className="top-level-menu-li tmmegamenu_item it_30664364">
        <Link to="/category">
          <p className="it_30664364 top-level-menu-li-a tmmegamenu_item sf-with-ul">
            GIFTS{" "}
          </p>
        </Link>
      </li>
    </ul>
  );
}
