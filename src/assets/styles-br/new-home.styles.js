// /** @jsx jsx */
// import { css } from "@emotion/react";

// export const homeBg = css`
//   position: relative;
//   background-color: #004C93;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   @media (min-width: 320px) and (max-width: 767px) {
//   }
// `;

// export const bannerContent = css`
//   position: relative;

//   h2 {
//     font-size: 40px;
//     line-height: 1;
//     font-weight: bold;
//     letter-spacing: 0px;
//     margin: 0;
//     color: #fff;
//     font-family: "Bw Gradual DEMO";

//     @media (min-width: 320px) and (max-width: 767px) {
//       font-size: 14px;
//     }

//     span {
//       display: inline-block;
//       background-color: #000;
//       color: #ffffff;
//       padding: 8px 16px;
//       :first-of-type {
//         color: #000;
//         background-color: #ffffff;
//       }
//       @media (min-width: 320px) and (max-width: 767px) {
//         padding: 8px;
//     }
//     }
//   }

//   h4 {
//     color: #fff;
//     font-size: 18px;
//     line-height: 36px;
//     letter-spacing: 1.8px;
//     text-transform: uppercase;
//     margin: 0 0 12px;

//     a {
//       color: #fff;
//       display: inline-block;
//       &:hover {
//         color: #000;
//       }
//     }
//   }
// `;

// export const Buttons = css`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   margin-top: 48px;
//   padding: 0;

//   @media (min-width: 320px) and (max-width: 767px) {
//     padding: 0;
//   }

//   li {
//     display: inline-block;
//     background-color: #000;
//     color: #fff;
//     margin: 8px 0;
//     padding: 8px 32px;
//     width: 399px;
//     border: 4px solid #000;

//     @media (min-width: 320px) and (max-width: 767px) {
//         margin: 4px;
//     }

//     &:hover {
//       background-color: #fff;
//       a {
//         color: #000;
//       }
//     }

//     a {
//       font-family: "Bw Gradual DEMO";
//       color: #ffffff;
//       font-weight: bold;
//       font-size: 24px;
//       line-height: 28px;
//       :hover {
//         text-decoration: none;
//       }
//       span {
//         display: block;
//       }
//     }

//     @media (min-width: 320px) and (max-width: 767px) {
//       width: 247px;
//       padding: 8px 12px;
//       a {
//         font-size: 14px;
//         span {
//           line-height: 20px;
//         }
//       }
//     }
//   }
// `;



import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { colors, mq } from "./global.styles"
import redBg from '@/images-br/newhome/redbg.svg';
import orangeBg from '@/images-br/newhome/orangebg.svg';
import blueBg from '@/images-br/newhome/blueBg.svg';

// ─── Layout ───────────────────────────────────────────────────────────────────

export const PageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  background: ${colors.blue};
`

// ─── Hero / Header ─────────────────────────────────────────────────────────

export const HeroSection = styled.section`
  background: ${colors.blue};
  position: relative;
  padding: 2rem 1rem 0;
  text-align: center;
  overflow: hidden;

  /* &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 12px;
    background: repeating-linear-gradient(
      90deg,
      ${colors.pink} 0px, ${colors.pink} 20px,
      ${colors.gold} 20px, ${colors.gold} 40px,
      ${colors.green} 40px, ${colors.green} 60px,
      ${colors.blue} 60px, ${colors.blue} 80px
    );
  } */

  ${mq.md} {
    padding: 3rem 2rem 0;
  }
`

export const BirdsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  pointer-events: none;

  @media (min-width: 320px) and (max-width: 767px) {
    margin: 0 auto 16px;
    }
  
`

export const BirdLeft = styled.div`
  position: absolute;
  width: 400px;
  left: -250px;
  font-size: 2.5rem;
  filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3));

  img{width:100%}

  ${mq.md} {
    font-size: 3.5rem;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    .desktop{display:none}
    }

`

export const BirdRight = styled.div`
 position: absolute;
 width: 400px;
 right: -250px;
  font-size: 2.5rem;
  filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3));

  ${mq.md} {
    font-size: 3.5rem;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    .desktop{display:none}
    }
`

