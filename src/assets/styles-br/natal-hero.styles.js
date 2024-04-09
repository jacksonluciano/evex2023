/** @jsx jsx */
import { css } from '@emotion/react'

export const natalHeroContainer = css`
  background-color: #e3e3e2;
  margin-top: 96px;

  .hero_container {
    padding: 81.5px 10px 31.5px;
    position: relative;

    h2 {
      color: #fff;
      font-family: 'bw_gradual_demobold';
      font-size: 140px;
      font-weight: 800;
      text-align: center;
      position: relative;
      z-index: 3;
    }

    img {
      position: absolute;
      top: -75px;
      z-index: 2;
      max-width: 1046px;
      width: 100%;
    }
  }
`
