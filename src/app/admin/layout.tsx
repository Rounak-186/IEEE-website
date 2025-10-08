"use client";

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const navOptions = [
        {
            title: "Dashboard",
            path: "/dashboard",
        },
        {
            title: "Manage Team",
            path: "/team",
        },
        {
            title: "Manage Events",
            path: "/events",
        },
        {
            title: "IAM & Access control",
            path: "/access-control",
        },
    ]
    return (
        <div>
            <div className='bg-gray-300 w-full sticky top-0 p-2'>
                <h5 className='text-xl font-semibold'>IEEE JGEC Admin panel</h5>
            </div>
            <div className='flex'>
                {/* admin nav section */}
                <div className='w-90 h-[calc(100vh-44px)] p-3 bg-gray-300 space-y-2 sticky top-[44px] overflow-y-auto'>
                    {navOptions.map((opt: any, index: number) => (
                        <div key={index}>
                            <Link href={`/admin/${opt.path}`}>
                                <button className={clsx('flex bg-gray-200 p-3 w-full rounded-xl cursor-pointer', pathname.includes(opt.path) && 'bg-white')}>
                                    <span>{opt.title}</span>
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className='flex-1 w-full p-3'>
                    {children}
                </div>
            </div>
        </div>
    )
}
