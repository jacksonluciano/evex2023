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
`;

export const bannerContent = css`
  position: relative;

  h2 {
    font-size: 40px;
    line-height: 1;
    font-weight: 700;
    letter-spacing: 2.8px;
    margin: 0;
    color: #fff;

    span{
        display: inline-block;
        background-color: #000;
        color: #ffffff;
        padding: 8px 16px;
        :first-of-type{
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

  li{
    display: inline-block;
    background-color: #000;
    color: #fff;
    margin: 8px 0;
    padding: 8px 32px;

    a{
        color: #ffffff;

        :hover{
            text-decoration: none;
        }
    }
  }
`;