import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";

class Container extends Component {
  state = {
   
  };
  componentDidMount = async () => {
    try {
      await this.getData();
     
    } catch (error) {
      console.log(error);
    }

  };

  getData = async () => {
    // var userData = await axios.get(`/api/users/${localStorage.getItem('userid')}`);

    // this.setState({
    //   userDataShow: userData.data
    // });
  };

  

  

  render() {
//    const {userDataShow,
//     email,
//     address,
//     phonenumber,
//     firstName,
//     lastName,
//     birthday,password,newPassword
//   } = this.state ;
    return (
        <section id="wrapper">
  <nav data-depth={2} className="breadcrumb container">
    <ol
      className="hidden-md-down"
      itemScope
      itemType="http://schema.org/BreadcrumbList"
    >
      <li
        itemProp="itemListElement"
        itemScope
        itemType="http://schema.org/ListItem"
      >
        <a
          itemProp="item"
          href="https://ld-prestashop.template-help.com/prestashop_13106/index.php"
        >
          <span itemProp="name">Home</span>
        </a>
        <meta itemProp="position" content={1} />
      </li>
      <li
        itemProp="itemListElement"
        itemScope
        itemType="http://schema.org/ListItem"
      >
        <a
          itemProp="item"
          href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=my-account"
        >
          <span itemProp="name">Your account</span>
        </a>
        <meta itemProp="position" content={2} />
      </li>
    </ol>
  </nav>
  <div id="content-wrapper" className="container">
    <section id="main">
      <header className="page-header">
        <h1>Order history</h1>
      </header>
      <section id="content" className="page-content">
        <aside id="notifications">
          <div className="container" />
        </aside>
        <h6>
          Here are the orders you've placed since your account was
          created.
        </h6>
        <table className="table table-striped table-bordered table-labeled hidden-sm-down">
          <thead className="thead-default">
            <tr>
              <th>Order reference</th>
              <th>Date</th>
              <th>Total price</th>
              <th className="hidden-md-down">Payment</th>
              <th className="hidden-md-down">Status</th>
              <th>Invoice</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">GAIPJKBCX</th>
              <td>11/21/2018</td>
              <td className="text-xsright">$193.80</td>
              <td className="hidden-md-down">Payments by check</td>
              <td>
                <span
                  className="label label-pill bright"
                  style={{ backgroundColor: "#4169E1" }}
                >
                  Awaiting check payment
                </span>
              </td>
              <td className="text-sm-center hidden-md-down">-</td>
              <td className="text-sm-center order-actions">
                <a
                  href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=order-detail&id_order=21"
                  data-link-action="view-order-details"
                >
                  Details
                </a>
                <a href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=order&submitReorder=&id_order=21">
                  Reorder
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="orders hidden-md-up">
          <div className="order">
            <div className="row">
              <div className="col-10">
                <a href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=order-detail&id_order=21">
                  <h3>GAIPJKBCX</h3>
                </a>
                <div className="date">11/21/2018</div>
                <div className="total">$193.80</div>
                <div className="status">
                  <span
                    className="label label-pill bright"
                    style={{ backgroundColor: "#4169E1" }}
                  >
                    Awaiting check payment
                  </span>
                </div>
              </div>
              <div className="col-2 text-xsright">
                <div>
                  <a
                    href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=order-detail&id_order=21"
                    data-link-action="view-order-details"
                    title="Details"
                  >
                    <i className="material-icons"></i>
                  </a>
                </div>
                <div>
                  <a
                    href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=order&submitReorder=&id_order=21"
                    title="Reorder"
                  >
                    <i className="material-icons"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <a
        href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=my-account"
        className="account-link"
      >
        <i className="material-icons"></i>
        <span>Back to your account</span>
      </a>
      <a
        href="https://ld-prestashop.template-help.com/prestashop_13106/index.php"
        className="account-link"
      >
        <i className="material-icons"></i>
        <span>Home</span>
      </a>
    </section>
  </div>
</section>

      
    );
  }
}

export default Container;
