/** @jsx jsx */
import { css } from '@emotion/react'

export const bgPapers = css`
  background: #e3e2e2;
  position: relative;

  .logo {
    left: 0;
    position: absolute;
    top: 230px;
  }
`

export const imageContainer = css`
  align-items: center;
  display: flex;
  justify-content: center;
`

export const container = css`
  padding-block: 117px;
`

export const contentContainer = css`
  .title {
    font-family: 'bw_gradual_demobold';
    font-size: 56px;
    font-weight: 700;
    line-height: 67.2px;
    margin-bottom: 33px;
    text-align: left;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 42px;

    .item {
      display: flex;
      position: relative;

      &_number {
        color: #ffffff;
        font-family: 'bw_gradual_demobold';
        font-size: 90px;
        line-height: 1;
        margin-bottom: 0;
        position: absolute;
      }

      &_one {
        top: -10px;
      }

      &_two {
        left: -15px;
        top: -20px;
      }

      &_three {
        left: -16px;
        top: -13px;
      }

      &_content {
        color: #000000;
        font-size: 16px;
        font-weight: 400;
        left: 25px;
        line-height: 21.79px;
        text-align: left;
        position: relative;
        z-index: 2;
        margin-bottom: 0;
      }
    }
  }
`

export const accordion = css`
  padding-bottom: 600px;
  padding-top: 67px;
`
