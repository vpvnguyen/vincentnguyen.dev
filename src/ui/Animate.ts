import Theme from "./Theme";

class Animate extends Theme {
  private static readonly hoverScale = { scale: 1.1 };

  public static whileHoverScale = () => Animate.hoverScale;

  public static scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  public static springDownToolBar = () => ({
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

  public static springUpWelcomeHeader = () => ({
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

  public static springUpWelcomeText = () => ({
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

  public static fadeInHeadersLeft = () => ({
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

  public static fadeInTwitterTimelineRight = () => ({
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

  public static fadeInExperienceRight = () => ({
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

  public static animateProject = () => ({
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
      webkitBoxShadow: Theme.projectBoxShadow() /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */,
      mozBoxShadow: Theme.projectBoxShadow() /* Firefox 3.5 - 3.6 */,
      boxShadow: Theme.projectBoxShadow() /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */,
    },
  });

  public static scaleUpMenuItem = () => ({
    initial: {
      cursor: "pointer",
    },
    whileHover: Animate.hoverScale,
    whileTap: {
      color: Theme.color().dark,
    },
  });

  public static scaleUpSocialIcons = () => ({
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
