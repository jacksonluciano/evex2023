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
  /* height: 100vh; */
  padding: 220px 0px 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 95px 0px 35px;

  p {
    color: #000 !important;
    text-align: left;
  }

  @media (max-width: 992px) {
    height: auto;
    padding: 175px 0px 50px;

    .row {
      gap: 100px;
    }
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 158px 0px 50px;
    gap: 100px;
  }

  @media (max-width: 576px) {
    height: auto;
    padding: 140px 0px 50px;

    .row {
      gap: 50px;
    }
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
    font-size: 16px;
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

  @media (max-width: 1280px) {
    max-width: 889px;
  }

  @media (max-width: 992px) {
    .row {
      padding-inline: 100px;

      .column:first-of-type {
        margin-bottom: 50px;
      }
    }
  }

  @media (max-width: 768px) {
    z-index: 2;
    padding-bottom: 260px;

    .row {
      /* gap: 50px; */
      padding: 0 50px;

      .column {
        padding-inline: 0px;

        &:first-of-type {
          margin-bottom: 50px;
        }
      }
    }
  }

  @media (max-width: 576px) {
    .row {
      padding: 0 35px;
    }
  }

  /* @media (min-width: 320px) and (max-width: 767px) {
    z-index: 2;

    .row {
      div:nth-of-type(2) {
        margin-bottom: 40px;
      }
      gap: 50px;
      padding: 0 35px;
    }
  } */
  /* @media (min-width: 768px) and (max-width: 1280px) {
    max-width: 889px;
    .row {
      gap: 50px;
      padding: 0 50px;
    }
   
  } */
`;

export const dateBlock = css`
  background-color: #252525;
  height: 100%;
  padding: 32px 18px 80px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  position: relative;
  z-index: 2;
  transition: all 0.3s;

  &:hover{
    background: radial-gradient(190.68% 100% at 50% 100%, #9A2FF6 3.05%, #CC6AE3 35.31%, #E3E3E2 100%);
    h2, h3, h4, p, li {
      color: #000;
    }
  }

  @media (min-width: 320px) and (max-width: 767px) {
    /* width: 95%; */
    border: 2px solid ${colors.primaryMain};
  }

  h2 {
    font-family: "Bw Gradual DEMO";
    font-weight: bold;
    color: #ffffff;
    font-size: 25px;
    text-align: center;
    margin-bottom: 0px;
  }

  h3 {
    font-size: 24px;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
    margin-bottom: 24px;
    font-family: "Bw Gradual DEMO";
    font-weight: 500;
    text-align: center;
    color: #ffffff;
  }

  h4 {
    font-family: "Bw Gradual DEMO";
    font-weight: 500;
    color: #ffffff;
  }

  P {
    color: #ffffff;
    font-size: 16px;
    text-align: center;
    padding: 0;
    margin: 0;
    line-height: 21px;
    margin-bottom: 8px;
    letter-spacing: 0;

    &.text {
      margin: 8px 0 40px;
    }
  }

  ul {
    li {
      list-style-type: disc;
      color: #ffffff;
      font-size: 16px;
      padding: 0;
      margin: 0;
      line-height: 21px;
      margin-bottom: 0px;
      letter-spacing: 0;
    }
  }

  a {
    font-family: "Open Sans", sans-serif !important;
    width: 250px;
    letter-spacing: 0;
    background-color: #ffffff;
    color: #000;
    font-size: 16px;
    letter-spacing: 0;
    position: absolute;
    bottom: 34px;
    :hover{
      text-decoration: none;
    }
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

  ul {
    margin: 24px 0 48px 0;
    padding: 0;
    li {
      p {
        text-align: left;
        margin: 0;
      }
    }
  }

  @media (max-width: 576px) {
    h2 {
      font-size: 20px;
    }

    .text {
      font-size: 14px;
    }

    p:nth-of-type(2), p:nth-of-type(3) {
      font-size: 12px;
    }

    h4:nth-of-type(2), h4:nth-of-type(3) {
      font-size: 20px;
    }

    ul {
      p {
        font-size: 12px;
      }

      li {
        color: #ffffff;
        font-size: 12px;
        list-style-type: disc;
      }
    }

    a {
      font-size: 14px;
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
    font-family: "Bw Gradual DEMO";
    font-weight: bold;
    color: #ffffff;
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
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 0;
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
      font-family: "Bw Gradual DEMO";
      font-weight: bold;
      text-decoration: none;
      font-size: 94px;
    }

    p {
      color: #000 !important;
      text-align: left;
    }

    img:first-of-type {
      position: absolute;
      left: -123px;
      top: -225px;
      width: auto;

      @media (max-width: 992px) {
        display: none;
      }
      /* &:nth-of-type(1) {
        left: -123px;
        top: -225px;
        width: auto;
        @media (min-width: 768px) and (max-width: 1280px) {
          left: 50%;
          top: 50%;
          width: 900px;
          transform: translate(-40%, -43%);
        }
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
      } */
    }

    img:last-of-type {
      display: none;
      position: absolute;

      @media (max-width: 992px) {
        display: initial;
        top: -168px;
        width: 590px;
      }

      @media (max-width: 768px) {
        top: -175px;
        width: 575px;
      }

      @media (max-width: 576px) {
        top: -135px;
        width: fit-content;
      }
    }

    @media (max-width: 576px) {
      h2 {
        font-size: 58px;
        top: -20px;
      }
    }
  }

  p {
    font-size: 16px;
    text-align: left;
    span {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    p {
      padding: 0px 35px;
    }
  }

  @media (max-width: 576px) {
    p {
      font-size: 12px;
      padding: 0px 35px;
    }
  }
`;

// export const underline = css`
//   color: #000;
//   text-align: left;
//   span {
//     text-decoration: underline;
//   }
// `;

export const bgElement = css`
  position: absolute;
  bottom: 0;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;
export const element01 = css`
  width: auto !important;
  position: absolute;
  top: -268px;
  right: -373px;
  z-index: 1;

  @media (max-width: 576px) {
    width: 70% !important;
    top: -135px;
    right: -52px;
  }
`;
