"use client"

import React from 'react';
import { Button } from './button';
import { Card } from './card';
import { ChevronsRight } from 'lucide-react';

type EventCardProps = {
    title: string,
    date: string,
    description: string,
    coverImage?: string
}

export default function EventCard({ title, date, description, coverImage }: EventCardProps) {
    return (
        <Card className='w-[800px]'>

            {/* Cover Image */}
            <img
                src={coverImage}
                alt={`${name} cover`}
                className='rounded-lg object-cover w-full aspect-[5/3]'
            />

            {/* heading and Date */}
            <div className="flex justify-between items-center w-[100%]  p-3">
                <h3 className='text-xl text-[#4b5365]  font-bold '>{title}</h3>
                <p className='text-xs text-center text-[var(--primary)] bg-[#b2e3ffb4] backdrop-blur-sm inset-shadow-sm  rounded-xl px-3 py-1 w-fit'>{date}</p>
            </div>
            {/* description */}
            <div className='p-3'>
                <p className='text-sm text-gray-600'>{description}</p>
            </div>
            <div className="member-details flex flex-col justify-evenly bg-transparent shadow-lg/30 rounded-xl absolute left-[50%] -bottom-50 w-fit -translate-x-1/2 h-fit mx-auto z-10">
                <Button>
                    Learn More
                    <ChevronsRight size={17} />
                </Button>
            </div>
        </Card >
    )
}
