
import React from "react";


export const LeftColumn = () => (
    <div className="col-md-8">
        <section id="checkout-personal-information-step" className="checkout-step -reachable -complete -current js-current-step" style={{
            border: '1px solid #a3a3a3',
            padding: '15px'
        }}>
            <h1 className="step-title h3">
                Personal Information
    <span className="step-edit text-muted">
                    <i className="material-icons edit">mode_edit</i> Fill
    </span>
            </h1>
            <div className="content">

                <div className="tab-content">
                    <div
                        className="tab-pane active"
                        id="checkout-guest-form"
                        role="tabpanel"
                    >
                        <form
                            action="https://ld-prestashop.template-help.com/prestashop_13106/index.php?controller=order"
                            id="customer-form"
                            className="js-customer-form"
                            method="post"
                        >
                            <section>
                                <input
                                    type="hidden"
                                    name="id_customer"
                                    defaultValue={36}
                                />
                                <div className="form-group row ">
                                    <label className="col-md-3 form-control-label">
                                        Social title
              </label>
                                    <div className="col-md-6 form-control-valign">
                                        <label className="radio-inline">
                                            <span className="custom-radio">
                                                <input
                                                    name="id_gender"
                                                    type="radio"
                                                    defaultValue={1}
                                                    defaultChecked
                                                />
                                                <span />
                                            </span>
                                            Mr.
                </label>
                                        <label className="radio-inline">
                                            <span className="custom-radio">
                                                <input
                                                    name="id_gender"
                                                    type="radio"
                                                    defaultValue={2}
                                                />
                                                <span />
                                            </span>
                                            Mrs.
                </label>
                                    </div>
                                    <div className="col-md-3 form-control-comment" />
                                </div>
                                <div className="form-group row ">
                                    <label className="col-md-3 form-control-label required">
                                        First name
              </label>
                                    <div className="col-md-6">
                                        <input
                                            className="form-control"
                                            name="firstname"
                                            type="text"
                                            defaultValue="dá"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-3 form-control-comment" />
                                </div>
                                <div className="form-group row ">
                                    <label className="col-md-3 form-control-label required">
                                        Last name
              </label>
                                    <div className="col-md-6">
                                        <input
                                            className="form-control"
                                            name="lastname"
                                            type="text"
                                            defaultValue="da"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-3 form-control-comment" />
                                </div>
                                <div className="form-group row ">
                                    <label className="col-md-3 form-control-label required">
                                        Email
              </label>
                                    <div className="col-md-6">
                                        <input
                                            className="form-control"
                                            name="email"
                                            type="email"
                                            defaultValue="sjg21519ds97@gmail.com"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-3 form-control-comment" />
                                </div>
                                <div className="form-group row ">
                                    <label className="col-md-3 form-control-label required">
                                        Address
              </label>
                                    <div className="col-md-6">
                                        <input
                                            className="form-control"
                                            name="lastname"
                                            type="text"
                                            defaultValue="da"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-3 form-control-comment" />
                                </div>
                                <div className="form-group row ">
                                    <label className="col-md-3 form-control-label required">
                                        Phone Number
              </label>
                                    <div className="col-md-6">
                                    <input type="tel" name="telphone" pattern="[0-9]{11}" minLength="10" maxlength="11"  title="Ten digits code" required/> 
                                    </div>
                                    <div className="col-md-3 form-control-comment" />
                                </div>




                            </section>
                            <footer className="form-footer clearfix" style={{ textAlign: "center" }}>
                                <input type="hidden" name="submitCreate" defaultValue={1} />
                                <button
                                    className="continue btn btn-primary float-xs-right"
                                    name="continue"
                                    data-link-action="register-new-customer"
                                    type="submit"
                                    value={1}
                                >
                                    Checkout </button>
                            </footer>

                        </form>
                    </div>

                </div>
            </div>
        </section>


    </div>

);
