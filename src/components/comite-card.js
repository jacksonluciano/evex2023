/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import {
  singleTM,
  tmImg,
  speakerInfo
} from "../assets/styles/Comite.styles";

const ComiteCard = ({ data }) => {
  const { image, name, description, line} = data;
  return (
    <div css={singleTM}>
      <div css={speakerInfo}>
        <h4>{name}</h4>
        <p>{description}</p>
        {line && <p>{line}</p>}
      </div>
      <div css={tmImg}>
        <img src={image} alt={name} />
      </div>
    </div>
  );
};

export default ComiteCard;
