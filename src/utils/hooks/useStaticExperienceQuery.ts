import { useStaticQuery, graphql } from "gatsby";

const useStaticExperienceQuery: any = () =>
  useStaticQuery<any>(graphql`
    query siteExperienceQuery {
      site {
        siteMetadata {
          experience
        }
      }
    }
  `);

export default useStaticExperienceQuery;
