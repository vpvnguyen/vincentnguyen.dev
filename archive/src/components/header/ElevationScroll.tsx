import { cloneElement } from "react";
import { useScrollTrigger } from "@material-ui/core";
import { ElevationScrollProps } from "../../types/component.types/ElevationScrollProps";

// adds subtle effect where header will lift when the page is scrolled
const ElevationScroll = ({ children }: ElevationScrollProps) => {
  const trigger: any = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0 // listener when to trigger the effect
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
};

export default ElevationScroll;
