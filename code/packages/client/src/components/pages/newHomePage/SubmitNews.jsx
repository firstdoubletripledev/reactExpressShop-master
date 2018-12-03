import Axios from 'axios';
import { Formik } from 'formik';
import React from 'react';
import { errorMessage, successMessage } from '../utils/Message';

export function SubmitNews() {
  return (
    <div className="wrapper it_ESKBJYFGKYLC container">
      <div className="row it_TJYCOUNMLNBI ">
        <div className="it_RXAGSRFDOWWK col-12     ">
          <div className="module ">
            <div className="block_newsletter">
              <h2 className="products-section-title">Join Our Newsletter</h2>
              <Formik
                initialValues={{ email: '' }}
                onSubmit={async ({ email }, { setSubmitting }) => {
                  const res = await Axios.get(`/api/submitnews/${email}`).catch(
                    error => {
                      console.log(error);
                      errorMessage(error);
                    }
                  );
                  setSubmitting(false);

                  if (!res) {
                    return null;
                  } else {
                    successMessage(res.data.msg);
                  }
                }}
              >
                {({
                  handleSubmit,
                  errors,
                  values,
                  handleChange,
                  isSubmitting,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Your email address"
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    {errors.email}
                    <input
                      className="btn btn-md btn-primary"
                      name="submitNewsletter"
                      defaultValue="Subscribe"
                      type="submit"
                      disabled={isSubmitting}
                    />
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
