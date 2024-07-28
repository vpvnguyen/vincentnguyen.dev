import { useStaticQuery, graphql } from "gatsby";

const useStaticResumeQuery: any = () =>
  useStaticQuery<any>(graphql`
    query siteResumeQuery {
      site {
        siteMetadata {
          resume
        }
      }
    }
  `);

export default useStaticResumeQuery;