export const MainTitle = styled.h1`
  font-family: "Bw Gradual DEMO";
  font-weight: 700;
  font-size: 140px;
  color: ${colors.cream};
  line-height: 0.9;
  margin: 0.2rem 0 0;
  letter-spacing: -5px;

  img{
    width: 80%;
    margin: 0 auto;
  }

   @media (min-width: 320px) and (max-width: 767px) {
    font-size: 70px;

    img{
    width: 90%;
    margin: 0 auto;
  }
    }
`

export const SubTitle = styled.h2`
  font-family: "Bw Gradual DEMO";
  font-size: 2.6em;
  color: ${colors.cream};
  margin-top: 0.25rem;
  font-weight: 500;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 1.1em;
    }
`

export const TaglineBadge = styled.div`
  background-image: url(${redBg});
  display: inline-block;
  color: ${colors.cream};
  font-family: "Bw Gradual DEMO";
  border-radius: 30px;
  margin: 1.2rem auto 1rem;
  position: relative;
  width: 100%;
  max-width: 500px;
  background-size: cover;
  height: 93px;
  display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.7em;

  span{
    font-weight: 500;
    display: block;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    background-size: contain;
        height: 72px;
        font-size: 1em;
        width: 300px;
        background-repeat: no-repeat;
        margin: 0 auto;

        span{
          line-height: 4px;
        }
    }
`

export const IntroText = styled.p`
    font-family: "Bw Gradual DEMO";
    color:${colors.cream};
    font-size: 1.5em;
    max-width: 715px;
    margin: 0 auto 1.5rem;
    padding: 0 0.5rem;
    text-align: justify;
    text-align-last: center;
  strong {
    font-weight: 500;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 17px;
    line-height: 1.2em;
    width: 90%;
    }
`

export const StarRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 0.5rem 0 1rem;
  font-size: 1.2rem;
  color: ${colors.goldLight};
`

// ─── Cityscape ─────────────────────────────────────────────────────────────

export const CityscapeWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 1rem;
`

export const City = styled.div`
  position: relative;
  width: 100%;
  overflow: visible;

  .mobile{display:none;}

  @media (min-width: 320px) and (max-width: 767px) {
    .desktop{display:none;}
    .mobile{display:block;}
    }

`

export const CityBottom = styled.div`
  position: relative;
  width: 100%;
  background-color: ${colors.pinkBright};
  border-top: 116px solid ${colors.cream};



  & .floral-left{
    width: 200px;
    position: absolute;
    top: -180px;
    left: 80px;
  }

  & .floral-right{
    width: 200px;
    position: absolute;
    top: -180px;
    right: 80px;
  }

  .mobile{
    display: none;
  }

@media (min-width: 320px) and (max-width: 767px) {
  border-top: 66px solid ${colors.cream};
  .desktop{display:none;}
  .mobile{display:block;}
  }
`

export const CityTaglineBadge = styled.div`
position: absolute;
bottom: 0;
left: 50%;
transform: translate(-50%, 0);
  background-image: url(${orangeBg});
  display: inline-block;
  color: ${colors.cream};
  font-family: "Bw Gradual DEMO";
  border-radius: 30px;
  width: 100%;
  max-width: 500px;
  background-size: cover;
  height: 93px;
  display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 2em;
    text-align: center;
    font-weight: 500;
    z-index: 2;

    @media (min-width: 320px) and (max-width: 767px) {
    background-size: contain;
        height: 56px;
        font-size: 1.2em;
        width: 300px;
        background-repeat: no-repeat;
        margin: 0 auto;
        transform: translate(-50%, 114%);

        span{
          line-height: 4px;
        }
    }
`

export const CityscapeOval = styled.div`
  background: ${colors.creamLight};
  border-radius: 50% 50% 0 0 / 30% 30% 0 0;
  min-height: 60px;
  position: relative;
  padding-top: 2rem;

  &::before {
    content: '';
    display: block;
    height: 18px;
    background: repeating-linear-gradient(
      90deg,
      ${colors.blue} 0px, ${colors.blue} 18px,
      ${colors.cream} 18px, ${colors.cream} 24px,
      ${colors.gold} 24px, ${colors.gold} 42px,
      ${colors.cream} 42px, ${colors.cream} 48px
    );
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
  }
`

