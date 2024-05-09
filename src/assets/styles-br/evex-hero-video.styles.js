/** @jsx jsx */
import { css } from "@emotion/react";
import { colorsBr } from "../styles/layout.styles";

export const title = css`
  background: radial-gradient(
    83.75% 293.32% at 101.88% 129.49%,
    ${colorsBr.themeRed} 3.05%,
    ${colorsBr.secondaryYellow} 57.43%,
    #e3e3e2 100%
  );

  h2 {
    font-family: "Bw Gradual DEMO";
    font-weight: bold;
    font-size: 56px;
    margin-bottom: 0;
    padding: 25px;
    text-align: center;
    letter-spacing: 0;

    @media (min-width: 320px) and (max-width: 420px) {
      font-size: 20px;
    }

    @media (min-width: 421px) and (max-width: 767px) {
      font-size: 28px;
    }
    @media (min-width: 768px) and (max-width: 1280px) {
      font-size: 50px;
    }
  }
`;
