import React, { useEffect, useState } from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  TextField,
  Button
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import MenuIcon from "@material-ui/icons/Menu";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { useHistory } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import DropDownIcon from "../../../assets/images/dropDown.svg";
import profilePic from "../../../assets/images/profilePic.png";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { Avatar } from "@material-ui/core";
// import * as store from "../../store";
// import { LanguageContext } from "../../LanguageContext";
// import { CustomInput } from "../../../common/components";

import "./NavBar.scss";
import { useContext } from "react";
import { useReducer } from "react";
// import { AuthContext } from "../../AuthContext";
// import LanguageDropdown from "../language-dropdown/LanguageDropdown";
// import { useTranslation } from "react-i18next";
// import { apiGroupSearch } from "../../../modules/initial-setup/initial-setup-service";
// import { apiCompanySearch } from "../../../modules/org-setup/components/companies/companies-service";

const useStyles = makeStyles(theme => ({
  list: {
    // width: '80vw',
    width: 275
  },
  fullList: {
    width: "auto"
  },
  nested: {
    paddingLeft: theme.spacing(2)
  },
  fab: {
    margin: theme.spacing(2)
  },
  absolute: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(3)
  }
}));

const navBarReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SIDE_NAV":
      return { ...state, [action.side]: action.open };
    case "SET_ANCHOR_EL":
      return { ...state, anchorEl: action.anchorEl };
    case "SET_LANG_ANCHOR_EL":
      return { ...state, languageAnchorEl: action.languageAnchorEl };
    case "TOGGLE_MOBILE_MENU": {
      const { openMenus } = state;
      let res = [];
      if (openMenus.includes(action.menuText)) {
        res = openMenus.filter(it => it !== action.menuText);
      } else {
        res = [...openMenus, action.menuText];
      }
      return {
        ...state,
        openMenus: res,
        openLink: ""
      };
    }
    case "TOGGLE_OPEN_STRUCTURE":
      return { ...state, openStructure: !state.openStructure };
    case "EMP_SETUP":
      return { ...state, openEmpSetup: action.openEmpSetup };
    case "CLICK_ROLES":
      return { ...state, openRoles: action.openRoles };
    default:
      return state;
  }
};

