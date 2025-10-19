"use client";

import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import { log } from 'console';

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
        <div className={clsx('w-full flex items-center justify-between px-2 py-1 bg-white/50 backdrop-blur-2xl text-[var(--foreground)] border-b-2 border-[var(--primary)] fixed top-0 z-50 transition-transform duration-300', isNavShow?"translate-y-[0px]":"-translate-y-[80px]")}>
            {/* IEEE logo and name */}
            <div className="flex items-center justify-center gap-2 p-2">
                {/* logo */}
                <div className='w-12 h-12 bg-[var(--primary)] flex items-center justify-center rounded-md '>
                    <h4 className='text-white '>IEEE</h4>
                </div>
                {/* name */}
                <div className='flex flex-col justify-center gap-1'>
                    <h1 className='text-[var(--primary)] font-semibold'>IEEE Student Branch</h1>
                    <p className='text-sm'>Advancing Technology for Humanity</p>
                </div>
            </div>
            {/* other navigation options */}
            <div className='flex items-center justify-center gap-1 px-4'>
                {navOpt.map((opt) => (
                    <div className='flex flex-col justify-end items-center'>
                        <Button variant='nav' key={opt.key} className={clsx('p-2')} onClick={() => handleLinkClick(`/${opt.key}`)}>
                            {opt.label}
                        </Button>
                        <div className={clsx('bg-blue-600 w-0 h-1 absolute transition-all duration-300 rounded-t-2xl', currentPage === opt.key && "w-17")}></div>
                    </div>
                ))}
            </div>
        </div>
    )
}
