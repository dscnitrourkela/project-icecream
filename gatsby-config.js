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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HackNITR | Frameboi`,
        short_name: `Frameboi`,
        description: `Profile Picture Frame Generator for HackNITR 3.0 `,
        start_url: '/',
        background_color: '#17171d',
        theme_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    `gatsby-plugin-robots-txt`,
  ],
};
