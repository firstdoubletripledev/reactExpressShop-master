// import React module from react for JSX
import React from 'react';

/**
 *
 *
 * @param {*} { products = [] }
 * @returns
 */
function ProductsInCart({ products = [] }) {
  return products.map((data, index) => {
    return (
      <li key={index} className="media">
        <div className="media-left">
          <a
            href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_product=10&id_product_attribute=80&rewrite=baby-boy-perfect-gift&controller=product&id_lang=1#/8,color,white/25,size,standard/29,type,lilies"
            title="Baby-Boy Perfect Gift"
          >
            <img
              style={{
                border: '1px solid #e7e7e7',
                width: '50px',
                height: '53px',
              }}
              className="media-object"
              src={data.item.pathImg}
              alt="Baby-Boy Perfect Gift"
            />
          </a>
        </div>
        <div className="media-body">
          <span className="product-name">{data.item.name}</span>
          <span className="product-quantity">x{data.qty}</span>
          <span className="product-price float-xs-right">${data.price}</span>
        </div>
      </li>
    );
  });
}

// export component
export { ProductsInCart };
