import { useStaticQuery, graphql } from "gatsby";

const useStaticSocialQuery = () =>
  useStaticQuery(graphql`
    query siteSocialQuery {
      site {
        siteMetadata {
          social {
            github {
              url
              user
            }
            linkedin {
              url
              user
            }
          }
        }
      }
    }
  `);

export default useStaticSocialQuery;
