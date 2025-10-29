"use client"
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/authContext';
import axios from 'axios';
import { Edit, Pen, Plus } from 'lucide-react';
import React, { useEffect, useState } from 'react'

export default function AccessPage() {
    const { user } = useAuth();
    const isAdminRole = user?.role === "admin";



    // get user list
    const [userList, setUserList] = useState<Record<string, any>[] | null>(null);
    useEffect(() => {
        (async () => {
            if (user?.role !== "admin") return;
            try {
                await axios.get('/api/user/user-list')
                    .then(res => {
                        const list = res.data.data;
                        setUserList(list);
                    })
            } catch (error) {

            }
        })()
    }, [user])


    return (
        <div className='space-y-7'>
            <div>
                <h2 className='text-2xl font-semibold'>Access Controls</h2>
                <p className='text-gray-700'>Monitor member controls</p>
            </div>
            {/* Current Admin details go here */}
            <div className="bg-[var(--card)] p-4 rounded-lg shadow-md space-y-2">
                <h3 className='text-xl mb-4'>Current Admin Details</h3>
                <p><strong>Admin Name:</strong> {user?.userName}</p>
                <p><strong>Email:</strong> {user?.email}</p>
                <p><strong>Role:</strong> {user?.role}</p>
            </div>
            {/* Other Authorised member Details  */}
            <div>
                {isAdminRole &&
                    <Button className='mb-5'>
                        <Plus size={15} />
                        Add new user
                    </Button>
                }
                <h3 className='text-xl mb-4'>Other users</h3>
                <div className='space-y-4'>
                    {userList?.map((member, index) => (
                        <AuthorizedMemberCard data={member} key={index} />
                    ))}
                </div>
                {userList?.length === 0 && <div className='text-center'>No users found!</div>}
            </div>
        </div>
    )
};

const AuthorizedMemberCard = ({ data }: { data: Record<string, any> }) => {
    return (
        <div className="flex p-2 px-4 bg-white rounded-lg shadow-md justify-between items-center gap-2">
            <div>
                <p>Name: {data?.userName}</p>
                <p>Email: {data?.email}</p>
            </div>
            <div className='flex gap-4'>
                <p className=' bg-gray-200 py-2 px-4 rounded-md flex items-center justify-center w-[250px] m-0'> {data?.role}</p>
                <Button variant='success'>
                    <Pen size={15} />
                    Edit Role
                </Button>
            </div>

        </div>
    )
}
