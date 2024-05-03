/** @jsx jsx */
import { css } from '@emotion/react'
import BgPinkImage from '../images-br/papers/papers-pink-element01.svg'

export const sectionHeroPapers = css`
  margin-top: 96px;
  /* background-image: url(${BgPinkImage}); */
  background-color: #e3e3e2;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 109px 0 102px;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) and (max-width: 1280px) {
    margin-top: 86px;
  }

  .bg_mobile {
    display: none;
  }

  .title_container {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;

    .title {
      color: #ffffff;
      font-family: "Bw Gradual DEMO";
      font-weight: bold;
      font-size: 100px;
      margin-bottom: 0;
      position: relative;
      z-index: 2;
    }
  }

  .content_container {
    p {
      color: #000000;
      font-size: 16px;
      font-weight: 400;
      line-height: 21.79px;
      text-align: left;
      position: relative;
      z-index: 2;
    }
  }

  @media (max-width: 768px) {
    background: #d9d9d9;
    padding: 140px 0 34px;
    
    .bg_mobile {
      display: block;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;
    }

    .row {
      gap: 118px;
    }

    .title_container {
      .title {
        font-size: 80px;
      }
    }
  }

  @media (max-width: 576px) {
    padding: 109px 0 34px;

    .container {
      max-width: 100%;
      padding-inline: 30px;
    }

    .bg_mobile {
      top: 5px;
    }

    .title_container {
      .title {
        font-size: 60px;
      }
    }

    .content_container {
      p {
        font-size: 12px;
        line-height: auto;
      }
    }
  }

  @media (max-width: 450px) {
    padding: 83px 0 34px;
    .row {
      gap: 85px;
    }

    .title_container {
      .title {
        font-size: 50px;
      }
    }
  }
`
export const element = css`
  position:absolute;

  @media (min-width: 320px) and (max-width: 768px) {
   display: none;
    }
 
  @media (min-width: 768px) and (max-width: 1280px) {
    left: -22%;
  }
`