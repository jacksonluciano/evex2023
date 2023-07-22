/** @jsx jsx */
import { css } from "@emotion/react";

export const colors = {
  primaryMain: "#1e1e1c",
  primaryLight: "#686868",
  secondaryMain: "#f5f5f5",
  brandingPurple: "#9a6dac",
  brandingSalmon: "#f18e96",
  brandingBlue: "#727dbc",
  brandingOrange: "#f5a282"
};

export const commonSection = css`
  padding: 120px 0;
  position: relative;

  .container {
    position: relative;
    z-index: 2;
  }
`;

export const subtitle = css`
  font-size: 12px;
  line-height: 0.8;
  font-weight: 400;
  color: #818181;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  margin: 0 0 5px;
`;

export const secTitle = css`
    font-size: 56px;
    line-height: 64px;
    font-weight: 400;
    color: #f5f5f5;
    letter-spacing: -1px;
    margin: 0 0 25px;
    white-space: pre-line;
    margin-bottom: 45px;
    display: inline-block;
    width: auto;

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 34px;
    letter-spacing: 1px;
    line-height: 50px;
  }
  @media (min-width: 768px) and (max-width: 990px) {
    font-size: 40px;
  }
  @media (min-width: 991px) and (max-width: 1199px) {
    font-size: 44px;
  }
`;

export const secDesk = css`
  margin: 0 0 54px;
  white-space: pre-line;
`;

export const white = css`
  color: #ffffff;
`;

export const redColor = css`
  color: #e62b4a;
`;

export const colorAaa = css`
  color: #aaaaaa;
`;

export const commonBtn = css`
  border: none;
  font-size: 16px;
  font-weight: 500;
  background: ${colors.primaryMain};
  color: #fff;
  text-align: center;
  padding: 18px 45.5px;
  line-height: 0.8;
  letter-spacing: 1.6px;
  position: relative;
  outline: none;
  /* transition: all 0.4s ease-out;
  -moz-transition: all 0.4s ease-out;
  -webkit-transition: all 0.4s ease-out;
  -ms-transition: all 0.4s ease-out;
  -o-transition: all 0.4s ease-out; */

  &:hover {
    color: #000;
    background-color: ${colors.secondaryMain};
    box-shadow: inset 0px 0px 0px 3px ${colors.primaryMain};
    &:after {
      width: 100%;
    }
  }

  /* &:after {
    content: "";
    width: 4px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    background: #fff;
    transition: all 0.4s ease-out;
    -moz-transition: all 0.4s ease-out;
    -webkit-transition: all 0.4s ease-out;
    -ms-transition: all 0.4s ease-out;
    -o-transition: all 0.4s ease-out;
  } */

  span {
    position: relative;
    z-index: 2;
  }
`;

export const redBg = css`
  padding: 28px 40.5px;
  &:hover {
    color: #fff;
    &:after {
      width: 100%;
    }
  }
  &:after {
    background: #e62b4a;
  }
`;

export const showIt = css`
  background: #e62b4a;
  bottom: 60px;
  color: #ffffff;
  font-size: 20px;
  height: 40px;
  line-height: 0.8;
  padding: 10px 12px;
  position: fixed;
  right: 60px;
  text-align: center;
  width: 40px;
  z-index: 99;
  cursor: pointer;

  &:hover {
    background: #000;
    color: #fff;
  }
`;

export const pb120 = css`
  padding-bottom: 120px;
`;

export const inputForm = css`
  width: 100%;
  height: 70px;
  background: #f4f4f4;
  border: none;
  text-align: left;
  padding: 0 30px;
  font-size: 14px;
  letter-spacing: 0.56px;
  line-height: 70px;
  color: #818181;
  margin: 0 0 30px;
  outline: none;
  border-radius: 0;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;

  &:focus{
    -webkit-box-shadow: 0px 10px 35px 0px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 10px 35px 0px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 10px 35px 0px rgba(0, 0, 0, 0.05);
  border-right: 4px solid #e62b4a;
  background: #fff;
  }

  &.reqError {
    border: 1px solid #e62b4a;
  }
`;

export const textarea = css`
   height: 190px;
  resize: none;
  line-height: 30px;
  padding: 21px 30px;
  margin-bottom: 21px;
`

export const noPadding = css`
  padding:0 !important;
`

export const noPaddingRight = css`
  padding-right:0 !important;
`

export const noPaddingLeft = css`
  padding-left:0 !important;
`

export const mb16 = css`
  margin-bottom:16px !important;
`

export const mb32 = css`
  margin-bottom:32px !important;
`
