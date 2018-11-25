import Axios from 'axios';
import React, { Component } from 'react';

import Footer from '../../navigations/Footer';
import Header from '../../navigations/Header';
import { ContentImage } from './ContentImage';
import { ContentItem } from './ContentItem';
import { Description } from './Description';
import { SuggestProduct } from './SuggestProduct';

class Product extends Component {
  state = {
    product: {},
    productSuggest: [],
  };

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

export default Product;
