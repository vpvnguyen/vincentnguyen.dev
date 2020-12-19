import { useStaticQuery, graphql } from "gatsby";

const useStaticSocialQuery: any = () =>
  useStaticQuery<any>(graphql`
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
