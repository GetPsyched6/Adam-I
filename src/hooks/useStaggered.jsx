import { useReducedMotion } from 'framer-motion';

const useStaggered = (options = {}) => {
  const defaultAmount = 0.5;
  const defaultTranslate = 50;
  const amount = options.amount || defaultAmount;
  const translate = options.translate || defaultTranslate;

  const shouldReduceMotion = useReducedMotion();

  const parentVariants = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };

  const childVariants = {
    initial: {
      translateY: `${translate}px`,
    },
    enter: {
      translateY: 0,
      transition: { ease: [0, 0, 0.5, 1] },
    },
  };

  const reducedParentMotionProps = shouldReduceMotion
    ? {}
    : {
        variants: parentVariants,
        initial: 'initial',
        whileInView: 'enter',
        viewport: { once: true, amount },
      };

  const reducedChildMotionProps = shouldReduceMotion ? {} : { variants: childVariants };

  return { reducedParentMotionProps, reducedChildMotionProps };
};

export default useStaggered;
