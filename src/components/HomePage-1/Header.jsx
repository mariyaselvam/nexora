import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';

import React from "react";
import Logo from "../../assets/common/Logo.svg";
// import { Link } from 'react-router-dom'

import HandburgerMenu from "../../assets/Header/burger.svg";
import Close from "../../assets/Header/close.svg";
import ArrowDown from "../../assets/Header/arrow-down.svg";

const Header = () => {
  const [BtnState, setBtnState] = useState(false);
  function NavToggle() {
    setBtnState((BtnState) => !BtnState);
  }
  let NavBtn = BtnState ? "nav-view" : "";

  // nav-menu-active-code
  const location = useLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  return (
    <>
      <section className="headerOne">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header-one-nav-bar-wrap">
                <div className="header-one-nav-logo">
                  <Link to="/">
                    <img src={Logo} alt="" />
                  </Link>
                </div>

                <div className="nav-menu-options">
                  <Link
                    className={
                      "nav-list home-nav-link " +
                      (url === "/" || url === "/pages" ? "nav-list-active" : "")
                    }
                    to="/"
                  >
                    Home{" "}
                    <img
                      className="home-nav-option-arrow"
                      src={ArrowDown}
                      alt=""
                    />
                    <div className="homes-links-dropdown">
                      <Link to="/">Home 1</Link>
                      <Link to="/pages">Home 2</Link>
                    </div>
                  </Link>
                  <Link
                    className={
                      "nav-list " + (url === "/about" ? "nav-list-active" : "")
                    }
                    to="/about"
                  >
                    About
                  </Link>
                  <Link
                    className={
                      "nav-list " +
                      (url === "/services" ? "nav-list-active" : "")
                    }
                    to="/services"
                  >
                    Services
                  </Link>
                  <Link
                    className={
                      "nav-list home-nav-link " +
                      (url === "/blog-listing" || url === "/blog-detail"
                        ? "nav-list-active"
                        : "")
                    }
                    to="/blog-listing"
                  >
                    Blog{" "}
                    <img
                      className="home-nav-option-arrow"
                      src={ArrowDown}
                      alt=""
                    />
                    <div className="homes-links-dropdown">
                      <Link to="/blog-listing">Blog Posts</Link>
                      <Link to="/blog-detail">Blog Details</Link>
                    </div>
                  </Link>
                  <Link
                    className={
                      "nav-list " +
                      (url === "/contact-us" ? "nav-list-active" : "")
                    }
                    to="/contact-us"
                  >
                    Support
                  </Link>
                </div>

                <div className="nav-btn-wrap">
                  <Link to="/contact-us">Contact Us</Link>
                </div>

                <button onClick={NavToggle} className="handburger-menu-icon">
                  <img src={HandburgerMenu} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="home1-mobile-nav" className={`mobile-view-side-nav ${NavBtn}`}>
          <button onClick={NavToggle} className="handburger-menu-icon">
            <img src={Close} alt="" />
          </button>

          <div className="mobile-tab-view-nav-options">
            <Accordion >
              <Accordion.Item className={
                "nav-list costom-accordion " +
                (url === "/" || url === "/pages" ? "nav-list-active" : "")
              }
                eventKey="0">
                <Accordion.Header>Home</Accordion.Header>
                <Accordion.Body>
                  <Link
                    className={
                      "nav-list " +
                      (url === "/" ? "nav-list-active" : "")
                    }
                    to="/"
                  >
                    Home 1
                  </Link>
                  <Link
                    className={
                      "nav-list " +
                      (url === "/pages" ? "nav-list-active" : "")
                    }
                    to="/pages"
                  >
                    Home 2
                  </Link>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Link
              className={
                "nav-list " + (url === "/about" ? "nav-list-active" : "")
              }
              to="/about"
            >
              About
            </Link>
            <Link
              className={
                "nav-list " + (url === "/services" ? "nav-list-active" : "")
              }
              to="/services"
            >
              Services
            </Link>
            <Accordion >
              <Accordion.Item className={
                "nav-list costom-accordion " +
                (url === "/" || url === "/pages" ? "nav-list-active" : "")
              }
                eventKey="0">
                <Accordion.Header>Blog</Accordion.Header>
                <Accordion.Body>
                  <Link
                    className={
                      "nav-list " +
                      (url === "/blog-listing"
                        ? "nav-list-active"
                        : "")
                    }
                    to="/blog-listing"
                  >
                    Blog Posts
                  </Link>
                  <Link
                    className={
                      "nav-list " +
                      (url === "/blog-detail"
                        ? "nav-list-active"
                        : "")
                    }
                    to="/blog-detail"
                  >
                    Blog Details
                  </Link>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Link
              className={
                "nav-list " + (url === "/contact-us" ? "nav-list-active" : "")
              }
              to="/contact-us"
            >
              Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
