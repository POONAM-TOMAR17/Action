const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config.js');

module.exports = {
  siteMetadata: {
    title: `Actonate`
  },
  plugins: [
    'gatsby-plugin-typescript',
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `actonate-website`,
        short_name: `starter`,
        start_url: `/`,
        background_color: '#ffffff',
        theme_color: tailwindConfig.theme.colors.customColors[100],
        display: `minimal-ui`,
        icon: `static/images/action-favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production` ? [require(`cssnano`)] : [])
        ]
      }
    },
    `gatsby-plugin-offline`
  ]
};
