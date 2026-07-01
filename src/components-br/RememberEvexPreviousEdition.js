/** @jsx jsx */
import React from "react";
import { jsx } from '@emotion/react'
import { ExperienceGalleryData} from "@/data-br";

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
          0: {
            slidesPerView: 1,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 1,
          },
          1440: {
            slidesPerView: 2,
          }
        }}
        renderItem={(item) => <img css={imageCard} src={item.img} alt="" />}
        rootCss={sliderCss}
      />
    </section>
  );
};

export default RememberEvexPreviousEdition