export const CityscapeIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: clamp(0.5rem, 2vw, 1.5rem);
  font-size: clamp(2rem, 6vw, 3.5rem);
  padding: 0.5rem 1rem;
  flex-wrap: wrap;
  overflow: hidden;
`

// ─── Calendar Section ──────────────────────────────────────────────────────

export const CalendarSection = styled.section`
  background: ${colors.creamLight};
  position: relative;
  padding: 0 1rem 3rem;
`

export const OvalDecorBorder = styled.div`
  width: 92%;
  max-width: 780px;
  margin: 0 auto;
  border: 4px solid ${colors.gold};
  border-top: none;
  border-radius: 0 0 50% 50% / 0 0 30% 30%;
  padding: 0 1.5rem 2.5rem;
  position: relative;
  background: ${colors.cream};

  /* &::before {
    content: '';
    position: absolute;
    top: 0; left: -4px; right: -4px;
    height: 12px;
    background: repeating-linear-gradient(
      90deg,
      ${colors.blue} 0, ${colors.blue} 12px,
      ${colors.cream} 12px, ${colors.cream} 16px,
      ${colors.gold} 16px, ${colors.gold} 28px,
      ${colors.cream} 28px, ${colors.cream} 32px
    );
  } */
`

export const FishRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  font-size: 1.8rem;
  padding: 1rem 0 0.5rem;
  color: ${colors.blue};
`

export const CalendarTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.3rem, 4vw, 1.8rem);
  color: ${colors.blue};
  text-align: center;
  margin: 0.5rem 0 1.5rem;
  position: relative;

  &::before, &::after {
    content: '✦';
    color: ${colors.gold};
    margin: 0 0.75rem;
    font-size: 0.9em;
  }
`

export const CalendarGrid = styled.div`
width: 100%;
max-width: 800px;
position: absolute;
bottom: 0;
left: 50%;
transform: translate(-50%, 0);
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 0 0.5rem;
  margin-bottom: 120px;

  ${mq.md} {
    grid-template-columns: 1fr 1fr;
    gap: 2rem 3rem;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    position: relative;
    background-color: ${colors.cream};
    margin-bottom: 0;
    padding-top: 24px;

    .eventcard:nth-child(2){
      order: 3;
    }
    .eventcard:nth-child(4){
      order: 4;
    }
    }

`

export const EventCard = styled.div`
  position: relative;
  @media (min-width: 320px) and (max-width: 767px) {
    text-align: center;
    
    &:nth-child(1){
      span{
        left: -36px;
        top: 4px;
      }
    }&:nth-child(2){
      span{
        left: -36px;
        top: 4px;
      }
    }&:nth-child(3){
      span{
        left: -36px;
        top: 4px;
      }
    }
    &:nth-child(4){
      span{
        left:-36px;
        top: 4px;
      }
    }
  }
`

export const EventIcon = styled.span`
    position: absolute;
    left: -50px;
  display: inline-block;
  width: 36px;
  height: 36px;
  background: ${({ color }) => color || colors.pinkBright};
  transform: rotate(45deg);
  margin-right: 0.5rem;
  vertical-align: middle;
  flex-shrink: 0;
  margin-top: -2px;
  border: 8px solid #e8527a;

  @media (min-width: 320px) and (max-width: 767px) {
    left: 40px;
    width: 26px;
    height: 26px;
    border: 6px solid #e8527a;
    }

`

export const EventTitleRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.15rem;
  @media (min-width: 320px) and (max-width: 767px) {
    justify-content: center;
    }
`

export const EventName = styled.h4`
  font-family: "Bw Gradual DEMO";
  font-weight: 700;
  color: ${colors.dark};
  margin:0;
  font-size: 28px;
  letter-spacing: 0;
  position: relative;
`

