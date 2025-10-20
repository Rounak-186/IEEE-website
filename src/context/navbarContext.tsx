"use client";

import React, { createContext, useEffect, useState } from 'react'

type NavContextPropsType = {
    isShowHeaderNav: boolean,
    setIsShowHeaderNav: (state: boolean) => void,
}

const NavbarContext = createContext<NavContextPropsType | undefined>(undefined);

export const NavbarProvider = ({ children }: { children: React.ReactNode }) => {
    const [isShowHeaderNav, setIsShowHeaderNav] = useState(true);
    return (
        <NavbarContext.Provider value={{ isShowHeaderNav, setIsShowHeaderNav }}>
            {children}
        </NavbarContext.Provider>
    )
}

export default NavbarContext;