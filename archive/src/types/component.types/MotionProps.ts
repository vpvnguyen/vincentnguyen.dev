import { ReactNode } from "react";
import { MotionProps } from "framer-motion";

export interface MotionComponentProps extends MotionProps {
  children: ReactNode;
}
