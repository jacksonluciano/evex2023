/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx } from '@emotion/react'
import { Link } from "gatsby";
import homePurple from '@/images-br/home-purple.jpg';
import homeBlue from '@/images-br/home-blue.jpg';
import homeYellow from '@/images-br/home-yellow.jpg';

import { 
    homeBg,
  bannerContent,
  Buttons
}  from '../assets/styles-br/Home.styles'

/** @jsx jsx */
import { css } from "@emotion/react";



const Home = ({ title, name }) => {

  const [backgroundImage, setBackgroundImage] = useState(homePurple);
  const [backgroundTextTop, setBackgroundTextTop] = useState('#ffffff');
  const [backgroundTextBottom, setBackgroundTextBottom] = useState('#000000');

  const homeBg = css`
  position: relative;
  background: url(${backgroundImage}) no-repeat center center / cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-image 0.9s ease;

  @media (min-width: 320px) and (max-width: 767px) {
    background: url(${backgroundImage}) no-repeat top left 14% / cover;
    }
`;

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage((prevImage) => {
        if (prevImage === homePurple) return homeBlue;
        if (prevImage === homeBlue) return homeYellow;
        return homePurple;
      });

      setBackgroundTextTop((prevColor) => {
        if (prevColor === '#ffffff') return '#000000';
        if (prevColor === '#000000') return '#ffffff';
        return '#ffffff';
      });

      setBackgroundTextBottom((prevColor) => {
        if (prevColor === '#000000') return '#ffffff';
        if (prevColor === '#ffffff') return '#000000';
        return '#000000';
      });

    }, 7000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section css={homeBg}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">

            <div css={bannerContent} className="banner_content text-center">
            <h2>
                <span style={{backgroundColor : backgroundTextTop, color: backgroundTextBottom}}>Escolha abaixo o evento e participe da 6ª edição do maior</span>
                <span style={{backgroundColor : backgroundTextBottom, color: backgroundTextTop}}>intercâmbio ibero-americano de transição energética:</span>
            </h2>
              <ul css={Buttons}>
                <li>
                    <Link to="/brasil">
                        <span>EVEx Brasil 2025 </span>
                        <span>Natal Energy Experience</span>
                    </Link>
                </li>
                <li>
                    <Link to="/lisboa">
                      <span>EVEx Lisboa 2025</span>
                      <span>Lisbon Energy Experience</span>
                    </Link>
                </li>
                <li>
                    <Link to="/lisboa">
                      <span>EVEx COP30</span>
                      <span>Energy Virtual Experience</span>               
                    </Link>
                </li>
              </ul>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
