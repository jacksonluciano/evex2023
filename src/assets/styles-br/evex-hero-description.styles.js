/** @jsx jsx */
import { css } from '@emotion/react'
import BgImage from '../images-br/o-evex/o-evex-orange-elements-01.png'

export const sectionHeroDescription = css`
  align-items: center;
  background: url(${BgImage});
  background-color: #e3e3e2;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  margin-top: 96px;
  min-height: 671px;

  @media (min-width: 320px) and (max-width: 767px) {
   justify-content: flex-start;
   align-items: flex-start;
    min-height: auto;
    background: #e3e3e2;
  }
`

export const evexImageBg = css`
  position: relative;
  img:first-of-type {
    position: relative;
    z-index: 1;
  }

  .bgEvex {
    left: -190px;
    position: absolute;
    top: -280px;
    /* width: 100%; */
    /* height: 100%; */
    object-fit: cover;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`
export const evexImageBgMobile = css`
    display: none;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 100%;
    display: block;

    .logoEvex{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }

    img{
      width: 100%;
      &:nth-of-type(1){
        width: 60%;
      }
      &:nth-of-type(2){
        width: 100%;
      }
    }
  }
`

export const description = css`
 @media (min-width: 320px) and (max-width: 767px) {
   padding: 24px;
  }
  p {
    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: 21.79px;
  }

  p:first-of-type {
    span {
      font-weight: 700;
    }
  }
`