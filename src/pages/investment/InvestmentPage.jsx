import React from 'react';
import { Box, Typography } from '@mui/material';

function InvestmentPage (){
    return (
        <React.Fragment>
          <Box
            sx={{
                width: '100%', height: '100%',
                display: 'flex', justifyContent: 'left', mt: 2,
                alignItems: 'left', flexDirection: 'column'
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold', fontSize: 20
              }}
            >
              InvestmentPage
            </Typography>
          </Box>
        </React.Fragment>
    )
}

export default InvestmentPage;