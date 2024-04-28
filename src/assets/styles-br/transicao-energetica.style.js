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
    @media (min-width: 320px) and (max-width: 767px) {
      width: 140%;
    }
  }
  @media (min-width: 320px) and (max-width: 767px) {
    padding-bottom: 100px;
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
    font-family: 'Bw Gradual DEMO';
    font-weight: bold;
    text-align: center;
    font-size: 56px;
    /* text-decoration: underline; */
    margin-bottom: 16px;
    /* text-decoration-thickness: 3px;
    text-underline-offset: 6px; */

    @media (min-width: 320px) and (max-width: 767px) {
      font-size: 20px;
      line-height: 22px;
    }
  }

  p {
    width: 100%;
    max-width: 920px;
    font-size: 35px;
    line-height: 23px;
    font-weight: 500;
    letter-spacing: 0;
    text-align: center;
    color: #000;
    font-family: 'Bw Gradual DEMO';
    @media (min-width: 320px) and (max-width: 767px) {
      font-size: 20px;
      line-height: 22px;
      margin-bottom: 32px;
    }
  }
  button {
    font-family: "bw_gradual_demobold";
    font-size: 16px;
  }
  .info {
    overflow: hidden;
    top: -340px;
    position: relative;
    @media (min-width: 320px) and (max-width: 767px) {
      left: 0;
      top: -90px;
    }
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
  @media (min-width: 320px) and (max-width: 767px) {
    width: 88%;
    top: -80px;
  }
`;

export const dateBlock = css`
  background-image: radial-gradient(
    97.41% 169.56% at 97.41% 97.62%,
    #01f201 3.05%,
    #4cd6d9 35.31%,
    #e3e3e2 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  transition: background-image 1s ease;
  height: 125px;

  @media (min-width: 320px) and (max-width: 767px) {
    padding: 10px 0px;
    height: 85px;
  }

  h3 {
    font-family: 'Bw Gradual DEMO';
    color: ${colors.secondaryMain};
    font-size: 40px;
    text-align: center;
  }

  P {
    font-family: 'Bw Gradual DEMO';
    color: #000;
    font-size: 24px !important;
    text-align: center;
    padding: 0 10px;
    margin: 0;
    line-height: 28px;
    font-weight: bold;

    @media (min-width: 320px) and (max-width: 767px) {
      font-size: 16px !important;
      line-height: 18px;
      padding: 0;
    }
  }

  &:hover{
    background-image: radial-gradient(
      100% 188.29% at 100% 103.68%,
      #4cd6d9 4.5%,
      #01f201 35.73%,
      #e3e3e2 100%
    );
  }

  /* &.greenbg-0,
  &.greenbg-1,
  &.greenbg-2 {
    background: radial-gradient(
      100% 188.29% at 100% 103.68%,
      #4cd6d9 4.5%,
      #01f201 35.73%,
      #e3e3e2 100%
    );
  } */
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
