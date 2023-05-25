import React, {useState, useRef, useContext, useEffect} from 'react';
import { Box, Slide, Tab, Tabs, useTheme } from '@mui/material';
import a11yProps from './a11yProps';
import TabPanel from './TabPanel';
import { AppContext } from '../../context/AppContextProvider';
import { useLocation, useNavigate } from 'react-router-dom';

export default function BasicTabs(props) {
  const navigate = useNavigate();
  const { openSideNav } = useContext(AppContext);
  const [value, setValue] = useState(0);
  const containerRef = useRef(null);
  const location = useLocation();

  const theme = useTheme();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tabParam = queryParams.get('tab');
    console.log(tabParam, 'params')

    if (!tabParam || tabParam !== '1') {
      const queryParam = `tab=1`;
      navigate(`${location.pathname}?${queryParam}`);
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const queryParam = `tab=${props.tabMenus[newValue].tag}`;
    navigate(`/dashboard/member-management/Abc123/detail?${queryParam}`);
  };

  return (
    <Box>
      <Tabs centered value={value} onChange={handleChange} aria-label="basic tabs example"
        sx={{
            backgroundColor: '#f4f5f7',
            width: '100%', borderRadius: '0.7rem', pl: -2
        }}
        TabIndicatorProps={{
            style: {
              display: 'none',
            },
        }}
      >
        {
          props.tabMenus.map((tab, index) => {
            return <Tab
                      label={tab.name}
                      key={index}
                      {...a11yProps(index)}
                      sx={{
                        fontSize: openSideNav ? 20 : 24,
                        width: openSideNav ? '12rem' : '13.5rem',
                        '&.Mui-selected': {
                            backgroundColor: '#2a3958',
                            color: 'white',

                            ':first-of-type': {
                                ml:-2, pl: 4
                            },
                            ':last-of-type': {
                                mr:-2, pl: 4
                            },
                        },
                        ':first-of-type': {
                            borderTopLeftRadius: '0.7rem',
                            borderBottomLeftRadius: '0.7rem', pr: 4
                        },
                        ':last-of-type': {
                            borderTopRightRadius: '0.7rem',
                            borderBottomRightRadius: '0.7rem', pr: 4
                        }
                      }}
                  />
          })
        }
      </Tabs>

      {
        props.tabMenus.map((tab, index) => {
            return (
              <Slide key={index} direction='right' in={value === index} container={containerRef.current}>
                <div>
                  <TabPanel value={value} index={index} dir={theme.direction}>
                    <Box sx={{ pt: 2}}>
                      <tab.Element />
                    </Box>
                  </TabPanel>
                </div>
              </Slide>
            )
        })
      }
    </Box>
  );
}