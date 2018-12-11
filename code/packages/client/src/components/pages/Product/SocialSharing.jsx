// import React module from react for JSX
import React from 'react';

/**
 *
 *
 * @param {*} { product = {} }
 * @returns
 */
const SocialSharing = ({ product = {} }) => {
  return (
    <div className="social-sharing">
      <ul>
        <li className="facebook">
          <a
            href={`http://www.facebook.com/sharer.php?u=https://shopbanhoa.herokuapp.com/product/${
              product._id
            }#product-details`}
            className="text-hide"
            title="Share"
            target="_blank"
            rel="noopener noreferrer"
          >
            Share
          </a>
        </li>
        <li className="twitter">
          <a
            href={`https://twitter.com/intent/tweet?text=Autumn Basket https://shopbanhoa.herokuapp.com/product/${
              product._id
            }#product-details`}
            className="text-hide"
            title="Tweet"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet
          </a>
        </li>
        <li className="googleplus">
          <a
            href={`https://plus.google.com/share?url=https://shopbanhoa.herokuapp.com/product/${
              product._id
            }#product-details`}
            className="text-hide"
            title="Google+"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google+
          </a>
        </li>
        <li className="pinterest">
          <a
            href={`http://www.pinterest.com/pin/create/button/?media=${
              product.pathImg
            }&url=https://shopbanhoa.herokuapp.com/product/${product._id}#product-details`}
            className="text-hide"
            title="Pinterest"
            target="_blank"
            data-pin-custom="true"
            rel="noopener noreferrer"
          >
            Pinterest
          </a>
        </li>
      </ul>
    </div>
  );
};

export { SocialSharing };
