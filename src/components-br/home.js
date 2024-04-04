/** @jsx jsx */
import React from "react";
import { jsx } from '@emotion/react'
import { Link } from "gatsby";

import { 
    homeBg,
  bannerContent,
  Buttons
}  from '../assets/styles-br/Home.styles'

const Home = ({ title, name }) => {
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
