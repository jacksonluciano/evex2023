/** @jsx jsx */
import { css } from '@emotion/react'
import PinkElementImage from '@/images-br/papers/papers-pink-element02.svg'

export const bgPapers = css`
  background: #e3e2e2;
  position: relative;

  .logo {
    left: 0;
    position: absolute;
    top: 230px;
  }

  @media (max-width: 992px) {
    .logo {
      width: 30px;
    }
  }
`

export const imageContainer = css`
  align-items: center;
  display: flex;
  justify-content: center;

  @media (max-width: 992px) {
    img {
      display: none;
    }
  }
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

  @media (max-width: 992px) {
    /* background: url(${PinkElementImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain; */
    padding: 0px 15px;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 40px;
    }
  }

  @media (max-width: 576px) {
    .title {
      padding: 0 15px;
      text-align: center;
    }

    .content {
      padding: 0 32px;
      
      .item {
        align-items: center;

        &_number {
          position: relative;
        }

        &_one, &_two, &_three {
          top: 0;
          left: 0;
          flex: 1 0 57px;
          text-align: right;
        }

        &_content {
          font-size: 14px;
          left: 0;
          text-align: justify;
          text-justify: inter-word;
        }
      }
    }
  }
`

export const accordion = css`
  padding-bottom: 600px;
  padding-top: 67px;

  @media (max-width: 768px) {
    padding: 60px 15px 300px;
  }
`
