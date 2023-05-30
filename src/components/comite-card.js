/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import {
  singleTM,
  tmImg,
  speakerInfo
} from "../assets/styles/Comite.styles";

const ComiteCard = ({ data }) => {
  const { image, name, description} = data;
  return (
    <div css={singleTM}>
      <div css={speakerInfo}>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
      <div css={tmImg}>
        <img src={image} alt={name} />
        {/* <div className="tm_overlay">
          <div className="team_social">
            {socials.map(({ name, url }, index) => (
              <a key={index} href={url}>
                <span>{name}</span>
              </a>
            ))}
          </div>
        </div> */}
      </div>
      {/* <div css={detailTM}>
        <h5>{name}</h5>
        <h6>{designation}</h6>
      </div> */}
    </div>
  );
};

export default ComiteCard;
