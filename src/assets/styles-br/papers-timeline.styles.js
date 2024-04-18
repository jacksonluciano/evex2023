/** @jsx jsx */
import { css } from '@emotion/react'

export const timelineTitle = css`
  background: radial-gradient(45.85% 216.33% at 50% 123.47%, #FF06B5 3.05%, #F73C6E 24.82%, #E3E3E2 93.84%);
  padding: 25px 14px;

  h2 {
    color: #ffffff;
    font-family: 'bw_gradual_demobold';
    font-size: 100px;
    font-weight: 700;
    line-height: 120px;
    margin-bottom: 0;
    text-align: center;
  }
`

export const data = css`
  background: radial-gradient(97.57% 329.56% at 103.82% 179.59%, #FF06B5 3.05%, #F73C6E 24.82%, #E3E3E2 93.84%);
  height: 100%;
  min-height: 147px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span:first-of-type {
    color: #000000;
    font-size: 20px;
    font-weight: 400;
    line-height: 27.24px;
    text-align: left;
  }

  span:last-of-type {
    color: #000000;
    font-family: 'bw_gradual_demobold';
    font-size: 25px;
    font-weight: 700;
    line-height: 30px;
    text-align: center;
  }
`
