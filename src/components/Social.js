import React from "react";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from "@material-ui/icons";
import { motion } from "framer-motion";
import theme from "../ui/theme";
import useStaticSocialQuery from "../utils/hooks/useStaticSocialQuery";
import MotionStyle from "../ui/motion";

const style = {
  links: {
    margin: ".5rem",
    backgroundColor: "transparent",
    color: theme.color.accent,
  },
  motionIcon: MotionStyle.scaleUpSocialIcons(),
};

const MotionIcon = ({ children, url }) => (
  <motion.a
    href={url}
    style={style.links}
    variants={style.motionIcon}
    initial={"initial"}
    whileHover={"whileHover"}
    whileTap={"whileTap"}
    rel="noreferrer"
    target="_blank"
  >
    {children}
  </motion.a>
);

const Social = () => {
  const data = useStaticSocialQuery();

  return (
    <>
      <MotionIcon
        url={`${data.site.siteMetadata.social.github.url}${data.site.siteMetadata.social.github.user}`}
      >
        <GitHubIcon />
      </MotionIcon>

      <MotionIcon
        url={`${data.site.siteMetadata.social.linkedin.url}${data.site.siteMetadata.social.linkedin.user}`}
      >
        <LinkedInIcon />
      </MotionIcon>
    </>
  );
};

export default Social;
