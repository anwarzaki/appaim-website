import React, { useRef, useState, useEffect } from "react";
import "./SupportAreas.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Swiper from "react-id-swiper";
import homeAutomationImg from "../../assets/images/home-automation.png";
import officeMgmtImg from "../../assets/images/office-mgmt.png";
import agricultureImg from "../../assets/images/agriculture.png";
import mallsImg from "../../assets/images/malls.png";
import logisticsImg from "../../assets/images/logistics.png";
import storesImg from "../../assets/images/stores.png";
import subInfoImageOne from "../../assets/images/sub-info-image-one.png";
import homeSubImageOne from "../../assets/images/sub-info-image-one.png";
import homeSubImageTwo from "../../assets/images/sub-info-image-one.png";
import homeSubImageThree from "../../assets/images/sub-info-image-one.png";
import assetSubImageOne from "../../assets/images/sub-info-image-one.png";
import assetSubImageTwo from "../../assets/images/sub-info-image-one.png";
import assetSubImageThree from "../../assets/images/sub-info-image-one.png";
import aggriSubImageOne from "../../assets/images/sub-info-image-one.png";
import aggriSubImageTwo from "../../assets/images/sub-info-image-one.png";
import aggriSubImageThree from "../../assets/images/sub-info-image-one.png";
import mallsSubImageOne from "../../assets/images/sub-info-image-one.png";
import mallsSubImageTwo from "../../assets/images/sub-info-image-one.png";
import mallsSubImageThree from "../../assets/images/sub-info-image-one.png";
import logisticsSubImageOne from "../../assets/images/sub-info-image-one.png";
import logisticsSubImageTwo from "../../assets/images/sub-info-image-one.png";
import logisticsSubImageThree from "../../assets/images/sub-info-image-one.png";
import storesSubImageOne from "../../assets/images/sub-info-image-one.png";
import storesSubImageTwo from "../../assets/images/sub-info-image-one.png";
import storesSubImageThree from "../../assets/images/sub-info-image-one.png";
import AOS from "aos";
import "aos/dist/aos.css";

