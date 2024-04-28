/** @jsx jsx */
import { css } from "@emotion/react";
import { colorsBr, colors } from "../styles/layout.styles";

export const slider = css`
  #main-slider-next01,
  #main-slider-next02 {
    width: 48px;
    height: 48px;
    background-color: #ffffff;
    border: 1px solid #000;
    position: absolute;
    right: 17px;
    top: 45%;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
      width: auto !important;
      transform: rotate(270deg);
    }

    :hover {
      /* background-color:${colors.brandingSalmon}; */
      /* background-color: #08f016; */
    }
    &.swiper-button-disabled {
      display: none;
    }
  }

  #main-slider-prev01,
  #main-slider-prev02 {
    width: 48px;
    height: 48px;
    background-color: #ffffff;
    border: 1px solid #000;
    position: absolute;
    left: 17px;
    top: 45%;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
      width: auto !important;
      transform: rotate(90deg);
    }

    :hover {
      /* background-color:${colors.brandingSalmon}; */
      background-color: #08f016;
    }

    &.swiper-button-disabled {
      display: none;
    }
  }

  .swiper-pagination {
    text-align: center;

    .swiper-pagination-bullet {
      width: 13px;
      height: 13px;
      background-color: #08f016;
      border: 1px solid #08f016;
      opacity: 0.5;
    }
    .swiper-pagination-bullet-active {
      background-color: #08f016;
      opacity: 1;
    }
  }
`;

export const imgFull = css`
  width: 100%;
  /* height: 100%; */
  max-height: 542px;
`;

export const description = css`
  align-items: center;
  background: radial-gradient(
    109.31% 145.98% at 109.31% 100%,
    ${colorsBr.themeGreen} 3.05%,
    ${colorsBr.secondaryBlue} 27.63%,
    #e3e3e2 100%
  );
  display: flex;
  justify-content: center;

  .description_container {
    max-width: 510px;
    @media (min-width: 320px) and (max-width: 767px) {
      padding: 24px 12px;
    }

    p {
      color: #000;
      font-size: 16px;
      font-weight: 400;
      line-height: 21.79px;
      /* @media (min-width: 768px) and (max-width: 1280px) {
        font-size: 15px;
        line-height: 21px;
      } */
    }
  }
`;

export const bg = css`
  background: radial-gradient(
    76.58% 139.19% at 97.41% 97.62%,
    ${colorsBr.themeGreen} 3.05%,
    ${colorsBr.secondaryBlue} 49.44%,
    #e3e3e2 100%
  );
  @media (min-width: 320px) and (max-width: 767px) {
    &:nth-of-type(2) {
      display: none;
    }
  }
`;

export const header = css`
  background: radial-gradient(
    76.58% 139.19% at 97.41% 97.62%,
    ${colorsBr.themeGreen} 3.05%,
    ${colorsBr.secondaryBlue} 49.44%,
    #e3e3e2 100%
  );
  /* padding: 58px 45px 58px 200px; */
  padding-block: 58px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (min-width: 320px) and (max-width: 767px) {
    padding-block: 38px;
    justify-content: flex-start;
  }
  @media (min-width: 768px) and (max-width: 1280px) {
    padding-block: 40px;
    }

  .title_container {
    max-width: 589px;
    margin-right: 45px;
    @media (min-width: 320px) and (max-width: 767px) {
      margin-right: 0px;
    }

    .title {
      font-family: "Bw Gradual DEMO";
      font-weight: bold;
      font-size: 56px;
      line-height: 67.2px;
      margin: 0;
      text-align: left;
      @media (min-width: 320px) and (max-width: 767px) {
        font-size: 22px;
        line-height: 28px;
      }
      @media (min-width: 768px) and (max-width: 1280px) {
        font-size: 50px;
        letter-spacing: 0;
      }
    }
  }
`;

export const content = css`
  align-items: center;
  background: radial-gradient(
    102.27% 195.06% at 102.27% 103.18%,
    ${colorsBr.themeGreen} 3.05%,
    ${colorsBr.secondaryBlue} 27.63%,
    #e3e3e2 100%
  );
  display: flex;
  justify-content: flex-end;

  .content_container {
    width: 100%;
    max-width: 492px;
    margin-right: 142px;

    @media (min-width: 768px) and (max-width: 1280px) {
      margin-right: 75px;
    }

    p {
      color: #000000;
      font-size: 16px;
      font-weight: 400;
      line-height: 21.79px;
      text-align: left;
    }
  }
`;

export const section = css`
  position: relative;

  .natal_logo {
    position: absolute;
    left: 0;
    top: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 130px;
    @media (min-width: 320px) and (max-width: 767px) {
      width: 30px;
    }
    @media (min-width: 768px) and (max-width: 1280px) {
      width: 130px;
      top: 46%;
    }
  }
`;

export const teamSlider = css`
  margin-left: 135px;
  position: relative;
  margin-bottom: 32px;

  img {
    width: 100%;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    margin-left: 0px;
  }

  #main-slider-next {
    width: 48px;
    height: 48px;
    background-color: #fff;
    border: 1px solid #000;
    position: absolute;
    right: 17px;
    top: 158px;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
      transform: rotate(270deg);
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
    top: 158px;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &.swiper-button-disabled {
      display: none;
    }

    img {
      transform: rotate(90deg);
    }

    :hover {
      background-color: ${colors.brandingSalmon};
    }
  }

  & .slick-slide {
    margin: 0 15px;
    outline: none;
  }
`;

export const teamPagination = css`
  position: relative;
  bottom: auto;
  left: auto;
  text-align: center;
  margin-top: 40px;

  & span {
    border-radius: 50%;
    list-style: none;
    display: inline-block;
    height: 20px;
    width: 20px;
    background: ${colorsBr.themeGreen};
    margin: 0 3px;
    cursor: pointer;
    border: 1px solid ${colorsBr.themeGreen};
    padding: 0;
    opacity: 0.3;
    transition: all ease 400ms;
    -webkit-transition: all ease 400ms;
    -moz-transition: all ease 400ms;

    .swiper-pagination {
      bottom: -32px;
    }

    &.swiper-pagination-bullet-active {
      background: ${colorsBr.themeGreen};
      opacity: 1;
    }

    &:hover {
      background: ${colorsBr.themeGreen};
    }

    & button[type="button"] {
      border: none;
      border-radius: 0;
      display: inline-block;
      padding: 0;
      text-indent: -9999px;
      z-index: 10;
      outline: none;
    }
  }
`;

export const lastcontainer = css`
background-color: #e3e3e2;
  padding: 50px 0 295px;

  .slider {
    width: 375px !important;
  }
`;
export const reverse = css`
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;

export const natalHeroContainer = css`
  background-color: #e3e3e2;
  margin-top: 96px;

  .hero_container {
    padding: 81.5px 10px 31.5px;
    position: relative;

    h2 {
      color: #fff;
      font-family: "bw_gradual_demobold";
      font-size: 140px;
      font-weight: 800;
      text-align: center;
      position: relative;
      z-index: 3;
    }

    img {
      position: absolute;
      top: -75px;
      z-index: 2;
      max-width: 1046px;
      width: 100%;
    }
  }
`;
