/** @jsx jsx */
import { css } from '@emotion/react'

export const div = css`
  background: radial-gradient(110.9% 244.62% at 110.9% 139.19%, #FF4001 3.05%, #E4A939 36.48%, #E3E3E2 100%);
  height: 111px;
  padding-inline: 0px;
`

export const bgColumnTitle = css`
  background: radial-gradient(110.9% 244.62% at 110.9% 139.19%, #FF4001 3.05%, #E4A939 36.48%, #E3E3E2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 0px;
`

export const bgColumn = css`
  background: radial-gradient(115.74% 169.23% at 115.74% 124.86%, #FF4001 3.05%, #E4A939 44.49%, #E3E3E2 100%);
`

export const agendaTitle = css`

  h2 {
    font-family: 'bw_gradual_demobold';
    font-size: 56px;
    font-weight: 700;
    line-height: 67.2px;
  }

  h3 {
    font-size: 25px;
    font-weight: 400;
    line-height: 34.05px;
    text-align: left
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 40px;
    }

    h3 {
      font-size: 20px;
    }
  }
`

export const container = css`
  background: #e3e3e2;
  display: flex;
  justify-content: center;
`

export const schedule = css`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 80px 0;
  max-width: 690px;

  @media (max-width: 768px) {
    padding-inline: 10px;
  }

  @media (max-width: 576px) {
    padding-inline: 16px;
  }
`

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
`

export const event = css`
  align-items: center;
  display: flex;
  gap: 8px;

  span {
    background: #000000;
    color: #ffffff;
    display: block;
    font-family: 'bw_gradual_demobold';
    font-size: 16px;
    font-weight: 700;
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
`

export const principalEvent = css`
  align-items: center;
  display: flex;
  /* gap: 8px; */

  span {
    background: #000000;
    color: #ffffff;
    display: block;
    font-family: 'bw_gradual_demobold';
    font-size: 16px;
    font-weight: 700;
    line-height: 19.2px;
    padding: 8.5px 7.5px;
    text-align: left;
  }

  p {
    background: radial-gradient(110.43% 948.02% at 104.65% 147.87%, #FF4001 3.05%, #E4A939 57.43%, #E3E3E2 100%);
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
`

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
`

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
`

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
`
