import React from "react";

export function SubmitNews() {
  return (
    <div className="wrapper it_ESKBJYFGKYLC container">
      <div className="row it_TJYCOUNMLNBI ">
        <div className="it_RXAGSRFDOWWK col-12     ">
          <div className="module ">
            <div className="block_newsletter">
              <h2 className="products-section-title">Join Our Newsletter</h2>
              <form
                action="https://ld-prestashop.template-help.com/prestashop_13106/index.php#footer"
                method="post"
              >
                <input
                  name="email"
                  type="text"
                  className="form-control"
                  placeholder="Your email address"
                />
                <input
                  className="btn btn-md btn-primary"
                  name="submitNewsletter"
                  type="submit"
                  defaultValue="Subscribe"
                />
                <input type="hidden" name="action" defaultValue={0} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
