/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import {
  singleTM,
  tmImg,
  speakerInfo
} from "../assets/styles/TeamCarousel.styles";

const TeamCard = ({ data }) => {
  const { image, name, designation, url, socials } = data;
  return (
    <div css={singleTM}>
      <div css={speakerInfo}>
        <h4>Élbia Gannoum</h4>
        <p>CEO, ABEEólica - Associação Brasileira de Energia Eólica 88</p>
      </div>
      <div css={tmImg}>
        <img src={image} alt={name} />
      </div>
    </div>
  );
};

export default TeamCard;
