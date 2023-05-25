import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

function Page_not_found (){
    return (
        <React.Fragment>
          <Box
            sx={{
                width: '100%', height: '35rem', overflow: 'hidden',
                display: 'flex', justifyContent: 'center',
                alignItems: 'center'
            }}
          >
            <Box>
                <Typography
                sx={{
                    fontSize: 28, fontWeight: 'bold'
                }}
                >404</Typography>
            </Box>
            <Divider orientation='vertical' sx={{height: '20%', mx: 5}}/>
            <Box>
                <Typography
                    sx={{
                        fontSize: 16
                    }}
                    >
                        This page could not be found
                </Typography>
            </Box>
          </Box>
        </React.Fragment>
    )
}

export default Page_not_found;