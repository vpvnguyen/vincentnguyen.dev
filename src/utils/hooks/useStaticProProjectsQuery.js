import { useStaticQuery, graphql } from "gatsby";

const useStaticProProjectsQuery = () =>
  useStaticQuery(graphql`
    query siteProProjectsQuery {
      site {
        siteMetadata {
          professionalProjects {
            name
            url
            description
            date
            languages
          }
        }
      }
    }
  `);

export default useStaticProProjectsQuery;
