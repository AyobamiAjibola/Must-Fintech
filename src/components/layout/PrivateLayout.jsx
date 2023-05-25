import React, {useContext} from 'react';
import {
    Box, IconButton
} from '@mui/material';
import {Business, ChevronRight} from '@mui/icons-material';
import DashboardPage from '../../pages/home/DashboardPage';
import SideNav from './SideNav';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import { Route, Routes, Navigate } from 'react-router-dom';
import withErrorBoundary from '../../hoc/withErrorBoundary';
import { AppContext } from '../../context/AppContextProvider';
import { styled, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { DRAWER_WIDTH } from '../../config/constant';
import AppBarComponent from './AppBarComponent';
import MemberPage from '../../pages/member/MemberPage';
import MemberDetailPage from '../../pages/member/MemberDetailPage';
import BusinessPage from '../../pages/business/BusinessPage';
import FundingPage from '../../pages/funding/FundingPage';
import InvestmentPage from '../../pages/investment/InvestmentPage';
import BondPage from '../../pages/bond/BondPage';
import PaymentPage from '../../pages/payment/PaymentPage';
import TaxPage from '../../pages/tax/TaxPage';
import ExhibitionPage from '../../pages/exhibition/ExhibitionPage';
import SystemManagementPage from '../../pages/system-management/SystemManagementPage';
import Page_not_found from '../../pages/page_404/Page_not_found';

const drawerWidth = DRAWER_WIDTH;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBarx = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: !open ? theme.zIndex.drawer + 1 : theme.zIndex.drawer - 1,
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    zIndex: theme.zIndex.drawer - 1,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function PrivateLayout() {
    const theme = useTheme();
    const { setOpenSideNav, openSideNav } = useContext(AppContext);


    const handleDrawerOpen = () => {
        setOpenSideNav(true);
    };

    return (
      <React.Fragment>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBarx position="fixed" open={openSideNav} sx={{backgroundColor: 'transparent', boxShadow: 'none'}}>
            <Box
                sx={{
                zIndex: theme.zIndex.drawer + 1,
                display: 'flex', justifyContent: 'flex-start',
                color: 'black', height: '100%', mt: 2.5, ml: 2
                }}
            >
              <IconButton
                color="black"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                marginRight: 5,
                ...(openSideNav && { display: 'none' }),
                }}
              >
                <ChevronRight
                    sx={{fontWeight: 600, fontSize: '2rem'}}
                />
              </IconButton>
            </Box>
          </AppBarx>
          <AppBarComponent />
          <Drawer variant='permanent' open={openSideNav}>
            <SideNav />
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3, zIndex: 1 }}>
            <DrawerHeader />
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/dashboard/member-management" element={<MemberPage />} />
              <Route path="/dashboard/member-management/Abc123/detail" element={<MemberDetailPage />} />
              <Route path="/dashboard/business-management" element={<BusinessPage />} />
              <Route
                path="/dashboard/funding-management"
                element={<FundingPage />}
              />
              <Route
                path="/dashboard/investment-management"
                element={<InvestmentPage />}
              />
              <Route
                path="/dashboard/bond-management"
                element={<BondPage />}
              />
              <Route
                path="/dashboard/payment-management"
                element={<PaymentPage />}
              />
              <Route
                path="/dashboard/tax-management"
                element={<TaxPage />}
              />
              <Route
                path="/dashboard/exhibition-management"
                element={<ExhibitionPage />}
              />
              <Route
                path="/dashboard/system-management"
                element={<SystemManagementPage />}
              />
              <Route
                path="*"
                element={<Page_not_found />}
              />
            </Routes>
          </Box>
        </Box>
      </React.Fragment>
    )
}

export default withErrorBoundary(PrivateLayout);