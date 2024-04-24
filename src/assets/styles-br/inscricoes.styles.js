/** @jsx jsx */
import { css } from "@emotion/react";
import { colors } from "../styles/layout.styles";

export const abAgency = css`
  background-color: #e3e3e2;
  padding: 0px 0 0px !important;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
  }

  p {
    margin-bottom: 48px;
  }
`;

export const pr79 = css`
  padding-right: 79px;

  @media (min-width: 320px) and (max-width: 767px) {
    padding-right: 15px;
    text-align: center;
  }
  @media (min-width: 768px) and (max-width: 990px) {
    padding-right: 15px;
  }
`;

export const mb45 = css`
  margin-bottom: 40px;
  @media (min-width: 768px) and (max-width: 990px) {
    margin-bottom: 30px;
  }
`;

export const inscriHero = css`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #000 !important;
    text-align: left;
  }
`;

export const about = css`
  position: relative;
  padding: 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  color: ${colors.secondaryMain};
  align-items: center;

  h2 {
    color: ${colors.secondaryMain};
    font-family: "bw_gradual_demomedium";
    text-align: center;
    text-decoration: underline;
    margin-bottom: 16px;
  }

  p {
    width: 100%;
    max-width: 920px;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    text-align: center;
    color: ${colors.secondaryMain};
  }
  button {
    font-family: "bw_gradual_demobold";
    font-size: 16px;
    letter-spacing: -1px;
  }
`;

export const element05 = css`
  position: absolute;
  width: auto !important;
  top: 200px;
  left: 185px;
  display: none;
`;

export const element08 = css`
  position: absolute;
  width: 100%;
  max-width: 467px;
  top: 360px;
  right: 165px;
  z-index: 0;

  @media (min-width: 320px) and (max-width: 767px) {
    left: 50%;
    transform: translateX(-44%);
    top: 470px;
  }
`;

export const element04 = css`
  position: absolute;
  width: 100%;
  max-width: 467px;
  top: -120px;
  right: -178px;
  z-index: 0;
`;

export const imgFull = css`
  width: 100%;
`;

export const abImg = css`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;

  &:nth-child(2) {
    position: relative;
    top: 30px;
    margin-top: 0;
    &:after {
      @media (min-width: 768px) and (max-width: 990px) {
        width: 350px;
        left: 15px;
      }
    }
  }

  & img {
    max-width: 100%;
    height: auto;
    -webkit-box-shadow: -2px 4px 30px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: -2px 4px 30px 0px rgba(0, 0, 0, 0.3);
    box-shadow: -2px 4px 30px 0px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 320px) and (max-width: 767px) {
    position: relative;
    margin: 50px 0 0;
    &:after {
      display: none;
    }
  }
  @media (min-width: 768px) and (max-width: 990px) {
    position: relative;
    float: right;
    right: -5px;
  }
`;

export const blocks = css`
  width: 100%;
  max-width: 996px;
  margin: 0 auto;
  padding-bottom: 220px;
  position: relative;

  @media (min-width: 320px) and (max-width: 767px) {
    z-index: 2;

    .row {
      div:nth-of-type(2) {
        margin-bottom: 40px;
      }
    }
  }
`;

export const dateBlock = css`
  background-color: #000;
  height: 100%;
  padding: 80px 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  transition: all 0.2s;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 95%;
    border: 2px solid ${colors.primaryMain};
  }

  /* &.orange {
    background-color: ${colors.brandingOrange};
  }

  &.salmon {
    background-color: ${colors.brandingSalmon};
  }

  &.purple {
    background-color: ${colors.brandingPurple};
  }

  &.blue {
    background-color: ${colors.brandingBlue};
  } */

  h2 {
    font-family: "bw_gradual_demobold";
    color: #ffffff;
    font-size: 25px;
    text-align: center;
  }

  h3 {
    font-size: 24px;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
    margin-bottom: 24px;
    font-family: "bw_gradual_demomedium";
    font-weight: 500;
    text-align: center;
    color: #ffffff;
  }

  h4 {
    font-family: "bw_gradual_demomedium";
    font-weight: 500;
    color: #ffffff;
  }

  P {
    color: #ffffff;
    font-size: 14px;
    text-align: center;
    padding: 0;
    margin: 0;
    line-height: 21px;
    margin-bottom: 8px;

    &.text {
      margin: 8px 0 40px;
    }
  }

  a {
    width: 250px;
    letter-spacing: 0;
    background-color: #ffffff;
    color: #000;
    font-size: 16px;
  }

  button {
    letter-spacing: 0;

    width: 250px;

    &:nth-of-type(2) {
      background-color: transparent;
      box-shadow: inset 0px 0px 0px 3px ${colors.primaryMain};
      color: ${colors.primaryMain};
      margin-top: 16px;

      :hover {
        background-color: ${colors.secondaryMain};
        color: ${colors.primaryMain};
      }
    }
  }

  ul{
    margin: 24px 0 48px 0;
    padding: 0;
    li{
      p{
        text-align: left;
        margin: 0;
      }
    }
  }
`;

export const linkBorder = css`
  background-color: transparent;
  box-shadow: inset 0px 0px 0px 3px ${colors.primaryMain};
  color: ${colors.primaryMain};
  margin-top: 16px;

  :hover {
    background-color: ${colors.secondaryMain};
    color: ${colors.primaryMain};
  }
`;

export const asideBlock = css`
  position: absolute;
  width: 100%;
  max-width: 470px;
  display: block;
  border: 2px solid #fff;
  top: 15px;
  left: 42px;
  height: 100%;
  z-index: 1;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 85%;
  }
`;

export const sectionTitle = css`
  text-align: center;

  h2 {
    font-size: 56px;
    font-family: "bw_gradual_demomedium";
    color: ${colors.secondaryMain};
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 6px;
    margin-bottom: 24px;

    @media (min-width: 320px) and (max-width: 767px) {
      margin-left: 0;
    }
  }

  p {
    font-weight: 400;
    width: 100%;
    max-width: 755px;
    margin: 16px auto 32px;
    color: ${colors.secondaryMain};
    font-size: 14px;
    line-height: 21px;
  }

  .inscriTitle {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
      position: relative;
      z-index: 3;
      font-family: "bw_gradual_demobold";
      text-decoration: none;
      font-size: 94px;
    }

    p {
      color: #000 !important;
      text-align: left;
    }

    img {
      position: absolute;
      &:nth-of-type(1) {
        left: -123px;
        top: -225px;
        width: auto;
      }
      &:nth-of-type(2) {
        top: -124px;
        left: 57px;
        width: auto;
        -webkit-transform: rotate(142.7deg);
        -moz-transform: rotate(142.7deg);
        -ms-transform: rotate(142.7deg);
        transform: rotate(142.7deg);
      }
      &:nth-of-type(3) {
        top: -42px;
        left: 84px;
        width: auto;
        -webkit-transform: rotate(27deg);
        -moz-transform: rotate(27deg);
        -ms-transform: rotate(27deg);
        transform: rotate(27deg);
      }
    }
  }
`;

export const underline = css`
  color: #000;
  text-align: left;
  span {
    text-decoration: underline;
  }
`;

export const bgElement = css`
  position: absolute;
  bottom: 0;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;
