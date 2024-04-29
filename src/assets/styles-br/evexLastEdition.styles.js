/** @jsx jsx */
import { css } from "@emotion/react";
import { colorsBr } from "../styles/layout.styles";

export const sideColumn = css`
  height: 135px;
  width: 100%;
  background: radial-gradient(
    109.03% 260.11% at 114.03% 139.57%,
    ${colorsBr.themeRed} 3.05%,
    ${colorsBr.secondaryYellow} 57.43%,
    #e3e3e2 100%
  );
  @media (min-width: 320px) and (max-width: 767px) {
    height: 100px;
  }
`;

export const centerColumn = css`
  height: 135px;
  background: radial-gradient(
    97.33% 211.75% at 102.33% 133.81%,
    ${colorsBr.themeRed} 0%,
    ${colorsBr.secondaryYellow} 57.43%,
    #e3e3e2 100%
  );
  @media (min-width: 320px) and (max-width: 767px) {
    height: 100px;
  }
`;

export const content = css`
  background: radial-gradient(
    105.42% 191.13% at 110.42% 110.55%,
    ${colorsBr.themeRed} 3.05%,
    ${colorsBr.secondaryYellow} 57.43%,
    #e3e3e2 100%
  );
  padding: 30px;
  height: 405px;
  @media (min-width: 320px) and (max-width: 420px) {
    height: 300px;
    padding: 20px;
  }
  @media (min-width: 421px) and (max-width: 767px) {
    height: 300px;
    padding: 0 30px;
  }
  h2 {
    font-family: "Bw Gradual DEMO";
    font-weight: bold;
    font-size: 56px;
    line-height: 67.2px;
    margin-bottom: 31px;

    @media (min-width: 320px) and (max-width: 420px) {
      font-size: 22px;
      margin-bottom: 16px;
      line-height: 22px;
    }
    @media (min-width: 421px) and (max-width: 767px) {
      font-size: 24px;
      margin-bottom: 0px;
    }
    @media (min-width: 768px) and (max-width: 1280px) {
      margin-bottom: 16px;
    }
  }

  p {
    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: 21.79px;
    letter-spacing: 0;
    @media (min-width: 320px) and (max-width: 420px) {
      font-size: 12px;
      line-height: 15px;
    }
    @media (min-width: 421px) and (max-width: 767px) {
      font-size: 14px;
      line-height: 18px;
    }
    @media (min-width: 768px) and (max-width: 1280px) {
      font-size: 16px;
      line-height: 21px;
    }
  }
`;
