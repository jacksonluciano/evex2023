/** @jsx jsx */
import { css } from "@emotion/react";
import { colorsBr } from "../styles/layout.styles";
import sectionDividerSVG from "@/images-br/2026/links-section-divider.svg";

export const root = css`
  width: 100%;
  min-height: 520px;
  background-color: ${colorsBr.evex2026PrimaryOrange};
  position: relative;
  overflow-y: visible;
  padding: 92px 112px 148px;
  font-family: 'Bw Gradual DEMO';
  display: flex;
  flex-direction: column;
  row-gap: 56px;
  .title_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 16px;
    h2, p {
      margin: 0px;
      line-height: 120%;
    }
    h2 {
      font-weight: 500;
      font-size: 32px;
      color: #0F0B0C;
      span {
        font-weight: 700;
      }
    }
    p {
      font-weight: 400;
      font-size: 16px;
      color: #4B4042
    }
  }
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
  @media(max-width: 768px) {
    padding: 50px 16px 100px;
    .title_wrapper {
      text-align:center;
    }
  }
`
export const highlights = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
`

export const highlight = css`
  display: flex;
  align-items: center;
  column-gap: 16px;
  h2 {
    font-weight: 500;
    font-size: 24px;
    margin: 0px;
    line-height: 120%;
  }
`
