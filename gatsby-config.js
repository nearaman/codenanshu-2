/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const config = require("./config.json");

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Codenanshu developer blog`,
    author: {
      name: `Ai Anshu`,
      summary: `trying to build new web for everyone.`,
    },
    description: `codenanshu is a developer plateform that helps developers to learn fast`,
    siteUrl: `https://codenanshu.netlify.app/`,
    social: {
      twitter: `aianshume`,
    },
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/content/notes/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tutorials`,
        path: `${__dirname}/content/tutorials/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: config.ALGOLIA_APP_ID,
        apiKey: config.ALGOLIA_ADMIN_KEY,
        queries: require("./src/components/utils/algolia-queries"),
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: config.MAILCHIMP_ENDPOINT,
      },
    },
  ],
};
