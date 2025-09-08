import React, { Suspense, useContext, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import classNames from 'classnames';
import NavBar from '../components/nav-bar/NavBar';
import '../../assets/styles/common.scss';

// import { LanguageContext } from '../../common/LanguageContext';
// import '../../assets/styles/common.scss';
const Dashboard = lazy(() => import('../../modules/dashboard/Dashboard'));
const About = lazy(() => import('../../modules/about/About'));
const User = lazy(() => import('../../modules/user/User'));
// const NotFound = lazy(() => import('../../common/error/Error'));
const Layout = () => {
  return (
    <div className="page-layout-container"
    //   className={classNames(
    //     'page_layout_container theme-white',
    //     language === 'en' ? 'main-container-en' : 'oriental-rtl'
    //   )}
    >
     <header className="page_main_header">
        <NavBar />
      </header>
      <div className="page_main_inner_section">
        <Suspense fallback={<div className="page-loading-section"></div>}>
            <Switch>
              <Route exact path="/" component={ Dashboard} />
              <Route  path="/about" component={ About} />
              <Route  path="/user" component={ User} />
              {/* <Route
                exact
                path="/"
              /> */}
              {/* <Route
                exact
                path="/my-profile"
                component={MyProfile}
              /> */}
            </Switch>
        </Suspense>
      </div>
    </div>
  );
};
export default Layout;