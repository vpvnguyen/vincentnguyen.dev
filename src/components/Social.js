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
};

const motionVariants = {
  motionIcon: MotionStyle.scaleUpSocialIcons(),
};

const MotionIcon = ({ children }) => (
  <motion.div
    variants={motionVariants.motionIcon}
    initial={"initial"}
    whileHover={"whileHover"}
    whileTap={"whileTap"}
    rel="noreferrer"
    target="_blank"
  >
    {children}
  </motion.div>
);

const Social = () => {
  const data = useStaticSocialQuery();
  const githubUrl = data.site.siteMetadata.social.github.url;
  const githubUser = data.site.siteMetadata.social.github.user;
  const linkedinUrl = data.site.siteMetadata.social.linkedin.url;
  const linkedinUser = data.site.siteMetadata.social.linkedin.user;

  return (
    <>
      <MotionIcon>
        <a href={`${githubUrl}${githubUser}`} style={style.links}>
          <GitHubIcon />
        </a>
      </MotionIcon>

      <MotionIcon>
        <a href={`${linkedinUrl}${linkedinUser}`} style={style.links}>
          <LinkedInIcon />
        </a>
      </MotionIcon>
    </>
  );
};

export default Social;
