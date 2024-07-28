import { useStaticQuery, graphql } from "gatsby";

const useStaticProProjectsQuery: any = () =>
  useStaticQuery<any>(graphql`
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
