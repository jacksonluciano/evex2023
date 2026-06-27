/** @jsx jsx */
import { css } from "@emotion/react";
import { colors, colorsBr } from "../styles/layout.styles";
import styled from "@emotion/styled"
import heroSectionDividerSVG from '@/images-br/2026/hero-section-divider.svg'


export const redBallon = css`
  width: 350px;
  height: 80px;
  margin: 28px 0px 20px 0px;
  position: absolute;
  left: -16px;
`

export const buyTicketLink = css`
  width: 310px;
  height: 45px;
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
export const EditionDescription = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  max-width: 350px;
  
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
    font-weight: 800;
    font-size: 46px;
    width: 320px;
    margin-bottom: 8px;
  };
  .event_description {
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 10px;
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
`

export const bannerStyle = css`
  width: 910px;
  height: 515px;
`

export const seventhEditionBannerSection = css`
  position: relative;
  margin-top: 120px;
  width: 100%;
  height: 600px;
  background-color: ${colorsBr.evex2026PrimaryBlue};
  padding: 44px 0 32px 168px;
  display: flex;
  justify-content: space-around;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 42px;
    background-color: ${colorsBr.evex2026PrimaryBlue};
    background-image: url(${heroSectionDividerSVG});
    background-repeat: repeat-x;
    background-position: center bottom;
    background-size: auto 40px;
    z-index: 2;
    pointer-events: none;
  }
`
