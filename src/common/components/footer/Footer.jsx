import React, { Component } from "react";
import "./Footer.scss";
import logo from "../../../assets/images/footer-logo.svg";
import FacebookIcon from "../../../assets/images/balck-facebook-icon.svg";
import TwitterIcon from "../../../assets/images/balck-twitter-icon.svg";
import LinkedInIcon from "../../../assets/images/balck-linkedin-icon.svg";
import InstagramIcon from "../../../assets/images/balck-instagram-icon.svg";
const Footer = ({ scrollTo, refs }) => {
  return (
    <div className="Footer__main-container">
      <div className="Footer__nav-links-section">
        <div className="Footer__nav-link-item">
          <span className="Footer__footer-logo">
            <img src={logo} alt="L" />
          </span>
        </div>
        <div className="Footer__nav-link-item-sec">
          <ul className="Footer__nav-links">
            <li
              onClick={() => {
                scrollTo(refs.homeRef.current);
              }}
            >Home</li>
            <li
              onClick={() => {
                scrollTo(refs.aboutRef.current);
              }}
            >About Us</li>
            <li
              onClick={() => {
                scrollTo(refs.supportAreasRef.current);
              }}
            >Support areas</li>
            <li
              onClick={() => {
                scrollTo(refs.contactRef.current);
              }}
            >
              Contact
            </li>
          </ul>
        </div>
        <div className="Footer__nav-link-item social-icons">
          <ul className="Footer__social-icon-links">
            <li>
              <span className="link-icon">
                <img src={FacebookIcon} alt="F" />
              </span>
            </li>
            <li>
              <span className="link-icon">
                <img src={TwitterIcon} alt="T" />
              </span>
            </li>
            <li>
              <span className="link-icon">
                <img src={LinkedInIcon} alt="T" />
              </span>
            </li>
            <li>
              <span className="link-icon">
                <img src={InstagramIcon} alt="I" />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="Footer__copy-right-section">
        <span> © 2021 All rights reserved. Appaim Private limited.</span>
      </div>
    </div>
  );
};

export default Footer;
