/** @jsx jsx */
import { css } from "@emotion/react";
import { colors } from "./layout.styles";

export const abAgency = css`
  background-color: ${colors.primaryMain};
  margin-top: 87px;

  @media (min-width: 320px) and (max-width: 767px) {
    overflow: hidden;
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

export const about = css`
  position: relative;
  padding: 65px 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  color: ${colors.primaryMain};
  align-items: flex-start;

  @media (min-width: 320px) and (max-width: 767px) {
    padding: 120px 15px 60px;
    align-items: center;
    text-align: center;
    z-index: 2;
    overflow-x: hidden;

    h2 {
      font-size: 48px;
      line-height: 56px;
      margin-bottom: 24px;
    }
  }

  h2 {
    color: ${colors.secondaryMain};
    font-family: "bw_gradual_demomedium";
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 6px;
  }

  p {
    width: 100%;
    max-width: 400px;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    color: ${colors.secondaryMain};
    margin-bottom: 0;
  }

  button {
    font-family: "bw_gradual_demomedium";
    :hover {
      font-weight: 600;
    }
  }
`;

export const lisboaTwo = css`
  position: relative;
  padding: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  align-items: center;
  background-color: ${colors.secondaryMain};

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
  }

  button {
    font-family: "bw_gradual_demomedium";
    :hover {
      font-weight: 600;
    }
  }
`;

export const orangeBg = css`
  background-color: ${colors.brandingOrange};
  p {
    color: ${colors.primaryMain};
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

export const element01 = css`
  position: absolute;
  top: 0;
  width: auto !important;
  right: 0;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 100px !important;
  }
`;

export const element08 = css`
  position: absolute;
  top: 0;
  width: auto !important;
  left: 0;
  max-width: 496px;
`;

export const element081 = css`
  position: absolute;
  top: 0;
  width: auto !important;
  max-width: 496px;
  display: none;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 100% !important;
    display: block;
    right: -40px;
    z-index: 0;
    top: 130px;
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
    z-index: 2;
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
  }

  #main-slider-prev {
    width: 48px;
    height: 48px;
    background-color: ${colors.secondaryMain};
    border: 1px solid #000;
    position: absolute;
    left: 17px;
    top: 45%;
    z-index: 2;
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
    text-align: left;
    margin-left: 20px;

    .swiper-pagination-bullet {
      width: 16px;
      height: 16px;
      background-color: ${colors.secondaryMain};
      border: 1px solid ${colors.primaryMain};
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      background-color: ${colors.primaryMain};
    }
  }
`;
