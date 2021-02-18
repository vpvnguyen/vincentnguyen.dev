import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import Theme from "../../ui/Theme";
import Animate from "../../ui/Animate";
import useStaticSocialQuery from "../../utils/hooks/useStaticSocialQuery";
import { MotionComponentProps } from "../../types/component.types/MotionProps";

const style: any = {
  socialLink: {
    margin: ".25em",
    fontSize: "1.5em",
    backgroundColor: "transparent",
    color: Theme.color().accent
  }
};

const motionVariants: any = {
  motionIcon: Animate.scaleUpSocialIcons()
};

const MotionIcon = ({ children }: MotionComponentProps) => (
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
  const data: any = useStaticSocialQuery();
  const githubUrl: string = data.site.siteMetadata.social.github.url;
  const githubUser: string = data.site.siteMetadata.social.github.user;
  const linkedinUrl: string = data.site.siteMetadata.social.linkedin.url;
  const linkedinUser: string = data.site.siteMetadata.social.linkedin.user;

  return (
    <>
      <MotionIcon>
        <a
          href={`${githubUrl}${githubUser}`}
          style={style.socialLink}
          rel='noreferrer'
          target='_blank'
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </MotionIcon>

      <MotionIcon>
        <a
          href={`${linkedinUrl}${linkedinUser}`}
          style={style.socialLink}
          rel='noreferrer'
          target='_blank'
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </MotionIcon>
    </>
  );
};

export default Social;
