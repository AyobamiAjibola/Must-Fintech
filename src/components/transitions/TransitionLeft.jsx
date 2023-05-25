import React, { forwardRef, useRef } from 'react';
import { Slide } from '@mui/material';

const TransitionUp = forwardRef((props, ref) => {
  const slideRef = useRef(null); // Create a ref using useRef()

  return <Slide direction="left" ref={slideRef} {...props} />;
});

export default TransitionUp;
