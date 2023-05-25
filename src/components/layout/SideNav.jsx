import React, {useState, useContext, useEffect} from 'react';
import { AppContext } from '../../context/AppContextProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { sideNavs } from '../../routes';
import {
    createTheme,
    ThemeProvider, useTheme
  } from '@mui/material/styles';
import { DRAWER_WIDTH } from '../../config/constant';
import {
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Drawer
} from '@mui/material'
import DrawerHeader from './DrawerHeader';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { makeStyles } from '@mui/styles';
import './Style.css'

const useStyles = makeStyles((theme) => ({
  customTextField: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '0.6rem', height: '2.9rem'
    },
  },
  list: {
    backgroundColor: 'white'
  }
}));

function SideNav() {
    const classes = useStyles();
    const theme = useTheme();
    const [navs, setNavs] = useState([]);
    const { openSideNav, setOpenSideNav } = useContext(AppContext);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      setNavs(
        sideNavs.filter(
          value => value.tag === 'all'
        )
      )
    },[]);
    const handleDrawerClose = () => {
        setOpenSideNav(false);
    };

    return (
      <ThemeProvider
        theme={createTheme({
          palette: {
            primary: { main: '#4F4F4F' },
            secondary: { main: '#4F4F4F' },
            mode: 'light',
          },
        })}>
        <Drawer
            sx={{
            width: DRAWER_WIDTH,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: DRAWER_WIDTH,
                boxSizing: 'border-box',
            },
            }}
            variant="persistent"
            anchor="left"
            open={openSideNav}
        >
          <ThemeProvider
            theme={createTheme({
                palette: {
                primary: { main: '#1a97cf' },
                secondary: { main: '#fba91a' },
                mode: 'light',
                },
            })}>
            <DrawerHeader
              sx={{
                backgroundColor: 'white'
              }}
            >
              <img
                style={{
                    width: 90,
                    height: 90,
                    borderRadius: 6,
                    position: 'absolute',
                    left: '24%',
                }}
                crossOrigin="anonymous"
                src="./logo.ico"
                alt=""
                />

                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronRightIcon sx={{fontSize: '2rem'}}/> : <ChevronLeftIcon sx={{fontSize: '2rem'}}/>}
                </IconButton>
            </DrawerHeader>
          </ThemeProvider>
            <List className='scroll'>
              {navs.map((nav, index) => (
                <ListItem key={index} disablePadding
                  sx={{
                    display: 'block',
                    mt: 3, ml: 2,
                    ':first-of-type': {
                      mt: 4
                    },
                  }}
                >
                  <ListItemButton
                    onClick={() => {
                    navigate(nav.path);
                    }}
                    className={classes.list}
                    selected={nav.path === location.pathname}
                    sx={{
                      minHeight: 48,
                      height: 50,
                      justifyContent: openSideNav ? 'initial' : 'center',
                      px: 2.5, py: 1.5,
                      mr: '2rem',
                      borderRadius: nav.path === location.pathname ? '0.8rem' : '0rem',
                      boxShadow: nav.path === location.pathname ? 4 : 0,
                      '&.Mui-selected': {
                        backgroundColor: 'white'
                      },
                    }}>
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: openSideNav ? 2 : 'auto',
                        justifyContent: 'center',
                      }}>
                      <IconButton
                        sx={{
                          boxShadow: 3,
                          borderRadius: '0.7rem',
                          backgroundColor: nav.path === location.pathname ? '#2a3958' : 'white',
                          color: nav.path === location.pathname ? 'white' : '#2a3958'
                        }}
                      >
                        <nav.Icon sx={{fontSize: '1rem'}} />
                      </IconButton>
                    </ListItemIcon>
                    <ListItemText sx={{ opacity: openSideNav ? 1 : 0,
                      color: nav.path === location.pathname ? '#4C4C4C' : '#9D9BA0'
                      }}
                    >
                      <strong style={{fontSize: '15px'}}>{nav.name}</strong>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
            ))}
            </List>
        </Drawer>
      </ThemeProvider>
    )
}

export default SideNav;