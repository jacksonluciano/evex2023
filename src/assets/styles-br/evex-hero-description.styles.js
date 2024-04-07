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
    top: -260px;
    /* width: 100%; */
    /* height: 100%; */
    object-fit: cover;
  }
`

export const description = css`
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