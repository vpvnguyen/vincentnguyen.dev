import { useStaticQuery, graphql } from "gatsby";

const useStaticExperienceQuery = () =>
  useStaticQuery(graphql`
    query siteExperienceQuery {
      site {
        siteMetadata {
          experience 
        }
      }
    }
  `);

export default useStaticExperienceQuery;
