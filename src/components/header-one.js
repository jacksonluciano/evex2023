/** @jsx jsx */
import React, { useState, useEffect, useContext } from "react";
import { LogoImage, NavLinks, SocialIcons } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import { SearchContext } from "@/context/search-context";
import { MenuContext } from "@/context/menu-context";
import { Link } from "gatsby";
import { jsx } from "@emotion/react";

import {
  header,
  logo,
  mainMenu,
  submenu,
  navigator,
  socialList
} from "../assets/styles/Header.styles";

const HeaderOne = () => {
  const [sticky, setSticky] = useState(false);
  const { searchStatus, updateSearchStatus } = useContext(SearchContext);
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  const handleSearchClick = (e) => {
    e.preventDefault();
    updateSearchStatus(!searchStatus);
  };
  const handleMenuClick = (e) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sticky]);

  return (
    <header
      css={header}
      className={`${true === sticky ? "fixedHeader animated slideInDown" : null}`}
      id="header"
    >
      <Container fluid>
        <Row className="justify-content-between">
          <Col className="col-6" lg={2} md={3} sm={3}>
            <div css={logo}>
              <Link to="/lisboa">
                <img src={LogoImage.light} alt="Evex" className="d-none d-lg-block" />
                <img src={LogoImage.light} alt="Evex" className="d-block d-md-block d-lg-none" />
              </Link>
            </div>
          </Col>
          <Col lg={8} sm={8} md={7} className="d-none d-lg-block">
            <nav css={mainMenu} className="text-center">
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
                      <Link to={links.url}>{links.name}</Link>
                      {undefined !== links.subItems ? (
                        <ul css={submenu} className="sub-menu">
                          {links.subItems.map((subLinks, index) => (
                            <li key={index}>
                              <Link to={subLinks.url}>{subLinks.name}</Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </Col>
          <Col
            lg={2}
            md={2}
            sm={4}
            className="col-6 d-none d-lg-block"
          >
            <ul  css={socialList}>
              <li>
                <a href="https://www.instagram.com/evexenergy/" target="_blank">
                  <img src={SocialIcons.instagram} alt="instagram" className="socialicon" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/evexenergy" target="_blank">
                  {/* <img src={SocialIcons.twitter} alt="twitter" /> */}
                  <svg width="18px" viewBox="0 0 24 24" aria-label="Twitter" role="img" class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-16y2uox r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
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
          </Col>
          <Col
            lg={2}
            md={2}
            sm={4}
            className="col-6 d-block d-md-block d-lg-none"
          >
            <div css={navigator} className="text-right">
              {/* <a
                className="search searchToggler"
                href="#"
                onClick={handleSearchClick}
              >
                <i className="mei-magnifying-glass"></i>
              </a> */}
               <ul  css={socialList}>
              <li>
                <a href="https://www.instagram.com/evexenergy/">
                  <img src={SocialIcons.instagram} alt="instagram" className="socialicon" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/evexenergy">
                  {/* <img src={SocialIcons.twitter} alt="twitter" /> */}
                  <svg width="28px" viewBox="0 0 24 24" aria-label="Twitter" role="img" class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-16y2uox r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/energy-virtual-experience-evex/?originalSubdomain=pt">
                  <img src={SocialIcons.linkedin} alt="linkedin" />
                </a>
              </li>
            </ul>
              {/* <a
                href="#"
                className="menu mobilemenu d-none d-md-none d-lg-none"
              >
                <i className="mei-menu"></i>
              </a> */}
              <a
                id="open-overlay-nav"
                className="menu hamburger"
                onClick={handleMenuClick}
                href="#"
              >
                <i className="mei-menu"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default HeaderOne;
