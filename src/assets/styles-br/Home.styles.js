/** @jsx jsx */
import { css } from "@emotion/react";
import homePurple from "../images-br/home-purple.jpg";

export const homeBg = css`
  position: relative;
  background: url(${homePurple}) no-repeat center center / cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 320px) and (max-width: 767px) {
    background: url(${homePurple}) no-repeat top left 14% / cover;
  }
`;

export const bannerContent = css`
  position: relative;

  h2 {
    font-size: 40px;
    line-height: 1;
    font-weight: bold;
    letter-spacing: 0px;
    margin: 0;
    color: #fff;
    font-family: "Bw Gradual DEMO";

    @media (min-width: 320px) and (max-width: 767px) {
      font-size: 16px;
    }

    span {
      display: inline-block;
      background-color: #000;
      color: #ffffff;
      padding: 8px 16px;
      :first-of-type {
        color: #000;
        background-color: #ffffff;
      }
    }
  }

  h4 {
    color: #fff;
    font-size: 18px;
    line-height: 36px;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    margin: 0 0 12px;

    a {
      color: #fff;
      display: inline-block;
      &:hover {
        color: #000;
      }
    }
  }
`;

export const Buttons = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 48px;
  padding: 0;

  @media (min-width: 320px) and (max-width: 767px) {
    padding: 0;
  }

  li {
    display: inline-block;
    background-color: #000;
    color: #fff;
    margin: 8px 0;
    padding: 8px 32px;
    width: 399px;
    border: 4px solid #000;

    &:hover {
      background-color: #fff;
      a {
        color: #000;
      }
    }

    a {
      font-family: "Bw Gradual DEMO";
      color: #ffffff;
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
      :hover {
        text-decoration: none;
      }
      span {
        display: block;
      }
    }

    @media (min-width: 320px) and (max-width: 767px) {
      width: 247px;
      padding: 8px 12px;
      a {
        font-size: 14px;
        span {
          line-height: 20px;
        }
      }
    }
  }
`;
