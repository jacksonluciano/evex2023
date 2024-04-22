/** @jsx jsx */
import { css } from "@emotion/react";
import { colors, colorsBr } from "../styles/layout.styles";

export const footer1 = css`
  position: relative;
  /* padding: 80px 0 !important; */
  background-color: ${colors.secondaryMain};
`;
export const reverse = css`
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const widget = css`
  position: relative;
  padding: 0px;

  h2 {
    font-size: 40px;
    letter-spacing: 0px;
    color: #000;
    line-height: 48px;
    margin: 0 0 16px;
    position: relative;
    font-family: "bw_gradual_demomedium";
    /* text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 6px; */
    font-style: normal;
  }

  p {
    color: ${colors.primaryMain};
  }

  @media (min-width: 320px) and (max-width: 767px) {
    padding-bottom: 0px;
    padding-left: 0;
  }
`;

export const aboutWidget = css`
  & img {
    max-width: 100%;
    height: auto;
    margin-bottom: 34px;
  }

  & p {
    font-size: 14px;
    letter-spacing: 0.56px;
    color: ${colors.primaryMain};
    margin: 0;
    margin-bottom: 24px;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    padding-right: 0;
    margin-top: 0;
    text-align: left;
  }
  @media (min-width: 768px) and (max-width: 990px) {
    padding-right: 0;
  }
`;

export const contactWidget = css`
  padding-left: 60px;

  @media (min-width: 320px) and (max-width: 767px) {
    text-align: center;
  }

  & p {
    font-size: 14px;
    letter-spacing: 0.56px;
    color: ${colors.secondaryMain};
    margin: 0;
    line-height: 20px;

    &:nth-of-type(2) {
      margin-bottom: 32px;
    }

    &:first-of-type {
      @media (min-width: 320px) and (max-width: 767px) {
        margin-bottom: 0px;
      }
    }

    & a {
      color: ${colors.secondaryMain};
      &:hover {
        color: #e62b4a;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 990px) {
    padding-left: 0;
  }
`;

export const copyright = css`
  border-top: 1px solid #1a1a1a;
  font-size: 14px;
  line-height: 0.8;
  color: #aaaaaa;
  text-transform: uppercase;
  padding: 41px 0;

  & a {
    color: #aaaaaa;
    &:hover {
      color: #e62b4a;
    }
  }
`;

export const socialWidget = css`
  @media (min-width: 320px) and (max-width: 767px) {
    text-align: center;

    h2 {
      font-size: 20px;
      margin-bottom: 0px;
    }
  }
  & ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    max-width: 180px;
    @media (min-width: 320px) and (max-width: 767px) {
      margin: 0 auto;
      margin-bottom: 64px;
      @media (min-width: 320px) and (max-width: 767px) {
        margin-bottom: 0;
      }
    }
    & li {
      padding: 0;
      margin: 0 0 0;
      list-style: none;
      display: block;

      &:nth-of-type(2) {
        a img {
          width: 34px;
          margin-top: 4px;
        }
      }

      & a {
        font-size: 14px;
        letter-spacing: 0.56px;
        color: #aaaaaa;
        margin: 0;
        display: flex;
        text-align: left;
        &:hover {
          color: ${colors.primaryMain};
        }
        & i {
          font-size: 40px;
          color: #000;
          margin-right: 7px;
          margin-left: 6px;
        }
        & svg {
          /* filter: brightness(0) invert(1); */
          margin-right: 7px;
          margin-left: 6px;
          margin-bottom: -2px;
        }
      }
    }
  }
  @media (min-width: 320px) and (max-width: 767px) {
    padding-bottom: 0px;
  }
`;

export const messageBox = css`
  transition: 0.5s ease-in-out;
  background: #8dffb5;
  width: 100%;
  max-width: 428px;
  line-height: 24px;
  margin-top: 16px;
  position: absolute;
  bottom: 0;
  z-index: 999;
  padding: 16px;

  p {
    margin: 0;
    color: #1e1e1c;
    font-size: 14px;
    text-align: center;
  }
`;

export const subscribeFrom = css`
  position: relative;

  @media (min-width: 320px) and (max-width: 767px) {
    text-align: left;
  }

  & input[type="email"] {
    width: 260px;
    background: transparent;
    color: ${colors.secondaryMain};
    border: 1px solid #000;
    font-weight: 400;
    letter-spacing: 0.56px;
    padding: 12px 20px;
    outline: none;
    margin-right: 8px;

    &::-moz-placeholder,
    &::-ms-input-placeholder,
    &::-webkit-input-placeholder {
      color: ${colors.secondaryMain} !important;
      /* opacity: 1 !important; */
    }

    @media (min-width: 320px) and (max-width: 767px) {
      width: 57%;
      margin-bottom: 15px;
      padding: 10px 20px;
    }
  }

  button {
    background-color: #000;
    color: #ffffff;
    font-family: "bw_gradual_demobold";
    border: none;
    box-shadow: none;
    padding: 21px 28px;

    &:hover {
      background-color: ${colors.secondaryMain};
      color: ${colors.primaryMain};
      box-shadow: none;
    }
  }

  button {
    @media (min-width: 320px) and (max-width: 767px) {
      margin-left: 0;
      width: 40%;
      padding: 21px 0;
      font-size: 14px;
    }
  }
`;

export const sideColumn = css`
  width: 100%;
  /* background: radial-gradient(109.03% 260.11% at 114.03% 139.57%, ${colorsBr.themeRed} 3.05%, ${colorsBr.secondaryYellow} 57.43%, #E3E3E2 100%); */
  background: radial-gradient(
      81.88% 320.83% at 100% 151.49%,
      #ff4001 3.05%,
      #e4a939 57.43%,
      #e3e3e2 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 0 24px 60px;

  @media (min-width: 320px) and (max-width: 767px) {
    padding: 24px 32px;
    &:nth-of-type(1) {
      text-align: center;
    }
  }

  h2 {
    font-family: "bw_gradual_demobold";
    font-size: 100px;
    line-height: 120px;
    font-weight: 700;
    color: #ffffff;

    @media (min-width: 320px) and (max-width: 767px) {
      font-size: 50px;
    }
  }

  h5 {
    font-weight: 700;
    margin-bottom: 0px;
    color: #000;

    span{
      font-weight: 400;
    }
  }
  p {
    color: #000;
    margin: 0;
    line-height: 20px;
  }
`;

export const mobileSide = css`
  padding: 32px;
  align-items: center;

  @media (min-width: 320px) and (max-width: 767px) {
    height: 150px !important;
  }
`;
