/** @jsx jsx */
import { css } from "@emotion/react";
import { colorsBr } from "../styles/layout.styles";
import BgImage from "../images-br/agenda/bg-orange.svg";
import styled from "@emotion/styled"
import heroSectionDividerSVG from '@/images-br/2026/hero-section-divider.svg'

export const sectionHero = css`
  margin-top: 87px;
  background-color: ${colorsBr.evex2026PrimaryOrange };

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
  @media (min-width: 320px) and (max-width: 420px) {
    .title_container {
      padding: 40px 0px;
      .title {
        font-size: 32px;
      }
    }
    }
    @media (min-width: 421px) and (max-width: 767px) {
      .title_container {
      padding: 40px 0px;
      .title {
        font-size: 40px;
      }
    }
    }
`;

export const informations = css`
  align-items: center;
  background-color: ${colorsBr.evex2026PrimaryOrange };
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: relative;

  .element01 {
    position: absolute;
    top: -140px;
    left: 0;
    @media (min-width: 320px) and (max-width: 768px) {
      width: 110px;
      top: 0px;
    }
  }

  .element02 {
    position: absolute;
    bottom: 0;
    right: 0;

    @media (min-width: 320px) and (max-width: 768px) {
      width: 110px;
      top: 144px;
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
    /* gap: 50px; */
    /* height: fit-content; */
    margin-bottom: 16px;
    position: relative;
    z-index: 2;
    width:100%;

    .data_info {
      background: ${colorsBr.evex2026PrimaryBlue};
      display: flex;
      flex-direction: column;
      justify-content: center;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      width: 50%;

      &:hover {
        a {
          text-decoration: none;
        }
      }

      a {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        padding: 16px 0 16px 20%;
        height: 100%;
        justify-content: center;
        position: relative;

        @media (min-width: 320px) and (max-width: 768px) {
          padding: 16px;

          p{
            text-align: left;
            font-size: 14px !important;
            text-align: left;
            line-height: 22px;
          }
        }

        p {
             color: ${colorsBr.evex2026CreamYellow};
             font-weight: 400 !important;
             margin: 0 !important;
             opacity: 0.5;transition: all 0.3s ease-in-out;
          }

        h3{
          color: ${colorsBr.evex2026CreamYellow};
          font-family: "Bw Gradual DEMO";
            font-weight: bold;
            font-size:20px;
            margin: 0;
            line-height: 120%;
            opacity: 0.5;transition: all 0.3s ease-in-out;
        }

        &.selected {
           background-color: ${colorsBr.evex2026PinkBright};
          background-position: bottom;
          background-repeat: no-repeat;
          background-size: cover;

          &:after{
            transform: translateX(-50%);
            content: "";
            position: absolute;
            height: 6px;
            width: 95%;
            background-color: #004D93;
            bottom: -6px;
            left: 50%;
          }

          h3{
            opacity: 1;
          }

          p {
             color: ${colorsBr.evex2026CreamYellow};
             font-weight: 500;
             margin: 0;
             opacity: 1;
          }
        }
      }

      p {
        color: #ffffff;
        font-family: "Bw Gradual DEMO";
        font-weight: 400;
        margin: 0;
        transition: color 0.3s ease-in-out;

        &:first-of-type {
          font-size: 20px;
          font-weight: 400;
          line-height: 24px;
          margin-bottom: 10px;
        }

        &:last-of-type {
          font-size: 25px;
          font-weight: 700;
          line-height: 30px;
        }
      }

      &:hover {
        /* background: radial-gradient(79.29% 73.96% at 97.41% 97.62%, ${colorsBr.themeRed} 3.05%, ${colorsBr.secondaryYellow} 57.43%, #E3E3E2 100%); */
        background-color: ${colorsBr.evex2026PinkBright};
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: cover;

        h3,p{
          opacity: 1;
        }
      }
    }
  }

  @media (max-width: 660px) {
    .data_container {
      flex-direction: column;
      /* gap: 30px; */
       @media (max-width: 576px) {
        flex-direction: row;
       }
    }
  }

  @media (max-width: 576px) {
    padding: 0px;

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
  @media (min-width: 320px) and (max-width: 420px) {
    p {
      font-size: 16px;
      max-width: 180px;
    }
    }
    @media (min-width: 421px) and (max-width: 767px) {
      p {
      font-size: 16px;
      max-width: 180px;
    }
    }
`;


