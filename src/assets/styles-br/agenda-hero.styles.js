/** @jsx jsx */
import { css } from "@emotion/react";
import { colorsBr } from "../styles/layout.styles";
import BgImage from "../images-br/agenda/bg-orange.svg";

export const sectionHero = css`
  margin-top: 96px;

  @media (min-width: 768px) and (max-width: 1280px) {
    margin-top: 86px;
  }

  .title_container {
    background: radial-gradient(
      38.02% 147.96% at 50% 100%,
      ${colorsBr.themeRed} 3.05%,
      ${colorsBr.secondaryYellow} 57.43%,
      #e3e3e2 100%
    );
    padding: 32px 0 14px;

    .title {
      color: #ffffff;
      font-family: "Bw Gradual DEMO";
      font-weight: bold;
      font-size: 100px;
      margin-bottom: 0;
      text-align: center;
    }
  }

  @media (max-width: 992px) {
    .title_container {
      .title {
        font-size: 70px;
      }
    }
  }

  @media (max-width: 768px) {
    .title_container {
      .title {
        font-size: 60px;
      }
    }
  }

  @media (max-width: 576px) {
    .title_container {
      padding: 20px 0px;
      .title {
        font-size: 45px;
      }
    }
  }
`;

export const informations = css`
  align-items: center;
  background-color: #e3e3e2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding: 126px 0 83px;
  position: relative;

  .element01 {
    position: absolute;
    top: -140px;
    left: 0;
    @media (min-width: 320px) and (max-width: 768px) {
      width: 110px;
      top: 0;
    }
  }

  .element02 {
    position: absolute;
    bottom: 0;
    right: 0;

    @media (min-width: 320px) and (max-width: 768px) {
      width: 110px;
      top: 100px;
    }
  }

  p {
    color: #000000;
    font-family: "Bw Gradual DEMO";
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    margin: 0;
    position: relative;
    text-align: center;
    z-index: 2;
  }

  .data_container {
    display: flex;
    gap: 50px;
    /* height: fit-content; */
    margin-bottom: 80px;
    position: relative;
    z-index: 2;

    .data_info {
      align-items: center;
      background: #000000;
      display: flex;
      flex-direction: column;
      justify-content: center;
      transition: all 0.3s ease-in-out;
      cursor: pointer;

      &:hover {
        a {
          text-decoration: none;
        }
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 294px;
        height: 186px;
        &.selected {
          background: url(${BgImage});
          background-position: bottom;
          background-repeat: no-repeat;
          background-size: cover;

          p {
            color: #000000;
          }
        }
      }

      p {
        color: #ffffff;
        font-family: "Bw Gradual DEMO";
        font-weight: bold;
        margin: 0;
        transition: color 0.3s ease-in-out;

        &:first-of-type {
          font-size: 20px;
          font-weight: 400;
          line-height: 24px;
          margin-bottom: 10px;
          text-align: center;
        }

        &:last-of-type {
          font-size: 25px;
          font-weight: 700;
          line-height: 30px;
          text-align: center;
        }
      }

      &:hover {
        /* background: radial-gradient(79.29% 73.96% at 97.41% 97.62%, ${colorsBr.themeRed} 3.05%, ${colorsBr.secondaryYellow} 57.43%, #E3E3E2 100%); */
        background: url(${BgImage});
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: cover;

        p {
          color: #000000;
        }
      }
    }
  }

  @media (max-width: 660px) {
    .data_container {
      flex-direction: column;
      gap: 30px;
    }
  }

  @media (max-width: 576px) {
    padding: 60px 0px;

    p {
      font-size: 16px;
    }

    .data_container {
      .data_info {
        p:first-of-type {
          font-size: 18px;
        }

        p:last-of-type {
          font-size: 23px;
        }
      }
    }
  }
`;
