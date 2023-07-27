/** @jsx jsx */
import { css } from "@emotion/react";
import { colors } from "./layout.styles";

export const abAgency = css`
  background-color: ${colors.secondaryMain};
  padding-top: 140px;
  position: relative;
  img {
    width: 100%;
  }
`;

export const pr79 = css`
  /* padding-right: 79px; */
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
    color: ${colors.primaryMain};
    font-family: "bw_gradual_demomedium";
    text-align: center;
    text-decoration: underline;
    margin-bottom: 16px;
    text-decoration-thickness: 3px;
    text-underline-offset: 6px;
    margin-bottom: 64px;
    @media (min-width: 320px) and (max-width: 767px) {
    font-size: 56px;
  }
  }

  h3 {
    font-size: 40px;
    letter-spacing: 0;
    margin-bottom: 16px;
    font-family: "bw_gradual_demobold";
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
  }
`;

export const element7 = css`
  position: absolute;
  width: auto !important;
  top: 150px;
  left: 0;
  z-index: 0;
  transform: scaleY(-1);
  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`;

export const element3 = css`
  position: absolute;
  width: auto !important;
  top: -160px;
  right: -200px;
  z-index: 0;
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
  max-width: 775px;
  margin: 0 auto;
  padding-bottom: 40px;
  position: relative;
`;

export const dateBlock = css`
  background-color: ${colors.secondaryMain};
  border: 2px solid ${colors.primaryMain};
  padding: 27px 37px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  transition: all 0.2s;
  margin-bottom: 40px;
  cursor: pointer;

  &.orangeBg {
    background-color: ${colors.brandingOrange};
    :hover {
      background-color: ${colors.primaryMain};
      border: 2px solid ${colors.secondaryMain};
      h3,
      p {
        color: ${colors.secondaryMain};
      }
    }
  }

  :hover {
    background-color: ${colors.primaryMain};
    border: 2px solid ${colors.secondaryMain};
    h3,
    p {
      color: ${colors.secondaryMain};
    }
  }

  h3 {
    font-family: "bw_gradual_demomedium";
    color: ${colors.primaryMain};
    font-size: 40px;
    text-align: center;
    margin-bottom: 0;
  }

  P {
    color: ${colors.primaryMain};
    font-size: 24px;
    text-align: center;
    font-family: "bw_gradual_demomedium";
    padding: 0px 10px 4px;
    margin: 0;
    line-height: 28px;
  }
`;
export const asideBlock = css`
  background-color: ${colors.primaryMain};
  position: absolute;
  width: 100%;
  max-width: 370px;
  display: block;
  top: 15px;
  left: 30px;
  height: 170px;
  z-index: 1;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 92%;
  }
`;

export const contentData = css`
  width: 100%;
  max-width: 770px;
  margin: 0 auto;
  margin-bottom: 80px;

  h3 {
    font-size: 24px;
    margin-bottom: 24px;
    font-family: "bw_gradual_demomedium";
    letter-spacing: 0;
  }

  p {
    color: ${colors.primaryMain};
    font-size: 14px;
    line-height: 20px;
  }
`;

export const agendaBlack = css`
  padding-top: 170px;
  background-color: ${colors.primaryMain};
  margin-bottom: 0;

  h3 {
    color: ${colors.secondaryMain};
  }
`;

export const datePresBlock = css`
  border-color: ${colors.primaryMain};
`;
export const asidePresBlock = css`
  background-color: ${colors.secondaryMain};
  margin-bottom: 0;
`;

export const contentPresData = css`
  margin-bottom: 0px;
  padding-bottom: 40px;

  p {
    color: ${colors.secondaryMain};
  }
`;

export const element5 = css`
  position: absolute;
  width: 436px !important;
  top: 42px;
  left: 15%;
  z-index: 0;
  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`;

export const element8 = css`
  position: absolute;
  top: 20px;
  right: 15%;
  z-index: 0;
  width: 466px !important;
`;
