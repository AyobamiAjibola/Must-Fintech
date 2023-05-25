import React, {useContext, useState} from 'react';
import {
    Toolbar, Box, IconButton, Typography,
    Avatar, Menu, MenuItem, TextField,
    Autocomplete, Button
} from '@mui/material';
import { ChevronLeft, NotificationsNone, Search, Launch, SettingsOutlined} from '@mui/icons-material';
import MuiAppBar from '@mui/material/AppBar';
import { AppContext } from '../../context/AppContextProvider';
import { styled, useTheme } from '@mui/material/styles';
import { DRAWER_WIDTH } from '../../config/constant';
import { makeStyles } from '@mui/styles';
import './Style.css';
import { options12 } from '../../utils/resource';

const options = [
    { text: 'text1', link: '/downloads' },
    { text: 'text2', link: '/download/management' },
    { text: 'text3', link: '/download/management' },
    { text: 'text4', link: '/download/management' },
    { text: 'text5', link: '/download/management' },
    { text: 'text6', link: '/download/management' },
    { text: 'text7', link: '/download/management' },
    { text: 'text8', link: '/download/management' },
    { text: 'text9', link: '/download/management' },
    { text: 'text10', link: '/download/management' },
    { text: 'text11', link: '/download/management' },
];

const useStyles = makeStyles((theme) => ({
    customTextField: {
      '& .MuiOutlinedInput-root': {
        borderRadius: '0.6rem', height: '2.9rem'
      }
    }
  }));

