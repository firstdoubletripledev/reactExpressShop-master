import React from "react";
import { Link } from "react-router-dom";
import themeLogo from "./theme-logo.jpg";

const Header = () => {
  return (
    <header id="header">
      <div className="row it_GQGYNCCMEUBS nav-full-width full-width">
        <div className="it_DVLGIWDOAESQ col-12     container">
          <div className="module ">
            <div id="custom-text">
              <div className="row text-center">
                <div className="col-12 col-md-4 text-lg-left">
                  FREE NEXT DAY DELIVERY OVER $50
                </div>
                <div className="col-12 col-md-4">FREE RETURNS FOR 100 DAYS</div>
                <div className="col-12 col-md-4 text-lg-right">
                  ONLINE SUPPORT 24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                <div
                  className="blockcart cart-preview inactive"
                  data-refresh-url="//ld-prestashop.template-help.com/prestashop_13106/index.php?fc=module&module=ps_shoppingcart&controller=ajax&id_lang=1"
                >
                  <div className="header">
                    <i className="fl-chapps-hand135 shopping-cart" />
                    <span className="hidden-sm-down">Cart</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="module ">
              <div id="_desktop_user_info">
                <div className="header_user_info user-info current">
                  <a href="#" onClick={() => null}>
                    <i className="fl-chapps-user139" />
                    <span>Sign in</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="stickUpTop">
        <div className="stickUpHolder">
          <div className="wrapper it_UQMBLMZLVUVW header-top container stick-up hidden-md-down">
            <div className="row it_KIVGQZRQFTST full-width">
              <div className="it_VLYVFKYKVDJT col-12     top-box">
                <div className="module ">
                  <div id="_desktop_tmmegamenu">
                    <div className="displayTop_menu top-level tmmegamenu_item default-menu top-global">
                      <div className="menu-title tmmegamenu_item">Menu</div>
                      <ul className="menu clearfix top-level-menu tmmegamenu_item sf-js-enabled sf-arrows">
                        <li className="top-level-menu-li tmmegamenu_item it_30664364">
                          <a
                            className="it_30664364 top-level-menu-li-a tmmegamenu_item sf-with-ul"
                            href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=14&controller=category&id_lang=1"
                          >
                            FLOWERS{" "}
                          </a>
                          <div
                            className="is-megamenu tmmegamenu_item first-level-menu it_30664364"
                            style={{ display: "none" }}
                          >
                            <div
                              id="megamenu-row-1-1"
                              className="megamenu-row row megamenu-row-1"
                            >
                              <div
                                id="column-1-1-1"
                                className="megamenu-col megamenu-col-1-1 col-12 col-lg-2 "
                              >
                                <ul className="content">
                                  <li className="category">
                                    <a
                                      href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=23&controller=category&id_lang=1"
                                      title="Romance"
                                      className="sf-with-ul"
                                    >
                                      Romance
                                    </a>
                                    <ul style={{ display: "none" }}>
                                      <li className="category">
                                        <a
                                          href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=33&controller=category&id_lang=1"
                                          title="Always on My Mind - Long Stemmed Red Roses"
                                        >
                                          Always on My Mind - Long Stemmed Red
                                          Roses
                                        </a>
                                      </li>
                                      <li className="category">
                                        <a
                                          href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=34&controller=category&id_lang=1"
                                          title="Hugs and Kisses Bouquet with Red Roses"
                                        >
                                          Hugs and Kisses Bouquet with Red Roses
                                        </a>
                                      </li>
                                      <li className="category">
                                        <a
                                          href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=35&controller=category&id_lang=1"
                                          title="Make Me Blush - Dozen Long Stemmed Pink Roses"
                                        >
                                          Make Me Blush - Dozen Long Stemmed
                                          Pink Roses
                                        </a>
                                      </li>
                                      <li className="category">
                                        <a
                                          href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=36&controller=category&id_lang=1"
                                          title="Jumping for Joy"
                                        >
                                          Jumping for Joy
                                        </a>
                                      </li>
                                      <li className="category">
                                        <a
                                          href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=37&controller=category&id_lang=1"
                                          title="Victorian Romance"
                                        >
                                          Victorian Romance
                                        </a>
                                      </li>
                                      <li className="category">
                                        <a
                                          href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=38&controller=category&id_lang=1"
                                          title="Isn't It Romantic"
                                        >
                                          Isn't It Romantic
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                              <div
                                id="column-1-1-2"
                                className="megamenu-col megamenu-col-1-2 col-12 col-lg-2 "
                              >
                                <ul className="content">
                                  <li className="category">
                                    <a
                                      href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=24&controller=category&id_lang=1"
                                      title="Christmas"
                                      className="sf-with-ul"
                                    >
                                      Christmas
                                    </a>
                                    <ul style={{ display: "none" }}>
                                      <li className="category">
                                        <a
                                          href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=39&controller=category&id_lang=1"
                                          title="Red Poinsettia"
                                        >
                                          Red Poinsettia
                                        </a>
                                      </li>
                                      <li className="category">
                                        <a
                                          href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=40&controller=category&id_lang=1"
                                          title="The White Candy Bouquet"
                                        >
                                          The White Candy Bouquet
                                        </a>
                                      </li>
                                      <li className="category">
                                        <a
                                          href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=41&controller=category&id_lang=1"
                                          title="Holiday Wishes Bouquet"
                                        >
                                          Holiday Wishes Bouquet
                                        </a>
                                      </li>
                                      <li className="category">
                                        <a
                                          href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=42&controller=category&id_lang=1"
                                          title="Get Together Bouquet"
                                        >
                                          Get Together Bouquet
                                        </a>
                                      </li>
                                      <li className="category">
                                        <a
                                          href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=43&controller=category&id_lang=1"
                                          title="The Holiday Bloom Bouquet"
                                        >
                                          The Holiday Bloom Bouquet
                                        </a>
                                      </li>
                                      <li className="category">
                                        <a
                                          href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=44&controller=category&id_lang=1"
                                          title="Happy Holiday Bouquet"
                                        >
                                          Happy Holiday Bouquet
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                              <div
                                id="column-1-1-3"
                                className="megamenu-col megamenu-col-1-3 col-12 col-lg-2  first-in-line-sm"
                              >
                                <ul className="content">
                                  <li className="category">
                                    <a
                                      href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=25&controller=category&id_lang=1"
                                      title="Wedding"
                                      className="sf-with-ul"
                                    >
                                      Wedding
                                    </a>
                                    <ul style={{ display: "none" }}>
                                      <li className="category">
                                        <a
                                          href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=45&controller=category&id_lang=1"
                                          title="Graceful Grandeur Rose Bouquet"
                                        >
                                          Graceful Grandeur Rose Bouquet
                                        </a>
                                      </li>
                                      <li className="category">
                                        <a
                                          href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=46&controller=category&id_lang=1"
                                          title="Happy Times Bouquet"
                                        >
                                          Happy Times Bouquet
                                        </a>
                                      </li>
                                      <li className="category">
                                        <a
                                          href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=47&controller=category&id_lang=1"
                                          title="Precious Heart Bouquet"
                                        >
                                          Precious Heart Bouquet
                                        </a>
                                      </li>
                                      <li className="category">
                                        <a
                                          href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=48&controller=category&id_lang=1"
                                          title="Light of My Life Bouquet"
                                        >
                                          Light of My Life Bouquet
                                        </a>
                                      </li>
                                      <li className="category">
                                        <a
                                          href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=49&controller=category&id_lang=1"
                                          title="Pink Pursuits  Bouquet"
                                        >
                                          Pink Pursuits Bouquet
                                        </a>
                                      </li>
                                      <li className="category">
                                        <a
                                          href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=50&controller=category&id_lang=1"
                                          title="Love In Bloom Bouquet"
                                        >
                                          Love In Bloom Bouquet
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                              <div
                                id="column-1-1-4"
                                className="megamenu-col megamenu-col-1-4 col-12 col-lg-2 "
                              >
                                <ul className="content">
                                  <li className="category">
                                    <a
                                      href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=26&controller=category&id_lang=1"
                                      title="Anniversary"
                                      className="sf-with-ul"
                                    >
                                      Anniversary
                                    </a>
                                    <ul style={{ display: "none" }}>
                                      <li className="category">
                                        <a
                                          href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=51&controller=category&id_lang=1"
                                          title="Sweet Surprises Bouquet"
                                        >
                                          Sweet Surprises Bouquet
                                        </a>
                                      </li>
                                      <li className="category">
                                        <a
                                          href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=52&controller=category&id_lang=1"
                                          title="Blooming Azalea Bonsai"
                                        >
                                          Blooming Azalea Bonsai
                                        </a>
                                      </li>
                                      <li className="category">
                                        <a
                                          href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=53&controller=category&id_lang=1"
                                          title="Happy Times Bouquet"
                                        >
                                          Happy Times Bouquet
                                        </a>
                                      </li>
                                      <li className="category">
                                        <a
                                          href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=54&controller=category&id_lang=1"
                                          title="Be Bold Bouquet"
                                        >
                                          Be Bold Bouquet
                                        </a>
                                      </li>
                                      <li className="category">
                                        <a
                                          href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=55&controller=category&id_lang=1"
                                          title="Blooming Bounty Bouquet"
                                        >
                                          Blooming Bounty Bouquet
                                        </a>
                                      </li>
                                      <li className="category">
                                        <a
                                          href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=56&controller=category&id_lang=1"
                                          title="Color Rush Bouquet"
                                        >
                                          Color Rush Bouquet
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                              <div
                                id="column-1-1-5"
                                className="megamenu-col megamenu-col-1-5 col-12 col-lg-4 "
                              >
                                <ul className="content">
                                  <li className="megamenu_banner text-right">
                                    <a href="index.php?id_category=3&controller=category">
                                      <img
                                        className="img-responsive"
                                        src="/prestashop_13106/modules/tmmegamenu/images/97a31d6ebfb270f9717c9cee9089efda000f29ea_menu-banner.jpg"
                                        alt="Banner"
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className=" top-level-menu-li tmmegamenu_item it_77943574">
                          <a
                            className="it_77943574 top-level-menu-li-a tmmegamenu_item"
                            href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=12&controller=category&id_lang=1"
                          >
                            occasions{" "}
                          </a>
                        </li>
                        <li className=" top-level-menu-li tmmegamenu_item it_56520797">
                          <a
                            className="it_56520797 top-level-menu-li-a tmmegamenu_item"
                            href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=51&controller=category&id_lang=1"
                          >
                            sympathy{" "}
                          </a>
                        </li>
                        <li className=" top-level-menu-li tmmegamenu_item it_22464471">
                          <a
                            className="it_22464471 top-level-menu-li-a tmmegamenu_item"
                            href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=25&controller=category&id_lang=1"
                          >
                            weddings{" "}
                          </a>
                        </li>
                        <li className="simple top-level-menu-li tmmegamenu_item it_11834139">
                          <a
                            className="it_11834139 top-level-menu-li-a tmmegamenu_item sf-with-ul"
                            href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=12&controller=category&id_lang=1"
                          >
                            gifts{" "}
                          </a>
                          <ul
                            className="is-simplemenu tmmegamenu_item first-level-menu it_11834139 submenu-container clearfix"
                            style={{ display: "none" }}
                          >
                            <li className="category">
                              <a
                                href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=22&controller=category&id_lang=1"
                                title="Birthday"
                                className="sf-with-ul"
                              >
                                Birthday
                              </a>
                              <ul style={{ display: "none" }}>
                                <li className="category">
                                  <a
                                    href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=27&controller=category&id_lang=1"
                                    title="Be Happy Bouquet with Roses"
                                  >
                                    Be Happy Bouquet with Roses
                                  </a>
                                </li>
                                <li className="category">
                                  <a
                                    href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=28&controller=category&id_lang=1"
                                    title="Brilliant Birthday Blooms"
                                  >
                                    Brilliant Birthday Blooms
                                  </a>
                                </li>
                                <li className="category">
                                  <a
                                    href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=29&controller=category&id_lang=1"
                                    title="Rosy Birthday Present"
                                  >
                                    Rosy Birthday Present
                                  </a>
                                </li>
                                <li className="category">
                                  <a
                                    href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=30&controller=category&id_lang=1"
                                    title="Blossoms in Vogue"
                                  >
                                    Blossoms in Vogue
                                  </a>
                                </li>
                                <li className="category">
                                  <a
                                    href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=31&controller=category&id_lang=1"
                                    title="Garden Parade"
                                  >
                                    Garden Parade
                                  </a>
                                </li>
                                <li className="category">
                                  <a
                                    href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=32&controller=category&id_lang=1"
                                    title="Love and Laughter"
                                  >
                                    Love and Laughter
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="category">
                              <a
                                href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=24&controller=category&id_lang=1"
                                title="Christmas"
                                className="sf-with-ul"
                              >
                                Christmas
                              </a>
                              <ul style={{ display: "none" }}>
                                <li className="category">
                                  <a
                                    href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=39&controller=category&id_lang=1"
                                    title="Red Poinsettia"
                                  >
                                    Red Poinsettia
                                  </a>
                                </li>
                                <li className="category">
                                  <a
                                    href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=40&controller=category&id_lang=1"
                                    title="The White Candy Bouquet"
                                  >
                                    The White Candy Bouquet
                                  </a>
                                </li>
                                <li className="category">
                                  <a
                                    href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=41&controller=category&id_lang=1"
                                    title="Holiday Wishes Bouquet"
                                  >
                                    Holiday Wishes Bouquet
                                  </a>
                                </li>
                                <li className="category">
                                  <a
                                    href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=42&controller=category&id_lang=1"
                                    title="Get Together Bouquet"
                                  >
                                    Get Together Bouquet
                                  </a>
                                </li>
                                <li className="category">
                                  <a
                                    href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=43&controller=category&id_lang=1"
                                    title="The Holiday Bloom Bouquet"
                                  >
                                    The Holiday Bloom Bouquet
                                  </a>
                                </li>
                                <li className="category">
                                  <a
                                    href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=44&controller=category&id_lang=1"
                                    title="Happy Holiday Bouquet"
                                  >
                                    Happy Holiday Bouquet
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="category">
                              <a
                                href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=25&controller=category&id_lang=1"
                                title="Wedding"
                                className="sf-with-ul"
                              >
                                Wedding
                              </a>
                              <ul style={{ display: "none" }}>
                                <li className="category">
                                  <a
                                    href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=45&controller=category&id_lang=1"
                                    title="Graceful Grandeur Rose Bouquet"
                                  >
                                    Graceful Grandeur Rose Bouquet
                                  </a>
                                </li>
                                <li className="category">
                                  <a
                                    href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=46&controller=category&id_lang=1"
                                    title="Happy Times Bouquet"
                                  >
                                    Happy Times Bouquet
                                  </a>
                                </li>
                                <li className="category">
                                  <a
                                    href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=47&controller=category&id_lang=1"
                                    title="Precious Heart Bouquet"
                                  >
                                    Precious Heart Bouquet
                                  </a>
                                </li>
                                <li className="category">
                                  <a
                                    href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=48&controller=category&id_lang=1"
                                    title="Light of My Life Bouquet"
                                  >
                                    Light of My Life Bouquet
                                  </a>
                                </li>
                                <li className="category">
                                  <a
                                    href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=49&controller=category&id_lang=1"
                                    title="Pink Pursuits  Bouquet"
                                  >
                                    Pink Pursuits Bouquet
                                  </a>
                                </li>
                                <li className="category">
                                  <a
                                    href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=50&controller=category&id_lang=1"
                                    title="Love In Bloom Bouquet"
                                  >
                                    Love In Bloom Bouquet
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="category">
                              <a
                                href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=26&controller=category&id_lang=1"
                                title="Anniversary"
                                className="sf-with-ul"
                              >
                                Anniversary
                              </a>
                              <ul style={{ display: "none" }}>
                                <li className="category">
                                  <a
                                    href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=51&controller=category&id_lang=1"
                                    title="Sweet Surprises Bouquet"
                                  >
                                    Sweet Surprises Bouquet
                                  </a>
                                </li>
                                <li className="category">
                                  <a
                                    href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=52&controller=category&id_lang=1"
                                    title="Blooming Azalea Bonsai"
                                  >
                                    Blooming Azalea Bonsai
                                  </a>
                                </li>
                                <li className="category">
                                  <a
                                    href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=53&controller=category&id_lang=1"
                                    title="Happy Times Bouquet"
                                  >
                                    Happy Times Bouquet
                                  </a>
                                </li>
                                <li className="category">
                                  <a
                                    href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=54&controller=category&id_lang=1"
                                    title="Be Bold Bouquet"
                                  >
                                    Be Bold Bouquet
                                  </a>
                                </li>
                                <li className="category">
                                  <a
                                    href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=55&controller=category&id_lang=1"
                                    title="Blooming Bounty Bouquet"
                                  >
                                    Blooming Bounty Bouquet
                                  </a>
                                </li>
                                <li className="category">
                                  <a
                                    href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=56&controller=category&id_lang=1"
                                    title="Color Rush Bouquet"
                                  >
                                    Color Rush Bouquet
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="category">
                              <a
                                href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=13&controller=category&id_lang=1"
                                title="Chemical fertilizers"
                              >
                                Chemical fertilizers
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className=" top-level-menu-li tmmegamenu_item it_56946719">
                          <a
                            className="it_56946719 top-level-menu-li-a tmmegamenu_item"
                            href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_category=20&controller=category&id_lang=1"
                          >
                            Plants &amp; dish gardens{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="module ">
                  <div id="_desktop_tmsearch">
                    <div id="tmsearchblock">
                      <span className="search-toggle" data-toggle="dropdown">
                        <i className="fl-chapps-search70" />
                      </span>
                      <form
                        id="tmsearchbox"
                        method="get"
                        action="https://ld-prestashop.template-help.com/prestashop_13106/index.php?fc=module&module=tmsearch&controller=tmsearch&id_lang=1"
                      >
                        <input type="hidden" name="fc" defaultValue="module" />
                        <input
                          type="hidden"
                          name="controller"
                          defaultValue="tmsearch"
                        />
                        <input
                          type="hidden"
                          name="module"
                          defaultValue="tmsearch"
                        />
                        <select
                          name="search_categories"
                          className="form-control form-control-select"
                        >
                          <option value={2}>All Categories</option>
                          <option value={12}>--Occasion </option>
                          <option value={22}>---Birthday</option>
                          <option value={27}>
                            ----Be Happy Bouquet with Roses
                          </option>
                          <option value={28}>
                            ----Brilliant Birthday Blooms
                          </option>
                          <option value={29}>----Rosy Birthday Present</option>
                          <option value={30}>----Blossoms in Vogue</option>
                          <option value={31}>----Garden Parade</option>
                          <option value={32}>----Love and Laughter</option>
                          <option value={23}>---Romance</option>
                          <option value={33}>
                            ----Always on My Mind - Long Stemmed Red Roses
                          </option>
                          <option value={34}>
                            ----Hugs and Kisses Bouquet with Red Roses
                          </option>
                          <option value={35}>
                            ----Make Me Blush - Dozen Long Stemmed Pink Roses
                          </option>
                          <option value={36}>----Jumping for Joy</option>
                          <option value={37}>----Victorian Romance</option>
                          <option value={38}>----Isn't It Romantic</option>
                          <option value={24}>---Christmas</option>
                          <option value={39}>----Red Poinsettia</option>
                          <option value={40}>
                            ----The White Candy Bouquet
                          </option>
                          <option value={41}>----Holiday Wishes Bouquet</option>
                          <option value={42}>----Get Together Bouquet</option>
                          <option value={43}>
                            ----The Holiday Bloom Bouquet
                          </option>
                          <option value={44}>----Happy Holiday Bouquet</option>
                          <option value={25}>---Wedding</option>
                          <option value={45}>
                            ----Graceful Grandeur Rose Bouquet
                          </option>
                          <option value={46}>----Happy Times Bouquet</option>
                          <option value={47}>----Precious Heart Bouquet</option>
                          <option value={48}>
                            ----Light of My Life Bouquet
                          </option>
                          <option value={49}>----Pink Pursuits Bouquet</option>
                          <option value={50}>----Love In Bloom Bouquet</option>
                          <option value={26}>---Anniversary</option>
                          <option value={51}>
                            ----Sweet Surprises Bouquet
                          </option>
                          <option value={52}>----Blooming Azalea Bonsai</option>
                          <option value={53}>----Happy Times Bouquet</option>
                          <option value={54}>----Be Bold Bouquet</option>
                          <option value={55}>
                            ----Blooming Bounty Bouquet
                          </option>
                          <option value={56}>----Color Rush Bouquet</option>
                          <option value={13}>--Chemical fertilizers</option>
                          <option value={14}>--Flower gallery</option>
                          <option value={15}>--Color</option>
                          <option value={16}>--Plants</option>
                          <option value={17}>--Trees</option>
                          <option value={18}>--Bushes</option>
                          <option value={19}>--Unique flowers</option>
                          <option value={20}>--Window plants</option>
                          <option value={21}>--Accessories</option>
                        </select>
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
      <div
        className="pseudoStickyBlock"
        style={{ position: "relative", display: "block" }}
      />

      <div className="container hidden-lg-up">
        <div className="mobile">
          <div id="_mobile_tmmegamenu" />
          <div className="mobile-toggle">
            <div id="menu-icon">
              <i className="fl-outicons-gear40" />
            </div>
            <div id="mobile_top_menu_wrapper" style={{ display: "none" }}>
              <div className="js-top-menu-bottom">
                <div id="_mobile_currency_selector" />
                <div id="_mobile_language_selector" />
              </div>
            </div>
          </div>
          <div id="_mobile_tmsearch" />
          <div id="_mobile_user_info" />
          <div id="_mobile_cart" />
        </div>
      </div>
    </header>
  );
};

export default Header;
