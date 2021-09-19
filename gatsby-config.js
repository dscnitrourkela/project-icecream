module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `Frameboi`,
    siteUrl: `https://frame.dscnitrourkela.org`,
    description: `Profile Picture Frame Generator for HackNITR 3.0 `,
    canonicalUrl: `https://frame.dscnitrourkela.org`,
    author: {
      name: `Frameboi`,
      description: `Profile Picture Frame Generator for HackNITR 3.0 `,
    },
    organisation: {
      name: `DSC NIT Rourkela`,
      url: `https://frame.dscnitrourkela.org`,
    },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-robots-txt`,
  ],
};
