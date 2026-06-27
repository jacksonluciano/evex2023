/** @jsx jsx */
import React from "react";
import { jsx } from '@emotion/react'
import { ExperienceGalleryData} from "@/data";

import { 
  imageCard
} from "../assets/styles-br/RememberEvexPreviousEdition.styles";

import EvexCustomSlider from "./EvexCustomSlider";

const RememberEvexPreviousEdition = () => {
  return (
    <EvexCustomSlider
      title={<h2>Reviva o EVEx Brasil 2025</h2>}
      description={<p>Confira alguns dos principais momentos da última edição.</p>}
      items={ExperienceGalleryData}
      slidesPerView={2.9}
      spaceBetween={12}
      renderItem={(item) => <img css={imageCard} src={item.img} alt="" />}
    />
  );
};

export default RememberEvexPreviousEdition