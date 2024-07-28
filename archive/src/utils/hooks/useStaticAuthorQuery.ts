import { useStaticQuery, graphql } from "gatsby";

const useStaticAuthorQuery: any = () =>
  useStaticQuery<any>(graphql`
    query siteAuthoreQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

export default useStaticAuthorQuery;