export default function NavBar(props) {
  // console.log("Location", window.location.href);
//   const [logoUser, setLogoUser] = useState("");
//   const { language, changeLang } = useContext(LanguageContext);
//   const { setUser, clearSession, user } = useContext(AuthContext);
  const classes = useStyles();
  const history = useHistory();
//   const { t } = useTranslation();
  const { handleSubmit, errors, control } = useForm({
    defaultValues: {}
  });
  const [state, dispatch] = useReducer(navBarReducer, {
    top: false,
    left: false,
    bottom: false,
    right: false,
    anchorEl: null,
    languageAnchorEl: null,
    openMenus: [],
    activeLink: "",
    openStructure: false,
    openEmpSetup: false,
    openRoles: false
  });
 
  const handleHomePage = () => {
    history.push(`/dashboard`);
  };
  const handleClickProfile = event => {
    dispatch({
      type: "SET_ANCHOR_EL",
      anchorEl: event.currentTarget
    });
  };

//   const openLanguageMenu = event => {
//     dispatch({
//       type: "SET_LANG_ANCHOR_EL",
//       languageAnchorEl: event.currentTarget
//     });
//   };

//   const handleCloseLanguage = lang => {
//     if (language !== lang && (lang === "en" || lang === "ar")) changeLang(lang);
//     dispatch({
//       type: "SET_LANG_ANCHOR_EL",
//       languageAnchorEl: null
//     });
//   };

  const handleCloseProfile = () => {
    dispatch({
      type: "SET_ANCHOR_EL",
      anchorEl: null
    });
  };
  const handleCloseLogout = () => {
    // clearSession();
    // history.push(`${language === 'en' ? '' : '/' + language}`);
  };

  const handleProfile = () => {
    // history.push(`/my-profile`);
  };

  const toggleMobileMenu = menu => {
    if (!menu.children.length > 0 || menu.isDeep) {
      dispatch({
        type: "TOGGLE_SIDE_NAV",
        side: "left",
        open: false
      });
      changeRoute(menu.link, menu.menuText);
    } else if (!menu.isDeep)
      dispatch({
        type: "TOGGLE_MOBILE_MENU",
        menuText: menu.menuText
      });
  };

  const hadleOpenCloseMenu = (e, menu) => {
    dispatch({
      type: "TOGGLE_MOBILE_MENU",
      menuText: menu.menuText
    });
    e.stopPropagation();
  };

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    dispatch({
      type: "TOGGLE_SIDE_NAV",
      side,
      open
    });
  };

  const isActiveMenu = menu => {
    const currentActiveRoute = history.location.pathname;
    return currentActiveRoute === "/" + menu;
  };

  const changeRoute = (link, menuText) => {
    // if (!history.location.pathname.includes("initial-setup"))
      // history.push(`/${link}`);
      history.push({ pathname: `/${link}`, state: { details: menuText } });
  };

  const desktopMenu = [
    {
      menuText: "Dashboard",
      link: "",
      active: isActiveMenu(""),
      icon: DropDownIcon
    },
    {
      menuText:"About",
      link: "about",
      active: isActiveMenu("about"),
      icon: DropDownIcon
    },
    {
      menuText:"Users",
      link: "user",
      active: isActiveMenu("user"),
      icon: DropDownIcon
    },
    // {
    //   menuText: t(""),
    //   link: "",
    //   active: isActiveMenu(""),
    //   icon: DropDownIcon
    // }
  ];

  const mobileMenu = [
    {
      level: 1,
      menuText: "dashboard",
      link: "",
      active: isActiveMenu("dashboard"),
      icon: DropDownIcon,
      children: []
    },

    {
      level: 1,
      menuText: "about",
      link: "about",
      icon: DropDownIcon,
      children: [ ]
    },
  ];

  const { anchorEl, openMenus, languageAnchorEl } = state;

  const getMobileMenuItems = menu => {
    return menu.map((menu, index) => (
      <React.Fragment key={index}>
        {menu.toDisplay !== "yes" ? (
          <>
            <ListItem
              button
              className={`level${menu.level} ${menu.active && "active"}`}
              onClick={() => toggleMobileMenu(menu)}
            >
              <ListItemText primary={menu.menuText} />
              {menu.children.length > 0 ? (
                openMenus.includes(menu.menuText) ? (
                  <ExpandLess onClick={e => hadleOpenCloseMenu(e, menu)} />
                ) : (
                  <ExpandMore onClick={e => hadleOpenCloseMenu(e, menu)} />
                )
              ) : null}
            </ListItem>
            {menu.children.length > 0 ? getSubMenus(menu) : null}
          </>
        ) : (
          <></>
        )}
      </React.Fragment>
    ));
  };

  const getSubMenus = menu => {
    return (
      <Collapse
        in={openMenus.includes(menu.menuText)}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          {getMobileMenuItems(menu.children)}
        </List>
      </Collapse>
    );
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onKeyDown={toggleDrawer("left", false)}
    >
      <div className="NavBar__left-sidebar-sec">
        <div className="NavBar__left-side-bar-logo">
          {/* <img src={NoLogo} alt="Logo" /> */}
          image
        </div>
        <div className="NavBar__search-sec">
          {/* <TextField id="standard-basic" label="Standard" /> */}
          {/* <CustomInput
            id="search"
            label={t("search")}
            name="search"
            errors={errors}
            InputProps={{
              className: "input"
            }}
            control={control}
            rules={{}}
          /> */}
        </div>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >
          {getMobileMenuItems(mobileMenu)}
        </List>
      </div>
    </div>
  );

  useEffect(() => {
    // getLogoDetails();
  }, []);
  return (
    <div className="NavBar__main_header_inner_section">
      <AppBar>
        {/* Desktop View */}
        <section className="NavBar__desktop-menu">
          <Toolbar className={"NavBar__toolbar"}>
            {/* <IconButton
              className="NavBar__menu-btn"
              color="inherit"
              onClick={toggleDrawer("left", true)}
            >
              <MenuIcon />
            </IconButton> */}

            <span className="NavBar__logo_sec" onClick={handleHomePage}>
              {' '}
              {/* <img src={hrmsLogo} className="hrms-logo" alt="Logo" /> */}
            </span>
            {/* <Toolbar className="NavBar__toolbar"> */}

            {/* </Toolbar> */}
            <ul className="NavBar__list_menu-ul">
              {desktopMenu.map((menu) => (
                <li
                  key={menu.link}
                  onClick={() => changeRoute(menu.link)}
                  className={menu.active ? 'active-menu' : ''}
                >
                  <span className="nav-dropdowns">
                    {menu.menuText}
                    <IconButton className="dropdown-icon">
                      <img src={menu.icon} alt="D" />
                    </IconButton>
                  </span>
                </li>
              ))}
            </ul>
          

            <section className="NavBar__right-align">
              <Tooltip title="Search" arrow>
                <IconButton>
                  <SearchIcon className="icons" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Help" arrow>
                <IconButton>
                  <HelpOutlineIcon className="icons" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Notifications" arrow>
                <IconButton>
                  <NotificationsNoneIcon className="icons" />
                </IconButton>
              </Tooltip>
              <div className="NavBar__profile_sec" onClick={handleClickProfile}>
                <IconButton className="profile-pic-sec">
                  <Avatar alt="C" src={profilePic} className="profile-pic" />
                </IconButton>
                <IconButton className="dropdown-icon">
                  <img src={DropDownIcon} alt="D" />
                </IconButton>
              </div>
            </section>
          </Toolbar>
        </section>

        {/* Mobile View */}

        <section className="NavBar__mobile-menu">
          <Toolbar className="NavBar__toolbar">
            <IconButton color="inherit" onClick={toggleDrawer("left", true)}>
              <MenuIcon />
            </IconButton>
            <IconButton className="center-align">
              {/* <img src={hrmsLogo} className="hrms-logo" alt="Logo" /> */}
            </IconButton>

            <section className="NavBar__right-align NavBar__mob_right_section">
              {/* <div><p>Heeee</p></div> */}

              {/* <LanguageDropdown
                openLanguageMenu={openLanguageMenu}
                language={language}
                languageAnchorEl={state.languageAnchorEl}
                handleCloseLanguage={handleCloseLanguage}
              /> */}
              <IconButton onClick={handleClickProfile} color="inherit">
                <MoreVertIcon />
              </IconButton>
            </section>
          </Toolbar>
          <SwipeableDrawer
            // anchor={language === "ar" ? "right" : "left"}
            open={state.left}
            onClose={toggleDrawer("left", false)}
            onOpen={() => ""}
          >
            {sideList("left")}
          </SwipeableDrawer>
        </section>
      </AppBar>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseProfile}
        className="profile-menu"
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MenuItem key="My Profile" onClick={handleProfile}>
          {"myProfile"}
        </MenuItem>
        <MenuItem key="Settings" onClick={handleCloseProfile}>
          {"settings"}
        </MenuItem>
        <MenuItem key="Logout" onClick={handleCloseLogout}>
          {"logout"}
        </MenuItem>
      </Menu>
    </div>
  );
}
