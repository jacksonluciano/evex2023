/** @jsx jsx */
import { css } from "@emotion/react";
import { colors } from './layout.styles'

export const whatWedo = css`
  position: relative;
  padding-bottom: 72px;
  background-color: ${colors.primaryMain};
  padding: 120px 0 44px;

   @media (min-width: 320px) and (max-width: 767px) {
    padding: 0px 0 44px;
  }
  /* &:after {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 50%;
    content: "";
    background: #f4f4f4;
  } */
`;

export const videoWrap = css`
    position: relative;
    margin-bottom: 100px;
    border-radius: 10px;
    width: 100%;
    max-width: 980px;
    height: 560px;
    background-color: #dfdfdf;
    margin: 0 auto;
    z-index: 2;

  & img {
    width: 100%;
    height: auto;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    margin-bottom: 50px;
    height: 218px;
  }
`;

export const video = css`
position: relative;
`

export const element03 = css`
position: absolute;
top: -200px;
width: auto !important;
right: -20px;
@media (min-width: 320px) and (max-width: 767px) {
display: none;
    }
`


export const playVideo = css`
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;

  & a {
    display: flex;
    width: 70px;
    height: 70px;
    position: relative;
    background: transparent;
    color: #1d1d1b;
    border: 2px solid #1d1d1b;
    font-size: 30px;
    border-radius: 50%;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    @media (min-width: 320px) and (max-width: 767px) {
      width: 45px;
      height: 45px;
      font-size: 15px;
      padding: 15px 0;
      margin-bottom: 15px;
    }

    &:hover {
      background: #000;
      color: #fff;
      text-decoration: none;
    }
  }

  h2 {
    font-size: 50px;
    line-height: 1;
    letter-spacing: 2px;
    color: #000;
    text-transform: uppercase;
    margin: 0;

    @media (min-width: 320px) and (max-width: 767px) {
      font-size: 20px;
      letter-spacing: 1px;
    }
  }
`;
