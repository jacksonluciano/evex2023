/** @jsx jsx */
import { css } from '@emotion/react'
import { colorsBr } from '../styles/layout.styles'

export const title = css`
  background: radial-gradient(101.67% 300.32% at 107.15% 108.84%, ${colorsBr.themeRed} 3.05%, ${colorsBr.secondaryYellow} 57.43%, #E3E3E2 100%);

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
        font-family: 'bw_gradual_demobold';
        font-size: 56px;
        font-weight: 700;
        line-height: 67.2px;
        margin-bottom: 0px;
      }
    }
  }
`

export const bg = css`
  background: radial-gradient(90.25% 112.75% at 108.37% 105.86%, ${colorsBr.themeRed} 3.05%, ${colorsBr.secondaryYellow} 68.68%, #E3E3E2 100%);
`

export const container = css`
  margin-top: 121px;
`
