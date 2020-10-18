import { useStaticQuery, graphql } from "gatsby";

const useStaticGithubApiQuery = () =>
  useStaticQuery(graphql`
    query siteGithubApiQuery {
      site {
        siteMetadata {
          api {
            github {
              url
              user
              pageAmount
            }
          }
        }
      }
    }
  `);

export default useStaticGithubApiQuery;
