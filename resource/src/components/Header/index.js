import React from 'react';
import './index.scss';

const Header = (props) => {
  return (
    <div className="header">
      <div className="block-site flex-center-between full-height">
        <div className="header__left flexbox ">
          <div className="header__left-logo m-r-lg">
            Shortly
        </div>

          <div className="header__left-menu">
            <a className="header--menu-link m-r-md" href={"/"}>Features</a>
            <a className="header--menu-link m-r-md" href={"/"}>Pricing</a>
            <a className="header--menu-link" href={"/"}>Resource</a>
          </div>
        </div>

        <div className="header__right">
          <a className="btn btn--transparent" href={"/"}>Login</a>
          <a className="btn btn--primary btn--circle m-l-xs" href={"/"}>Sign up</a>
        </div>
      </div>

    </div>
  )
}

export default Header;