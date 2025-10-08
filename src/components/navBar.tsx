"use client";

import React from 'react'
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
        console.log(path);
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
            key: 'contact', label: 'Contact'
        },
        {
            key: 'team', label: 'Team'
        },
        {
            key: 'sponsors', label: 'Sponsors'
        },
        {
            key: 'alumni', label: 'Alumni'
        }
    ]

    if (path.includes('/admin')) return null;
    return (
        <div className='w-full flex items-center justify-between px-2 py-1 bg-[var(--background)] text-[var(--foreground)] border-b-4 border-[var(--primary)]'>
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
                    <Button variant='nav' key={opt.key} className={clsx('p-2')} active={opt.key === currentPage} onClick={() => handleLinkClick(`/${opt.key}`)}>
                        {opt.label}
                    </Button>
                ))}
            </div>
        </div>
    )
}
