import React from 'react';
import { Box, Typography } from '@mui/material';

function HistoryPage (){
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
              HistoryPage
            </Typography>
          </Box>
        </React.Fragment>
    )
}

export default HistoryPage;