import Theme from "./Theme";
import { StyleProps } from "../types/ui.types/StyleProps";
import { MotionVariants } from "./../types/ui.types/MotionVariants";

class Animate extends Theme {
  private static readonly hoverScale: StyleProps = { scale: 1.1 };

  public static whileHoverScale = (): StyleProps => Animate.hoverScale;

  public static scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  public static springDownToolBar = (): MotionVariants => ({
    initial: {
      opacity: 0,
      y: -10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 50,
      },
    },
  });

  public static springUpWelcomeHeader = (): MotionVariants => ({
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 50,
      },
    },
  });

  public static springUpWelcomeText = (): MotionVariants => ({
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 50,
        delay: 1,
      },
    },
  });

  public static fadeInHeadersLeft = (): MotionVariants => ({
    initial: {
      opacity: 0,
      x: 20,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 50,
        duration: 3,
      },
    },
  });

  public static fadeInTwitterTimelineRight = (): MotionVariants => ({
    initial: {
      opacity: 0,
      x: -5,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 50,
        duration: 0.5,
      },
    },
  });

  public static fadeInExperienceRight = (): MotionVariants => ({
    initial: {
      opacity: 0,
      x: -5,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 50,
        duration: 0.5,
      },
    },
  });

  public static animateProject = (): MotionVariants => ({
    initial: {
      opacity: 0,
      x: -5,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 80,
      },
    },
    whileHover: {
      WebkitBoxShadow: Theme.projectBoxShadow() /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */,
      MozBoxShadow: Theme.projectBoxShadow() /* Firefox 3.5 - 3.6 */,
      boxShadow: Theme.projectBoxShadow() /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */,
    },
  });

  public static scaleUpMenuItem = (): MotionVariants => ({
    initial: {
      cursor: "pointer",
    },
    whileHover: Animate.hoverScale,
    whileTap: {
      color: Theme.color().dark,
    },
  });

  public static scaleUpSocialIcons = (): MotionVariants => ({
    initial: {
      cursor: "pointer",
    },
    whileHover: Animate.hoverScale,
    whileTap: {
      color: Theme.color().dark,
    },
  });
}

export default Animate;
