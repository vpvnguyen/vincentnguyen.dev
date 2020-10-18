import { useStaticQuery, graphql } from "gatsby";

const useStaticResumeQuery = () =>
  useStaticQuery(graphql`
    query siteResumeQuery {
      site {
        siteMetadata {
          resume
        }
      }
    }
  `);

export default useStaticResumeQuery;
