/** @jsx jsx */
import { css } from '@emotion/react'
import { colorsBr } from '../styles/layout.styles'

export const sideColumn = css`
  height: 135px;
  width: 100%;
  background: radial-gradient(109.03% 260.11% at 114.03% 139.57%, ${colorsBr.themeRed} 3.05%, ${colorsBr.secondaryYellow} 57.43%, #E3E3E2 100%);
`

export const centerColumn = css`
  height: 135px;
  background: radial-gradient(97.33% 211.75% at 102.33% 133.81%, ${colorsBr.themeRed} 0%, ${colorsBr.secondaryYellow} 57.43%, #E3E3E2 100%);
`

export const content = css`
  background: radial-gradient(105.42% 191.13% at 110.42% 110.55%, ${colorsBr.themeRed} 3.05%, ${colorsBr.secondaryYellow} 57.43%, #E3E3E2 100%);
  padding: 30px;
  height: 405px;

  h2 {
    font-family: 'bw_gradual_demobold';
    font-size: 56px;
    font-weight: 700;
    line-height: 67.2px;
    margin-bottom: 31px;
  }

  p {
    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: 21.79px;
  }
`
