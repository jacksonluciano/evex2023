/** @jsx jsx */
import { css } from "@emotion/react";
import { colorsBr } from "../styles/layout.styles";

export const div = css`
  background: radial-gradient(
    110.9% 244.62% at 110.9% 139.19%,
    #ff4001 3.05%,
    #e4a939 36.48%,
    #e3e3e2 100%
  );
  height: 111px;
  padding-inline: 0px;
`;

export const bgColumnTitle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 0px;
`;

export const bgColumn = css`
  background: radial-gradient(
    115.74% 169.23% at 115.74% 124.86%,
    #ff4001 3.05%,
    #e4a939 44.49%,
    #e3e3e2 100%
  );
`;

export const agendaTitle = css`
    background-color: #004D93;
    border-radius: 16px;
    width: 100%;
    display: flex;
    padding: 8px 16px;
    align-items: center;
    color: ${colorsBr.evex2026CreamYellow};
    height: 96px;

    span{
      font-family: "Bw Gradual DEMO";
      font-size: 24px;
      color: ${colorsBr.evex2026CreamYellow};
      font-weight: 500;

      &:first-of-type{
        margin-right: 24px;
      }
    }
  h2 {
    font-family: "Bw Gradual DEMO";
    font-weight: bold;
    font-size: 56px;
    line-height: 67.2px;
    letter-spacing: 0;
    margin-bottom: 0;
    color: ${colorsBr.evex2026CreamYellow};
  }

  h3 {
     font-family: "Bw Gradual DEMO";
    font-size: 24px;
    font-weight: 700;
    line-height: 120%;
    text-align: left;
    letter-spacing: 0;
    color: ${colorsBr.evex2026CreamYellow};
    margin: 0;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 40px;
    }

    h3 {
      font-size: 20px;
    }
  }
`;

export const pinkBreak = css`
  background: ${colorsBr.evex2026PinkBright};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 16px 49px;
  border-radius: 16px;
  margin-bottom: 16px;

  span{
    font-family: "Bw Gradual DEMO";
    font-size: 24px;
    font-weight: 500;
    color: #000;
  }
`;

export const timeBlock = css`
  background: ${colorsBr.evex2026CreamYellow};
  display: flex;
  border-radius: 16px;
  overflow: hidden;
  height: 100%;
  width: 100%;
 

  .hour{
     width: 146px;
    background: ${colorsBr.evex2026PrimaryBlue};
  
    color: ${colorsBr.evex2026CreamYellow};
    font-family: "Bw Gradual DEMO";
    font-size: 24px;
    text-align: center;
    padding: 16px 0;
    font-weight: 500;
  }
`;

export const container = css`
  background: ${colorsBr.evex2026PrimaryOrange};
  display: flex;
  justify-content: center;
`;

export const schedule = css`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 80px 0;
  max-width: 740px;

  @media (max-width: 768px) {
    padding-inline: 10px;
  }

  @media (max-width: 576px) {
    padding-inline: 16px;
  }
`;

export const title = css`
  color: #000000;
  font-size: 20px;
  font-weight: 700;
  line-height: 27.24px;
  margin: 0;
  text-align: left;
  text-transform: uppercase;

  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

export const event = css`
  align-items: center;
  display: flex;
  gap: 8px;

  span {
    background: #000000;
    color: #ffffff;
    display: block;
    font-family: "Bw Gradual DEMO";
    font-weight: bold;
    font-size: 16px;
    line-height: 19.2px;
    padding: 8.5px 7.5px;
    text-align: left;
  }

  p {
    color: #000000;
    font-size: 20px;
    font-weight: 400;
    /* line-height: 27.24px; */
    margin: 0;
    text-align: left;
  }

  @media (max-width: 576px) {
    span {
      font-size: 14px;
    }

    p {
      font-size: 18px;
    }
  }
`;

