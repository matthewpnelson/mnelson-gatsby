module.exports = {
  siteMetadata: {
    title: `Matthew Nelson - Data Scientist`,
    name: `Matt Nelson`,
    siteUrl: `https://novela.narative.co`,
    description: `Matthew Nelson's Portfolio. Data Scientist, Professional Engineer, Energy, Creative Enthusiast`,
    hero: {
      heading: `Helping you innovate, one creative data project at a time.`,
      maxWidth: 900,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/matthewpnelson`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/matthewpnelson`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/matthewpeternelson/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Matthew Nelson - Data Scientist`,
        short_name: `Matt Nelson`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
