"use client"

import React from 'react';

type EventCardProps = {
    title: string,
    date: string,
    description: string,
    coverImage?: string
}

export default function EventCard({ title, date, description, coverImage }: EventCardProps) {
    return (
        <div className='shadow-card hover:shadow-[var(--primary)/30] w-full max-w-md h-fit rounded-lg hover:scale-[1.02] hover:-translate-x-[5px] hover:-translate-y-[5px] transition-all duration-500 border border-gray-300 p-2'>

            {/* Cover Image */}
            <img
                src={coverImage ?? "https://picsum.photos/400/300"}
                alt={`${name} cover`}
                className='rounded-lg object-cover w-full aspect-square'
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
        </div>
    )
}
