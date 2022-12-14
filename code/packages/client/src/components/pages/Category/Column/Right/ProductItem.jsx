// import React module from react for JSX
import React from 'react';

// import Route module from react-router-dom for router in react
import { Link } from 'react-router-dom';

// import l10nUSD function
import { l10nUSD } from '../../../../../l10nUSD';

/**
 *
 *
 * @export
 * @param {*} {
 *   pathImg: imageUrl = '',
 *   galleryImage = [],
 *   name = '',
 *   discountPrice: newPrice = '',
 *   price: regularPrice = '',
 *   _id = null,
 * }
 * @returns
 */
export function ProductItem({
  pathImg: imageUrl = '',
  galleryImage = [],
  name = '',
  discountPrice: newPrice = '',
  price: regularPrice = '',
  _id = null,
}) {
  return (
    <article
      className="product-miniature js-product-miniature"
      data-id-product={9}
      data-id-product-attribute={0}
      itemScope
    >
      <div className="thumbnail-container">
        <Link to={`/product/${_id}`} className="thumbnail product-thumbnail">
          <img src={imageUrl} alt="Autumn Shades Perfect Gift" />
        </Link>
        <div className="gallery-wrapper">
          <ul className="gallery-thumb-list">
            {galleryImage !== null
              ? galleryImage.map((imageGalleryUrl, i) => (
                  <li
                    key={`gallery-thumb-list-${i}`}
                    className="gallery-image-thumb active"
                    style={{ width: '20%' }}
                    id={imageGalleryUrl}
                  >
                    <span
                      data-href={imageGalleryUrl}
                      data-title="Autumn Shades Perfect Gift"
                      data-alt="Autumn Shades Perfect Gift"
                    >
                      <img
                        className="img-fluid"
                        src={imageGalleryUrl}
                        alt="Autumn Shades Perfect Gift"
                        title="Autumn Shades Perfect Gift"
                        itemProp="image"
                      />
                    </span>
                  </li>
                ))
              : null}
          </ul>
        </div>
        <div className="product-description">
          <div className="left">
            <h3 className="product-title" itemProp="name">
              <a href={_id === null ? '#0' : `/product/${_id}`}>{name}</a>
            </h3>
            <div className="product-price-and-shipping">
              <span className="sr-only">Price</span>
              <span itemProp="price" className="price new-price">
                {l10nUSD.format(newPrice)}
              </span>
              <span className="sr-only">Regular price</span>
              {!regularPrice ? null : (
                <span className="regular-price">
                  {l10nUSD.format(regularPrice)}
                </span>
              )}
            </div>
          </div>
          <div className="right" />
        </div>
        <ul className="product-flags">
          <li className="product-flag new">New</li>
          <li className="product-flag on-sale">On sale!</li>
          <li className="product-flag pack">Pack</li>
          <li className="product-flag on-sale">-20%</li>
        </ul>
        {/* <a
        className="quick-view fl-chapps-eye95"
        href="#"
        data-link-action="quickview"
      /> */}
      </div>
    </article>
  );
}
