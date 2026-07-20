/** @jsx jsx */
import { css } from "@emotion/react";
import { colorsBr } from "../styles/layout.styles";
import sectionDividerSVG from "@/images-br/2026/hero-section-divider.svg";

export const root = css`
  width: 100%;
  height: 620px;
  background-color: ${colorsBr.evex2026PinkBright};
  position: relative;
  display: flex;
  padding: 92px 96px;
  .content_wrapper {
    padding: 80px 72px;
    width: 100%;
    height: 100%;
    background-color: ${colorsBr.evex2026PrimaryBlue};
    border-radius: 24px;
    position: relative;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    row-gap: 4px;
    h2,p.description {
      font-family: 'Bw Gradual DEMO';
      letter-spacing: 0%;
      color: ${colorsBr.evex2026CreamYellow}
    }
    h2 {
      margin: 0;
      font-weight: 500;
      font-size: 32px;
      line-height: 120%;
      max-width: 330px;
      span {
        font-weight: 800;
      }
    }
    p.description {
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      max-width: 430px;
      margin: 16px 0px 32px;
    }
    @media(min-width: 1450px) {
      p.description {
        font-size: 20px;
        max-width: 500px;
      }
      h2 {
        font-size: 36px;
        max-width: 500px;
      }
    }
    @media(min-width: 1850px) {
      p.description {
        font-size: 26px;
        max-width: 650px;
      }
      h2 {
        font-size: 42px;
        max-width: 650px;
      }
    }
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 100%;
    height: 40px;
    background-image: url(${sectionDividerSVG});
    background-repeat: repeat-x;
    background-position: center top;
    background-size: auto 100%;
    background-color: ${colorsBr.evex2026PrimaryBlue};
    z-index: 2;
    pointer-events: none;
  }
  @media (max-width: 1250px) {
    height: auto;
    .content_wrapper {
      display: flex;
      flex-direction: column-reverse;
    }
    .content {
      h2,p {
        max-width: unset;
      }
    }
  }
  @media (max-width: 768px) {
    &::after {
      height: 16px;
    }
  }
  @media(max-width: 700px){
    padding: 64px 32px;
    .content_wrapper {
      padding: 20px 32px;
    }
  }

`
export const buyTicketLink = css`
  position: absolute;
  bottom: -45px;
  left: -10px;
  width: 325px;
  height: 45px;
  border-radius: 20px;
  background-color: ${colorsBr.evex2026PinkBright};
  padding: 13px 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  p {
    font-family: 'Bw Gradual DEMO';
    color: #000000;
    font-weight: 700;
    font-size: 16px;
    margin: 0;
  }

  &:hover,&:focus,&:visited,&:active {
    text-decoration: none;
  }
  &:hover p,&:focus p,&:visited p,&:active p {
    color: #000000;
  }
  @media (max-width: 1250px) {
    position: static;
  }
  @media (max-width: 425px) {
    text-align: center;
    p {
      font-size: 14px;
      line-height: 18px;
    }
  }
`

export const elementWrapper = css`
  @media (max-width: 1250px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const illustration = css`
  position: absolute;
  bottom: 0;
  top: 0;
  margin: auto 0;
  right: 60px;

  @media(max-width: 1380px) {
    width: 500px;
    height: 500px;
  }
  @media (max-width: 1250px) {
    position: static;
    width: 500px;
    height: 400px;
  }
  @media (max-width: 720px) {
    width: 400px;
  }
  @media (max-width: 600px) {
    width: 300px;
    height: 200px;
  }
`