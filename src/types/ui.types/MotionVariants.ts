export interface MotionVariants {
  initial: {
    opacity?: number;
    x?: number;
    y?: number;
    cursor?: string;
  };
  animate?: {
    opacity?: number;
    x?: number;
    y?: number;
    transition?: {
      type: string;
      damping?: number;
      delay?: number;
      duration?: number;
    };
  };
  whileHover?: any;
  whileTap?: {
    color?: string;
  };
}
