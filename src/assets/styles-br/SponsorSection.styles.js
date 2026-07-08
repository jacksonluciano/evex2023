/** @jsx jsx */
import { css } from "@emotion/react";
import { colorsBr } from "../styles/layout.styles";
import sectionDividerSVG from "@/images-br/2026/hero-section-divider.svg";
import styled from "@emotion/styled";

export const root = css`
  position: relative;
  width: 100%;
  min-height: 1300px;
  background-color: ${colorsBr.evex2026PrimaryBlue};
  padding: 80px 56px;
  display: flex;
  flex-direction: column;
  row-gap: 56px;
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
    z-index: 2;
    pointer-events: none;
  }

  .description {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 16px;
    h2, p {
      font-family: 'Bw Gradual DEMO';
      color: #FFEEC1;
      margin: 0;
      line-height: 120%;
      letter-spacing: 0%;
    }
    h2 {
      font-weight: 700;
      font-size: 32px;
    }
    p {
      font-weight: 500;
      font-size: 16px;
    }
  }
  
  @media(max-width: 768px) {
    padding: 40px 24px;
    .description {
      text-align: center;
    }
    &::before {
      height: 16px;
    }
    &::after {
      display: none;
    }
  }
`

export const SponsorsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 42px;
  align-items: center;
  .master {
    width: 44%;
  }
  .gold {
    width: 70%
  }
  .silver {
    width: 94%
  }
  .bronze {
    width: 90%
  }
  .master,.gold,.silver,.bronze,.org {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    p {
      font-family: 'Bw Gradual DEMO';
      color: #EDEDED;
      font-size: 16px;
      text-transform: uppercase;
      font-weight: 500;
      margin: 0;
      text-align: center;
    }
    .sponsors {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
  .org-wrapper {
    display: flex;
    align-items: flex-start;
    column-gap: 42px;
  }
  @media(max-width: 768px) {
    .sponsors {
      justify-content: center !important;
      gap: 15px 30px;
    }
  }

`
export const decorationWrapper = css`
  width: 100%;
  display: flex;
  justify-content: center;
  
`
export const decoration = css`
  width: 100%;
  height: auto;
`

