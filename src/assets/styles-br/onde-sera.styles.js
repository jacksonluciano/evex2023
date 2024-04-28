/** @jsx jsx */
import { css } from "@emotion/react";
import { colors, colorsBr } from "../styles/layout.styles";

export const abAgency = css`
  background-color: #e3e3e2;
  position: relative;
  padding: 120px 0 0;
  /* img{
    width: 100%;
  } */
  @media (min-width: 320px) and (max-width: 767px) {
    .container-fluid .row {
      display: flex;
      flex-direction: column-reverse;
    }
    padding: 40px 0 0;
  }
  .natal_logo {
    width: 172px;
    position: absolute;
    right: 0;
    top: 0px;
    z-index: 1;
    
    @media (min-width: 320px) and (max-width: 767px) {
      width: 34px;
      top: 434px;
    }
    @media (min-width: 768px) and (max-width: 1280px) {
      top: 85px;
        width: 130px;
    }
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
  padding-left: 16px;

  h2 {
    color: ${colors.primaryMain};
    font-family: "Bw Gradual DEMO";
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 6px;
    letter-spacing: 0;

    @media (min-width: 320px) and (max-width: 767px) {
      font-size: 54px;
    }
  }

  p {
    font-size: 16px;
    line-height: 21.79px;
    font-weight: 400;
    margin-bottom: 16px;
    letter-spacing: 0;
    color: #000;
    max-width: 411px;
    @media (min-width: 768px) and (max-width: 1280px) {
      font-size: 15px;
    line-height: 21px;
    }
  }

  a {
    background-color: #000;
    font-family: "Bw Gradual DEMO";
    @media (min-width: 320px) and (max-width: 767px) {
      /* margin: 0 auto; */
      z-index: 2;
    }
  }

  @media (min-width: 320px) and (max-width: 767px) {
    padding: 32px;

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
  position: relative;
  z-index: 3;
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

export const natalHeroContainer = css`
  background-color: #e3e3e2;
  overflow: hidden;

  .hero_container {
    padding-top: 32px;
    position: relative;

    @media (min-width: 320px) and (max-width: 767px) {
      padding: 32px 0;
    }

    h2 {
      color: #fff;
      font-family: "Bw Gradual DEMO";
      font-size: 140px;
      font-weight: bold;
      text-align: center;
      position: relative;
      z-index: 3;
      @media (min-width: 320px) and (max-width: 767px) {
        font-size: 40px;
      }
    }

    img {
      position: absolute;
      top: 0px;
      z-index: 2;
      max-width: 1046px;
      width: 100%;
      @media (min-width: 320px) and (max-width: 767px) {
        position: absolute;
        top: 50%;
        z-index: 2;
        width: 168%;
        left: 50%;
        transform: translate(-50%, -15%);
        max-width: auto;
      }
    }
  }
`;

export const section = css`
  position: relative;
`;

export const bg = css`
  background: radial-gradient(
    76.58% 139.19% at 97.41% 97.62%,
    ${colorsBr.themeGreen} 3.05%,
    ${colorsBr.secondaryBlue} 49.44%,
    #e3e3e2 132%
  );
  @media (min-width: 320px) and (max-width: 767px) {
    &:nth-of-type(2) {
      display: none;
    }
  }
`;

export const header = css`
  background: radial-gradient(
    76.58% 139.19% at 97.41% 97.62%,
    ${colorsBr.themeGreen} 3.05%,
    ${colorsBr.secondaryBlue} 49.44%,
    #e3e3e2 132%
  );
  /* padding: 58px 45px 58px 200px; */
  padding-block: 58px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (min-width: 320px) and (max-width: 767px) {
    padding-block: 38px;
  }

  .title_container {
    max-width: 589px;
    margin-right: 45px;

    .title {
      font-family: "Bw Gradual DEMO";
      font-size: 56px;
      font-weight: bold;
      line-height: 67.2px;
      margin: 0;
      text-align: left;
      letter-spacing: 0;

      @media (min-width: 320px) and (max-width: 767px) {
        font-size: 20px;
        line-height: 22px;
      }
      @media (min-width: 768px) and (max-width: 1280px) {
        font-size: 50px;
        line-height: 60.2px;
      }
    }
  }
`;

export const elem1 = css`
  position: absolute;
  left: -80px;
  bottom: -60px;
  @media (min-width: 320px) and (max-width: 767px) {
    position: absolute;
    left: -33px;
    bottom: -40px;
    width: auto;
    height: 202px;
  }
  @media (min-width: 768px) and (max-width: 1280px) {
    left: -34px;
    bottom: -52px;
    height: 300px;
  }
`;
export const elem2 = css`
  position: absolute;
  right: -16px;
  top: -88px;
  @media (min-width: 320px) and (max-width: 767px) {
    position: absolute;
    right: -15px;
    top: -29px;
    height: 194px;
  }
  @media (min-width: 768px) and (max-width: 1280px) {
    position: absolute;
    right: -16px;
    top: -60px;
    height: 377px;
  }
`;
export const vidSection = css`
  display: flex;
  justify-content: flex-end;

  div {
    width: 100%;
    max-width: 660px;
    @media (min-width: 768px) and (max-width: 1280px) {
      max-width: 612px;
    }
  }

  @media (min-width: 320px) and (max-width: 767px) {
    width: 86%;
    margin: 0 auto;
  }
`;
