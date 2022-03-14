/**
 * Page Variants for framer motion
 */

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ...transition,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1.5, ...transition },
  },
};

export default pageVariants;
