import React, { Component } from 'react';

class NavPagination extends Component {
  state = {
    isFist: true,
    isLast: true,
    current: 1,
    pages: 1,
  };
  componentDidMount = () => {
    const { current } = this.props;

    this.checkPage(Number(current));
  };

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.current !== this.state.current) {
      this.setState({ current: nextProps.current });
      this.checkPage(Number(nextProps.current));
    }
    if (nextProps.pages !== this.state.pages) {
      this.setState({ pages: nextProps.pages });
    }
  }

  checkPage = current => {
    const { pages } = this.state;
    let isFist = true;
    let isLast = true;
    if (current !== 1) {
      isFist = false;
    }

    if (current !== pages && pages !== 1) {
      isLast = false;
    }

    this.setState({
      isFist,
      isLast,
    });
  };

  renderNumber = (current, pages, getData) => {
    let indents = [];

    for (let i = 1; i <= pages; i++) {
      if (i === Number(current)) {
        indents.push(
          <li className="current" key={`js-search-link-${i}`}>
            <button
              className="disabled js-search-link number-on-page"
              disabled={true}
            >
              {i}
            </button>
          </li>
        );
      } else {
        indents.push(
          <li key={`js-search-link-${i}`}>
            <button
              className="js-search-link"
              onClick={() => {
                document.getElementById('content-wrapper').scrollIntoView();
                getData(i);
              }}
            >
              {i}
            </button>
          </li>
        );
      }
    }
    return indents;
  };

  render() {
    const { getData } = this.props;
    const { current, pages, isFist, isLast } = this.state;

    return (
      <nav className="pagination">
        <div>
          <ul className="page-list clearfix text-sm-center">
            <li>
              <button
                refs="previous"
                className={`previous ${
                  isFist ? 'disabled' : ''
                } js-search-link`}
                disabled={isFist}
                // href={`/category/${Number(current) - 1}`}
                onClick={() => {
                  document.getElementById('content-wrapper').scrollIntoView();

                  this.checkPage(Number(current) - 1);
                  getData(Number(current) - 1);
                }}
              >
                &lt;
              </button>
            </li>
            {this.renderNumber(current, pages, getData)}

            <li>
              <button
                refs="next"
                className={`next ${isLast ? 'disabled' : ''} js-search-link`}
                // href={`/category/${Number(current) + 1}`}
                disabled={isLast}
                onClick={() => {
                  document.getElementById('content-wrapper').scrollIntoView();

                  this.checkPage(Number(current) + 1);

                  getData(Number(current) + 1);
                }}
              >
                &gt;
              </button>
            </li>
          </ul>
        </div>
        <span id="back_to_top" className="btn btn-md btn-default">
          Back to top
        </span>
      </nav>
    );
  }
}
export { NavPagination };
