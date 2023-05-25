import React from 'react';
import { Box, Typography } from '@mui/material';

function BusinessPage (){
    return (
        <React.Fragment>
          <Box
            sx={{
                width: '100%', height: '100%',
                display: 'flex', justifyContent: 'left',
                alignItems: 'left', flexDirection: 'column', mt: 2
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold', fontSize: 20
              }}
            >
              BusinessPage
            </Typography>
          </Box>
        </React.Fragment>
    )
}

export default BusinessPage;