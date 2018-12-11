// import React module from react for JSX
import React from 'react';

// import Route module from react-router-dom for router in react
import { Link } from 'react-router-dom';

function CustomModule() {
  return (
    <div className="row it_HBPBUKUHBVOG ">
      <div className="it_CZXAKZLEPVEY col-12">
        <div className="module ">
          <div id="tmhtmlcontent_home">
            <ul className="tmhtmlcontent-home">
              <li className="tmhtmlcontent-item-1 left-background">
                <img
                  src="https://ld-prestashop.template-help.com/prestashop_13106/modules/tmhtmlcontent/img/95122fb2dcccc7caec9cac5258e0240b98490b39_home-banner-1.jpg"
                  className="item-img"
                  title="item-img-tmhtmlcontent"
                  alt=""
                  width={763}
                  height={925}
                />
                <div className="item-html">
                  <h3 className="products-section-title">7 Days</h3>
                  <h2>ideal freshness</h2>
                  <p>
                    We specialize in creating the perfect floral expression of
                    your message. May it be love, condolences, friendship or
                    celebration we are ready to deliver your message in floral.
                    We also deliver daily.
                  </p>
                  <Link to="/blog/1" className="link">
                    View look
                  </Link>
                </div>
              </li>
              <li className="tmhtmlcontent-item-2 right-background">
                <img
                  src="https://ld-prestashop.template-help.com/prestashop_13106/modules/tmhtmlcontent/img/3899dd7d853e6a8de209c62f4a1e01f4ebc5a623_home-banner-2.jpg"
                  className="item-img "
                  title="true"
                  alt=""
                  width={763}
                  height={925}
                />
                <div className="item-html">
                  <h3 className="products-section-title">Holiday Gifts</h3>
                  <h2>big sale -30%</h2>
                  <p>
                    We can design it all! From vintage to elegant, classic to
                    modern and everything in-between. Our talented designers
                    will take your vision and turn it into a work of art. We are
                    a stylish rustic flower shop where creativity flourishes.
                    Let us use flowers to convey your message.
                  </p>
                  <Link to="/blog/2" className="link">
                    View look
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// export component
export { CustomModule };
