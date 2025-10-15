import { Calendar, MapPin } from 'lucide-react';
import { Instagram, Linkedin } from 'lucide-react';
import React from 'react';

type TeamMemberCardProps = {
    name: string;
    role?: string;     // for top overlay
    year?: string;     // for details section
    department: string;
    coverImage?: string;
};

export default function TeamMemberCard({ name, role, year, department, coverImage }: TeamMemberCardProps) {
    return (
        <div className='member-card flex flex-col justify-center gap-5 p-2 rounded-lg border-2 border-[var(--primary)] shadow-md relative bg-gradient-to-b from-[var(--card)] to-[var(--primary)] w-[300px] h-[400px] overflow-hidden'>

            {/* Cover Image */}
            <img
                src={coverImage ?? "https://picsum.photos/400/300"}
                alt={`${name} cover`}
                className='rounded-lg object-cover w-full h-[100%]'
            />

            {/* Name and Role */}
            <div className="flex flex-col justify-center gap-1 w-[90%] absolute bottom-3 left-1/2 -translate-x-1/2  bg-[#a8a8a849] backdrop-blur-sm rounded-xl p-3">
                <h3 className='text-2xl font-bold text-white'>{name}</h3>
                {role && (
                    <p className='text-sm text-white'>{role}</p>
                )}
            </div>

            {/* Member Details (hover) */}
            <div className="member-details flex flex-col justify-center p-3 bg-[var(--card)] rounded-md absolute left-[50%] -bottom-50 w-[270px] -translate-x-1/2 h-fit mx-auto">
                <h3 className='text-lg font-semibold mb-2'>{name}</h3>

                <div className='flex gap-3 items-center mb-4'>
                    {year && (
                        <div className='flex gap-3 items-center text-white'>
                            <Calendar size={16} fill='var(--primary)' />
                            <p className='text-sm text-[var(--foreground)]'>{year}</p>
                        </div>
                    )}
                    <div className='flex gap-3 items-center text-white'>
                        <MapPin size={16} fill='var(--primary)' />
                        <p className='text-sm text-[var(--foreground)]'>{department}</p>
                    </div>
                </div>

                {/* Social Buttons */}
                <div className='flex gap-4 mt-2'>
                    <a href="#" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center w-10 h-10 rounded-full bg-[#E1306C] text-white'>
                        <Instagram size={20} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center w-10 h-10 rounded-full bg-[#0A66C2] text-white'>
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </div>
    )
}
