"use client";

import { usePathname } from 'next/navigation';
import React, { createContext, useEffect, useState } from 'react'

type NavContextPropsType = {
    isShowHeaderNav: boolean,
    setIsShowHeaderNav: (state: boolean) => void,
}

const NavbarContext = createContext<NavContextPropsType | undefined>(undefined);

export const NavbarProvider = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const [isShowHeaderNav, setIsShowHeaderNav] = useState(pathname !== '/');
    useEffect(() => {
        setIsShowHeaderNav(pathname !== '/');
    }, [pathname]);
    return (
        <NavbarContext.Provider value={{ isShowHeaderNav, setIsShowHeaderNav }}>
            {children}
        </NavbarContext.Provider>
    )
}

export default NavbarContext;