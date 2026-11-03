/** @jsx jsx */
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { FunfactData, LogoImage } from "@/data";
import PatternBig from "@/images/2026/pattern-big.svg"
import { jsx } from "@emotion/react";

import {
  funfact,
  singleFunfact,
  numbers,
  logoLight,
  element04
} from "../assets/styles/FunfactOne.styles";

import {
  commonSection
} from "../assets/styles/layout.styles";

const FunfactOne = () => {
  const [counter, setCounter] = useState({
    startCounter: false,
  });
  const onVisibilityChange = isVisible => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section css={[funfact,commonSection]}>
      <Container>
        <div css={numbers}>
          {FunfactData.map(({ title, countNumber }, index) => (
           
              <div key={index} css={singleFunfact} className="text-center">
                <h2>
                  {index === 3 && '+'}
                  <VisibilitySensor
                    onChange={onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                  >
                    
                    <CountUp duration={5} end={counter.startCounter ? countNumber : 0} />
                  </VisibilitySensor>
                   <span>{title}</span>
                </h2>
                {/* <h3></h3> */}
              </div>
          ))}
          
        </div>
       {/* <div css={logoLight}>
          <img src={LogoImage.cop30} />
       </div> */}

      </Container>
       <img src={PatternBig} className="patternBig" />
    </section>
  );
};

export default FunfactOne;
