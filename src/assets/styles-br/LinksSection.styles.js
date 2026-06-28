/** @jsx jsx */
import { css } from "@emotion/react";
import { colorsBr } from "../styles/layout.styles";
import sectionDividerSVG from "@/images-br/2026/links-section-divider.svg";
import yellowCreamBalloonSVG from '@/images-br/2026/yellow-cream-balloon.svg'
import styled from "@emotion/styled";

export const root = css`
  width: 100%;
  height: 850px;
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
`

export const Balloon = styled.div`
  background-image: url(${yellowCreamBalloonSVG});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;

  width: 500px;
  min-height: 550px;
  padding: 90px 86px 127px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  h2, p {
    
  }
  h2 {
    margin: 0 0 21px;
    font-family: "Bw Gradual DEMO";
    font-weight: 800;
    font-size: 24px;
    line-height: 110%;
    color: #1C1C1C;
    text-align: left;
    letter-spacing: 2%;
  }

  p {
    margin: 0;
    font-family: "Bw Gradual DEMO";
    font-weight: 400;
    font-size: 14px;
    line-height: 170%;
    color: #1C1C1C;
    text-align: left;
    letter-spacing: 0%;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    position: relative;
    padding-left: 16px;
    margin-bottom: 8px;
    font-family: "Bw Gradual DEMO";
    font-weight: 400;
    font-size: 14px;
    line-height: 170%;
    color: #1C1C1C;
    letter-spacing: 0%;

  }

  li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 11px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #1f1f1f;
  }

  li:last-child {
    margin-bottom: 0;
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
  p {
    color: ${colorsBr.white};
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
    color: ${colorsBr.white};
  }
`
