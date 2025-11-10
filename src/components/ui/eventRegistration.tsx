import { Calendar, Clock, MapPin } from 'lucide-react'
import React from 'react'
import { Button } from './button';

type props = {
    title: string,
    date: string,
    description: string,
    coverImage?: string,
    time?: string,
    venue?: string,
    type?: string,
    fee?: string,
    deadline?: string
};

export const EventRegistration = (
    { title,
        date = "Coming Soon",
        time = "To be announced",
        venue = "To be announced",
        description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat inventore dolores, nisi expedita fugit beatae in ipsum eaque reprehenderit pariatur accusamus a obcaecati, ducimus officiis magnam assumenda nam deserunt nihil modi itaque, sit nostrum illum ipsa animi! Corrupti excepturi recusandae enim harum dignissimos obcaecati suscipit quos consequatur voluptatem ex blanditiis veritatis aspernatur quas minima, et placeat vitae expedita nemo voluptatibus labore, quaerat dolores numquam earum impedit! Iste consequatur aliquam sit fuga ab. Aut accusantium, accusamus fuga odio ea, maxime aliquid sapiente corporis libero esse eum natus harum repellendus minus qui! Quibusdam aspernatur dolorem voluptate distinctio blanditiis magni maiores, fugit amet!",
        coverImage,
        type = "General",
        fee = "Free",
        deadline = "15 Days" }: props) => {
    return (
        <div>
            {/* Image and details */}
            <div className='space-y-2 m-4 event-registration-box'>
                {/* event type */}
                <div className='p-2 bg-[#dbeafe] text-[var(--primary)] rounded-lg'>{type}</div>
                {/* Title */}
                <h2 className='text-white'>{title}</h2>
                <h4>Stay tuned for more details and updates.</h4>
                {/* date,time,venue */}
                <div className='flex gap-3 flex-wrap items-center text-white'>
                    <div className='flex justify-center items-center gap-1 py-1 px-2 rounded-lg bg-[#747474] backdrop-blur-sm'>
                        <span><Calendar /></span>
                        <span>{date}</span>
                    </div>
                    <div className='flex justify-center items-center gap-1 py-1 px-2 rounded-lg bg-[#747474] backdrop-blur-sm'>
                        <span><Clock /></span>
                        <span>{time}</span>
                    </div>
                    <div className='flex justify-center items-center gap-1 py-1 px-2 rounded-lg bg-[#747474] backdrop-blur-sm'>
                        <span><MapPin /></span>
                        <span>{venue}</span>
                    </div>
                </div>
            </div>
            {/* Description and registration */}
            <div className='grid grid-cols-[70%_30%] gap-4 '>
                {/* About */}
                <div>
                    <h1>About This Event</h1>
                    <div className='rounded-md border-2 border-gray-300 border-r-3 border-r-[var(--primary)] p-4'>
                        <pre>{description}</pre>
                    </div>
                </div>
                {/* registration */}
                <div className='border border-[var(--primary)] p-3 shadow-lg shadow-[#6db6ff] rounded-lg space-y-2 sticky top-[64px]'>
                    <h2 className='font-light text-center'>Register Now</h2>
                    <div className='font-semibold'>Registration Details:</div>
                    <div>
                        Fee:{fee}
                    </div>
                    <div>
                        Deadline:{deadline}
                    </div>
                    {/* Regisration Button */}
                    <Button variant='primary' className='rounded-lg p-2'>
                        Complete Registration
                    </Button>
                </div>
            </div>
        </div>
    )
}
