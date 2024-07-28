import { useStaticQuery, graphql } from "gatsby";

const useStaticTwitterQuery: any = () =>
  useStaticQuery<any>(graphql`
    query siteTwitterQuery {
      site {
        siteMetadata {
          social {
            twitter {
              url
              user
              embedWidget
            }
          }
        }
      }
    }
  `);

export default useStaticTwitterQuery;
