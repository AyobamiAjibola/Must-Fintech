import React from 'react';
import {
    Home, Person, HomeRepairService, PriceChange,
    CurrencyExchange, ShowChart, InsertDriveFile,
    Calculate, Sync, NoteAlt, Build
} from '@mui/icons-material';

const HomePage = React.lazy(() => import('../context/AppContextProvider'));
export const sideNavs = [
    {tag: 'all', name: 'Dashboard', path: '/dashboard', Icon: Home},
    {tag: 'all', name: 'Members', path: '/dashboard/member-management', Icon: Person},
    {tag: 'all', name: 'Business', path: '/dashboard/business-management', Icon: HomeRepairService},
    {tag: 'all', name: 'Funding', path: '/dashboard/funding-management', Icon: CurrencyExchange},
    {tag: 'all', name: 'Investment', path: '/dashboard/investment-management', Icon: ShowChart},
    {tag: 'all', name: 'Bond', path: '/dashboard/bond-management', Icon: InsertDriveFile},
    {tag: 'all', name: 'Payment', path: '/dashboard/payment-management', Icon: PriceChange},
    {tag: 'all', name: 'Tax', path: '/dashboard/tax-management', Icon:  Calculate},
    {tag: 'all', name: 'Change History', path: '/dashboard/changes-history', Icon: Sync},
    {tag: 'all', name: 'Exhibition', path: '/dashboard/exhibition-management', Icon:  NoteAlt},
    {tag: 'all', name: 'System', path: '/dashboard/system-management', Icon: Build}
];

export const routes = [
    {
        name: 'Home',
        path: '*',
        Element: HomePage,
        isPublic: false,
    },
]