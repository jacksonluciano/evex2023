import { css } from "@emotion/react"

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Nunito:wght@400;600;700;800&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    background-color: #1a3a6e;
    color: #1a1a1a;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }
`

// Color tokens
export const colors = {
  blue: "#004c93",
  blueMid: "#1e4a8a",
  cream: "#ffeec1",
  creamLight: "#fdf6e3",
  pink: "#e8527a",
  pinkBright: "#f15b87",
  gold: "#e8a020",
  goldLight: "#f5c842",
  green: "#4a9e5c",
  greenLight: "#6dbf7a",
  red: "#c8302a",
  orange: "#e86820",
  white: "#ffffff",
  darkBlue: "#0d2045",
  dark: "#000",
}

// Breakpoints
export const breakpoints = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
}

export const mq = {
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  maxSm: `@media (max-width: ${breakpoints.sm})`,
  maxMd: `@media (max-width: ${breakpoints.md})`,
}
