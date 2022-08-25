import names from "lib/utility/names";

/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: `${names.APP_NAME}`,
  titleTemplate: `%s | Business Intelligence Dashboard for ${names.BLOCKCHAIN}`,
  defaultTitle: `${names.APP_NAME} | Business Intelligence Dashboard for ${names.BLOCKCHAIN} `,
  description: `Best Business Intelligence Dashboard for ${names.BLOCKCHAIN} by Flipside Crypto and Setbap `,
  canonical: `https://${names.SITE_URL}/`,
  openGraph: {
    url: `https://${names.SITE_URL}/`,
    title: `${names.APP_NAME}`,
    description: `Best Business Intelligence Dashboard for ${names.BLOCKCHAIN} by Flipside Crypto and Setbap `,
    images: [
      {
        url: `https://${names.SITE_URL}/og.png`,
        alt: `${names.APP_NAME} by Flipside Crypto and Setbap`,
      },
    ],
    site_name: `${names.APP_NAME}`,
  },
  twitter: {
    handle: "@flipsidecrypto",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