export const EventDesc = styled.p`
font-family: "Bw Gradual DEMO";
  font-size: 22px;
  color: ${colors.dark};
  font-weight: 500;
  margin-bottom: 0.1rem;
  margin:0;
  line-height: 24px;
  letter-spacing: 0;
`

export const EventDate = styled.p`
font-family: "Bw Gradual DEMO";
  font-size: 1.1rem;
  color: ${colors.dark};
  margin:0;
  line-height: 24px;
  font-weight: 500;

  span {
    font-weight: 600;
    color: ${colors.dark};
  }
`

export const EventNote = styled.p`
font-family: "Bw Gradual DEMO";
font-weight: 500;
  font-size: 1rem;
  color: ${colors.blue};
  font-style: italic;
  line-height: 16px;
`

export const CtaButton = styled.a`
  display: inline-block;
  background: ${colors.blue};
  color: ${colors.cream};
  font-family: "Bw Gradual DEMO";
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0;
    padding: 2px 12px;
    border-radius: 20px;
    cursor: pointer;
    -webkit-transition: -webkit-transform 0.15s, background 0.15s;
    transition: transform 0.15s, background 0.15s;
    margin-top: 0.3rem;
  box-shadow: -5px 6px 0px 0px #B1CF6F ;

  &:hover{
    text-decoration: none;
    background-color: ${colors.darkBlue};
    color: ${colors.white};
  }
`

export const FreeTag = styled.span`
  display: inline-block;
  background: transparent;
  color: ${colors.blue};
  font-family: "Bw Gradual DEMO";
  font-weight: 800;
  font-size: 1rem;
  padding: 0.1rem 0rem;
  border-radius: 20px;
`

// ─── Footer / Ecosystem ─────────────────────────────────────────────────────

export const FooterSection = styled.section`
  background: ${colors.pinkBright};
  padding: 2.5rem 0 0;
  text-align: center;
  position: relative;

  @media (min-width: 320px) and (max-width: 767px) {
    padding: 2.5rem 0 0;
  }
`
export const BirdsFooter = styled.section`
     width: 100%;
    max-width: 1129px;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    z-index: 0;

  .birdbtl{
    width: 170px;
    
  }

  .birdbtr{
    width: 170px;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    top: 0px;

    .birdbtr,
    .birdbtl{
      width: 72px;
    }
    }
`

export const FooterBirds = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;
  margin: 0 auto 1rem;
  font-size: 2.5rem;
`

export const EcosystemTitle = styled.p`
  font-family: "Bw Gradual DEMO";
  font-weight: 500;
  font-size: 26px;
  color: ${colors.cream};
  margin-bottom: 1rem;
  letter-spacing: 0;
  line-height: 32px;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 1em;
    line-height: 1.4em;
    }
`

export const EcosystemButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  z-index: 2;
  position: relative;

  @media (min-width: 320px) and (max-width: 767px) {
    justify-content: space-between;
    flex-wrap: nowrap;
    margin: 0 20px;
    }
`

export const EcosystemBtn = styled.a`
background-image: url(${blueBg});
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: ${colors.gold};
  font-family: "Bw Gradual DEMO";
  font-weight: bold;
  padding: 0.6rem 1.4rem;
  cursor: pointer;
  transition: transform 0.15s, background 0.15s;
  background-size: contain;
    font-size:22px;
    height: 60px;
    text-align: center;
    background-size: cover;
    background-repeat: no-repeat;
    justify-content: center;
    width: 322px;

    &:hover { color: ${colors.white}; }

    @media (min-width: 320px) and (max-width: 767px) {
      background-size: contain;
        height: 35px;
        font-size: 0.8em;
        width: 300px;
        background-repeat: no-repeat;
        margin: 0 auto;
    }
`

export const EmailRow = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem auto;
  font-size: 18px;
  color: ${colors.darkBlue};
  font-weight: 600;
   img{
    margin-right: 12px;
    width: 30px;
   }

  a {
    color: ${colors.cream};
    font-family: "Bw Gradual DEMO";
    font-weight: 400;
    &:hover { color: ${colors.white}; }
  }
`

// ─── Bottom border ──────────────────────────────────────────────────────────

export const BottomBorder = styled.div`

`
