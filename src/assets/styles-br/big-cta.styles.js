/** @jsx jsx */
import { css } from "@emotion/react";
import { colors } from "../styles/layout.styles";

export const abAgency = css`
  background-color: #e3e3e2;
  padding-top: 90px;
  position: relative;
  /* overflow: hidden; */
  padding-bottom: 120px;
  img {
    width: 100%;
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

export const element10 = css`
  position: absolute;
  width: 100% !important;
  bottom: 0;
  left: 0;

  @media (min-width: 320px) and (max-width: 767px) {
    transform: rotate(90deg) scale(-1);
    bottom: -182px;
    left: 320px;
  }
`;

export const elementPink = css`
  position: absolute;
  width: auto !important;
  top: -260px;
  right: 0;
  z-index: 1;
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
  padding-bottom: 120px;
`;

export const dateBlock = css`
  background-color: #252525;
  height: 408px;
  padding: 32px 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  z-index: 2;
  transition: all 0.2s;

  ul {
    margin: 0;
    padding: 0;
    li {
      margin: 0;
      padding: 0;
      p {
        margin: 0;
        padding: 0;
      }

      &:last-of-type {
        margin-bottom: 24px;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 767px) {
    width: 94%;
    margin-bottom: 60px;
    border: 2px solid ${colors.secondaryMain};
    background-color: ${colors.brandingSalmon};
  }

  &.purple {
    :hover {
      background-color: ${colors.brandingPurple};
    }
    @media (min-width: 320px) and (max-width: 767px) {
      background-color: ${colors.brandingPurple};
    }
  }

  &:hover {
    /* background-color: ${colors.brandingSalmon}; */
    background: radial-gradient(123.18% 83.31% at 21.05% 91.82%, #9A2FF6 3.05%, #CC6AE3 35.31%, #E3E3E2 100%) ;

    h3,h2,
    p {
      color: #000;
    }

    a{
      background-color: #ffffff;
      color: #000;
      border-color: #000;
    }
  }

  h2 {
    font-family: "bw_gradual_demobold";
    color: #ffffff;
    font-size: 40px;
    /* text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 6px; */
  }

  P {
    color: #ffffff;
    font-size: 14px;
    padding: 0;
    margin: 0;
    line-height: 21px;
    margin-bottom: 32px;
  }

  button {
    letter-spacing: 0;
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

  @media (min-width: 320px) and (max-width: 767px) {
    width: 84%;
    height: 88%;
  }
`;
