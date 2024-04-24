/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import {
  singleTM,
  tmImg,
  speakerInfo
} from "../assets/styles-br/comite-card.styles";

const TeamCard = ({ data }) => {
  const { image, name, designation, place, socials } = data;
  return (
    <div css={singleTM}>     
      <div css={tmImg}>
        <img src={image} alt={name} />
      </div>
      <div css={speakerInfo}>
        <h4>{name}</h4>
        <p>{designation}<span>{place}</span></p>
      </div>
    </div>
  );
};

export default TeamCard;
