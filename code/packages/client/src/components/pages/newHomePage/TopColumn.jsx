import React from "react";

export function TopColumn({ history }) {
  return (
    <section id="top-column">
      <div className="row it_DPULEPFTQQIH ">
        <div className="it_ZGYNNESIFLFA col-12">
          <div className="module ">
            <div className="homeslider-container">
              <div
                className="homeslider slick-initialized slick-slider"
                data-slick="{&quot;infinite&quot;: true, &quot;autoplaySpeed&quot;: 5000}"
              >
                <div aria-live="polite" className="slick-list draggable">
                  <div
                    className="slick-track"
                    role="listbox"
                    style={{
                      opacity: 1,
                      width: 3909
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
                        history.push("/category");
                      }}
                      style={{
                        position: "relative",
                        top: 0,
                        zIndex: 998,
                        opacity: 1,
                        transition: "opacity 500ms linear 0s"
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
                                  <span>Gifts</span>{" "}
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
      <div className="wrapper it_YZMTHKOFREBE container">
        <div className="row it_QZOWDVFIGJLN ">
          <div className="it_QVIPIXAXPCPH col-12     ">
            <div className="module ">
              {" "}
              <div id="tmhtmlcontent_topColumn">
                <ul className="tmhtmlcontent-topColumn row">
                  <li className="tmhtmlcontent-item-1 col-12 col-sm-4 ">
                    <a
                      href="index.php?id_category=13&controller=category"
                      className="item-link"
                      title
                    >
                      <img
                        src="https://ld-prestashop.template-help.com/prestashop_13106/modules/tmhtmlcontent/img/7fd2279725df0e252f7a621a780dea60ef67aade_top-banner-1.jpg"
                        className="item-img img-responsive"
                        title
                        alt=""
                        width={567}
                        height={583}
                      />
                      <div className="item-html">
                        <h6>New collection</h6>
                        <h3>Valentine's Day</h3>
                        <span className="btn btn-md btn-primary">
                          Shop now!
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="tmhtmlcontent-item-2 col-12 col-sm-4 ">
                    <a
                      href="index.php?id_category=39&controller=category"
                      className="item-link"
                      title
                    >
                      <img
                        src="https://ld-prestashop.template-help.com/prestashop_13106/modules/tmhtmlcontent/img/68cd47e008afd9a9fa1d3024f8bc9780fa513466_top-banner-2.jpg"
                        className="item-img img-responsive"
                        title
                        alt=""
                        width={567}
                        height={583}
                      />
                      <div className="item-html">
                        <h6>New collection</h6>
                        <h3>New Baby</h3>
                        <span className="btn btn-md btn-primary">
                          Shop now!
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="tmhtmlcontent-item-3 col-12 col-sm-4 ">
                    <a
                      href="index.php?id_category=18&controller=category"
                      className="item-link"
                      title
                    >
                      <img
                        src="https://ld-prestashop.template-help.com/prestashop_13106/modules/tmhtmlcontent/img/0c1b2755fa48a10764dc2ec243cbd29ec62500e7_top-banner-3.jpg"
                        className="item-img img-responsive"
                        title
                        alt=""
                        width={567}
                        height={583}
                      />
                      <div className="item-html">
                        <h6>New collection</h6>
                        <h3>Get Well</h3>
                        <span className="btn btn-md btn-primary">
                          Shop now!
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
