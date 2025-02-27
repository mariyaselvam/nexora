import React from "react";
import Logo from "../../assets/common/light-logo.png";
import { Link } from "react-router-dom";

import X from "../../assets/HomeOne/Footer/x.svg";
import Instagram from "../../assets/HomeOne/Footer/instagram.svg";
import linkedIn from "../../assets/HomeOne/Footer/linked-in.svg";
import SMS from "../../assets/HomeOne/Footer/sms.svg";

const Footer = () => {
  return (
    <>
      <section className="home-one-footer-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="home-one-footer-logo-nd-content-wrap">
                <div className="home-one-footer-logo-wrap">
                  <Link to="/">
                    <img src={Logo} alt="" />
                  </Link>
                </div>
              </div>

              <p>
                Empowering your productivity with intuitive tools and seamless
                solutions.
              </p>

              <a
                className="home-one-footer-mail-link-btn"
                href="mailto:hello@nexora.com"
              >
                <img src={SMS} alt="" />
                hello@nexora.com
              </a>
            </div>
            <div className="col-md-2">
              <div className="home-one-usefull-links-wrap">
                <h6 className="home-one-usefull-links-tit">Useful Links</h6>
                <Link to="/">Home 1</Link>
                <Link to="/pages">Home 2</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact-us">Contact Us</Link>
              </div>
            </div>
            <div className="col-md-2">
              <div className="home-one-company-links-wrap">
                <h6 className="home-one-company-links-tit">Company</h6>
                <Link to="/blog-listing">Blog Posts</Link>
                <Link to="/blog-detail">Blog Details</Link>
                <Link to="/404">Error</Link>
                {/* <Link to="#">Support</Link> */}
              </div>
            </div>
            <div className="col-md-2">
              <div className="home-one-Get-In-Touch-links-wrap">
                <h6 className="home-one-Get-In-Touch-links-tit">
                  Get In Touch
                </h6>

                <p>Contact with us via social media platforms </p>

                <div className="home-one-Get-In-Touch-links-social-media-wrap">
                  <Link
                    className="home-one-Get-In-Touch-links-social-media-iocn"
                    to="#"
                  >
                    <img src={X} alt="" />
                  </Link>
                  <Link
                    className="home-one-Get-In-Touch-links-social-media-iocn"
                    to="#"
                  >
                    <img src={Instagram} alt="" />
                  </Link>
                  <Link
                    className="home-one-Get-In-Touch-links-social-media-iocn"
                    to="#"
                  >
                    <img src={linkedIn} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h1 className="footer-main-tit-bottom">Nexora Agency</h1>
            </div>
          </div>
        </div>
        <h5 className="home-one-footer-copy-rights">
          @All Right Reserved By <Link to="#">Nexora</Link> Agency - 2028
        </h5>
      </section>
    </>
  );
};

export default Footer;
