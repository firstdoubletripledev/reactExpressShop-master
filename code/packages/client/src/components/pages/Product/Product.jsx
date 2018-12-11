// import Axios module from axios for Promise based HTTP request
import Axios from 'axios';

// import React module from react for JSX
import React, { PureComponent } from 'react';

// import Footer component
import Footer from '../../navigations/Footer';

// import Header component
import Header from '../../navigations/Header';

// import ContentImage component
import { ContentImage } from './ContentImage';

// import ContentItem component
import { ContentItem } from './ContentItem';

// import Description component
import { Description } from './Description';

// import SuggestProduct component
import { SuggestProduct } from './SuggestProduct';

/**
 *
 *
 * @class Product
 * @extends {PureComponent}
 */
class Product extends PureComponent {
  /**
   *
   *
   * @memberof Product
   */
  state = {
    product: {},
    productSuggest: [],
  };

  /**
   *
   *
   * @memberof Product
   */
  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const request1 = Axios.get(`/api/products/${id}`);
    const request2 = Axios.get(`/api/products/perpage/4`);

    const [res1, res2] = await Promise.all([request1, request2]).catch(
      error => {
        return console.log(error.response);
      }
    );
    const { data = null } = res1;
    const { data: dataSuggest = null } = res2;

    if (data !== null && dataSuggest !== null) {
      this.setState({
        product: data,
        productSuggest: dataSuggest.data_products,
      });
    }
  }

  /**
   *
   *
   * @returns
   * @memberof Product
   */
  render() {
    const { product, productSuggest } = this.state;
    return (
      <>
        <Header />
        <section id="wrapper">
          <div id="content-wrapper" className="container">
            <section id="main" itemScope itemType="https://schema.org/Product">
              <meta
                itemProp="url"
                content="https://ld-prestashop.template-help.com/prestashop_13106/index.php?id_product=8&id_product_attribute=54&rewrite=autumn-basket&controller=product&id_lang=1#/10,color,red/25,size,standard/28,type,roses"
              />
              <div className="row">
                <div className="col-12 col-lg-6 img-wrap">
                  <ContentImage product={product} />
                </div>
                <div className="col-12 col-lg-6 content-wrap">
                  <ContentItem product={product} />
                </div>
              </div>
              <div className="row">
                <Description product={product} />
              </div>
              <SuggestProduct productSuggest={productSuggest} />
            </section>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

// export component
export default Product;
