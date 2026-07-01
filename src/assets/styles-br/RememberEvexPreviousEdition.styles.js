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

  .swiper-slide {
    width: 100% !important;
    max-width: 500px !important;
    height: 100%;
  }
  @media (max-width: 768px) {
    &::before {
      height: 16px;
    }
  }
`

export const imageCard = css`
  border-radius: 16px;
  object-fit: cover;
  display: block;
  width: 480px;
  height: 500px;
  @media(max-width: 720px) {
    width: 440px;
    height: 480px;
  }
  @media(max-width: 660px) {
    width: 400px;
    height: 480px;
  }
  @media(max-width: 600px) {
    width: 340px;
    height: 480px;
  }
  @media(max-width: 570px) {
    width: 340px;
    height: 480px;
  }
  @media(max-width: 425px) {
    width: 320px;
    height: 480px;
  }
`;
