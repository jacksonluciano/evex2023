/** @jsx jsx */
import { css } from "@emotion/react";

export const natalHeroContainer = css`
  background-color: #e3e3e2;
  margin-top: 96px;
  @media (min-width: 768px) and (max-width: 1280px) {
    margin-top: 86px;
  }

  .hero_container {
    padding: 81.5px 10px 31.5px;
    position: relative;
    overflow-x: clip;
    @media (min-width: 320px) and (max-width: 767px) {
      padding: 61.5px 10px 41.5px;
    }

    h2 {
      color: #fff;
      font-family: "Bw Gradual DEMO";
      font-size: 140px;
      font-weight: bold;
      text-align: center;
      position: relative;
      z-index: 3;
      @media (min-width: 320px) and (max-width: 420px) {
        font-size: 43px;
      }
      @media (min-width: 421px) and (max-width: 767px) {
        font-size: 56px;
      }
    }

    img {
      position: absolute;
      top: -75px;
      z-index: 2;
      max-width: 1046px;
      width: 100%;
    }
  }
`;
export const radialElement = css`
  background: radial-gradient(
    circle,
    rgba(1, 242, 1, 1) 0%,
    rgb(76 214 217 / 70%) 26%,
    rgba(227, 227, 226, 0) 55%
  );
  width: 875px;
  height: 660px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 452px;
    height: 320px;
  }
`;