export const seventhEditionBannerSection = css`
  position: relative;
  margin-top: 0px;
  width: 100%;
  background-color: ${colorsBr.evex2026PrimaryBlue};
  padding: 8px 0 28px 168px;
  display: flex;
  justify-content: space-around;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 8px;
    width: 100%;
    height: 40px;
    background-color: ${colorsBr.evex2026PrimaryBlue};
    background-image: url(${heroSectionDividerSVG});
    background-repeat: repeat-x;
    background-position: center bottom;
    background-size: auto 32px;
    z-index: 2;
    pointer-events: none;
  }
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 240px;
    width: 100%;
    height: 40px;
    background-color: ${colorsBr.evex2026PrimaryBlue};
    background-image: url(${heroSectionDividerSVG});
    background-repeat: repeat-x;
    background-position: center bottom;
    background-size: auto 32px;
    z-index: 2;
    pointer-events: none;
    display: none;
    @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 0px;
    display: block;
  }
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 0px;
  }
`

export const EditionDescription = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  justify-content: center;
  text-align: center;
  position: relative;
  
  .event_edition, .event_name, .event_description {
    font-family: "Bw Gradual DEMO";

    color: ${colorsBr.evex2026TextColorYellow};
    line-height: 120%;
    margin: 0px
  }
  .event_edition {
    font-weight: 500;
    font-size: 12px;

  };
  .event_name {
    font-weight: 700;
    font-size: 72px;
    /* width: 320px; */
    margin-bottom: 8px;

     @media (max-width: 425px) {
      font-size: 36px;
     }
  };
  .event_description {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    padding: 28px 32px;
    max-width: unset;
    margin: 0px auto;
    min-height: 600px;
    .event_description {
      max-width: 400px;
    }
  }
  @media (max-width: 425px) {
    padding: 28px 24px;
    margin: 0 auto;
    max-width: 100%;
    min-height: auto;
    .event_name {
      font-size: 36px;
    };
    .event_description {
      width: 315px;
    } 
  }
  @media (max-width: 375px) {
    margin: 0;
  }

`
export const RedBalloonWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  margin-inline: auto;
`

export const bannerWrapper = css`
  @media (max-width: 768px) {
    width: 100%;
    height: 258px;
    position: relative;
    &::after {
      content: '';
      /* position: absolute; */
      left: 0;
      bottom: 0;
      width: 100%;
      height: 40px;
      background-color: ${colorsBr.evex2026PrimaryBlue};
      background-image: url(${heroSectionDividerSVG});
      background-repeat: repeat-x;
      background-position: center bottom;
      background-size: auto 32px;
      z-index: 2;
      pointer-events: none;
    }
  }
`

export const bannerStyle = css`
  /* width: 910px;
  height: 317px; */
  @media (max-width: 768px) {
    width: 425px;
    height: 258px;
  }
  @media (max-width: 375px) {
    width: 375px;
    height: 258px;
  }
`

export const birdStyle = css`
    position: absolute;
    left: -122px;
    top: 12px;

    @media (max-width: 768px) {
    display: none;
  }

`

export const redBallon = css`
  width: 350px;
  height: 80px;
  margin: 28px 0px 20px 0px;
  position: absolute;
  left: -16px;
  @media (max-width: 768px) {
    width: 365px;
  }
`

export const buyTicketWrapper = css`
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: center;
  }
`

export const buyTicketLink = css`
  width: 310px;
  border-radius: 16px;
  background-color: ${colorsBr.evex2026PrimaryOrange};
  padding: 13px 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  p {
    color: ${colorsBr.evex2026DarkOrange};
    font-weight: 700;
    font-size: 16px;
    margin: 0;
  }

  &:hover,&:focus,&:visited,&:active {
    text-decoration: none;
  }
  &:hover p,&:focus p,&:visited p,&:active p {
    color: ${colorsBr.evex2026DarkOrange};
  }
`
export const mobileHour = css`
  width: 310px;
  border-radius: 16px;
  background-color: ${colorsBr.evex2026PrimaryBlue};
  padding: 13px 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  p {
    color: ${colorsBr.evex2026DarkOrange};
    font-weight: 700;
    font-size: 16px;
    margin: 0;
  }

  &:hover,&:focus,&:visited,&:active {
    text-decoration: none;
  }
  &:hover p,&:focus p,&:visited p,&:active p {
    color: ${colorsBr.evex2026DarkOrange};
  }
`