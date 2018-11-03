import React from "react";

export function NavPagination({}) {
  return (
    <nav className="pagination">
      <div>
        <ul className="page-list clearfix text-sm-center">
          <li>
            <a
              rel="prev"
              href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=category&id_category=14&id_lang=1&page=1"
              className="previous disabled js-search-link"
            >
              &lt;
            </a>
          </li>
          <li className="current">
            <a
              rel="nofollow"
              href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=category&id_category=14&id_lang=1&page=1"
              className="disabled js-search-link"
            >
              1
            </a>
          </li>
          <li>
            <a
              rel="nofollow"
              href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=category&id_category=14&id_lang=1&page=2"
              className="js-search-link"
            >
              2
            </a>
          </li>
          <li>
            <a
              rel="next"
              href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=category&id_category=14&id_lang=1&page=2"
              className="next js-search-link"
            >
              &gt;
            </a>
          </li>
        </ul>
      </div>
      <span id="back_to_top" className="btn btn-md btn-default">
        Back to top
      </span>
    </nav>
  );
}
