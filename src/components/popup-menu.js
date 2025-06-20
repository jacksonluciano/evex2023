/** @jsx jsx */
import React, { useContext, Fragment, useRef } from "react";
import { Link } from "gatsby";
import Element8 from "@/images/elements/element-08.png";
import Element from "@/images/elements/element-01.svg";
import { MenuContext } from "@/context/menu-context";
import { LogoImage, NavLinks } from "@/data";
import { NavBrLinks, LogoBrasil } from "@/data-br";
import { SocialIcons } from "@/data-br";
import { useLocation } from '@reach/router';
import { jsx } from '@emotion/react'

import { 
  showOverlayNav,
  popUpMenu,
  closepopUp,
  footerContacts,
  popUpSocial,
  logo2,
  popUpInner,
  dlMenuWrap,
  subMenu,
  popUp,
  element8,
  element
}  from '../assets/styles/PopUpMenu.styles'

import { 
  showOverlayNavBr,
  popUpMenuBr,
  closepopUpBr,
  footerContactsBr,
  popUpSocialBr,
  logo2Br,
  popUpInnerBr,
  dlMenuWrapBr,
  subMenuBr,
  popUpBr,
  logoMobileBr,
  socialList,
  element8Br,
  elementBr
}  from '../assets/styles-br/PopUpMenu.styles'

const PopupMenu = () => {
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  const menuEl = useRef(null);
  const handleMenuClick = e => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };

  const handleMenuMobClick = () => {
    updateMenuStatus(!menuStatus);
  };

  const location = useLocation();

  const isAlternateMenu = location.pathname.includes('brasil');

  return (
    !isAlternateMenu ?
    <div className="show-overlay-nav"  css={showOverlayNav}>
    <div className="popup popup__menu" css={[popUp,popUpMenu]}>
      <a
        href=""
        id="close-popup"
        onClick={handleMenuClick}
        css={closepopUp}
      ></a>
      <div className="container mobileContainer">
        <div className="row">
          <div className="col-lg-12 text-left">
            <div css={logo2}>
              {/* <Link to="/">
                <img src={LogoImage.light} alt="" />
              </Link> */}
              <h4>Menu</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div css={popUpInner} className="popup-inner">
              <nav css={dlMenuWrap}
                className="popup-menu dl-menu__wrap"
                ref={menuEl}
              >
                <ul>
                  {NavLinks.map((links, index) => {
                    return (
                      <li
                        key={index}
                        className={`${
                          undefined !== links.subItems
                            ? "menu-item-has-children"
                            : ""
                        }`}
                      >
                        <Link to={links.url} onClick={handleMenuMobClick}>
                          {links.name}
                          </Link>
                        {undefined !== links.subItems ? (
                          <Fragment>
                            <button
                              onClick={e => {
                                menuEl.current
                                  .querySelectorAll(".sub-menu")
                                  .forEach(item => {
                                    item.classList.remove("show");
                                  });

                                let clickedItem = e.currentTarget.parentNode;
                                clickedItem
                                  .querySelector(".sub-menu")
                                  .classList.toggle("show");
                              }}
                            >
                              <i className="fa fa-angle-down"></i>
                            </button>
                            <ul css={subMenu} className="sub-menu">
                              {links.subItems.map((subLinks, index) => (
                                <li key={index}>
                                  <Link to={subLinks.url}>
                                    {subLinks.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </Fragment>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-lg-6 col-sm-12 col-xs-12 text-center text-md-left">
            <ul css={footerContacts}>
              <li>Phone: 666 888 000</li>
              <li>Email: needhelp@meipaly.com</li>
              <li>
                Address: 66 Broklyn Street, New York United States of America
              </li>
            </ul>
          </div> */}
          <div className="col-lg-6 col-sm-12">
            <div css={popUpSocial} className="text-center text-md-right">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    {/* <i className="fa fa-twitter"></i> */}
                    <svg width="38px" viewBox="0 0 24 24" aria-label="Twitter" role="img" class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-16y2uox r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img css={element} src={Element} />
      <img css={element8} src={Element8} />
    </div>
  </div> : 
  /*----- BRASIL MENU POP UP ----------------------------------------------------------------------------- */
  <div className="show-overlay-nav"  css={showOverlayNav}>
    <div className="popup popup__menu" css={[popUpBr,popUpMenuBr]}>
      <a
        href=""
        id="close-popup"
        onClick={handleMenuClick}
        css={closepopUpBr}
      ></a>
      <div className="container mobileContainer">
        <div className="row">
          <div css={logoMobileBr}>
          <Link to="/">
                <img style={{'width':'192px'}} src={LogoBrasil.black} alt="" />
              </Link>
              <ul  css={socialList}>
              <li>
                <a href="https://www.instagram.com/evexenergy/" target="_blank">
                  <img src={SocialIcons.instagram} alt="instagram" className="socialicon" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/energy-virtual-experience-evex/?originalSubdomain=pt" target="_blank">
                  <img src={SocialIcons.linkedin} alt="linkedin" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@evexenergy" target="_blank">
                  <img src={SocialIcons.youtube} alt="youtube" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-12 text-left">
            <div css={logo2Br}>
              <h4>MENU</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div css={popUpInnerBr} className="popup-inner">
              <nav css={dlMenuWrapBr}
                className="popup-menu dl-menu__wrap"
                ref={menuEl}
              >
                <ul>
                  {NavBrLinks.map((links, index) => {
                    return (
                      <li
                        key={index}
                        className={`${
                          undefined !== links.subItems
                            ? "menu-item-has-children"
                            : ""
                        }`}
                      >
                        <Link to={links.url} onClick={handleMenuMobClick}>
                          {links.name}
                          </Link>
                        {undefined !== links.subItems ? (
                          <Fragment>
                            <button
                              onClick={e => {
                                menuEl.current
                                  .querySelectorAll(".sub-menu")
                                  .forEach(item => {
                                    item.classList.remove("show");
                                  });

                                let clickedItem = e.currentTarget.parentNode;
                                clickedItem
                                  .querySelector(".sub-menu")
                                  .classList.toggle("show");
                              }}
                            >
                              <i className="fa fa-angle-down"></i>
                            </button>
                            <ul css={subMenuBr} className="sub-menu">
                              {links.subItems.map((subLinks, index) => (
                                <li key={index}>
                                  <Link to={subLinks.url}>
                                    {subLinks.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </Fragment>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-lg-6 col-sm-12 col-xs-12 text-center text-md-left">
            <ul css={footerContacts}>
              <li>Phone: 666 888 000</li>
              <li>Email: needhelp@meipaly.com</li>
              <li>
                Address: 66 Broklyn Street, New York United States of America
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      {/* <img css={element} src={Element} />
      <img css={element8} src={Element8} /> */}
    </div>
  </div>
  );
};

export default PopupMenu;
