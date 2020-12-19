import { useEffect } from "react";
import { navigate } from "gatsby";

export default () => {
  const route: string = "/";

  useEffect((): void => {
    navigate(route);
  }, [route]);

  return null;
};
