import * as React from "react"

const GA_MEASUREMENT_ID = process.env.GATSBY_GA_MEASUREMENT_ID;

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="gtag-script"
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
    />,
    <script
      key="gtag-config"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            send_page_view: false
          });
        `,
      }}
    />,
    <link
      rel="preload"
      href="/fonts/bwgradualdemo-bold-webfont.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/BwGradualDEMO-Bold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/BwGradualDEMO-Medium.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/BwGradualDEMO-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/BwGradualDEMO-Thin.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/BwGradualDEMO-Light.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
  ])
}