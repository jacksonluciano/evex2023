/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import {
  singleTM,
  tmImg,
  speakerInfo
} from "../assets/styles-br/comite-card.styles";

const TeamCard = ({ data }) => {
  const { image, name, designation, url, socials } = data;
  return (
    <div css={singleTM}>
      <div css={speakerInfo}>
        <h4>{name}</h4>
        <p>{designation}</p>
      </div>
      <div css={tmImg}>
        <img src={image} alt={name} />
      </div>
    </div>
  );
};

export default TeamCard;
