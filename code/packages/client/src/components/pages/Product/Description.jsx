import React, { Component } from "react";

export class Description extends Component {
  state = {
    tabActive: 0
  };
  render() {
    const { tabActive } = this.state;
    const { product = {}, product: { category = [] } = {} } = this.props;
    return (
      <>
        <div className="tabs col-12 col-lg-7">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a
                className={`nav-link ${tabActive === 0 ? "active" : ""}`}
                data-toggle="tab"
                href="#description"
                role="tab"
                aria-controls="description"
                aria-selected="true"
                onClick={() => {
                  this.setState({
                    tabActive: 0
                  });
                }}
              >
                Description
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${tabActive === 1 ? "active" : ""}`}
                data-toggle="tab"
                href="#product-details"
                role="tab"
                aria-controls="product-details"
                onClick={() => {
                  this.setState({
                    tabActive: 1
                  });
                }}
              >
                Product Details
              </a>
            </li>
          </ul>
          <div className="tab-content" id="tab-content">
            {tabActive === 0 ? (
              <div
                className="tab-pane fade show active"
                id="description"
                role="tabpanel"
              >
                <div className="product-description">{product.description}</div>
              </div>
            ) : (
              <div
                id="product-details"
                data-product="{&quot;id_shop_default&quot;:&quot;1&quot;,&quot;id_manufacturer&quot;:&quot;4&quot;,&quot;id_supplier&quot;:&quot;2&quot;,&quot;reference&quot;:&quot;00101&quot;,&quot;is_virtual&quot;:&quot;0&quot;,&quot;id_category_default&quot;:&quot;2&quot;,&quot;on_sale&quot;:&quot;1&quot;,&quot;online_only&quot;:&quot;0&quot;,&quot;ecotax&quot;:0,&quot;minimal_quantity&quot;:&quot;1&quot;,&quot;price&quot;:19.2,&quot;unity&quot;:&quot;&quot;,&quot;unit_price_ratio&quot;:&quot;1.250000&quot;,&quot;additional_shipping_cost&quot;:&quot;0.00&quot;,&quot;customizable&quot;:&quot;0&quot;,&quot;text_fields&quot;:&quot;0&quot;,&quot;uploadable_files&quot;:&quot;0&quot;,&quot;redirect_type&quot;:&quot;&quot;,&quot;id_type_redirected&quot;:&quot;0&quot;,&quot;available_for_order&quot;:&quot;1&quot;,&quot;available_date&quot;:null,&quot;show_condition&quot;:&quot;0&quot;,&quot;condition&quot;:&quot;new&quot;,&quot;show_price&quot;:&quot;1&quot;,&quot;indexed&quot;:&quot;1&quot;,&quot;visibility&quot;:&quot;both&quot;,&quot;cache_default_attribute&quot;:&quot;54&quot;,&quot;advanced_stock_management&quot;:&quot;0&quot;,&quot;date_add&quot;:&quot;2018-01-03 02:56:43&quot;,&quot;date_upd&quot;:&quot;2018-01-03 02:56:43&quot;,&quot;pack_stock_type&quot;:&quot;3&quot;,&quot;meta_description&quot;:&quot;&quot;,&quot;meta_keywords&quot;:&quot;&quot;,&quot;meta_title&quot;:&quot;&quot;,&quot;link_rewrite&quot;:&quot;autumn-basket&quot;,&quot;name&quot;:&quot;Autumn Basket&quot;,&quot;description&quot;:&quot;<p>What do we do when we want to show our thankfulness? We send a card, a gift or something like that. But the most traditional thing that we do is to present flowers. They are a universal gift and believe us - even if you are not a fan, it doesn\u2019t matter because it is very pleasant to receive flowers. They are unique and they are worth our admiring. Flowers are one of the best nature\u2019s miracles because what could be more innocent and more beautiful than flowers?<\/p>\r\n<p>\u00a0\u00a0 Flowers have two unique peculiarities because they have very unbelievable appearance and unique smell. This combination makes them perfect. And this magical process of fertilization, it is a real wonder. Just imagine how simple and incredible it is when the bees pollinate flowers. Yeah, our nature is unbelievable. If you want to express your feelings without saying a word just present flowers and everything will be understood. Besides that they have other interesting features because their blossom is the main ingredient of all perfumes. They can cast a spell with their charming smell.<\/p>\r\n<p>We are proud to present our wonderful goods. Here you can find many wonderful examples because our collection is one of the biggest among flower stores. We know how to satisfy our clients because we have one similar passion \u2013 flowers. We have many unique products, you don\u2019t have to worry about the quality because our goods have premium quality and after all, trust is the foundation of collaboration. We have plenty of different flower-related supplies.<\/p>\r\n<p>We work with the leading florists because this sphere is very important in our kind of activity. You can rely on us because we are offering only premium quality goods. Important thing is that you can save a lot of money in our store. There are many different benefits and discounts. We are ready to make your life more beautiful.<\/p>&quot;,&quot;description_short&quot;:&quot;<p>What do we do when we want to show our thankfulness? We send a card, a gift or something like that. But the most traditional thing that we do is to present flowers.<\/p>&quot;,&quot;available_now&quot;:&quot;&quot;,&quot;available_later&quot;:&quot;&quot;,&quot;id&quot;:8,&quot;id_product&quot;:8,&quot;out_of_stock&quot;:2,&quot;new&quot;:1,&quot;id_product_attribute&quot;:54,&quot;quantity_wanted&quot;:1,&quot;extraContent&quot;:[],&quot;allow_oosp&quot;:0,&quot;category&quot;:&quot;home&quot;,&quot;category_name&quot;:&quot;Home&quot;,&quot;link&quot;:&quot;https:\/\/ld-prestashop.template-help.com\/prestashop_13106\/index.php?id_product=8&id_product_attribute=0&rewrite=autumn-basket&controller=product&id_lang=1&quot;,&quot;attribute_price&quot;:0,&quot;price_tax_exc&quot;:19.2,&quot;price_without_reduction&quot;:24,&quot;reduction&quot;:4.8,&quot;specific_prices&quot;:{&quot;id_specific_price&quot;:&quot;4&quot;,&quot;id_specific_price_rule&quot;:&quot;0&quot;,&quot;id_cart&quot;:&quot;0&quot;,&quot;id_product&quot;:&quot;8&quot;,&quot;id_shop&quot;:&quot;0&quot;,&quot;id_shop_group&quot;:&quot;0&quot;,&quot;id_currency&quot;:&quot;0&quot;,&quot;id_country&quot;:&quot;0&quot;,&quot;id_group&quot;:&quot;0&quot;,&quot;id_customer&quot;:&quot;0&quot;,&quot;id_product_attribute&quot;:&quot;0&quot;,&quot;price&quot;:&quot;-1.000000&quot;,&quot;from_quantity&quot;:&quot;1&quot;,&quot;reduction&quot;:&quot;0.200000&quot;,&quot;reduction_tax&quot;:&quot;1&quot;,&quot;reduction_type&quot;:&quot;percentage&quot;,&quot;from&quot;:&quot;0000-00-00 00:00:00&quot;,&quot;to&quot;:&quot;0000-00-00 00:00:00&quot;,&quot;score&quot;:&quot;32&quot;},&quot;quantity&quot;:97,&quot;quantity_all_versions&quot;:1796,&quot;id_image&quot;:&quot;en-default&quot;,&quot;features&quot;:[{&quot;name&quot;:&quot;Height&quot;,&quot;value&quot;:&quot;19 inches&quot;,&quot;id_feature&quot;:&quot;8&quot;},{&quot;name&quot;:&quot;Shipping&quot;,&quot;value&quot;:&quot;15$&quot;,&quot;id_feature&quot;:&quot;9&quot;},{&quot;name&quot;:&quot;Vase included &quot;,&quot;value&quot;:&quot;Ceramic&quot;,&quot;id_feature&quot;:&quot;10&quot;},{&quot;name&quot;:&quot;Delivery Date&quot;,&quot;value&quot;:&quot;Next day&quot;,&quot;id_feature&quot;:&quot;11&quot;},{&quot;name&quot;:&quot;Add Gift&quot;,&quot;value&quot;:&quot;Box of chocolates&quot;,&quot;id_feature&quot;:&quot;12&quot;},{&quot;name&quot;:&quot;Orientation&quot;,&quot;value&quot;:&quot;All-around&quot;,&quot;id_feature&quot;:&quot;13&quot;},{&quot;name&quot;:&quot;D\u00e9cor&quot;,&quot;value&quot;:&quot;Candles &quot;,&quot;id_feature&quot;:&quot;14&quot;},{&quot;name&quot;:&quot;Style&quot;,&quot;value&quot;:&quot;Centerpiece&quot;,&quot;id_feature&quot;:&quot;15&quot;},{&quot;name&quot;:&quot;Weight&quot;,&quot;value&quot;:&quot;3 pounds&quot;,&quot;id_feature&quot;:&quot;16&quot;},{&quot;name&quot;:&quot;Accessories&quot;,&quot;value&quot;:&quot;No&quot;,&quot;id_feature&quot;:&quot;17&quot;}],&quot;attachments&quot;:[],&quot;virtual&quot;:0,&quot;pack&quot;:0,&quot;packItems&quot;:[],&quot;nopackprice&quot;:0,&quot;customization_required&quot;:false,&quot;attributes&quot;:{&quot;3&quot;:{&quot;id_attribute&quot;:&quot;10&quot;,&quot;id_attribute_group&quot;:&quot;3&quot;,&quot;name&quot;:&quot;Red&quot;,&quot;group&quot;:&quot;Color&quot;,&quot;reference&quot;:&quot;00101&quot;,&quot;ean13&quot;:&quot;&quot;,&quot;isbn&quot;:&quot;&quot;,&quot;upc&quot;:&quot;&quot;},&quot;4&quot;:{&quot;id_attribute&quot;:&quot;25&quot;,&quot;id_attribute_group&quot;:&quot;4&quot;,&quot;name&quot;:&quot;Standard&quot;,&quot;group&quot;:&quot;Size&quot;,&quot;reference&quot;:&quot;00101&quot;,&quot;ean13&quot;:&quot;&quot;,&quot;isbn&quot;:&quot;&quot;,&quot;upc&quot;:&quot;&quot;},&quot;5&quot;:{&quot;id_attribute&quot;:&quot;28&quot;,&quot;id_attribute_group&quot;:&quot;5&quot;,&quot;name&quot;:&quot;Roses&quot;,&quot;group&quot;:&quot;Type&quot;,&quot;reference&quot;:&quot;00101&quot;,&quot;ean13&quot;:&quot;&quot;,&quot;isbn&quot;:&quot;&quot;,&quot;upc&quot;:&quot;&quot;}},&quot;rate&quot;:0,&quot;tax_name&quot;:&quot;&quot;,&quot;ecotax_rate&quot;:0,&quot;unit_price&quot;:15.36,&quot;customizations&quot;:{&quot;fields&quot;:[]},&quot;id_customization&quot;:0,&quot;is_customizable&quot;:false,&quot;show_quantities&quot;:true,&quot;quantity_label&quot;:&quot;Items&quot;,&quot;quantity_discounts&quot;:[],&quot;customer_group_discount&quot;:0}"
                role="tabpanel"
              >
                <div className="product-manufacturer">
                  <a href="/help">
                    <img
                      src={product.pathImg}
                      className="img manufacturer-logo"
                      alt="1-800-flowers.com"
                    />
                  </a>
                </div>
                <section className="product-features">
                  <h4>Data sheet</h4>
                  <dl className="data-sheet">
                    {category.map(data => (
                      <>
                        <dt className="name">{data.name}</dt>
                        <dd className="value">{data.value}</dd>
                      </>
                    ))}
                  </dl>
                </section>
              </div>
            )}
          </div>
        </div>
        <div className="col-12 col-lg-5" />
      </>
    );
  }
}
