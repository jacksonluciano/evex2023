/** @jsx jsx */
import { css } from '@emotion/react'
import { colors, colorsBr } from '../styles/layout.styles'

export const abAgency = css`
  background-color: #e3e3e2;
  position: relative;

  /* img{
    width: 100%;
  } */
  @media (min-width: 320px) and (max-width: 767px) {
    .container-fluid .row{
      display: flex;
      flex-direction: column-reverse;
    }
  }
  .natal_logo {
    position: absolute;
    right: 0;
    top: 32px;
  }
`

export const pr79 = css`
  @media (min-width: 320px) and (max-width: 767px) {
    padding: 32px 0px;
    justify-content: flex-start;
  }
  @media (min-width: 768px) and (max-width: 990px) {
    padding-right: 15px;
  }
`

export const mb45 = css`
  margin-bottom: 40px;
  @media (min-width: 768px) and (max-width: 990px) {
    margin-bottom: 30px;
  }
`

export const about = css`
  position: relative;
  padding: 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  color: ${colors.secondaryMain};
  align-items: flex-start;

  h2{
    color: ${colors.primaryMain};
    font-family: 'bw_gradual_demomedium';
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 6px;
    letter-spacing: 0;

    @media (min-width: 320px) and (max-width: 767px) {
     font-size: 54px;
    }
  }

  p{
    font-size: 16px;
    line-height: 23px;
    font-weight: 400;
    margin-bottom: 8px;
  }

  a{
    font-family: 'bw_gradual_demomedium';
    :hover{
      font-weight: 600;
    }
    @media (min-width: 320px) and (max-width: 767px) {
      margin: 0 auto;
      z-index: 2;
    }
  }

  @media (min-width: 320px) and (max-width: 767px) {
    padding: 32px 12px;

    h2{
      line-height: 68px;
    }
  }
`

export const element01 = css`
    position: absolute;
    width: auto !important;
    top: 0;
    right: -15px;
`

export const imgFull = css`
    width: 100%;
`

export const abImg = css`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;

  &:nth-child(2){
    position: relative;
    top: 30px;
    margin-top: 0;
    &:after{
      @media (min-width: 768px) and (max-width: 990px) {
        width: 350px;
        left: 15px;
      }
    }
  }

  & img{
    max-width: 100%;
    height: auto;
    -webkit-box-shadow: -2px 4px 30px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: -2px 4px 30px 0px rgba(0, 0, 0, 0.3);
    box-shadow: -2px 4px 30px 0px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 320px) and (max-width: 767px) {
    position: relative;
    margin: 50px 0 0;
    &:after{
      display:none;
    }
  }
  @media (min-width: 768px) and (max-width: 990px) {
    position: relative;
    float: right;
    right: -5px;
  }
`

export const comoSeraContainer = css`
  background-color: #e3e3e2;
  overflow: hidden;

  .hero_container {
    padding: 32.5px 10px 31.5px;
    position: relative;


    h2 {
      color:#000;
      font-family: 'bw_gradual_demobold';
      font-size: 140px;
      font-weight: 800;
      text-align: center;
      position: relative;
      z-index: 3;
    }

    img {
      position: absolute;
      top: 0px;
      z-index: 2;
      max-width: 1046px;
      width: 100%;
    }
  }
`

export const section = css`

  background-color: #e3e3e2;
  position: relative;
  padding-bottom: 40px;

  .eventSteps{   

    .step{
        display: flex;

        &:nth-of-type(1){
            background: radial-gradient(81.7% 260.32% at 95.86% 110.76%, #FD7912 0.06%, #F5B54C 39.52%, #E1E1E0 100%);
        }
        &:nth-of-type(2){
            background: radial-gradient(82.68% 263.44% at 96.84% 120.25%, #8516FD 0.06%, #D373E0 37.65%, #E1E1E0 100%);

        }
        &:nth-of-type(3){
            background: radial-gradient(79.74% 254.08% at 93.9% 120.57%, #01F101 0%, #63CFBC 41.29%, #E1E1E0 100%);

        }
        &:nth-of-type(4){
            background: radial-gradient(81.25% 258.88% at 95.41% 108.54%, #FF03DA 0.06%, #E93269 40.69%, #E1E1E0 100%);

        }

        padding: 16px 0;
        overflow: hidden;

        .icon{
            min-width: 200px;
            display: flex;
            justify-content: center;
            img{
                margin-right: 16px;
                max-width: 100%;
            }
        }

        .text{
            display: flex;
            flex-direction: column;
            justify-content: center;

            h4{
                font-family: 'bw_gradual_demobold';
                font-size: 25px;
            }
            P{
                color: #000;
                font-size: 15px;
                line-height: 20px;
                margin: 0;
            }

        }

    }
  }
`

export const bg = css`
  background: radial-gradient(76.58% 139.19% at 97.41% 97.62%, ${colorsBr.themeGreen} 3.05%, ${colorsBr.secondaryBlue} 49.44%, #E3E3E2 100%);
`

export const header = css`
  /* background: radial-gradient(76.58% 139.19% at 97.41% 97.62%, ${colorsBr.themeGreen} 3.05%, ${colorsBr.secondaryBlue} 49.44%, #E3E3E2 100%); */
  /* padding: 58px 45px 58px 200px; */
  padding-block: 58px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .title_container {
    max-width: 357px;
    margin: 0 auto;

    .title {
      font-family: 'bw_gradual_demobold';
      font-size: 56px;
      font-weight: 700;
      line-height: 67.2px;
      margin: 0;
      text-align: left;
    }
  }
`