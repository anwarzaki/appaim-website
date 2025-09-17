import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./assets/styles/common.scss";
import "./i18n";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import About from "./modules/about/About";
import logo from "./assets/images/appaim-logo.svg";
import Footer from "./common/components/footer/Footer";
import Home from "./modules/home/Home";
import SupportAreas from "./modules/support-areas/SupportAreas";
import Contact from "./modules/contact/Contact";
import englishIcon from "./assets/images/english-icon.svg";
import arabicIcon from "./assets/images/arabic.svg";
// import { createRoot } from "react-dom/client";

const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const useStyles = makeStyles({
  list: {
    width: 275,
  },
  fullList: {
    width: "auto",
  },
});

const App = () => {
  const [visibleSection, setVisibleSection] = useState();
  const [showWebDevelopment, setShowWebDevelopment] = useState(false);
  const [showMobileDevelopment, setShowMobileDevelopment] = useState(false);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [isLangChange, setLangChange] = useState(true);
  const toggleLanguage = () => setLangChange(!isLangChange);

  const toggleDrawer = (anchor, open) => (event) => {
    // console.log("calleds");

    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const scrollTo = (ele) => {
    // console.log("scroll", ele);
    ele.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const headerRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const supportAreasRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    { section: "Home", ref: homeRef },
    { section: "About", ref: aboutRef },
    { section: "SupportAreas", ref: supportAreasRef },
    { section: "Contact", ref: contactRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;
      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  const ViewSection = (type) => {
    // console.log(type);

    if (type == "web") {
      setShowWebDevelopment(true);
      setShowMobileDevelopment(false);
    } else {
      setShowMobileDevelopment(true);
      setShowWebDevelopment(false);
    }
  };

  useEffect(() => {}, [showMobileDevelopment, showWebDevelopment]);

  return (
    <div
      className={
        isLangChange
          ? "App__main-container en"
          : "App__main-container oriental-rtl"
      }
    >
      <div className="App__main-content-section">
        <div className="App__sticky">
          <div className="App__desktop-header-menu" ref={headerRef}>
            <div className="App__header-inner-section">
              <div className="App__header-left-section">
                <span>
                  <img src={logo} alt="L" />{" "}
                </span>
              </div>
              <div className="App__header-right-section">
                <button
                  type="button"
                  className={`header_link ${
                    visibleSection === "Home" ? "selected" : ""
                  }`}
                  onClick={() => {
                    scrollTo(homeRef.current);
                  }}
                >
                  Home
                </button>
                <button
                  type="button"
                  className={`header_link ${
                    visibleSection === "About" ? "selected" : ""
                  }`}
                  onClick={() => {
                    scrollTo(aboutRef.current);
                  }}
                >
                  About
                </button>
                <button
                  type="button"
                  className={`header_link ${
                    visibleSection === "SupportAreas" ? "selected" : ""
                  }`}
                  onClick={() => {
                    scrollTo(supportAreasRef.current);
                  }}
                >
                  Support areas
                </button>
                <button
                  type="button"
                  className={`header_link ${
                    visibleSection === "Contact" ? "selected" : ""
                  }`}
                  onClick={() => {
                    scrollTo(contactRef.current);
                  }}
                >
                  Contact Us
                </button>
              </div>
              <div className="App__language-section">
                <Button onClick={toggleLanguage}>
                  {isLangChange ? (
                    <span className="lang-lbl">
                      <span className="lang-icon">
                        <img src={arabicIcon} alt="L" />
                      </span>
                      Arabic
                      {/* عربى */}
                    </span>
                  ) : (
                    <span className="lang-lbl">
                      <span className="lang-icon">
                        <img src={englishIcon} alt="L" />
                      </span>
                      English
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </div>
          <div className="App__mobile-header-menu">
            <div className="App__mobile-header-menu-list">
              <div className="App__mobile-header-menu-left-sec">
                {["left"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <IconButton onClick={toggleDrawer(anchor, true)}>
                      <MenuIcon />
                    </IconButton>
                    <SwipeableDrawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                      onOpen={toggleDrawer(anchor, true)}
                    >
                      <div className="App__mobile-header-section">
                        <button
                          type="button"
                          className={`header_link ${
                            visibleSection === "Home" ? "selected" : ""
                          }`}
                          // onClick={() => {
                          //   scrollTo(homeRef.current);
                          // }}
                          onClick={(e) => {
                            scrollTo(homeRef.current);
                            toggleDrawer(anchor, false)(e);
                          }}
                        >
                          Home
                        </button>
                        <button
                          type="button"
                          className={`header_link ${
                            visibleSection === "About" ? "selected" : ""
                          }`}
                          onClick={(e) => {
                            scrollTo(aboutRef.current);

                            toggleDrawer(anchor, false)(e);
                          }}
                        >
                          About
                        </button>
                        <button
                          type="button"
                          className={`header_link ${
                            visibleSection === "SupportAreas" ? "selected" : ""
                          }`}
                          onClick={(e) => {
                            toggleDrawer(anchor, false)(e);
                            scrollTo(supportAreasRef.current);
                          }}
                        >
                          Support areas
                        </button>
                        <button
                          type="button"
                          className={`header_link ${
                            visibleSection === "Contact" ? "selected" : ""
                          }`}
                          onClick={(e) => {
                            toggleDrawer(anchor, false)(e);
                            scrollTo(contactRef.current);
                          }}
                        >
                          Contact Us
                        </button>
                      </div>
                    </SwipeableDrawer>
                  </React.Fragment>
                ))}
              </div>
              <div className="App__mobile-header-menu-right-sec">
                <span>
                  <img src={logo} alt="L" />{" "}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="App__home-container" id="Home" ref={homeRef}>
          <Home />
        </div>
        <div className="App__about-container" id="About" ref={aboutRef}>
          <About />
        </div>
        <div
          className="App__our-services-container"
          id="SupportAreas"
          ref={supportAreasRef}
        >
          <SupportAreas />
        </div>

        <div className="App__contact-container" id="Contact" ref={contactRef}>
          <Contact />
        </div>
        <div className="footer-section">
          <Footer
            scrollTo={scrollTo}
            refs={{
              homeRef: homeRef,
              aboutRef: aboutRef,
              supportAreasRef: supportAreasRef,
              contactRef: contactRef,
            }}
          />
        </div>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
