/** @jsx jsx */
import { css } from "@emotion/react";
import { colorsBr } from "../styles/layout.styles";
import heroSectionDividerSVG from "@/images-br/2026/hero-section-divider.svg";

export const sliderCss = css`
  background-color: ${colorsBr.evex2026DarkOrange};

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 40px;
    background-color: ${colorsBr.evex2026DarkOrange};
    background-image: url(${heroSectionDividerSVG});
    background-repeat: repeat-x;
    background-position: center top;
    background-size: auto 100%;
    z-index: 2;
    pointer-events: none;
  }
`

export const imageCard = css`
  border-radius: 16px;
  object-fit: cover;
  display: block;
  width: 450px;
  height: 450px;
  @media(max-width: 1580px) {
    width: 400px;
    height: 400px;
  }
  @media(max-width: 1470px) {
    width: 370px;
    height: 370px;
  }
  @media(max-width: 1350px) {
    width: 300px;
    height: 300px;
  }
  @media(max-width: 1300px) {
    width: 250px;
    height: 250px;
  }
`;
