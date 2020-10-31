import React from "react";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from "@material-ui/icons";
import { motion } from "framer-motion";
import Theme from "../utils/helpers/Theme";
import Animate from "../ui/Animate";
import useStaticSocialQuery from "../utils/hooks/useStaticSocialQuery";

const style = {
  socialLink: {
    margin: ".5rem",
    backgroundColor: "transparent",
    color: Theme.color().accent,
  },
};

const motionVariants = {
  motionIcon: Animate.scaleUpSocialIcons(),
};

const MotionIcon = ({ children }) => (
  <motion.div
    variants={motionVariants.motionIcon}
    initial={"initial"}
    whileHover={"whileHover"}
    whileTap={"whileTap"}
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
        <a
          href={`${githubUrl}${githubUser}`}
          style={style.socialLink}
          rel="noreferrer"
          target="_blank"
        >
          <GitHubIcon />
        </a>
      </MotionIcon>

      <MotionIcon>
        <a
          href={`${linkedinUrl}${linkedinUser}`}
          style={style.socialLink}
          rel="noreferrer"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
      </MotionIcon>
    </>
  );
};

export default Social;
