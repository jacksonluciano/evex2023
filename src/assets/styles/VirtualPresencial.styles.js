/** @jsx jsx */
import { css } from '@emotion/react'
import { colors } from './layout.styles'

export const abAgency = css`
  background-color: transparent;

  img{
    width: 100%;
  }
`

export const pr79 = css`
  padding-right: 79px;

  @media (min-width: 320px) and (max-width: 767px) {
    padding-right: 15px;
    text-align: center;
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
  padding: 60px;
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
    &:after{
      content: '';
      width: 186px;
      height: 3px;
      background-color: #f5f5f5;
      display: block;
      margin-top: -3px;
    }
  }

  p{
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
  }

  button{
    font-family: 'bw_gradual_demomedium';
    :hover{
      font-weight: 600;
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
