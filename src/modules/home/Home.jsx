import React, { useState, useEffect } from "react";
import "./Home.scss";
import "swiper/swiper.scss";
import Swiper from "react-id-swiper";
import homeAutomationImg from "../../assets/images/home-automation.png";
import officeMgmtImg from "../../assets/images/office-mgmt.png";
import agricultureImg from "../../assets/images/agriculture.png";
import mallsImg from "../../assets/images/malls.png";
import logisticsImg from "../../assets/images/logistics.png";
import storesImg from "../../assets/images/stores.png";
import googlePlayImg from "../../assets/images/google-play.svg";
import appStoreImg from "../../assets/images/app-store.svg";
import linkedInImg from "../../assets/images/grey-linkedin.svg";
import instagramImg from "../../assets/images/grey-instagram.svg";
import twitterImg from "../../assets/images/grey-twitter.svg";
import facebookImg from "../../assets/images/grey-facebook.svg";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = (props) => {
  let sliderImages = [
    {
      id: 1,
      imgUrl: storesImg,
      imgText: "Stores",

      
    },
    {
      id: 2,
      imgUrl: mallsImg,
      imgText: "Malls",

      
    },
    {
      id: 3,
      imgUrl: logisticsImg,
      imgText: "Logistics",


    },
    {
      id: 4,
      imgUrl: homeAutomationImg,
      imgText: "Home Automation",
    },
    {
 
      id: 5,
      imgUrl: agricultureImg,
      imgText: "Agriculture",
    },

    {
      id: 6,
      imgUrl: officeMgmtImg,
      imgText: "Office Management",
      
    },
  ];
  const params = {
    slidesPerView: 2,
    spaceBetween: 25,
    centeredSlides: true,
    slideToClickedSlide: true,
    loop: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   type: "bullets",
    //   clickable: true,
    // },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      560: {
        slidesPerView: "auto",
        spaceBetween: 20,
      },
      320: {
        slidesPerView: "auto",
        spaceBetween: 10,
      },
    },
    observer: true,
  };
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="Home__main-container" useRef={props.homeRef}>
      <div className="Home__inner-container-row">
        <div className="Home__inner-container-col left-sec">
          <div className="Home__banner-left-info-sec">
            <p className="Home__banner-heading-one">INTIGRATING IoT,</p>
            <p className="Home__banner-heading-two">DELIVERING RESULTS.</p>
            <p className="Home__banner-sub-heading">
              We provide next generation Business IoT Solutions
            </p>
          </div>
          <div className="Home__banner-download-app-sec">
            <span>
              <img src={googlePlayImg} alt="G" />
            </span>
            <span>
              <img src={appStoreImg} alt="A" />
            </span>
          </div>
          <div className="Home__banner-social-icon-list">
            <ul>
              <li>
                <img src={linkedInImg} alt="L" />
              </li>
              <li>
                <img src={instagramImg} alt="I" />
              </li>
              <li>
                <img src={twitterImg} alt="T" />
              </li>
              <li>
                <img src={facebookImg} alt="F" />
              </li>
            </ul>
          </div>
        </div>
        <div className="Home__inner-container-col right-sec">
          <div className="Home__swiper-container">
            <Swiper {...params} shouldSwiperUpdate rebuildOnUpdate={true}>
              {sliderImages.map((obj, index) => {
                return (
                  <div key={index} className="slider-item">
                    <img src={obj.imgUrl} alt="S" />
                    <p className="slider-item-heading">{obj.imgText}</p>
                  </div>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
