
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
        fee = "Free",
        deadline = "15 Days" }: props) => {
    return (
        <div className='mx-auto '>
            {/* Image and details */}
            <div className={' p-10 mx-auto relative bg-cover bg-center h-[450px] mb-8'} style={{ backgroundImage: `url(${coverImage})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                {/* event type */}
                <div className='absolute z-2 inset-0 space-y-8 flex flex-col justify-center p-10'>
                    {/* Title */}
                    <div className='flex flex-col justify-c enter gap-3'>
                        <h2 className='text-white text-3xl md:text-4xl lg:text-6xl'>{title}</h2>
                        <h4 className='text-white md:text-lg lg:text-xl'>Stay tuned for more details and updates.</h4>
                    </div>
                    {/* date,time,venue */}
                    <div className='flex gap-4 md:gap-7 flex-wrap items-center text-white'>
                        <div className='flex justify-center items-center gap-2 py-2 px-4 rounded-lg bg-[#4f4f4f22] backdrop-blur-sm'>
                            <span className='text-green-400'><Calendar /></span>
                            <span>{date}</span>
                        </div>
                        <div className='flex justify-center items-center gap-2 py-2 px-4 rounded-lg bg-[#4f4f4f22]  backdrop-blur-sm'>
                            <span className='text-orange-400'><Clock /></span>
                            <span>{time}</span>
                        </div>
                        <div className='flex justify-center items-center gap-2 py-2 px-4 rounded-lg bg-[#4f4f4f22]  backdrop-blur-sm'>
                            <span className='text-blue-400'><MapPin /></span>
                            <span>{venue}</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Description and registration */}
            <div className='grid md:grid-cols-[70%_30%] gap-5 lg:gap-10 mx-auto max-sm:px-5 px-10 lg:px-20 my-12'>
                <div>
                    {/* About */}
                    <h1 className='lg:text-4xl md:text-2xl text-xl mb-8'>About This Event</h1>
                    <div className='rounded-xl border-2 border-gray-200 border-l-5 border-l-[var(--primary)] p-8 bg-gray-100'>
                        <pre className='text-lg whitespace-pre-wrap font-sans'>{description}</pre>
                    </div>
                </div>
                {/* registration */}
                <div className='shadow-2xl rounded-xl space-y-2 sticky top-[20px] h-fit bg-gray-100'>
                    <h2 className='text-center md:text-2xl lg:text-4xl text-xl p-3'>Register Now</h2>
                    <div className='text-gray-600 border-t-2 border-[var(--background)] space-y-6 p-4'>
                        <div className='space-y-2'>
                            <div>
                                Fee: <span className="font-semibold text-[var(--foreground)]">{fee}</span>
                            </div>
                            <div>
                                Deadline: <span className="font-semibold text-[var(--foreground)]">{deadline}</span>
                            </div>
                        </div>
                        {/* Regisration Button */}
                        <Button variant='primary' className='rounded-lg p-2 py-3 hover:scale-103 transition-all duration-200 w-full flex items-center justify-center text-md lg:text-lg'>
                            Complete Registration
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default EventRegistration;
