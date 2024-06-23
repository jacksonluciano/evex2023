/** @jsx jsx */
import { css } from "@emotion/react";
import { colors } from "../styles/layout.styles";

export const abAgency = css`
  background-color: #e3e3e2;
  position: relative;
  overflow-x: clip;
`;

export const pr79 = css`
  /* padding-right: 79px; */

  @media (min-width: 320px) and (max-width: 767px) {
    padding-right: 15px;
    text-align: center;
  }
  @media (min-width: 768px) and (max-width: 990px) {
    padding-right: 15px;
  }
`;

export const mb45 = css`
  margin-bottom: 40px;
  @media (min-width: 768px) and (max-width: 990px) {
    margin-bottom: 30px;
  }
`;

export const about = css`
  position: relative;
  padding: 100px 60px 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  color: ${colors.secondaryMain};
  align-items: center;

  img {
    mix-blend-mode: multiply;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    padding: 100px 0px 00px;
  }

  h2 {
    color: #000000;
    font-family: "Bw Gradual DEMO";
    font-weight: bold;
    font-size: 25px;
    @media (min-width: 320px) and (max-width: 767px) {
    }
  }

  p {
    width: 100%;
    max-width: 920px;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    text-align: center;
  }
  button {
    font-family: "bw_gradual_demobold";
    font-size: 16px;
  }
  h4 {
    font-size: 25px;
    margin-bottom: 16px;
    text-align: center;
    font-family: "Bw Gradual DEMO";
    font-weight: bold;
  }

  .diamante {
    width: 100%;
    max-width: 980px;
    margin-bottom: 64px;
    h4{
      margin-bottom: 24px;
    }
    ul {
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (min-width: 320px) and (max-width: 767px) {
        flex-direction: column;
        li {
          margin-bottom: 8px;
        }
      }

      li {
        height: 140px;
        &.desktop{
          display: block;
        }
        &.mobile{
          display: none;
        }
        @media (min-width: 320px) and (max-width: 767px) {
          /* width: 50%; */
          height: 160px;

          &.mobile{
          display: block;
          height: 240px;
        }
          &.desktop{
          display: none;
        }
        }
        img {
          height: 100%;
          @media (min-width: 320px) and (max-width: 767px) {
            height: 100% !important;
            /* max-width: 80%; */
          }
        }
      }
    }
  }

  .platina {
    width: 100%;
    max-width: 980px;
    margin-bottom: 80px;
    h4{
      margin-bottom: 24px;
    }
    ul {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (min-width: 320px) and (max-width: 767px) {
        /* display: inline; */
      }

      li {
        height: 150px;
        @media (min-width: 320px) and (max-width: 767px) {
          /* width: 50%; */
          height: 160px;
        }
        img {
          height: 100%;
          @media (min-width: 320px) and (max-width: 767px) {
            height: 100% !important;
            /* max-width: 80%; */
          }
        }
      }
    }
  }

  .ouro {
    width: 100%;
    max-width: 980px;
    margin-bottom: 80px;
    h4{
      margin-bottom: 24px;
    }
    ul {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 28px;

      @media (min-width: 320px) and (max-width: 767px) {
        display: inline;
      }

      li {
        height: 100px;
        @media (min-width: 320px) and (max-width: 767px) {
          margin-bottom: 16px;
          height: 100px;
        }
        img {
          height: 100%;
          @media (min-width: 320px) and (max-width: 767px) {
            height: 100% !important;
            max-width: 80%;
          }
        }
      }
    }
  }

  .prata {
    width: 100%;
    max-width: 980px;
    margin-bottom: 32px;
    h4{
      margin-bottom: 24px;
    }
    ul {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (min-width: 320px) and (max-width: 767px) {
        flex-wrap: wrap;
        margin-bottom: 0px !important;
      }

      li {
        padding: 0 16px;
        height: 42px;

        /* :nth-of-type(1) img {
          height: 68px;
        }
        :nth-of-type(2) img {
          height: 62px;
        } */

        :nth-of-type(3) img,
        :nth-of-type(4) img {
          /* height: 42px; */
        }

        @media (min-width: 320px) and (max-width: 767px) {
          width: 100%;
          height: 40px;
          margin-bottom: 24px;
        }
        img {
          height:100%;

          @media (min-width: 320px) and (max-width: 767px) {
            height: 100% !important;
          }
        }
      }

      :nth-of-type(1){
        margin-bottom:24px;
      }
      :nth-of-type(2){
        li{
          height: 58px;
        }
        
        @media (min-width: 320px) and (max-width: 767px) {

         li{          
          :nth-of-type(1){
            width: 30%;
          }
          :nth-of-type(2){
            width: 70%;
          }
         }
        }
      }
    }
  }

  .bronze {
    width: 100%;
    max-width: 980px;
    /* margin-bottom: 140px; */
    ul {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 16px;

      @media (min-width: 320px) and (max-width: 767px) {
        flex-wrap: wrap;
      }

      li {
        padding: 0 16px;

        :nth-of-type(2) img {
          height: 72px;
        }
        :nth-of-type(3) img {
          height: 42px;
        }
        :nth-of-type(4) img {
          height: 42px;
        }
        :nth-of-type(5) img {
          height: 22px;
        }
        :nth-of-type(6) img {
          height: 86px;
        }

        @media (min-width: 320px) and (max-width: 767px) {
          width: 33.3%;
          padding: 8px;
          float: left;

          &:nth-of-type(2){
            width:50%;
          }
        }
        img {
          height: 50px;

          @media (min-width: 320px) and (max-width: 767px) {
            max-width: 100%;
            height: auto !important;
          }
        }
      }
      :nth-of-type(2){
      li{
        img{
          height: 25px;
        }
      }
      @media (min-width: 320px) and (max-width: 767px) {
        flex-direction: column;
        gap: 16px;
        li{
          width: 100%;
          max-width: 300px;
          :nth-of-type(2){
            img{
              height: 28px !important;
            }
          }
        }
      }
      }
    }
  }

  .apoio {
    width: 100%;
    max-width: 980px;
    margin-bottom: 40px;
    position: relative;
    ul {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (min-width: 320px) and (max-width: 767px) {
        display: inline;
      }

      li {
        margin: 10px;
        width: 120px;

        @media (min-width: 320px) and (max-width: 767px) {
          width: 20%;
          padding: 2px;
          float: left;
          margin: 0;
        }
        /* img{
                height: 48px;
            } */
      }
    }
  }
`;
export const realization = css`
  width: 100%;
  max-width: 980px;
  margin: 0 auto 40px;

  div div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  h4 {
    margin-bottom: 16px;
    text-decoration: underline;
  }

  img {
    width: 100%;
    max-width: 256px;
  }
`;

