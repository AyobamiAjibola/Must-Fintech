import React, { createContext, useState } from 'react';

import PrivateLayout from '../components/layout/PrivateLayout';

export const AppContext = createContext(null);

export default function AppContextProvider() {
    const [openSideNav, setOpenSideNav] = useState(true);

    return (
      <AppContext.Provider
        value={{
          openSideNav,
          setOpenSideNav
        }}
      >
        <PrivateLayout />
      </AppContext.Provider>
    );
}