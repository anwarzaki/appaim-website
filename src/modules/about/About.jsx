import React, { useState, useEffect } from "react";
import "./About.scss";
import { IconButton, TextField, Button } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
import picOne from "../../assets/images/pic-one.png";
import picTwo from "../../assets/images/pic-two.png";
import picDefault from "../../assets/images/default-pic.png";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="About__main-container">
      <p>
        
      </p>
      <div className="About__section-header">
        <h2 className="About__section-title section-title">
          <span>About us</span>
        </h2>
      </div>
      <div className="About__company-info-section">
        <div className="About__company-info-holder">
          <div className="About__company-info-holder-left-sec">
            <div className="About__company-cards">
              <ul>
                <li>
                  <span className="About__company-card-circle"></span>
                  <p className="About__company-card-heading">Our Vision</p>
                  <p className="About__company-card-description">
                    We connect the physical world with its digital twin so that
                    companies can work more safely, efficiently and sustainably
                  </p>
                </li>
                <li>
                  <span className="About__company-card-circle"></span>
                  <p className="About__company-card-heading">Mission</p>
                  <p className="About__company-card-description">
                    Businesses rely on billions of non-networked assets every
                    day. We enable them to be networked and controlled with
                    real-time data
                  </p>
                </li>
                <li>
                  <span className="About__company-card-circle"></span>
                  <p className="About__company-card-heading">Values</p>
                  <p className="About__company-card-description">
                    We work smartly, take care of our team, and have fun in
                    order to ensure the sustainability and success of our
                    organization.
                  </p>
                </li>
                <li>
                  <span className="About__company-card-circle"></span>
                  <p className="About__company-card-heading">Experience</p>
                  <p className="About__company-card-description">
                    Describe about the experience team In IOT and software
                    development Sides
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="About__company-info-holder-right-sec">
            <p className="About__company-info-hdr">
              We are an IoT Platform Based product orianted company.
            </p>
            <p className="About__company-info-description">
              The Internet of Things is turning into something of a nebulous
              concept, as more and more devices enjoy connected status it’s
              become more difficult to draw a line in the sand between what does
              and does not constitute as an IoT device.
            </p>
            <p className="About__company-info-description">
              The Appaim Platform offers enterprises a cloud IoT layer & tools
              to rapidly build Industry 4.0 solutions & applications scaled
              across millions of items with minimal coding. Enable your everyday
              consumer products as connected smart products with the Appaim
              Platform.
            </p>
            <div className="About__comapany-mgmt-sec">
              <p className="About__company-main-heading">Our Managment</p>
              <ul>
                <li>
                  <div className="About__profile-sec">
                    <span>
                      <img src={picOne} alt="P" />
                    </span>
                    <p className="About__profile-designation">CEO</p>
                    <p className="About__profile-name">Samiullah Khan</p>
                  </div>
                </li>
                <li>
                  <div className="About__profile-sec">
                    <span>
                      <img src={picDefault} alt="P" />
                    </span>
                    <p className="About__profile-designation">
                      IoT Solution Head
                    </p>
                    <p className="About__profile-name">Rahul Singh</p>
                  </div>
                </li>
                <li>
                  <div className="About__profile-sec">
                    <span>
                      <img src={picTwo} alt="P" />
                    </span>
                    <p className="About__profile-designation">
                      Sales Head (MENA){" "}
                    </p>
                    <p className="About__profile-name">Liaqath Ali</p>
                  </div>
                </li>
                <li>
                  <div className="About__profile-sec">
                    <span>
                      <img src={picDefault} alt="P" />
                    </span>
                    <p className="About__profile-designation">
                      Principal Architech
                    </p>
                    <p className="About__profile-name">Ravi Kumar</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
