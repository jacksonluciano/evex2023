/** @jsx jsx */
import { css } from "@emotion/react";
import { colors } from './layout.styles'

export const funfact = css`
  padding: 0 0 100px !important;
  background-color: ${colors.primaryMain};
`;

export const numbers = css`
  background-color: ${colors.primaryMain};
  display: flex;
  border: 2px solid #fff;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  width: 100%;
  max-width: 1082px;
  margin: 0 auto;
 
  position: relative;

  & div{
    padding: 0 10px;

    &:nth-of-type(4){
      span:nth-of-type(1){
        padding-left: 0;
      }
    }
  }
    :after{
      z-index: -1;
      position: absolute;
      content: "";
      width: 100%;
      max-width: 1082px;
      display: block;
      border: 2px solid #fff;
      margin-top: 30px;
      margin-left: 30px;
      height: 80px;
    }
  
`;
export const element04 = css`
      position: absolute;
      right: -100px;
      top: -110px;
      z-index: -1; 

      @media (min-width: 768px) and (max-width: 1440px) {
        right: -70px;
  }
`

export const singleFunfact = css`
  position: relative;
  padding-top: 113px;
  font-family: 'bw_gradual_demobold';
&:nth-of-type(1){
  width: 22%;
}
&:nth-of-type(2){
  width: 32%;
}
&:nth-of-type(3){
  width: 15%;
}
  &:nth-of-type(4){
    width: 31%;
  }

  & h2 {
    font-size: 40px;
    line-height: 1;
    letter-spacing: 2.4px;
    font-weight: 300;
    color: #fff;
    margin: 0;

    span{
      padding-left: 10px;
    }
  }

  & h3 {
    text-transform: uppercase;
    font-size: 16px;
    line-height: 0.8;
    color: #aaaaaa;
    letter-spacing: 1.6px;
    margin: 0;
  }
`;

export const logoLight = css`
display: flex;
justify-content: center;
padding-top: 40px;
`
