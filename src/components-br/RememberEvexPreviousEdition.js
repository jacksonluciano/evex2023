/** @jsx jsx */
import React from "react";
import { jsx } from '@emotion/react'
import { ExperienceGalleryData} from "@/data";

import { 
  imageCard,
  sliderCss
} from "../assets/styles-br/RememberEvexPreviousEdition.styles";

import EvexCustomSlider from "./EvexCustomSlider";

const RememberEvexPreviousEdition = () => {
  return (
    <section>
      <EvexCustomSlider
        title={<h2>Reviva o EVEx Brasil 2025</h2>}
        description={<p>Confira alguns dos principais momentos da última edição.</p>}
        items={ExperienceGalleryData}
        breakpoints={{
          425: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1440: {
            slidesPerView: 2,
            spaceBetween: 12,
          }
        }}
        renderItem={(item) => <img css={imageCard} src={item.img} alt="" />}
        rootCss={sliderCss}
      />
    </section>
  );
};

export default RememberEvexPreviousEdition