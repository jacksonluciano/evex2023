/** @jsx jsx */
import { css } from "@emotion/react";
import { colorsBr } from "../styles/layout.styles";

export const root = css`
  width: 100%;
  height: 730px;
  background-color: ${colorsBr.evex2026CreamYellow};
  display: flex;
  align-items: center;
  column-gap: 130px;
  padding: 92px 200px;
  justify-content: space-around;
`;

export const ceoProfile = css`

`

export const ceoMessage = css`
  font-family: "Bw Gradual DEMO";
  .title_wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 16px;
    max-width: 395px;
    p, h2 {
      margin: 0px;
      line-height: 120%;
    }
    p {
      text-transform: uppercase;
      color: ${colorsBr.evex2026DarkGreen};
      font-weight: 500;
      font-size: 18px;
    }
    h2 {
      font-weight: 500;
      font-size: 32px;
      color: ${colorsBr.evex2026Grey};
      span {
        font-weight: 700;
      }
    }
  }

  .message {
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    color: #7B7B7B;
    margin: 32px 0px 24px;
    max-width: 390px
  }

  .ceo_presentation {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 4px;
    h2, p {
      margin: 0px;
      line-height: 120%;
    }
    h2 {
      font-size: 20px;
      font-weight: 700;
      color: #686868;
    }
    p {
      font-size: 16px;
      font-weight: 500;
      color: #8F8F8F
    }
  }
`
