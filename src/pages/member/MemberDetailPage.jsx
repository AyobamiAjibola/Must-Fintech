import React, { useContext } from 'react';
import { Typography, Box, Divider } from '@mui/material';
import BasicTabs from '../../components/Tabs/Tabs';
import { tabDetails } from '../../components/navigation/menu';
import { AppContext } from '../../context/AppContextProvider';

function MemberDetailPage() {
  const { openSideNav } = useContext(AppContext);
  return(
      <React.Fragment>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column', py: 5, px: 2
          }}
        >
          <Box
            sx={{
              pl: openSideNav ? 2 : 3,
              pr: openSideNav ? 2 : 3
            }}
          >
            <Typography
              sx={{
                fontSize: 25,
                fontWeight: 600,
                textAlign: 'left',
                color: '#252e3a'
              }}
            >
              회원 관리
            </Typography>

            <Divider orientation='horizontal' />
          </Box>

          <Box
            sx={{
              m: 2
            }}
          >
            <BasicTabs tabMenus={ tabDetails } />
          </Box>
        </Box>
      </React.Fragment>
  )
}

export default MemberDetailPage;