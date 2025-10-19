"use client";

import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import { log } from 'console';
import { Playwrite_US_Modern } from "next/font/google"

const playwriteUSModern = Playwrite_US_Modern({
    variable: "--font-playwrite-us-modern",
});

type NavBarProps = {
    navOpts?: Record<string, string>[]
}

export default function NavBar({ navOpts }: NavBarProps) {

    const router = useRouter();
    const path = usePathname();
    const currentPage = path.split('/')[1];

    const handleLinkClick = (path: string) => {
        router.push(path);
    };

    // Mock data
    const navOpt = [
        {
            key: '', label: 'Home'
        },
        {
            key: 'about', label: 'About'
        },
        {
            key: 'events', label: 'Events'
        },
        {
            key: 'team', label: 'Team'
        },
        {
            key: 'contact', label: 'Contact'
        },
        {
            key: 'sponsors', label: 'Sponsors'
        },
        {
            key: 'alumni', label: 'Alumni'
        }
    ];

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

    if (path.includes('/admin')) return null;
    return (
        <div className={clsx('w-full flex items-center justify-between px-2 py-1 bg-white/50 backdrop-blur-2xl text-[var(--foreground)] border-b-2 border-[var(--primary)] fixed top-0 z-50 transition-transform duration-300', isNavShow ? "translate-y-[0px]" : "-translate-y-[80px]")}>
            {/* IEEE logo and name */}
            <div className="flex items-center justify-center gap-2 ml-4">
                {/* logo */}
                <img src="/ieee-logo.png" alt="IEEE Logo" className='w-13 h-13 object-contain' />
                {/* name */}
                <div>
                    <h5 className={clsx('text-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400', playwriteUSModern.className)}>JGEC IEEE</h5>
                    <h6 className={clsx('text-sm font-bold  text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-400', playwriteUSModern.className)}>Student Branch</h6>
                </div>
            </div>
            {/* other navigation options */}
            <div className='flex items-center justify-center gap-1 px-4'>
                {navOpt.map((opt) => (
                    <div className='flex flex-col justify-end items-center' key={opt.key}>
                        <Button variant='nav' key={opt.key} className={clsx('p-2')} onClick={() => handleLinkClick(`/${opt.key}`)}>
                            {opt.label}
                        </Button>
                        <div className={clsx('overflow-hidden flex items-center gap-[1px] w-0 h-1 absolute transition-all duration-300 rounded-t-2xl', currentPage === opt.key && "w-17")}>
                            <div className='flex-1 bg-blue-600 w-full h-full' />
                            <div className='flex-4 bg-blue-600 w-full h-full' />
                            <div className='flex-1 bg-blue-600 w-full h-full' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
