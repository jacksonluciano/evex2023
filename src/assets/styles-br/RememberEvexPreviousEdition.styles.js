/** @jsx jsx */
import { css } from "@emotion/react";

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
