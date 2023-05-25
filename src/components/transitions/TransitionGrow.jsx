import React, { forwardRef, useRef } from 'react';
import { Grow } from '@mui/material';

const TransitionGrow = forwardRef((props, ref) => {
  // const { easingInDuration = 100, ...otherProps } = props;
  const growRef = useRef(null);

  return <Grow ref={growRef}
            {...props}
            timeout={{
              enter: 200,
              exit: 200,
            }}
          />;
});

export default TransitionGrow;