const SupportAreas = (props) => {
  const swiperRef = useRef(null);
  const [selectedImageData, setSelectedImageData] = useState({
    id: 2,
    data: [
      {
        heading: "Asset Tracking",
        paragraph:
          "Record assets, scan and discover new assets and update the inventory automatically, and monitor the entire life cycle of each asset",
        subData: {
          subImageUrl: subInfoImageOne,
          title: " Livestock Managment",
          desc: `It   was   observed   that   industrial   agricultural
          companies depends strongly on manual workforce to carry out their farm activity. Due to
          global   changes   in   economic   landscape,     daily   basis   supply   demands   get   increasing.
          Livestock   is   a   section   farming   that   requires   regular   monitory.   The   IoT   based   system
          provide farmers with stock information directly to their smartphone. It enables livestock
          management   to   quickly   detect   spread   of   flue   and   separate   infected   breeds   from   the
          unaffected breeds.`,
        },
      },
      {
        heading: "Time Attandance",
        paragraph:
          "Our attendance solution that integrates with it seamlessly any HR system which eliminate manual data entry or incomplete importing from your time tracking tool.",
        subData: {
          subImageUrl: subInfoImageOne,
          title: " Time Managment",
          desc: `It   was   observed   that   industrial   agricultural
          companies depends strongly on manual workforce to carry out their farm activity. Due to
          global   changes   in   economic   landscape,     daily   basis   supply   demands   get   increasing.
          Livestock   is   a   section   farming   that   requires   regular   monitory.   The   IoT   based   system
          provide farmers with stock information directly to their smartphone. It enables livestock
          management   to   quickly   detect   spread   of   flue   and   separate   infected   breeds   from   the
          unaffected breeds.`,
        },
      },
      {
        heading: "Cyber Security",
        paragraph:
          "Mobile notification , email notification to the employees and managment on time tracking, office enviroment and asser status.",
        subData: {
          subImageUrl: subInfoImageOne,
          title: " Cyber Security",
          desc: `Vast development of resourceful technology in management will increase the rate of cybersecurity risks. 
          The function of IoT technology in this section is to protect management data and network from 
          potential hackers by making all devices defensible from threats.`,
        },
      },
    ],
  });
  const [selectedDataIndex, setIndex] = useState(0);
  const params = {
    slidesPerView: 6,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 6,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 0,
      },
      560: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 0,
        slideToClickedSlide: true,
      },
    },
    observer: true,
  };
  let sliderImages = [
    {
      id: 1,
      imgUrl: homeAutomationImg,
      imgText: "Home Automation",
      isOffer: false,
    },
    {
      id: 2,
      imgUrl: officeMgmtImg,
      imgText: "Office Management",
      isOffer: true,
    },
    {
      id: 3,
      imgUrl: agricultureImg,
      imgText: "Agriculture",
      isOffer: false,
    },
    {
      id: 4,
      imgUrl: mallsImg,
      imgText: "Malls",
      isOffer: false,
    },
    {
      id: 5,
      imgUrl: logisticsImg,
      imgText: "Logistics",
      isOffer: false,
    },

    {
      id: 6,
      imgUrl: storesImg,
      imgText: "Stores",
      isOffer: false,
    },
  ];
  const imagesData = [
    {
      id: 1,
      data: [
        {
          heading: "Access Controls",
          paragraph:
            "This is an integral section of a well-constructed IoT sector. The security measured in this section has the ability to monitor diverse range of access points. Access points can be set to allow occupants by scanning fingerprints, password on a keypad, and facial scanning. This system is automated to verify a match and helps to check the credentials of anyone trying to gain entry.",
          subData: {
            subImageUrl: homeSubImageOne,
            title: "Access Controls",
            desc: "This is an integral section of a well-constructed IoT sector. The security measured in this section has the ability to monitor diverse range of access points. Access points can be set to allow occupants by scanning fingerprints, password on a keypad, and facial scanning. This system is automated to verify a match and helps to check the credentials of anyone trying to gain entry.",
          },
        },
        {
          heading: "Sound Systems",
          paragraph:
            "In most sound system, there are mainly two kinds of sound sensors, which can either be the appliances sense high-pitched or ultra-low level of noise. This sound sensor system will react to each type of signals. For instance, this sound sensor system will easily detect when a baby is crying and turns in a signal light. This system also gives a sound when the door opens. It is possible to maintain a healthy lifestyle by acquiring this system.",
          subData: {
            subImageUrl: homeSubImageTwo,
            title: "Sound Systems ",
            desc: "In most sound system, there are mainly two kinds of sound sensors, which can either be the appliances sense high-pitched or ultra-low level of noise. This sound sensor system will react to each type of signals. For instance, this sound sensor system will easily detect when a baby is crying and turns in a signal light. This system also gives a sound when the door opens. It is possible to maintain a healthy lifestyle by acquiring this system.",
          },
        },
        {
          heading: "Water Sensors",
          paragraph:
            "The major purpose of this sensor is to limit water leakage damage or prevent flooding in the household. A water valve is installed to the system which is triggered once it detect excess wter. The HC-SR04 ultrasonic sensor or LM1830 can be an option for this system.",
          subData: {
            subImageUrl: homeSubImageThree,
            title: "Water Sensors",
            desc: "The major purpose of this sensor is to limit water leakage damage or prevent flooding in the household. A water valve is installed to the system which is triggered once it detect excess wter. The HC-SR04 ultrasonic sensor or LM1830 can be an option for this system.",
          },
        },
      ],
    },
    {
      id: 2,
      data: [
        {
          heading: "Asset Tracking",
          paragraph:
            "Record assets, scan and discover new assets and update the inventory automatically, and monitor the entire life cycle of each asset",
          subData: {
            subImageUrl: assetSubImageOne,
            title: "Asset Tracking",
            desc: `It   was   observed   that   industrial   agricultural
          companies depends strongly on manual workforce to carry out their farm activity. Due to
          global   changes   in   economic   landscape,     daily   basis   supply   demands   get   increasing.
          Livestock   is   a   section   farming   that   requires   regular   monitory.   The   IoT   based   system
          provide farmers with stock information directly to their smartphone. It enables livestock
          management   to   quickly   detect   spread   of   flue   and   separate   infected   breeds   from   the
          unaffected breeds.`,
          },
        },
        {
          heading: "Time Attandance",
          paragraph:
            "Our attendance solution that integrates with it seamlessly any HR system which eliminate manual data entry or incomplete importing from your time tracking tool.",
          subData: {
            subImageUrl: assetSubImageTwo,
            title: "Time Attandance ",
            desc: "Our attendance solution that integrates with it seamlessly any HR system which eliminate manual data entry or incomplete importing from your time tracking tool.",
          },
        },
        {
          heading: "Cyber Security",
          paragraph:
            "Vast development of resourceful technology in management will increase the rate of cybersecurity risks. The function of IoT technology in this section is to protect management data and network from potential hackers by making all devices defensible from threats.",
          subData: {
            subImageUrl: assetSubImageThree,
            title: "Cyber Security ",
            desc: "Vast development of resourceful technology in management will increase the rate of cybersecurity risks. The function of IoT technology in this section is to protect management data and network from potential hackers by making all devices defensible from threats.",
          },
        },
      ],
    },
    {
      id: 3,
      data: [
        {
          heading: "Live Stock Management",
          paragraph:
            "It was observed that industrial agricultural companies depends strongly on manual workforce to carry out their farm activity. Due to global changes in economic landscape,  daily basis supply demands get increasing. Livestock is a section farming that requires regular monitory. The IoT based system provide farmers with stock information directly to their smartphone. It enables livestock management to quickly detect spread of flue and separate infected breeds from the unaffected breeds.",
          subData: {
            subImageUrl: aggriSubImageOne,
            title: "Live Stock Managment",
            desc: "It was observed that industrial agricultural companies depends strongly on manual workforce to carry out their farm activity. Due to global changes in economic landscape,  daily basis supply demands get increasing. Livestock is a section farming that requires regular monitory. The IoT based system provide farmers with stock information directly to their smartphone. It enables livestock management to quickly detect spread of flue and separate infected breeds from the unaffected breeds.",
          },
        },
        {
          heading: "Harvesting Robot",
          paragraph:
            "The system of using robot to pick crop sounds interesting and solved the problem of labor shortages. This system works delicately in the process of picking fruits and vegetables. This integrated machine can operate 24 hours without stopping.",
          subData: {
            subImageUrl: aggriSubImageTwo,
            title: "Harvesting Robot",
            desc: "The system of using robot to pick crop sounds interesting and solved the problem of labor shortages. This system works delicately in the process of picking fruits and vegetables. This integrated machine can operate 24 hours without stopping.",
          },
        },
        {
          heading: "Smart Drones (SDS)",
          paragraph:
            "Industrial drones have several functions in smart farming. What are drones used for?. Drones are used to monitor the quality of air, moisture, and soil. This, the smart drones system helps with the physical activities such as integrated spaying fertilizer and preventing breakout of disease in farmland. Drones smart system are installed  with sensors and cameras used for surveying and mapping farmland., it can be  remoted controlled or fly automatically using  software-controlled flight plans in their system.",
          subData: {
            subImageUrl: aggriSubImageThree,
            title: "Smart Drones (SDS)",
            desc: "Industrial drones have several functions in smart farming. What are drones used for?. Drones are used to monitor the quality of air, moisture, and soil. This, the smart drones system helps with the physical activities such as integrated spaying fertilizer and preventing breakout of disease in farmland. Drones smart system are installed  with sensors and cameras used for surveying and mapping farmland., it can be  remoted controlled or fly automatically using  software-controlled flight plans in their system.",
          },
        },
      ],
    },
    {
      id: 4,
      data: [
        {
          heading: "Product Information",
          paragraph:
            "A wireless digital signal enable display of item and kiosks to move freely within the premises, without using any ethernet cables. By utilizing IoT, Large data, analytics and marketing strategies, shopping malls has the potential to get smart and invent shoppers experience more advance and easy.",
          subData: {
            subImageUrl: mallsSubImageOne,
            title: "Product Information",
            desc: "A wireless digital signal enable display of item and kiosks to move freely within the premises, without using any ethernet cables. By utilizing IoT, Large data, analytics and marketing strategies, shopping malls has the potential to get smart and invent shoppers experience more advance and easy.",
          },
        },
        {
          heading: "Customer Behaviour",
          paragraph:
            "Consumer foot traffic can be monitored and analyzed within the malls to enable better consumer experience. Integrated IoT connected system allows retailer to collect data of people coming in and exiting the store. This system gives room for better customer experience and lot more.",
          subData: {
            subImageUrl: mallsSubImageTwo,
            title: "Customer Behaviour",
            desc: "Consumer foot traffic can be monitored and analyzed within the malls to enable better consumer experience. Integrated IoT connected system allows retailer to collect data of people coming in and exiting the store. This system gives room for better customer experience and lot more.",
          },
        },
      ],
    },
    {
      id: 5,
      data: [
        {
          heading: "Real Time Fleet Management",
          paragraph:
            "Fleet administration is perhaps the most outstanding IoT solution for logistics. Utilizing GPS or satellite trackers to collect vehicle telematics, companies can improve driver’s subordination, increase the precision of delivery schedules, and ensure safety of both drivers and cargo. Fleet supervision solutions may also emphasize fuel usage monitoring and driver attitude monitoring. ",
          subData: {
            subImageUrl: logisticsSubImageOne,
            title: "Real Time Fleet Management",
            desc: "Fleet administration is perhaps the most outstanding IoT solution for logistics. Utilizing GPS or satellite trackers to collect vehicle telematics, companies can improve driver’s subordination, increase the precision of delivery schedules, and ensure safety of both drivers and cargo. Fleet supervision solutions may also emphasize fuel usage monitoring and driver attitude monitoring. ",
          },
        },
      ],
    },
    {
      id: 6,
      data: [
        {
          heading: "Invetory Tracking and Analytics",
          paragraph:
            "IoT in logistics stimulates the storage of goods and management of stock levels. In a logistics ecosystem, it enables  companies to have clear transparency in its various operations, removed supporting in seamless inventory organization. While local barcodes are adequate for basic inventory, smart labels and RFID tags provides broader facilities for automation and analytics",
          subData: {
            subImageUrl: storesSubImageOne,
            title: "Invetory Tracking and Analytics",
            desc: "IoT in logistics stimulates the storage of goods and management of stock levels. In a logistics ecosystem, it enables  companies to have clear transparency in its various operations, removed supporting in seamless inventory organization. While local barcodes are adequate for basic inventory, smart labels and RFID tags provides broader facilities for automation and analytics",
          },
        },
      ],
    },
  ];
  const handleImageClick = (event, id, index) => {
    let selectedObj = imagesData.find((obj) => obj.id === id);
    setSelectedImageData(selectedObj);
    console.log("index num", index);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index, 0);
    }
  };
  const handleDataClick = (index) => {
    setIndex(index);
  };
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="SupportAreas__main-container">
      <div className="SupportAreas__section-header">
        <h2 className="SupportAreas__section-title section-title">
          <span> Support Areas</span>
        </h2>
      </div>
      <div className="SupportAreas__swiper-section">
        <div className="SupportAreas__swiper-list">
          <Swiper
            ref={swiperRef}
            {...params}
            // shouldSwiperUpdate
            // rebuildOnUpdate={true}
            // activeSlideKey={3}
          >
            {sliderImages.map((obj, index) => {
              return (
                <div
                  key={index}
                  className={
                    obj.id === selectedImageData.id
                      ? "slider-item active"
                      : "slider-item"
                  }
                  onClick={() => handleImageClick("", obj.id, index)}
                >
                  <span className="masking-image"></span>
                  {obj.isOffer ? (
                    <div className="badge-wrapper">
                      <div className="ribbon ribbon-top-left">
                        <span>
                          <label>
                            <strong>Free</strong> 5 Employees
                          </label>
                        </span>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  <img className="swiper-image" src={obj.imgUrl} alt="S" />
                  <p className="slider-item-heading">{obj.imgText}</p>
                </div>
              );
            })}
          </Swiper>
        </div>
        <div className="SupportAreas__swiper-information-sec">
          <div className="SupportAreas__swiper-information-row">
            {selectedImageData?.data.length > 0 &&
              selectedImageData?.data.map((obj, index) => {
                return (
                  <div
                    key={index}
                    // className="SupportAreas__swiper-information-col"
                    onClick={() => handleDataClick(index)}
                    className={
                      index === selectedDataIndex
                        ? "SupportAreas__swiper-information-col sub-active"
                        : "SupportAreas__swiper-information-col"
                    }
                  >
                    <span className="SupportAreas__company-card-circle"></span>
                    <p className="SupportAreas__company-card-heading">
                      {obj.heading}
                    </p>
                    <p className="SupportAreas__company-card-description">
                      {obj.paragraph}
                    </p>
                  </div>
                );
              })}
          </div>
          {/* <div className="SupportAreas__sub-information-holder">
            {selectedImageData?.data.length > 0 &&
              selectedImageData?.data.map((obj, index) => {
                if (index === selectedDataIndex)
                  return (
                    <div
                      className="SupportAreas__sub-information-sec"
                      data-aos={"fade-in"}
                    >
                      <span>
                        <img src={obj.subData.subImageUrl} alt="S" />
                      </span>
                      <div className="SupportedAreas__sub-info-right-sec">
                        <p className="SupportAreas__sub-info-title">
                          {obj.subData.title}
                        </p>
                        <p className="SupportAreas__sub-info-description">
                          {obj.subData.desc}
                        </p>
                      </div>
                    </div>
                  );
              })}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SupportAreas;
