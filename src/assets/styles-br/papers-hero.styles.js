/** @jsx jsx */
import { css } from '@emotion/react'
import BgPinkImage from '../images-br/papers/papers-pink-element01.svg'

export const sectionHeroPapers = css`
  margin-top: 96px;
  background-image: url(${BgPinkImage});
  background-color: #d9d9d9;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 109px 0 102px;

  .title_container {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;

    .title {
      color: #ffffff;
      font-family: 'bw_gradual_demobold';
      font-size: 100px;
      font-weight: 700;
      margin-bottom: 0;
    }
  }

  .content_container {
    p {
      color: #000000;
      font-size: 16px;
      font-weight: 400;
      line-height: 21.79px;
      text-align: left;

    }
  }

  @media (max-width: 768px) {
    background: #d9d9d9;
    padding: 0px;

    .bg_papers_mobile {
      background-image: url(${BgPinkImage});
      background-color: #d9d9d9;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      padding: 30px 10px;
    }

    .container {
      max-width: 100%;
    }

    .row {
      gap: 32px;
    }

    .title_container {
      .title {
        font-size: 60px;
      }
    }

    .content_container {
      padding-bottom: 20px;
      p {
        text-align: justify;
        text-justify: inter-word;
      }
    }
  }

  @media (max-width: 576px) {
    .title_container {
      .title {
        font-size: 45px;
      }
    }

    .content_container {
      p {
        font-size: 14px;
      }
    }
  }
`
