/** @jsx jsx */
import { css } from "@emotion/react";
import { colorsBr } from "../styles/layout.styles";


export const slideInner = css`
  width: 100%;
`;

export const slider = css`
  position: relative;
  overflow: visible;

  .swiper-pagination {
    position: absolute;
    bottom: -32px !important;
  }
`;

export const root = css`
  width: 100%;
  min-height: 800px;
  position: relative;
  overflow: hidden;
  padding: 135px 120px;

  .description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2,
    p {
      margin: 0;
      font-family: "Bw Gradual DEMO";
      color: ${colorsBr.evex2026CreamYellow};
    }

    h2 {
      font-weight: 700;
      font-size: 32px;
      line-height: 120%;
    }

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
    }
  }

  .swiper-container {
    overflow: visible !important;
  }

  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: ${colorsBr.evex2026PrimaryOrange};
  }

  .swiper-pagination-bullet {
    background: #ededed;
    opacity: 1;
  }
  @media (max-width: 768px) {
    padding: 100px 120px
  }
  @media (max-width: 425px) {
    padding: 64px 16px;
    .description {
      row-gap: 16px;
      h2 {
        max-width: 300px;
      }
      p {
        max-width: 325px;
      }
    }
  }
`;

export const sliderHeader = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 56px;
`;

export const sliderArrows = css`
  display: flex;
  align-items: center;
  column-gap: 12px;

  .left,
  .right {
    width: 58px;
    height: 58px;
    cursor: pointer;
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }

  .left {
    transform: rotateY(180deg);
  }

  .left.swiper-button-disabled,
  .right.swiper-button-disabled {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
  @media (max-width: 425px) {
    display: none;
  }
`;