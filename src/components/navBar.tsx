"use client";

import React from 'react'
import { Button } from './ui/button';
import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import { Playwrite_US_Modern } from "next/font/google"
import Link from 'next/link';

const playwriteUSModern = Playwrite_US_Modern({
    variable: "--font-playwrite-us-modern",
});

export const FullLogoComponent = ({ size = 1 }: { size?: Number }) => {
    const scale = size ? Number(size) : 1;
    const baseLogoPx = 52; // default w-13 / h-13 ≈ 52px
    const logoPx = Math.round(baseLogoPx * scale);
    const baseTitlePx = 18; // approximate for text-md
    const baseSubtitlePx = 14; // approximate for text-sm
    const titlePx = Math.round(baseTitlePx * scale);
    const subtitlePx = Math.round(baseSubtitlePx * scale);
    return (
        <div className="flex items-center justify-center gap-2 ml-4">
            <img
                src="/ieee-logo.png"
                alt="IEEE Logo"
                className="object-contain"
                style={{ width: `${logoPx}px`, height: `${logoPx}px` }}
            />
            <div>
                <h5
                    className={clsx(
                        'font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600 mb-1',
                        playwriteUSModern.className
                    )}
                    style={{ fontSize: `${titlePx}px`, lineHeight: 1 }}
                >
                    JGEC IEEE
                </h5>
                <h6
                    className={clsx(
                        'font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-400',
                        playwriteUSModern.className
                    )}
                    style={{ fontSize: `${subtitlePx}px`, lineHeight: 1 }}
                >
                    Student Branch
                </h6>
            </div>
        </div>
    )
}

type NavBarProps = {
    navOpts?: Record<string, string>[],
    className?: string,
    isVisible?: boolean
}

export default function NavBar({ navOpts, className, isVisible = true }: NavBarProps) {

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

    return (
        <div className={clsx('w-full flex items-center justify-between px-2 py-1 bg-white/50 backdrop-blur-2xl text-[var(--foreground)] border-b-2 border-[var(--primary)] transition-transform duration-300', className)}>
            {/* IEEE logo and name */}
            <Link href={'/'}>
                <FullLogoComponent />
            </Link>
            {/* other navigation options */}
            <div className='flex items-center justify-center gap-1 px-4'>
                {navOpt.map((opt) => (
                    <div className='flex flex-col justify-end items-center' key={opt.key}>
                        <Button variant='nav' key={opt.key} className={clsx('p-2 text-gray-600', currentPage === opt.key && "!text-foreground")} onClick={() => handleLinkClick(`/${opt.key}`)}>
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
