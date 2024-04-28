/** @jsx jsx */
import { css } from "@emotion/react";
import { colors, colorsBr } from "../styles/layout.styles";

export const abAgency = css`
  background-color: #e3e3e2;
  position: relative;
  padding-bottom: 140px;
  /* padding-top: 32px; */

  @media (min-width: 320px) and (max-width: 767px) {
    .container-fluid .row {
      display: flex;
      flex-direction: column;
    }
    padding-bottom: 0;
  }

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

export const gradient = css`
  width: 100%;
  /* background: rgba(227, 227, 226, 1); */
  /* background: radial-gradient(at center bottom, circle, rgba(255, 64, 1, 1) 0%, rgba(228, 169, 57, 1) 25%, rgba(227, 227, 226, 1) 75%); */
  /* background: radial-gradient(at center bottom, rgba(255, 64, 1, 1), rgba(228, 169, 57, 1), rgba(227, 227, 226, 1)); */
  background: radial-gradient(
    36.39% 193.29% at 50% 122.29%,
    #ff4001 3.05%,
    #e4a939 50%,
    #e3e3e2 100%
  );

  padding: 16px 0;
  h1 {
    color: #ffffff;
    text-align: center;
    font-family: 'Bw Gradual DEMO';
    font-weight: bold;
    font-size: 120px;
    @media (min-width: 320px) and (max-width: 767px) {
      font-size: 38px;
    }
  }
`;

export const about = css`
  position: relative;
  padding: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  color: ${colors.secondaryMain};
  align-items: center;

  h2 {
    color: ${colors.primaryMain};
    font-family: "bw_gradual_demomedium";
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 6px;
    &:after {
      content: "";
      width: 186px;
      height: 3px;
      background-color: #f5f5f5;
      display: block;
      margin-top: -3px;
    }
  }

  p {
    width: 100%;
    max-width: 400px;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    color: #000;
  }

  button {
    font-family: "bw_gradual_demomedium";
    :hover {
      font-weight: 600;
    }
  }

  @media (min-width: 320px) and (max-width: 767px) {
    padding: 12px;

    h2 {
      font-size: 56px;
      line-height: 65px;
    }
  }
`;

export const lisboaTwo = css`
  position: relative;
  padding: 60px;
  display: flex;
  justify-content: start;
  flex-direction: column;
  height: 100%;
  background: #e3e3e2;
  align-items: flex-end;

  @media (min-width: 320px) and (max-width: 767px) {
    padding: 24px 34px 60px;
  }

  h2 {
    color: #000;
    font-family: 'Bw Gradual DEMO';
    font-weight: bold;
    letter-spacing: 0;
    font-size: 56px;
    margin-bottom: 12px;

    @media (min-width: 768px) and (max-width: 1280px) {
      font-size: 50px;
    }

  }

  p {
    width: 100%;
    max-width: 458px;
    font-size: 16px;
    line-height: 21.79px;
    font-weight: 400;
    color: #000;
    letter-spacing: 0;

    @media (min-width: 768px) and (max-width: 1280px) {
      font-size: 15px;
      max-width: 420px;
    }
  }

  /* button {
    font-family: "bw_gradual_demomedium";
    :hover {
      font-weight: 600;
    }
  } */

  .evex-2024 {
    position: absolute;
    top: 70px;
    left: 0;
    width: auto;
    height: 475px;
    @media (min-width: 320px) and (max-width: 767px) {
     width: 32px;
   }
   @media (min-width: 768px) and (max-width: 1280px) {
     width: 140px;
   }
  }

`;

export const lightBg = css`
  background: #e3e3e2;
  p {
    color: ${colors.primaryMain};
  }
`;

export const element01 = css`
  position: absolute;
  width: auto !important;
  top: 0;
  right: -15px;
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

export const testiCarouselPagination = css`
  position: absolute;
  right: 15px;
  top: 0;
  z-index: 9;
  bottom: auto;
  left: auto;
  text-align: right;
  line-height: 1;

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    border: none;
    border-radius: 0;
    background: #1a1a1a;
    display: inline-block;
    cursor: pointer;
    margin-left: 5px;
    opacity: 1;
    transition: all ease 500ms;
    -moz-transition: all ease 500ms;
    -webkit-transition: all ease 500ms;
  }

  .swiper-pagination-bullet-active,
  .swiper-pagination-bullet:hover {
    background: #fff;
  }
`;

