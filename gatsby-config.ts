import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    author: `Vincent Nguyen`,
    title: `Vincent Nguyen`,
    description: `Vincent Nguyen's Portfolio.`,
    experience: [
      "Software Engineer", 
      "Quality Assurance",
      "PCI Security Standard"
    ],
    projects: [
      {
        name: "Quicken Loans",
        url: "https://www.quickenloans.com/",
        description:
          "Quicken Loans has helped over 2 million families finance their homes. Compare home loan options and apply online.",
        date: "Oct-2023",
        languages: ["javascript"]
      },
      {
        name: "Mazda Reimbursement",
        url: "https://mazdareimbursement.com/",
        description:
          "Mazda reimbursement program for recalls and special services for selected vehicles.",
        date: "Mar-2020",
        languages: ["typescript", "mysql"]
      },
      {
        name: "Direct Hearing Aid Services",
        url: "#",
        description:
          "Direct Hearing Aid Repair Garden Grove is a hearing aid repair and hearing aid services company that provides hearing aid repair service in Garden Grove.",
        date: "Jul-2024",
        languages: ["javascript"]
      }
    ],
    professionalProjects: [
      {
        name: "Quicken Loans",
        url: "https://www.quickenloans.com/",
        description:
          "Quicken Loans has helped over 2 million families finance their homes. Compare home loan options and apply online.",
        date: "Oct-2023",
        languages: ["javascript"]
      },
      {
        name: "Mazda Reimbursement",
        url: "https://mazdareimbursement.com/",
        description:
          "Mazda reimbursement program for recalls and special services for selected vehicles.",
        date: "Mar-2020",
        languages: ["typescript", "mysql"]
      },
      {
        name: "Direct Hearing Aid Services",
        url: "#",
        description:
          "Direct Hearing Aid Repair Garden Grove is a hearing aid repair and hearing aid services company that provides hearing aid repair service in Garden Grove.",
        date: "Jul-2024",
        languages: ["javascript"]
      }
    ],
    social: {
      twitter: {
        url: `https://twitter.com/Vincent33567189?ref_src=twsrc%5Etfw`,
        user: `Vincent33567189`,
        embedWidget: `https://platform.twitter.com/widgets.js`
      },
      github: {
        url: `https://www.github.com/`,
        user: `vpvnguyen`
      },
      linkedin: {
        url: `https://www.linkedin.com/in/`,
        user: `vpvnguyen`
      }
    },
    resume: `https://docs.google.com/document/d/1PTogfVNXdTCEIQor0yN4gXIcFEKxHRFzGIlRl4287xM/edit?usp=sharing`,
    api: {
      github: {
        url: `https://api.github.com`,
        user: `vpvnguyen`,
        pageAmount: `100`
      }
    }
  },
  plugins: []
};

export default config;
