/** @jsx jsx */
import { css } from "@emotion/react";

// export const videoWrap = css`
//     position: relative;
//     margin-bottom: 100px;
//     border-radius: 10px;
//     width: 100%;
//     max-width: 980px;
//     height: 560px;
//     background-color: #dfdfdf;
//     margin: 0 auto;
//     z-index: 2;

//   & img {
//     width: 100%;
//     height: auto;
//   }
//   @media (min-width: 320px) and (max-width: 767px) {
//     margin-bottom: 50px;
//     height: 218px;
//   }
// `;

export const videoWrap = css`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  width:100%;
  margin: 80px 0;
  border-radius: 10px;
  z-index: 2;

  iframe{
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  }
`