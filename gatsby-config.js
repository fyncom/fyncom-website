/** https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/ */

/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    // block spam calls/emails. My life goal is to make calls, emails, texts, DMs safe & enjoyable again.
    title: `Sales Tools | CRM Rewards | Interactive Marketing  | FynCom | Merced CA`,
    description: `Get more conversations by instantly rewarding prospects when they respond to emails or book meetings.
      Break sales funnel bottlenecks with automated rewards. Get FynCom set up in minutes & enhance your tech stack.
      Improve customer experience & max your chances of gaining & retaining customers.`,
    author: `@adrianegraphene`,
    siteUrl: `https://www.fyncom.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Barlow`,
            variants: [`100`,`200`,`300`,`400`,`500`,'600',`700`,`800`,`900`]
          },
        ],
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/FynCom_Logo_Circle-CanvasLargest.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