export const principalEvent = css`
  align-items: center;
  display: flex;
  /* gap: 8px; */

  span {
    background: #000000;
    color: #ffffff;
    display: block;
    font-family: "Bw Gradual DEMO";
    font-weight: bold;
    font-size: 16px;
    line-height: 19.2px;
    padding: 8.5px 7.5px;
    text-align: left;
  }

  p {
    background: radial-gradient(
      110.43% 948.02% at 104.65% 147.87%,
      #ff4001 3.05%,
      #e4a939 57.43%,
      #e3e3e2 100%
    );
    color: #000000;
    font-size: 20px;
    font-weight: 700;
    /* line-height: 27.24px; */
    margin: 0;
    padding: 4.5px 10px;
    text-align: left;
    text-transform: uppercase;
  }

  @media (max-width: 576px) {
    span {
      font-size: 14px;
    }

    p {
      font-size: 18px;
    }
  }
`;

export const principalEventDescription = css`
  color: #000000;
  font-size: 20px;
  font-weight: 400;
  line-height: 27.24px;
  margin: 11.5px 0 0;
  padding-left: 76px;
  text-align: left;

  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

export const eventTypeTitle = css`
  font-size: 20px;
  font-weight: 400;
  line-height: 27.24px;
  margin: 0;
  padding-left: 76px;
  text-align: left;
  text-transform: uppercase;

  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

export const content = css`
  position: relative;
  padding-bottom: 200px;
  background-color: ${colorsBr.evex2026PrimaryOrange};
  overflow-x: clip;
  @media (min-width: 320px) and (max-width: 768px) {
    padding-bottom: 32px;
  }
  section {
    display: none;
  }
`;
export const imgOrange = css`
  position: absolute;
  width: 100%;
  bottom: 0;
  @media (min-width: 320px) and (max-width: 768px) {
    display: none;
  }
`;
export const element1 = css`
  position: absolute;
  top: 30px;
  left: -250px;
  @media (min-width: 320px) and (max-width: 768px) {
    display: none;
  }
`;
export const element2 = css`
  position: absolute;
  top: 900px;
  right: -250px;
  @media (min-width: 320px) and (max-width: 420px) {
    top: 16px;
    width: 100px;
    right: -40px;
  }
  @media (min-width: 421px) and (max-width: 768px) {
    top: 16px;
    width: 100px;
    right: -40px;
  }
`;
export const element3 = css`
  position: absolute;
  top: 1600px;
  left: -250px;
  @media (min-width: 320px) and (max-width: 420px) {
    top: auto;
        width: 100px;
        left: -40px;
        bottom: 10px;
  }
  @media (min-width: 421px) and (max-width: 768px) {
    top: auto;
        width: 100px;
        left: -40px;
        bottom: 10px;
  }
`;
export const element4 = css`
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  position: absolute;
  top: 24px;
  right: -150px;
  @media (min-width: 320px) and (max-width: 420px) {
    top: 16px;
    width: 100px;
    right: -40px;
  }
  @media (min-width: 320px) and (max-width: 768px) {
    top: 16px;
    width: 100px;
    right: -40px;
  }
`;

export const element5 = css`
  position: absolute;
  bottom: 40px;
  left: -250px;
  @media (min-width: 320px) and (max-width: 420px) {
    top: auto;
        width: 100px;
        left: -40px;
        bottom: 10px;
  }
  @media (min-width: 320px) and (max-width: 768px) {
    top: auto;
        width: 100px;
        left: -40px;
        bottom: 10px;
  }
`;

export const participantsContainer = css`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .participant {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-left: 76px;

    p {
      color: #000000;
      font-size: 16px;
      line-height: 21.79px;
      margin: 0;
      text-align: left;
    }

    &_name {
      font-weight: 700;
    }

    &_role {
      font-weight: 400;
    }
  }

  @media (max-width: 576px) {
    .participant {
      p {
        font-size: 15px;
      }
    }
  }
`;

export const under = css`
 text-decoration: underline;
 padding-left: 76px;
 margin: 16px 0 8px 0 !important;

`;