export const element11 = css`
  position: absolute;
  width: 300px !important;
  top: 280px;
  left: -15px;
  z-index: 0;
  transform: rotate(180deg);
  @media (min-width: 320px) and (max-width: 420px) {
    right: auto;
    left: -12px;
    width: 63px !important;
    top: 283px;
  }
  @media (min-width: 420px) and (max-width: 767px) {
    left: -18px;
    width: 90px !important;
    top: 120px;
    z-index: 1;
  }
  @media (min-width: 768px) and (max-width: 1440px) {
    left: 0px;
  }
`;

export const element12 = css`
  position: absolute;
  width: 300px !important;
  top: 1154px;
  right: 0px;
  z-index: 1;
  @media (min-width: 320px) and (max-width: 420px) {
    right: -13px;
    width: 77px !important;
    top: 490px;
  }
  @media (min-width: 421px) and (max-width: 767px) {
    right: 0;
    width: 100px !important;
    top: 650px;
  }
  @media (min-width: 768px) and (max-width: 1440px) {
    right: 0px;
  }
`;

export const element13 = css`
  display: none;
  position: absolute;
  width: auto !important;
  right: -15px;
  top: 1040px;
  z-index: 0;
  @media (min-width: 320px) and (max-width: 420px) {
    display: block;
    width: 90px !important;
    top: 1212px;
    left: -16px;
    z-index: 99;
    transform: scaleX(-1);
  }
  @media (min-width: 421px) and (max-width: 767px) {
    display: block;
    width: 100px !important;
    top: 1328px;
    left: -20px;
    z-index: 99;
    transform: scaleX(-1);
  }
`;

export const imgFull = css`
  width: 100%;
`;

export const titleHero = css`
  div {
    background: radial-gradient(
      76.58% 213.19% at 97.41% 97.62%,
      #fe05c5 3.05%,
      #ef2483 35.31%,
      #e3e3e2 100%
    );

    .px-0 {
      padding: 60px 0;

      @media (min-width: 320px) and (max-width: 767px) {
        &:nth-of-type(1),
        &:nth-of-type(3) {
          display: none;
        }
        padding: 24px 0;
      }
    }

    h2 {
      margin: 0;
      font-family: "Bw Gradual DEMO";
      font-weight: bold;
      font-size: 78px;
      @media (min-width: 320px) and (max-width: 767px) {
        font-size: 40px;
      }
    }

    &:nth-of-type(2) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const abImg = css`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;

  &:nth-child(2) {
    position: relative;
    top: 30px;
    margin-top: 0;
    &:after {
      @media (min-width: 768px) and (max-width: 990px) {
        width: 350px;
        left: 15px;
      }
    }
  }

  & img {
    max-width: 100%;
    height: auto;
    -webkit-box-shadow: -2px 4px 30px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: -2px 4px 30px 0px rgba(0, 0, 0, 0.3);
    box-shadow: -2px 4px 30px 0px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 320px) and (max-width: 767px) {
    position: relative;
    margin: 50px 0 0;
    &:after {
      display: none;
    }
  }
  @media (min-width: 768px) and (max-width: 990px) {
    position: relative;
    float: right;
    right: -5px;
  }
`;
