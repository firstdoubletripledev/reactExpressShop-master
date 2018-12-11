// import React module from react for JSX
import React from 'react';

// import SocialSharing component
import { SocialSharing } from './SocialSharing';

/**
 *
 *
 * @param {*} {
 *   product: { galleryImage = [] } = {},
 *   product = {},
 * }
 * @returns
 */
const ContentImage = ({
  product: { galleryImage = [] } = {},
  product = {},
}) => {
  return (
    <section className="page-content" id="content">
      <div className="images-container">
        <div className="product-cover">
          <ul className="product-flags">
            <li className="product-flag new">New</li>
            <li className="product-flag on-sale">-20%</li>
          </ul>
          <img
            className="js-qv-product-cover"
            src={product.pathImg}
            alt="Autumn Basket"
            title="Autumn Basket"
            style={{
              width: '100%',
            }}
            itemProp="image"
          />
          <div
            className="layer hidden-sm-down"
            data-toggle="modal"
            data-target="#product-modal"
          >
            <i className="material-icons zoom-in"></i>
          </div>
          <span id="prev-img" />
          <span id="next-img" />
        </div>
        <div className="js-qv-mask mask">
          <div className="product-images js-qv-product-images slick-initialized slick-slider slick-vertical">
            <div aria-live="polite" className="slick-list">
              <div
                className="slick-track"
                style={{
                  opacity: 1,
                  height: 548,
                  transform: 'translate3d(0px, 0px, 0px)',
                }}
                role="listbox"
              >
                {galleryImage !== null
                  ? galleryImage.map((data, i) => (
                      <div
                        key={`product-thumb-images-${data}-${i}`}
                        className="thumb-container slick-slide slick-current slick-active"
                        data-slick-index={0}
                        aria-hidden="false"
                        tabIndex={-1}
                        role="option"
                        aria-selected="true"
                        aria-describedby="slick-slide00"
                        style={{ width: 90 }}
                      >
                        <img
                          className="thumb js-thumb  selected  fancy"
                          src={data}
                          alt="Autumn Basket"
                          title="Autumn Basket"
                          itemProp="image"
                        />
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SocialSharing product={product} />
    </section>
  );
};

// export component
export { ContentImage };
