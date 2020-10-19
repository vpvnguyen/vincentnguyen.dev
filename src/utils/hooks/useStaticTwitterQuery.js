import { useStaticQuery, graphql } from "gatsby";

const useStaticTwitterQuery = () =>
  useStaticQuery(graphql`
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
