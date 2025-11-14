"use client"

import clsx from 'clsx'
import React from 'react'
import { FullLogoComponent } from './navBar'
import { usePathname } from 'next/navigation'

export const Footer = () => {
    const pathName = usePathname();

    if (pathName?.includes('/admin')) {
        return null;
    }
    return (
        <div className='h-fit w-full bg-gray-800 p-6 py-12 text-white'>
            <div className='mb-15 grid grid-cols-1 md:grid-cols-4 gap-8'>
                <div>
                    <FullLogoComponent size={1.5} />
                </div>
                <div>
                    <h3 className="mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">About IEEE</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Membership</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Publications</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Standards</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-4">Connect With Us</h3>
                    <div className="flex space-x-4 mb-4">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    </div>
                    <p className="text-sm text-gray-400">
                        Follow us for updates on events, news, and opportunities.
                    </p>
                </div>

                <div className="">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1854.661167753566!2d88.7024545341968!3d26.545891844637556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e47bce687f169d%3A0x4152036d0d736d37!2sJalpaiguri%20Government%20Engineering%20College!5e0!3m2!1sen!2sin!4v1761029430201!5m2!1sen!2sin"
                        className='w-full h-[200px]'
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    >
                    </iframe>
                </div>
            </div>
            <div className='text-center w-full border-t-1 border-gray-700 pt-12'>
                <p className='text-gray-400 text-sm'>&copy; {new Date().getFullYear()} IEEE JGEC Student Branch. All rights reserved.</p>
            </div>
        </div>
    )
}
