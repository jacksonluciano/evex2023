/** @jsx jsx */
import { css } from "@emotion/react";
import { colorsBr } from "../styles/layout.styles";
import sectionDividerSVG from "@/images-br/2026/hero-section-divider.svg";

export const root = css`
  width: 100%;
  height: 785px;
  background-color: ${colorsBr.evex2026DarkGreen};
  position: relative;
  display: flex;
  padding: 170px 60px 0px 120px;
  .description {
    display: flex;
    flex-direction: column;
    row-gap: 32px;
    h2, p {
      line-height: 120%;
      margin: 0;
      font-family: 'Bw Gradual DEMO';
      letter-spacing: 0%;
      font-weight: 500;
      color: ${colorsBr.evex2026CreamYellow}
    }
    h2 {
      font-size: 32px;
      max-width: 450px;
      span {
        font-weight: 700;
      }
    }
    p {
      font-size: 16px;
      max-width: 445px;
    }
    @media(min-width: 1450px) {
      p {
        font-size: 20px;
        max-width: 500px;
      }
      h2 {
        font-size: 36px;
        max-width: 500px;
      }
    }
    @media(min-width: 1850px) {
      p {
        font-size: 28px;
        max-width: 650px;
      }
      h2 {
        font-size: 44px;
        max-width: 650px;
      }
    }
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0px;
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
  @media(max-width: 700px) {
    flex-direction: column;
  }
  @media(max-width: 768px) {
    &::before,
    &::after {
      height: 16px;
    }
  }
  @media(max-width: 1064px) {
    padding: 100px 16px;
  }
`

export const illustration = css`
  position: absolute;
  bottom: -15px;
  right: 60px;
  @media(max-width: 1368px) {
    width: 720px;
  }
  @media(max-width: 1180px) {
    width: 650px
  }
  @media(max-width: 1064px) {
    width: 700px
  }
  @media(max-width: 1000px){
    width: 600px
  }
  @media(max-width: 700px){
    width: 500px;
    height: 360px;
  }
  @media(max-width: 550px){
    width: 460px;
    height: 340px
  }
  @media(max-width: 425px){
    width: 375px;
    height: 285px
  }
  @media(max-width: 375px){
    width: 330px;
    height: 260px
  }
`
