/** @jsx jsx */
import { css } from "@emotion/react";
import { colors, colorsBr } from "../styles/layout.styles";

export const abAgency = css`
  background-color: #e3e3e2;
  position: relative;

  /* img{
    width: 100%;
  } */
  @media (min-width: 320px) and (max-width: 767px) {
    .container-fluid .row {
      display: flex;
      flex-direction: column-reverse;
    }
  }
  .natal_logo {
    position: absolute;
    right: 0;
    top: 32px;
  }
`;

export const pr79 = css`
  @media (min-width: 320px) and (max-width: 767px) {
    padding: 32px 0px;
    justify-content: flex-start;
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
  padding: 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  color: ${colors.secondaryMain};
  align-items: flex-start;

  h2 {
    color: #000;
    font-family: "bw_gradual_demomedium";
    /* text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 6px; */
    letter-spacing: 0;

    @media (min-width: 320px) and (max-width: 767px) {
      font-size: 54px;
    }
  }

  p {
    font-size: 16px;
    line-height: 23px;
    font-weight: 400;
    margin-bottom: 8px;
    letter-spacing: 0;
  }

  a {
    font-family: "bw_gradual_demomedium";
    :hover {
      font-weight: 600;
    }
    @media (min-width: 320px) and (max-width: 767px) {
      margin: 0 auto;
      z-index: 2;
    }
  }

  @media (min-width: 320px) and (max-width: 767px) {
    padding: 32px 12px;

    h2 {
      line-height: 68px;
    }
  }
`;

export const element01 = css`
  position: absolute;
  width: auto !important;
  top: 0;
  right: -15px;
`;

export const imgFull = css`
  width: 100%;
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

export const comoSeraContainer = css`
  background-color: #e3e3e2;
  overflow: hidden;

  .hero_container {
    padding: 32.5px 10px 31.5px;
    position: relative;

    h2 {
      color: #000;
      font-family: 'Bw Gradual DEMO';
      font-size: 140px;
      font-weight: bold;
      text-align: center;
      position: relative;
      z-index: 3;
      letter-spacing: 0;

      @media (min-width: 320px) and (max-width: 767px) {
        font-size: 40px;
        line-height: 48px;
      }
    }

    img {
      position: absolute;
      top: 0px;
      z-index: 2;
      max-width: 1046px;
      width: 100%;
    }
  }
`;

export const section = css`
  background-color: #e3e3e2;
  position: relative;
  padding-bottom: 40px;
  @media (min-width: 320px) and (max-width: 420px) {
    padding-bottom: 0px;
    }
    @media (min-width: 421px) and (max-width: 767px) {
      padding-bottom: 0px;
    }

  .eventSteps {
    .step {
      display: flex;

      &:nth-of-type(1) {
        background: radial-gradient(
          81.7% 260.32% at 95.86% 110.76%,
          #fd7912 0.06%,
          #f5b54c 39.52%,
          #e1e1e0 100%
        );
        &:hover {
          background: radial-gradient(
            81.7% 260.32% at 95.86% 110.76%,
            #f5b54c 0%,
            #fd7912 49.1%,
            #e1e1e0 100%
          );
        }
      }
      &:nth-of-type(2) {
        background: radial-gradient(
          82.68% 263.44% at 96.84% 120.25%,
          #8516fd 0.06%,
          #d373e0 37.65%,
          #e1e1e0 100%
        );
        &:hover {
          background: radial-gradient(
            82.68% 263.44% at 96.84% 120.25%,
            #d373e0 0%,
            #8516fd 49.1%,
            #e1e1e0 100%
          );
        }
      }
      &:nth-of-type(3) {
        background: radial-gradient(
          79.74% 254.08% at 93.9% 120.57%,
          #01f101 0%,
          #63cfbc 41.29%,
          #e1e1e0 100%
        );
        &:hover {
          background: radial-gradient(
            79.74% 254.08% at 93.9% 120.57%,
            #63cfbc 0%,
            #01f101 50.1%,
            #e1e1e0 100%
          );
        }
      }
      &:nth-of-type(4) {
        background: radial-gradient(
          81.25% 258.88% at 95.41% 108.54%,
          #ff03da 0.06%,
          #e93269 40.69%,
          #e1e1e0 100%
        );
        &:hover {
          background: radial-gradient(
            81.25% 258.88% at 95.41% 108.54%,
            #e93269 0%,
            #ff03da 47.6%,
            #e1e1e0 100%
          );
        }
      }

      padding: 16px 0;
      overflow: hidden;

      @media (min-width: 320px) and (max-width: 767px) {
        padding: 24px 0;
      }

      .icon {
        min-width: 200px;
        display: flex;
        justify-content: center;
        @media (min-width: 320px) and (max-width: 767px) {
          min-width: 100px;
          align-items: center;
        }
        img {
          margin-right: 16px;
          max-width: 100%;
          @media (min-width: 320px) and (max-width: 767px) {
            margin: 0;
            height: 52px;
          }
        }
      }

      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;

        h4 {
          font-family: 'Bw Gradual DEMO';
          font-weight: bold;
          font-size: 25px;
          @media (min-width: 320px) and (max-width: 767px) {
            font-size: 15px;
          }
        }
        P {
          color: #000;
          font-size: 15px;
          line-height: 20px;
          letter-spacing: 0;
          margin: 0;
          @media (min-width: 320px) and (max-width: 767px) {
            font-size: 10px;
            line-height: 12px;
          }
        }
      }
    }
  }
`;

export const bg = css`
  background: radial-gradient(
    76.58% 139.19% at 97.41% 97.62%,
    ${colorsBr.themeGreen} 3.05%,
    ${colorsBr.secondaryBlue} 49.44%,
    #e3e3e2 100%
  );
`;
export const reverse = css`
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;

export const header = css`
  /* background: radial-gradient(76.58% 139.19% at 97.41% 97.62%, ${colorsBr.themeGreen} 3.05%, ${colorsBr.secondaryBlue} 49.44%, #E3E3E2 100%); */
  /* padding: 58px 45px 58px 200px; */
  padding-block: 58px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (min-width: 320px) and (max-width: 420px) {
        a{
          font-size: 12px;
          line-height: 16.34px;
          padding: 10px;
        }
    }
      @media (min-width: 421px) and (max-width: 767px) {
        a{
          font-size:12px;
          line-height: 16.34px;
          padding: 10px;
        }
    }

  p {
    color: #000;
    line-height: 24px;
    font-size: 20px;
    letter-spacing: 0;
    max-width: 358px;
    margin-bottom: 24px;
     @media (min-width: 320px) and (max-width: 420px) {
        font-size: 12px;line-height: 16.34px;max-width:190px;
    }
      @media (min-width: 421px) and (max-width: 767px) {
        font-size: 12px;line-height: 16.34px;max-width:190px;
    }
  }

  .title_container {
    max-width: 384px;
    margin: 0 auto;

    .title {
      font-family: 'Bw Gradual DEMO';
      font-size: 56px;
      font-weight: bold;
      line-height: 54.2px;
      margin: 0;
      text-align: left;
      letter-spacing: 0;
      margin-bottom: 16px;

      @media (min-width: 320px) and (max-width: 420px) {
        font-size: 20px;line-height: 24.2px;
    }
      @media (min-width: 421px) and (max-width: 767px) {
        font-size: 20px;line-height: 24.2px;
    }
    }
  }

  a{
    display: inline-block;
    &:hover{
      text-decoration: none;
    }
    
  }
`;
