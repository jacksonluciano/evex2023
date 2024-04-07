/** @jsx jsx */
import { css } from '@emotion/react'
import { colorsBr } from '../styles/layout.styles'

export const title = css`
  background: radial-gradient(83.75% 293.32% at 101.88% 129.49%, ${colorsBr.themeRed} 3.05%, ${colorsBr.secondaryYellow} 57.43%, #E3E3E2 100%);

  h2 {
    font-family: 'bw_gradual_demobold';
    font-size: 56px;
    font-weight: 700;
    margin-bottom: 0;
    padding: 25px;
    text-align: center;
  }
`