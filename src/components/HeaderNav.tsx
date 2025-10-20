"use client";

import clsx from 'clsx'
import React, { useContext, useEffect, useState } from 'react'
import NavBar from './navBar';
import { usePathname } from 'next/navigation';
import NavbarContext from '@/context/navbarContext';

export const HeaderNav = () => {
    const { isShowHeaderNav } = useContext(NavbarContext)!;
    const path = usePathname();
    const [isNavShow, setIsNavShow] = useState<boolean>(true);

    useEffect(() => {
        if (typeof window === "undefined") return;

        let lastScrollY = window.scrollY;
        let ticking = false;

        const update = () => {
            const currentScrollY = window.scrollY;
            // hide when scrolling down, show when scrolling up
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsNavShow(false);
            } else {
                setIsNavShow(true);
            }
            lastScrollY = currentScrollY;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(update);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    if (path.includes('/admin') || !isShowHeaderNav) return null;
    return (
        <header className={clsx("h-[60px]")}>
            <NavBar className={clsx("fixed top-0 z-50 ", isNavShow ? "translate-y-[0px]" : "-translate-y-[80px]")} />
        </header>
    )
}
