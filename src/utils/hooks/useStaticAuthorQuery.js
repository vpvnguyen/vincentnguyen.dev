import { useStaticQuery, graphql } from "gatsby";

const useStaticAuthorQuery = () =>
  useStaticQuery(graphql`
    query siteAuthoreQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

export default useStaticAuthorQuery;
