/** @jsx jsx */
import { css } from "@emotion/react";
import { colorsBr } from "../styles/layout.styles";
import sectionDividerSVG from "@/images-br/2026/links-section-divider.svg";
import yellowCreamBalloonSVG from '@/images-br/2026/yellow-cream-balloon.svg'
import yellowCreamBalloonMobileSVG from '@/images-br/2026/yellow-cream-balloon-mobile.svg'
import styled from "@emotion/styled";

export const root = css`
  width: 100%;
  min-height: 850px;
  background-color: ${colorsBr.evex2026PrimaryBlue};
  position: relative;
  overflow-y: visible;
  padding: 160px 200px 140px;
  font-family: 'Bw Gradual DEMO';
  display: flex;
  align-items: center;
  column-gap: 72px;
  justify-content: space-around;
  &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -63px;
      width: 100%;
      height: 126px;
      background-image: url(${sectionDividerSVG});
      background-repeat: repeat-x;
      background-position: center top;
      background-size: auto 100%;
      z-index: 2;
      pointer-events: none;
    }
  @media (max-width: 1250px){
    flex-direction: column;
    padding: 50px;
  }
  @media (max-width: 768px){
    padding: 40px 16px 42px;
  }
  @media (max-width: 460px){
    padding: 80px 16px;
    row-gap: 32px;
    &::before {
      bottom: -16px;
      height: 32px;
    }
  }
`

export const Balloon = styled.div`
  box-sizing: border-box;
  background-image: url(${yellowCreamBalloonSVG});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;

  width: 500px;
  min-height: 550px;
  padding: 90px 86px 127px;

  display: flex;
  flex-direction: column;
  text-align: left;

  h2 {
    margin: 0 0 21px;
    font-family: "Bw Gradual DEMO";
    font-weight: 800;
    font-size: 24px;
    line-height: 1.1;
    color: #1C1C1C;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    position: relative;
    padding-left: 16px;
    margin-bottom: 8px;
    font-family: "Bw Gradual DEMO";
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    color: #1C1C1C;
    word-break: normal;
    overflow-wrap: break-word;
  }

  li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 9px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #1f1f1f;
  }

  li:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 1450px) {
    width: 440px;
    min-height: 560px;
    padding: 72px 54px 88px;

    h2 {
      margin-bottom: 14px;
      font-size: 20px;
    }

    li {
      font-size: 13px;
      line-height: 1.45;
      margin-bottom: 6px;
    }
  }
  @media (max-width: 1250px){
    a {
      align-self: center;
    }
  }

  @media (max-width: 512px) {
    width: 400px;
    min-height: 540px;
    padding: 70px 56px 78px;

    h2 {
      margin-bottom: 10px;
    }

    li {
      margin-bottom: 4px;
    }
  }

  @media (max-width: 425px) {
    width: 340px;
    min-height: 520px;
    background-image: url(${yellowCreamBalloonMobileSVG});
    padding: 55px 46px 72px;

    h2 {
      font-size: 18px;
    }

    li {
      font-size: 12px;
      line-height: 1.4;
    }
  }
`

export const checkAgendaBtn = css`
  width: 200px;
  height: 54px;
  border-radius: 8px;
  background-color: ${colorsBr.evex2026PinkBright};
  padding: 14px 34px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin-top: 32px;
  p.btnTitle {
    color: #000000;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: 0%;
    margin: 0;
  }

  &:hover,&:focus,&:visited,&:active {
    text-decoration: none;
  }
  &:hover p,&:focus p,&:visited p,&:active p {
    color: #000000;
  }
  @media (max-width: 512px){
    margin-top: 8px;
    height: 45px;
  }
`
