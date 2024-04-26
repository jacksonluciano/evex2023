/** @jsx jsx */
import React, { Fragment, useContext, useState, useEffect } from "react";
import { Global, css } from "@emotion/react";
import { Helmet } from "react-helmet";
import { SearchContext } from "@/context/search-context";
import { MenuContext } from "@/context/menu-context";
import SearchPopup from "@/components/search-popup";
import PopupMenu from "@/components/popup-menu";
import { Link as ScrollLink } from "react-scroll";
import { jsx } from "@emotion/react";

// import "typeface-oswald";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/css/animate.css";
import "@/css/font-awesome.min.css";
import "@/css/icons.css";
// import "@/css/preset.css";
// import "@/css/theme.css";
// import "@/css/responsive.css";

import { showIt, colors } from "../assets/styles/layout.styles";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        /* @import url('https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,600,700'); */
        @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap");

        /* @font-face {
          font-family: "bw_gradual_demoregular";
          font-display: swap;
          font-style: normal;
          font-named-instance: "Regular";
          src: url(/fonts/bwgradualdemo-regular-webfont.woff2) format("woff2");
        }

        @font-face {
          font-family: "bw_gradual_demomedium";
          font-display: swap;
          font-style: normal;
          font-named-instance: "Medium";
          src: url(/fonts/bwgradualdemo-medium-webfont.woff2) format("woff2");
        }

        @font-face {
          font-family: "bw_gradual_demobold";
          font-display: swap;
          font-style: normal;
          font-named-instance: "Bold";
          src: url(/fonts/bwgradualdemo-bold-webfont.woff2) format("woff2");
        } */

        @font-face {
          font-family: "Bw Gradual DEMO";
          src: url(/fonts/BwGradualDEMO-Bold.woff2) format("woff2"),
            url(/fonts/BwGradualDEMO-Bold.woff) format("woff");
          font-weight: bold;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Bw Gradual DEMO";
          src: url(/fonts/BwGradualDEMO-Medium.woff2) format("woff2"),
            url(/fonts/BwGradualDEMO-Medium.woff) format("woff");
          font-weight: 500;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Bw Gradual DEMO";
          src: url(/fonts/BwGradualDEMO-Regular.woff2) format("woff2"),
            url(/fonts/BwGradualDEMO-Regular.woff) format("woff");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Bw Gradual DEMO";
          src: url(/fonts/BwGradualDEMO-Light.woff2) format("woff2"),
            url(/fonts/BwGradualDEMO-Light.woff) format("woff");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Bw Gradual DEMO";
          src: url(/fonts/BwGradualDEMO-Light.woff2) format("woff2"),
            url(/fonts/BwGradualDEMO-Light.woff) format("woff");
          font-weight: 300;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Bw Gradual DEMO";
          src: url(/fonts/BwGradualDEMO-Thin.woff2) format("woff2"),
            url(/fonts/BwGradualDEMO-Thin.woff) format("woff");
          font-weight: 100;
          font-style: normal;
          font-display: swap;
        }

        body,
        html {
          margin: 0;
          padding: 0;
          scroll-behavior: smooth;
        }
        body {
          background-color: ${colors.secondaryMain} !important;
          line-height: 32px;
          letter-spacing: 0.64px;
          font-size: 16px;
          font-family: "Open Sans", sans-serif !important;
          /* font-weight: 400; */
          /* transition: all ease 400ms;
          -webkit-transition: all ease 400ms;
          -moz-transition: all ease 400ms; */
        }
        /* p{
          font-size: 16px !important;
          line-height: 23px;
        } */

        /*------------------------------------------------------------------------------
        / 2. Typography Settings
        ------------------------------------------------------------------------------*/
        h1,
        h2,
        h3,
        h4,
        h5 h6 {
          color: #000000;
          font-weight: 400;
          margin: 0 0 15px;
        }
        a {
          color: #000;
          text-decoration: none;
          transition: all ease 200ms;
          -webkit-transition: all ease 200ms;
          -moz-transition: all ease 200ms;
        }
        a:hover,
        a:focus {
          text-decoration: none;
          outline: 0;
        }
        a:focus {
          color: #fff;
        }
        ul li {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        p {
          color: #686868;
        }

        @media (min-width: 1200px) {
          .container {
            max-width: 1200px;
          }
        }
      `}
    />
  );
};

const Layout = ({ PageTitle, children }) => {
  const { searchStatus } = useContext(SearchContext);
  const { menuStatus } = useContext(MenuContext);
  const [scrollTop, setScrollTop] = useState(false);

  const handleScrollTop = () => {
    if (window.scrollY > 70) {
      setScrollTop(true);
    } else if (window.scrollY < 70) {
      setScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, [scrollTop]);

  return (
    <Fragment>
      <Helmet>
        <title>{PageTitle} - EVEx 2023</title>
      </Helmet>
      <div id="wrapper">
        <GlobalStyles />
        {children}
      </div>
      {true === searchStatus ? <SearchPopup /> : null}
      {true === menuStatus ? <PopupMenu /> : null}

      {/* {scrollTop === true ? (
        <ScrollLink
          css={showIt}
          to="wrapper"
          smooth={true}
          duration={500}
          id="backToTop"
          className="scroll-to-top"
        >
          <i className="fa fa-angle-double-up"></i>
        </ScrollLink>
      ) : null} */}
    </Fragment>
  );
};

export default Layout;
