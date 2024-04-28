/** @jsx jsx */
import { css } from "@emotion/react";
import { colorsBr } from "../styles/layout.styles";

export const title = css`
  background: radial-gradient(
    101.67% 300.32% at 107.15% 108.84%,
    ${colorsBr.themeRed} 3.05%,
    ${colorsBr.secondaryYellow} 57.43%,
    #e3e3e2 100%
  );

  .title_container {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 45px 0;

    img {
      height: 100%;
      max-height: 110px;
    }

    .title {
      position: relative;
      left: -13px;

      h2 {
        font-family: "Bw Gradual DEMO";
        font-weight: bold;
        font-size: 56px;
        line-height: 67.2px;
        margin-bottom: 0px;
        @media (min-width: 320px) and (max-width: 767px) {
          font-size: 28px;
          line-height: 32px;
        }
        @media (min-width: 768px) and (max-width: 1280px) {
          line-height: 61.2px;
        }
      }
    }
  }
`;

export const bg = css`
  background: radial-gradient(
    90.25% 112.75% at 108.37% 105.86%,
    ${colorsBr.themeRed} 3.05%,
    ${colorsBr.secondaryYellow} 68.68%,
    #e3e3e2 100%
  );
  @media (min-width: 320px) and (max-width: 767px) {
    &:nth-of-type(2) {
      display: none;
    }
  }
`;

export const container = css`
  margin-top: 121px;
  display: flex;

  div {
    display: flex;
    align-items: center;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: 32px;
    div {
      text-align: center;
      margin-bottom: 32px;
    }
  }
  @media (min-width: 768px) and (max-width: 1280px) {
    max-width: 1070px;
    margin-left: auto;
    margin-right: auto;
  }
`;