export const slider = css`
  #main-slider-next {
    width: 48px;
    height: 48px;
    background-color: ${colors.secondaryMain};
    border: 1px solid #000;
    position: absolute;
    right: 17px;
    top: 45%;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
      width: auto !important;
      transform: rotate(270deg);
    }

    :hover {
      background-color: ${colors.brandingSalmon};
    }
    &.swiper-button-disabled {
      display: none;
    }
  }

  #main-slider-prev {
    width: 48px;
    height: 48px;
    background-color: ${colors.secondaryMain};
    border: 1px solid #000;
    position: absolute;
    left: 17px;
    top: 45%;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
      width: auto !important;
      transform: rotate(90deg);
    }

    :hover {
      background-color: ${colors.brandingSalmon};
    }

    &.swiper-button-disabled {
      display: none;
    }
  }

  .swiper-pagination {
    text-align: center;
    margin-left: 20px;
    top: 22px;

    .swiper-pagination-bullet {
      width: 16px;
      height: 16px;
      background-color: #f68515;
      opacity: 0.5;
    }
    .swiper-pagination-bullet-active {
      background-color: #f68515;
      opacity: 1;
    }
  }
`;

export const element17 = css`
  display: none;
  @media (min-width: 320px) and (max-width: 767px) {
    display: block;
    position: absolute;
    top: 25px;
    width: 130px !important;
    right: 0;
  }
`;

export const element2 = css`
  position: absolute;
  bottom: 0px;
  left: 0;
  z-index: 9;
  @media (min-width: 320px) and (max-width: 767px) {
  }
`;

export const sideColumn = css`
  height: 135px;
  width: 100%;
  background: radial-gradient(
    109.03% 260.11% at 114.03% 139.57%,
    ${colorsBr.themeRed} 3.05%,
    ${colorsBr.secondaryYellow} 57.43%,
    #e3e3e2 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 60px;
  transition: all .3s;

  &:hover{
    background: radial-gradient(76.58% 269.54% at 97.41% 97.62%, #E4A939 0%, #FF4001 35.91%, #E3E3E2 100%);
  }

  @media (min-width: 320px) and (max-width: 767px) {
    padding: 0 26px;
    }

  h5 {
    font-size: 25px;
    margin-bottom: 0px;
    font-family: 'Bw Gradual DEMO';
    font-weight: bold;
    letter-spacing: 0;
    color: #000;
    @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
    }
  }
  p {
    font-size: 20px;
    color: #000;
    margin: 0;
    font-family: 'Bw Gradual DEMO';
    font-weight: 500;
    letter-spacing: 0;
    span{
      font-weight: bold;
      
    }
    @media (min-width: 320px) and (max-width: 767px) {
    font-size: 12px;
    }
  }
`;

export const centerColumn = css`
  height: 135px;
  background: radial-gradient(
    97.33% 211.75% at 102.33% 133.81%,
    ${colorsBr.themeRed} 0%,
    ${colorsBr.secondaryYellow} 57.43%,
    #e3e3e2 100%
  );
`;

export const content = css`
  background: radial-gradient(
    105.42% 191.13% at 110.42% 110.55%,
    ${colorsBr.themeRed} 3.05%,
    ${colorsBr.secondaryYellow} 57.43%,
    #e3e3e2 100%
  );
  padding: 30px;
  height: 405px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  @media (min-width: 320px) and (max-width: 767px) {
    height: auto;
    }

  .info-content {
    width: 100%;
    max-width: 532px;

    h2 {
      font-family: 'Bw Gradual DEMO';
      font-size: 56px;
      font-weight: bold;
      line-height: 67.2px;
      margin-bottom: 31px;
    }

    p {
      color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: 21.97px;
    width: 100%;
    max-width: 527px;
    letter-spacing: 0;
    }

    a {
      align-self: flex-start;
      display: inline-block;
    }
  }
`;
