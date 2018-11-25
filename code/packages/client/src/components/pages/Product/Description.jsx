import React, { Component } from 'react';

export class Description extends Component {
  state = {
    tabActive: 0,
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
                className={`nav-link ${tabActive === 0 ? 'active' : ''}`}
                data-toggle="tab"
                href="#description"
                role="tab"
                aria-controls="description"
                aria-selected="true"
                onClick={() => {
                  this.setState({
                    tabActive: 0,
                  });
                }}
              >
                Description
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${tabActive === 1 ? 'active' : ''}`}
                data-toggle="tab"
                href="#product-details"
                role="tab"
                aria-controls="product-details"
                onClick={() => {
                  this.setState({
                    tabActive: 1,
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
                data-product='{"id_shop_default":"1","id_manufacturer":"4","id_supplier":"2","reference":"00101","is_virtual":"0","id_category_default":"2","on_sale":"1","online_only":"0","ecotax":0,"minimal_quantity":"1","price":19.2,"unity":"","unit_price_ratio":"1.250000","additional_shipping_cost":"0.00","customizable":"0","text_fields":"0","uploadable_files":"0","redirect_type":"","id_type_redirected":"0","available_for_order":"1","available_date":null,"show_condition":"0","condition":"new","show_price":"1","indexed":"1","visibility":"both","cache_default_attribute":"54","advanced_stock_management":"0","date_add":"2018-01-03 02:56:43","date_upd":"2018-01-03 02:56:43","pack_stock_type":"3","meta_description":"","meta_keywords":"","meta_title":"","link_rewrite":"autumn-basket","name":"Autumn Basket","description":"<p>What do we do when we want to show our thankfulness? We send a card, a gift or something like that. But the most traditional thing that we do is to present flowers. They are a universal gift and believe us - even if you are not a fan, it doesn\u2019t matter because it is very pleasant to receive flowers. They are unique and they are worth our admiring. Flowers are one of the best nature\u2019s miracles because what could be more innocent and more beautiful than flowers?<\/p>\r\n<p>\u00a0\u00a0 Flowers have two unique peculiarities because they have very unbelievable appearance and unique smell. This combination makes them perfect. And this magical process of fertilization, it is a real wonder. Just imagine how simple and incredible it is when the bees pollinate flowers. Yeah, our nature is unbelievable. If you want to express your feelings without saying a word just present flowers and everything will be understood. Besides that they have other interesting features because their blossom is the main ingredient of all perfumes. They can cast a spell with their charming smell.<\/p>\r\n<p>We are proud to present our wonderful goods. Here you can find many wonderful examples because our collection is one of the biggest among flower stores. We know how to satisfy our clients because we have one similar passion \u2013 flowers. We have many unique products, you don\u2019t have to worry about the quality because our goods have premium quality and after all, trust is the foundation of collaboration. We have plenty of different flower-related supplies.<\/p>\r\n<p>We work with the leading florists because this sphere is very important in our kind of activity. You can rely on us because we are offering only premium quality goods. Important thing is that you can save a lot of money in our store. There are many different benefits and discounts. We are ready to make your life more beautiful.<\/p>","description_short":"<p>What do we do when we want to show our thankfulness? We send a card, a gift or something like that. But the most traditional thing that we do is to present flowers.<\/p>","available_now":"","available_later":"","id":8,"id_product":8,"out_of_stock":2,"new":1,"id_product_attribute":54,"quantity_wanted":1,"extraContent":[],"allow_oosp":0,"category":"home","category_name":"Home","link":"https:\/\/ld-prestashop.template-help.com\/prestashop_13106\/index.php?id_product=8&id_product_attribute=0&rewrite=autumn-basket&controller=product&id_lang=1","attribute_price":0,"price_tax_exc":19.2,"price_without_reduction":24,"reduction":4.8,"specific_prices":{"id_specific_price":"4","id_specific_price_rule":"0","id_cart":"0","id_product":"8","id_shop":"0","id_shop_group":"0","id_currency":"0","id_country":"0","id_group":"0","id_customer":"0","id_product_attribute":"0","price":"-1.000000","from_quantity":"1","reduction":"0.200000","reduction_tax":"1","reduction_type":"percentage","from":"0000-00-00 00:00:00","to":"0000-00-00 00:00:00","score":"32"},"quantity":97,"quantity_all_versions":1796,"id_image":"en-default","features":[{"name":"Height","value":"19 inches","id_feature":"8"},{"name":"Shipping","value":"15$","id_feature":"9"},{"name":"Vase included ","value":"Ceramic","id_feature":"10"},{"name":"Delivery Date","value":"Next day","id_feature":"11"},{"name":"Add Gift","value":"Box of chocolates","id_feature":"12"},{"name":"Orientation","value":"All-around","id_feature":"13"},{"name":"D\u00e9cor","value":"Candles ","id_feature":"14"},{"name":"Style","value":"Centerpiece","id_feature":"15"},{"name":"Weight","value":"3 pounds","id_feature":"16"},{"name":"Accessories","value":"No","id_feature":"17"}],"attachments":[],"virtual":0,"pack":0,"packItems":[],"nopackprice":0,"customization_required":false,"attributes":{"3":{"id_attribute":"10","id_attribute_group":"3","name":"Red","group":"Color","reference":"00101","ean13":"","isbn":"","upc":""},"4":{"id_attribute":"25","id_attribute_group":"4","name":"Standard","group":"Size","reference":"00101","ean13":"","isbn":"","upc":""},"5":{"id_attribute":"28","id_attribute_group":"5","name":"Roses","group":"Type","reference":"00101","ean13":"","isbn":"","upc":""}},"rate":0,"tax_name":"","ecotax_rate":0,"unit_price":15.36,"customizations":{"fields":[]},"id_customization":0,"is_customizable":false,"show_quantities":true,"quantity_label":"Items","quantity_discounts":[],"customer_group_discount":0}'
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
