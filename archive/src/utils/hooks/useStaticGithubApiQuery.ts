import { useStaticQuery, graphql } from "gatsby";

const useStaticGithubApiQuery: any = () =>
  useStaticQuery<any>(graphql`
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
