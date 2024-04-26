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

  @media (max-width: 768px) {
    padding: 32px;
    h2 {
      font-size: 60px;
      line-height: 120%;
    }
  }

  @media (max-width: 576px) {
    h2 {
      font-size: 45px;
      line-height: 120%;
    }
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
  transition: background 0.3s ease-in-out;

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

  &:hover {
    background: radial-gradient(108.47% 275.86% at 108.47% 119.55%, #F73C6E 4.36%, #FF06B5 35.77%, #E3E3E2 93.84%);

    span {
      color: #ffffff;
    }
  }

  @media (max-width: 768px) {
    span:first-of-type {
      font-size: 18px;
      text-align: center;
    }

    span:last-of-type {
      font-size: 23px;
    }
  }

  @media (max-width: 576px) {
    min-height: 90px;
    padding: 0px 10px;

    span:first-of-type {
      font-size: 12px;
      line-height: 120%;
      margin-bottom: 5px;
    }

    span:last-of-type {
      font-size: 20px;
      line-height: 120%;
    }
  }
`
