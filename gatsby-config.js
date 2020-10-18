module.exports = {
  siteMetadata: {
    author: `Vincent Nguyen`,
    description: `Vincent Nguyen's Portfolio.`,
    experience: [
      "Software Engineer",
      "Quality Assurance",
      "Pipeline Management",
      "PCI Security Standard",
    ],
    professionalProjects: [
      {
        name: "Mazda Reimbursement",
        url: "https://mazdareimbursement.com/",
        description:
          "Mazda reimbursement program for recalls and special services for selected vehicles.",
        date: "Mar-2020",
        languages: ["typescript", "scss"],
      },
      {
        name: "Hyundai Motors America Engine Settlement",
        url: "https://www.hmaenginesettlement.com/",
        description:
          "Hyundai theta engine class action settlement claim program.",
        date: "Jul-2020",
        languages: ["laravel", "php", "html", "css"],
      },
    ],
    social: {
      twitter: {
        url: `https://twitter.com/Vincent33567189?ref_src=twsrc%5Etfw`,
        user: `Vincent33567189`,
      },
      github: {
        url: `https://www.github.com/`,
        user: `vpvnguyen`,
      },
      linkedin: {
        url: `https://www.linkedin.com/in/`,
        user: `vpvnguyen`,
      },
    },
    resume: `https://docs.google.com/document/d/1PTogfVNXdTCEIQor0yN4gXIcFEKxHRFzGIlRl4287xM/edit?usp=sharing`,
    api: {
      github: {
        url: `https://api.github.com`,
        user: `vpvnguyen`,
        pageAmount: `100`,
      },
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `Vincent Nguyen Portfolio`,
        short_name: `vpvnguyen-portfolio`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#03DAC5`,
        display: `minimal-ui`,
        icon: `src/images/dev-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
