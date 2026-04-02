// gatsby-browser.js
const GA_MEASUREMENT_ID = process.env.GATSBY_GA_MEASUREMENT_ID;

export const onRouteUpdate = ({ location }) => {
  if (typeof window.gtag !== "function") return;

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: location.pathname + location.search + location.hash,
  });
};