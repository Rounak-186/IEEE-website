import { Calendar, Component, Dot, GraduationCap, MapPin, Shield } from 'lucide-react';
import { Instagram, Linkedin } from 'lucide-react';
import React from 'react';

type TeamMemberCardProps = {
    name: string;
    role?: string;     // for top overlay
    coverImage?: string;
    linkedInUrl?: string;
    instagramUrl?: string;
    
};

export default function TeamMemberCard({ name, role, coverImage, linkedInUrl, instagramUrl }: TeamMemberCardProps) {
    return (
        <div className='shadow-card hover:shadow-[var(--primary)/30] w-fit h-fit rounded-lg hover:scale-[1.02] hover:-translate-x-[5px] hover:-translate-y-[5px] transition-all duration-500'>
            <div className='member-card flex flex-col justify-center gap-1 rounded-l relative w-[300px] h-[400px] overflow-hidden '>

                {/* Cover Image */}
                <img
                    src={coverImage ?? "https://picsum.photos/400/300"}
                    alt={`${name} cover`}
                    className='rounded-lg object-cover w-full aspect-square'
                />

                {/* Name and Role */}
                <div className="flex flex-col justify-center items-center gap-1 w-[100%] rounded-xl p-3">
                    <h3 className='text-xl text-[#4b5365]  font-bold '>{name}</h3>
                    {role && (
                        <p className='text-xs text-[var(--primary)] bg-[#b2e3ffb4] backdrop-blur-sm inset-shadow-sm  rounded-xl px-3 py-1 w-fit'>{role}</p>
                    )}
                </div>

                {/* Member Details (hover) */}
                <div className="member-details flex flex-col justify-evenly px-5 py-3 bg-white shadow-lg/30 rounded-xl absolute left-[50%] -bottom-50 w-auto -translate-x-1/2 h-fit mx-auto z-10">
                    {/* <div className='flex flex-col justify-center'>
                        <h3 className='text-lg font-semibold'>{name}</h3>
                        <div className='flex items-center '>
                            {year && (
                                <p className='text-xs'>{year}</p>
                            )}
                            <span><Dot size={24} /></span>
                            <p className='text-xs '>{department}</p>

                        </div>
                    </div> */}

                    {/* Social Buttons */}
                    <div className='flex items-center justify-center gap-4 mt-2'>
                        <a href={linkedInUrl? linkedInUrl:"#"} target="_blank" rel="noopener noreferrer" className='flex items-center justify-center w-8 h-8 rounded-lg text-gray-600 hover:text-blue-700'>
                            <span><Linkedin size={24} /></span>
                        </a>
                        <a href={instagramUrl? instagramUrl:"#"} target="_blank" rel="noopener noreferrer" className='flex items-center justify-center w-8 h-8 rounded-lg text-gray-600 hover:text-pink-500'>
                           <span><Instagram size={24} /></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
