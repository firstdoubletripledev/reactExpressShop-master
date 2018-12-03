// import React module from react for JSX
import React from 'react';

// import TopThreeCategory component
import { TopThreeCategory } from './TopThreeCategory';

/**
 *
 *
 * @param {*} { history }
 * @returns
 */
function TopColumn({ history }) {
  return (
    <section id="top-column">
      <div className="row it_DPULEPFTQQIH ">
        <div className="it_ZGYNNESIFLFA col-12">
          <div className="module ">
            <div className="homeslider-container">
              <div
                className="homeslider slick-initialized slick-slider"
                data-slick='{"infinite": true, "autoplaySpeed": 5000}'
              >
                <div aria-live="polite" className="slick-list draggable">
                  <div
                    className="slick-track"
                    role="listbox"
                    style={{
                      opacity: 1,
                    }}
                  >
                    <div
                      className="slide slick-slide"
                      data-slick-index={1}
                      aria-hidden="true"
                      tabIndex={-1}
                      // role="option"
                      aria-describedby="slick-slide01"
                      onClick={() => {
                        history.push('/category');
                      }}
                      style={{
                        position: 'relative',
                        top: 0,
                        zIndex: 998,
                        opacity: 1,
                        transition: 'opacity 500ms linear 0s',
                      }}
                    >
                      <a href="#0" tabIndex={-1}>
                        <img
                          src="https://ld-prestashop.template-help.com/prestashop_13106/modules/ps_imageslider/images/cab37099ed646386ddabfb16402e0e89f97602ce_slide-2.jpg"
                          alt="sample-2"
                        />
                        <div className="caption">
                          <div>
                            <div className="align-right">
                              <div>
                                <h4>Best Price, Best Selection</h4>
                                <h2>
                                  <span className="big">Best</span>
                                  <br />
                                  <span>Gifts</span>{' '}
                                  <span className="h3">
                                    Exclusive Designs by Best Florists
                                  </span>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TopThreeCategory />
    </section>
  );
}

// export component
export { TopColumn };
