"use client"
import { Button } from '@/components/ui/button';
import { Edit, Pen } from 'lucide-react';
import React from 'react'

export default function AccessPage() {

    // mock member list
    const authorizedMembers = [
        {
            name: "Rounak Mohata",
            email: "rounak.mohata@example.com",
            role: "Admin"
        },
        {
            name: "Aditi Sharma",
            email: "aditi.sharma@example.com",
            role: "Committee Member"
        },
        {
            name: "Vikram Patel",
            email: "vikram.patel@example.com",
            role: "Committee Member"
        },
        {
            name: "Neha Verma",
            email: "neha.verma@example.com",
            role: "Admin"
        }
    ];


    return (
        <div className='flex flex-col justify-center gap-4'>
            <div>
                <h2 className='text-2xl font-semibold'>Access Controls</h2>
                <p className='text-gray-700'>Monitor member controls</p>
            </div>
            {/* Current Admin details go here */}
            <div className="flex bg-[var(--card)] p-4 rounded-lg shadow-md flex-col gap-2">
                <h3 className='text-xl font-semibold'>Current Admin Details</h3>
                <p>Admin Name: John Doe</p>
                <p>E mail: admin123@gmail.com</p>
            </div>
            {/* Other Authorised member Details  */}
            <div className='rounded-md p-4 bg-[var(--card)]'>
                <h3 className='text-xl font-semibold mb-2 '>Other Authorised Members</h3>
                {authorizedMembers.map((member, index) => (
                    <div key={index} className='mb-2'>
                        {authorizedMemberCard({ name: member.name, email: member.email, role: member.role })}
                    </div>
                ))}
            </div>
        </div>
    )
};

const authorizedMemberCard = ({ name, email, role }: { name: string, email: string, role: string }) => {
    return (
        <div className="flex p-2 px-4 bg-white rounded-lg shadow-md justify-between items-center gap-2">
            <div>
                <p>Admin Name: {name}</p>
                <p>E mail: {email}</p>
            </div>
            <div className='flex gap-4'>
                <p className=' bg-gray-200 py-2 px-4 rounded-md flex items-center justify-center w-[250px] m-0'> {role}</p>
                <Button variant='success'>
                    <Pen size={15} />
                    Edit Role
                </Button>
            </div>

        </div>
    )
}
