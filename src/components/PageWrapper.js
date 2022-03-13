import React from 'react';
import MotionBox from '../framerMotion/MotionBox';
import pageVariants from '../utils/pageVariants';

const PageWrapper = ({ children }) => {
  return (
    <MotionBox
      w="full"
      h="full"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      p={'5px 10px'}
    >
      {children}
    </MotionBox>
  );
};

export default PageWrapper;
