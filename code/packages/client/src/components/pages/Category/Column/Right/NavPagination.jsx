import React from "react";

const render = (current, pages, getData) => {
  let indents = [];

  for (let i = 1; i <= pages; i++) {
    console.log(i);
    if (i === current) {
      indents.push(
        <li className="current" key={`js-search-link-${i}`}>
          <a rel="nofollow" href="#0" className="disabled js-search-link">
            {i}
          </a>
        </li>
      );
    } else {
      indents.push(
        <li key={`js-search-link-${i}`}>
          <a
            rel="nofollow"
            href="#0"
            className="js-search-link"
            onClick={() => {
              getData(i);
            }}
          >
            {i}
          </a>
        </li>
      );
    }
  }
  return indents;
};

export function NavPagination({
  getData = () => null,
  current = 1,
  pages = 1
}) {
  return (
    <nav className="pagination">
      <div>
        <ul className="page-list clearfix text-sm-center">
          <li>
            <a
              refs="previous"
              className={`previous ${
                current === 1 ? "disabled" : null
              } js-search-link`}
              href={`/category/${current - 1}`}
            >
              &lt;
            </a>
          </li>
          {render(current, pages, getData)}

          <li>
            <a
              refs="next"
              className={`next ${
                current === pages ? "disabled" : null
              } js-search-link`}
              href={`/category/${current + 1}`}
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
