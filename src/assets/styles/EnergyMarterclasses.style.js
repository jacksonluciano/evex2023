/** @jsx jsx */
import { css } from "@emotion/react";
import { colors } from "./layout.styles";

export const abAgency = css`
  background-color: ${colors.secondaryMain};
  padding: 80px 0;
  position: relative;

  @media (min-width: 320px) and (max-width: 767px) {
    overflow: hidden;

    .container-fluid .row {
      div {
        padding: 0;
        &:nth-of-type(2){
          padding: 0 15px;
        }
      }
    }
  }

  img {
    width: 100%;
  }
`;

export const pr79 = css`
  padding-right: 79px;
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
  justify-content: flex-end;
  flex-direction: column;
  height: 100%;
  color: ${colors.primaryMain};
  align-items: center;

  h2 {
    color: ${colors.primaryMain};
    font-family: "bw_gradual_demomedium";
    text-decoration: underline;
    margin-bottom: 16px;
    text-decoration-thickness: 3px;
    text-underline-offset: 6px;

    @media (min-width: 320px) and (max-width: 767px) {
      font-size: 56px;
      line-height: 64px;
      margin: 60px 0 24px;
    }
  }

  p {
    width: 100%;
    max-width: 400px;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    text-align: left;
    color: ${colors.primaryMain};
    margin-bottom: 24px;
  }
  button {
    font-family: "bw_gradual_demobold";
    font-size: 16px;
  }
  img {
    z-index: 2;
  }
`;

export const element04 = css`
  position: absolute;
  width: 188px !important;
  top: 50px;
  left: 500px;
  z-index: 0;
`;

export const element05 = css`
  position: absolute;
  width: auto !important;
  top: 100px;
  left: 50px;
  z-index: 0;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 100% !important;
    top: 220px;
    left: 90px;
  }
`;

export const element08 = css`
  position: absolute;
  max-width: 322px;
  bottom: -150px;
  left: 50%;
  z-index: 3;
  transform: translateX(-50%);
  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
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
  width: 100%;
  max-width: 970px;
  margin: 0 auto;
  padding-bottom: 80px;
`;

export const dateBlock = css`
  background-color: ${colors.primaryMain};
  border: 2px solid ${colors.secondaryMain};
  padding: 50px 37px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  transition: all 0.2s;

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
    color: ${colors.secondaryMain};
    font-size: 24px;
    text-align: center;
    padding: 0 10px;
    margin: 0;
    line-height: 28px;
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
`;
export const operadora = css`
  img {
    width: 100%;
  }
`;

export const mobileIconMaster = css`
display: none;
background-color: ${colors.primaryMain};
  @media (min-width: 320px) and (max-width: 767px) {
    display: block;
    position: absolute;
    width: 56px;
    height: 56px;
    z-index: 5;
    right: 20px;
   img{
    filter: invert(72%) sepia(11%) saturate(1508%) hue-rotate(329deg)
      brightness(96%) contrast(100%);
   }
  }
`;
