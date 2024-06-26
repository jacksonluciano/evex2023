/** @jsx jsx */
import React from "react";
import { ContactFormTitle } from "@/data";
import { jsx } from "@emotion/react";

import {
  commonSection,
  commonBtn,
  redBg,
  inputForm,
  textarea
} from "../assets/styles/layout.styles";
import {contactFrom} from "../assets/styles/ContactForm.styles";


const ContactForm = () => {
  const { subTitle, title, description } = ContactFormTitle;
  return (
    <section css={commonSection} className="ContactPage">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4 className="sub_title">{subTitle}</h4>
            <h2 className="sec_title">{title}</h2>
            <p className="sec_desc">{description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-sm-12 col-md-10 offset-md-1">
            <form
              action="#"
              method="post"
              id="contactForm"
              css={contactFrom}
            >
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <input
                  css={inputForm}
                    className="input-form required"
                    type="text"
                    name="f_name"
                    id="f_name"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                  css={inputForm}
                    className="input-form required"
                    type="text"
                    name="l_name"
                    id="l_name"
                    placeholder="Last Name"
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                  css={inputForm}
                    className="input-form required"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                  css={inputForm}
                    className="input-form"
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="col-lg-12 col-sm-12">
                  <textarea
                  css={[inputForm,textarea]}
                    className="input-form required"
                    name="con_message"
                    id="con_message"
                    placeholder="Write Message"
                  ></textarea>
                </div>
              </div>
              <button
              css={[commonBtn,redBg]}
                type="submit"
                id="con_submit"
              >
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
