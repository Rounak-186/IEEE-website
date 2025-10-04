"use client";
import React from 'react'
import { Button } from './ui/button';

export default function NavBar() {

    // Mock data
    const navOpt = [
        {
            key: 'home', label: 'Home'
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
                    <Button variant='nav' key={opt.key} className='p-2'>
                        {opt.label}
                    </Button>
                ))}
            </div>
        </div>
    )
}
