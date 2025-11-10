
import { Calendar, Clock, MapPin } from 'lucide-react'
import React from 'react'
import { Button } from '../../../../components/ui/button';

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
    { title = "Testing Event is ON!!",
        date = "Coming Soon",
        time = "To be announced",
        venue = "To be announced",
        description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat inventore dolores, nisi expedita fugit beatae in ipsum eaque reprehenderit pariatur accusamus a obcaecati, ducimus officiis magnam assumenda nam deserunt nihil modi itaque, sit nostrum illum ipsa animi! Corrupti \n excepturi recusandae enim harum dignissimos obcaecati suscipit quos consequatur voluptatem ex blanditiis veritatis aspernatur \n \n quas minima, et placeat vitae expedita nemo voluptatibus labore, quaerat dolores numquam earum impedit! Iste consequatur aliquam sit fuga ab. Aut accusantium, accusamus fuga odio ea, maxime aliquid sapiente corporis libero esse eum natus harum repellendus minus qui! Quibusdam aspernatur dolorem voluptate distinctio blanditiis magni maiores, fugit amet!",
        coverImage = "https://plus.unsplash.com/premium_photo-1723669231878-0c02508cd6b9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVjaG5pY2FsJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        type = "General",
        fee = "Free",
        deadline = "15 Days" }: props) => {
    return (
        <div className='mx-auto '>
            {/* Image and details */}
            <div className={' p-10 mx-auto relative bg-cover bg-center h-[450px] mb-8'} style={{ backgroundImage: `url(${coverImage})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                {/* event type */}
                <div className='absolute z-2 inset-0 space-y-8 p-20'>
                    <div className='p-2 px-4 bg-[#dbeafe] text-[var(--primary)] text-lg rounded-lg w-fit '>{type}</div>
                    {/* Title */}
                    <div className='flex flex-col justify-center gap-3'>
                        <h2 className='text-white text-5xl font-light'>{title}</h2>
                        <h4 className='text-white text-xl'>Stay tuned for more details and updates.</h4>
                    </div>
                    {/* date,time,venue */}
                    <div className='flex gap-7 flex-wrap items-center text-white'>
                        <div className='flex justify-center items-center gap-2 py-2 px-4 rounded-lg bg-[#4f4f4f22] backdrop-blur-sm'>
                            <span><Calendar /></span>
                            <span>{date}</span>
                        </div>
                        <div className='flex justify-center items-center gap-2 py-2 px-4 rounded-lg bg-[#4f4f4f22]  backdrop-blur-sm'>
                            <span><Clock /></span>
                            <span>{time}</span>
                        </div>
                        <div className='flex justify-center items-center gap-2 py-2 px-4 rounded-lg bg-[#4f4f4f22]  backdrop-blur-sm'>
                            <span><MapPin /></span>
                            <span>{venue}</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* About */}
            <h1 className='text-4xl px-20 mb-4'>About This Event</h1>
            {/* Description and registration */}
            <div className='grid grid-cols-[70%_30%] gap-7 mx-auto px-20'>
                <div>
                    <div className='rounded-xl border-2 border-gray-300 border-l-5 border-l-[var(--primary/20)] p-8'>
                        <p className='text-lg'>{description}</p>
                    </div>
                </div>
                {/* registration */}
                <div className='border border-[var(--primary)] p-3 shadow-xl shadow-[#6db6ff] rounded-lg space-y-2 sticky top-[100px]  h-fit'>
                    <h2 className='text-center text-4xl mb-4'>Register Now</h2>
                    <div className='my-5 mx-2'>
                        <div className='font-semibold'>Registration Details:</div>
                        <div>
                            Fee: <span className="font-semibold">{fee}</span>
                        </div>
                        <div>
                            Deadline: <span className="font-semibold">{deadline}</span>
                        </div>
                    </div>
                    {/* Regisration Button */}
                    <div className='flex items-center justify-center mb-4'>
                        <Button variant='primary' className='rounded-lg p-2 hover:scale-103 transition-all duration-200'>
                            Complete Registration
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default EventRegistration;