const drawerWidth = DRAWER_WIDTH;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: open ? theme.zIndex.drawer + 1 : theme.zIndex.drawer - 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function AppBarComponent () {

    const classes = useStyles();
    const theme = useTheme();
    const { setOpenSideNav, openSideNav } = useContext(AppContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorElSettings, setAnchorElSettings] = useState(null);
    const [value, setValue] = useState(null);

    const handleDrawerClose = () => {
        setOpenSideNav(false);
    };

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleOpenMenuSettings = (event) => {
        setAnchorElSettings(event.currentTarget);
    };


    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleCloseMenuSettings = () => {
        setAnchorElSettings(null);
    };

    const handleOnChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <React.Fragment>
        <AppBar position="fixed" open={openSideNav}
            sx={{ zIndex: openSideNav ? theme.zIndex.drawer + 1 : theme.zIndex.drawer - 1,
                backgroundColor: 'white', boxShadow: 'none', height: '5.7rem',
                borderBottom: '0.5px #E3E2E4 solid'
            }}
          >
            <Box sx={{ width: `calc(100% - ${!openSideNav ? drawerWidth : 0}px)` }}>
              <Toolbar sx={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                <Box
                  sx={{
                    display: 'flex', alignItems: 'center', justifyContent: 'left', width: '40%',
                    height: '4rem', mt: openSideNav ? '1rem' : '0.1rem', ml: openSideNav ? '0rem' : '5rem'
                  }}
                >
                  <img src='/logo.webp' alt="logo"
                    style={{
                      width: openSideNav ? '35%' : '40%',
                      marginBottom: openSideNav ? 15 : 0
                    }}
                  />
                  {openSideNav && <IconButton
                    color="black"
                    aria-label="open drawer"
                    onClick={handleDrawerClose}
                    edge="start"
                    sx={{
                    marginRight: 5, marginLeft: 1,
                    ...(openSideNav && { display: 'block' }),
                    }}
                  >
                    <ChevronLeft
                        sx={{fontWeight: 600, fontSize: '2rem'}}
                    />
                  </IconButton>}
                  <Box
                    sx={{
                      display: 'flex', flexDirection: 'row', justifyContent: 'center',
                      gap: 1, alignItems: 'center'
                    }}
                  >
                    <Avatar alt="Remy Sharp" src="/150.jpg"
                      sx={{ width: '3.5rem', height: '3.5rem', marginLeft: !openSideNav ? '3rem' : '0rem'}}
                    />
                    <Box
                      sx={{
                        display: 'flex', flexDirection: 'column', ml: '2px'
                      }}
                    >
                      <Typography sx={{color: '#4C4C4C', mb: '-1px', fontWeight: 'bold', fontSize: 18}}>김관리님</Typography>
                      <Typography sx={{color: 'grey'}}>대출관리팀</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: 'flex', alignItems: 'center', justifyContent: 'right',
                    height: '4rem', mt: '1rem', width: '60%',
                    mr: openSideNav ? '0px' : '-15rem'
                  }}
                >
                    <IconButton
                      color="inherit"
                      onClick={handleOpenMenu}
                      aria-controls="notification-menu"
                      aria-haspopup="true"
                      edge="start"
                      sx={{
                          border: '0.5px #C7C6C9 solid', '&:hover': {border: '0.5px black solid'},
                          borderRadius: '0.6rem', cursor: 'pointer'
                      }}
                    >
                        <NotificationsNone sx={{fontSize: '1.6rem', color: '#C7C6C9'}} />
                    </IconButton>
                    <Menu
                      id="notification-menu"
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleCloseMenu}
                      sx={{mt: 1}}
                    >
                      {options12.map((data, idx) => (
                        <MenuItem keys={idx}
                          sx={{mb: 2, mx: 1}}
                        >
                          <Box ml={1}
                            sx={{
                              border: '0.5px #C7C6C9 solid', '&:hover': {border: '0.5px black solid'},
                              borderRadius: '0.6rem', cursor: 'pointer', fontSize: 18, px: 1.9,
                              fontWeight: 'bold',
                              color: '#4C4C4C'
                            }}
                          >
                            {data.btn}
                          </Box>
                          <Typography ml={4}
                            sx={{
                              textDecoration: 'underline',
                              fontSize: 18, cursor: 'default',
                              fontWeight: 'bold',
                              color: '#4C4C4C'
                            }}
                          >
                            {data.text}
                          </Typography>
                        </MenuItem>
                      ))}
                    </Menu>

                    <Autocomplete
                      value={value}
                      onChange={handleOnChange}
                      options={options}
                      getOptionLabel={(option) => option.text}
                      className='scroll'
                      sx={{width: '50%', ml: 1}}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Search"
                          variant="outlined"
                          className={classes.customTextField}
                          sx={{
                              "& .MuiInputBase-input": {
                                marginTop: -1,
                                paddingBottom: 0,
                              }
                            }}
                          InputProps={{
                              ...params.InputProps,
                              startAdornment: (
                                <Typography variant="h6" color="textSecondary" component="div" >
                                  <Search />
                                </Typography>
                              ),
                            }}
                        />
                      )}
                      renderOption={(props, option) => (
                        <li {...props}>
                          <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                borderBottom: '0.5px #E3E2E4 solid', width: '100%', paddingBottom: '0.7rem'
                                }}>
                            <span style={{color: 'black'}}>{option.text}</span>
                            <span style={{color: '#817F85', fontSize: '16px'}}>{option.link}</span>
                          </div>
                        </li>
                      )}
                    />

                    <IconButton
                      sx={{
                        border: '0.5px #C7C6C9 solid', '&:hover': {border: '0.5px black solid'},
                        borderRadius: '0.6rem', cursor: 'pointer', ml: 1, mr: 1
                      }}
                    >
                      <Launch sx={{fontSize: '1.6rem', color: '#C7C6C9'}}/>
                    </IconButton>
                    <IconButton
                      onClick={handleOpenMenuSettings}
                      sx={{
                        border: '0.5px #C7C6C9 solid', '&:hover': {border: '0.5px black solid'},
                        borderRadius: '0.6rem', cursor: 'pointer', mr: 1
                      }}
                    >
                      <SettingsOutlined sx={{fontSize: '1.6rem', color: '#C7C6C9'}}/>
                    </IconButton>
                    <Menu
                        id="notification-menu"
                        anchorEl={anchorElSettings}
                        open={Boolean(anchorElSettings)}
                        onClose={handleCloseMenuSettings}
                    >
                        <MenuItem onClick={handleCloseMenuSettings}>Profile</MenuItem>
                        <MenuItem onClick={handleCloseMenuSettings}>Account</MenuItem>
                    </Menu>
                </Box>
              </Toolbar>
            </Box>
          </AppBar>
      </React.Fragment>
    )
}

export default AppBarComponent;