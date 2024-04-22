/** @jsx jsx */
import { css } from '@emotion/react'
import BgImage from '../images-br/o-evex/bg.svg'

export const whatWedo = css`
  position: relative;
  background-color: #e3e3e2;
  background-image: url(${BgImage});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 118px 0 66px;

`;

export const videoWrap = css`
  position: relative;
  /* padding-bottom: 56.25%; */
  /* padding-top: 30px; */
  height: 517px;
  margin-inline: auto;
  overflow: hidden;
  width: 850px;
  /* margin: 80px 0; */
  /* border-radius: 10px; */
  z-index: 2;

  iframe{
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
    width: 100%;
    margin: 80px 0;
    border-radius: 10px;
    z-index: 2;
  }

 
`