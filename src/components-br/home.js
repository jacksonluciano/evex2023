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

  const homeBg = css`
  position: relative;
  background: url(${backgroundImage}) no-repeat center center / cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-image 0.9s ease;
`;

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage((prevImage) => {
        if (prevImage === homePurple) return homeBlue;
        if (prevImage === homeBlue) return homeYellow;
        return homePurple;
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
                <span>Escolha abaixo o evento e embarque conosco</span>
                <span>na rota ibero-latino-americana da energia:</span>
            </h2>
              <ul css={Buttons}>
                <li>
                    <Link to="/brasil">
                        EVEx Brasil 2024 <br/>
                        Natal Energy Experience
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        EVEx 2024 <br/>
                        Energy Virtual Experience
                    </Link>
                </li>
                <li>
                    <Link to="/lisboa">
                        EVEx Lisboa 2024 <br/>
                        Lisbon Energy Experience
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
