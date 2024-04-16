/** @jsx jsx */
import { css } from "@emotion/react";
import { colors, colorsBr } from "../styles/layout.styles";
import BgImg from "../images-br/home-br/bg-green-gray.jpg";

export const abAgency = css`
  background-color: #e3e3e2;
  background-image: url(${BgImg});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  overflow-x: clip;
  img {
    width: 100%;
  }
`;

export const pr79 = css`
  z-index: 2;

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
    color: #000;
    font-family: "bw_gradual_demobold";
    text-align: center;
    font-size: 56px;
    /* text-decoration: underline; */
    margin-bottom: 16px;
    /* text-decoration-thickness: 3px;
    text-underline-offset: 6px; */

    @media (min-width: 320px) and (max-width: 767px) {
      font-size: 56px;
      line-height: 68px;
    }
  }

  p {
    width: 100%;
    max-width: 920px;
    font-size: 35px;
    line-height: 23px;
    font-weight: 400;
    text-align: center;
    color: #000;
    font-family: "bw_gradual_demomedium";
  }
  button {
    font-family: "bw_gradual_demobold";
    font-size: 16px;
  }
  .info {
    overflow: hidden;
    top: -340px;
    position: relative;
  }
`;

export const element05 = css`
  position: absolute;
  width: auto !important;
  top: -130px;
  left: 10%;
  z-index: 0;

  @media (min-width: 320px) and (max-width: 767px) {
    left: 65%;
    transform: translateX(-50%);
    top: -50px;
  }
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
  width: 740px;
  max-width: 100%;
  max-width: 970px;
  margin: 0 auto;
  top: -310px;
  position: relative;
`;

export const dateBlock = css`
  /* background: radial-gradient(76.58% 139.19% at 97.41% 97.62%, ${colorsBr.themeGreen} 3.05%, ${colorsBr.secondaryBlue} 49.44%, #E3E3E2 100%); */
  background: radial-gradient(
      97.41% 169.56% at 97.41% 97.62%,
      #01f201 3.05%,
      #4cd6d9 35.31%,
      #e3e3e2 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  transition: all 0.2s;
  height: 125px;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 330px;
    margin: 0 auto 32px;
    padding: 20px 30px;
    background-color: ${colors.brandingOrange};
    h3,
    p {
      color: ${colors.primaryMain} !important;
    }
  }

  :hover {
    background-color: ${colors.brandingOrange};
    h3,
    p {
      color: ${colors.primaryMain};
    }
  }

  h3 {
    font-family: "bw_gradual_demomedium";
    color: ${colors.secondaryMain};
    font-size: 40px;
    text-align: center;
  }

  P {
    font-family: "bw_gradual_demobold";
    color: #000;
    font-size: 24px !important;
    text-align: center;
    padding: 0 10px;
    margin: 0;
    line-height: 28px;
  }

  .greenbg {
    background: radial-gradient(
      97.41% 169.56% at 97.41% 98.62%,
      #01f201 17.05%,
      #4cd6d9 106.31%,
      #e3e3e2 166%
    );
  }
`;
export const asideBlock = css`
  position: absolute;
  width: 100%;
  max-width: 470px;
  display: block;
  border: 2px solid #fff;
  top: 15px;
  left: 30px;
  height: 100%;
  z-index: 1;

  @media (min-width: 320px) and (max-width: 767px) {
    position: absolute;
    width: 330px;
    max-width: 470px;
    display: block;
    border: 2px solid #fff;
    top: 15px;
    left: 50%;
    transform: translateX(-45%);
    height: 236px;
    z-index: 1;
  }
`;
