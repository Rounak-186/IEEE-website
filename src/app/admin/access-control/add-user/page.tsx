"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export default function CreateUserPage() {
    const router = useRouter();
    const roleOptions = ["admin", "member"];
    const [formData, setFormData] = useState({ userName: "", email: "", password: "", role: "" });

    // Handle form changes
    const handleChange = (e: string, field: string) => {
        setFormData({
            ...formData,
            [field]: e
        });
    };

    // handle create user
    const [isCreating, setIsCreating] = useState(false);
    const createUser = async () => {
        try {
            setIsCreating(true);
            await axios.post("/api/user/register", formData)
                .then(() => {
                    router.push("/admin/access-control");
                    toast.success("User created successfully");
                })
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data?.message)
            } else {
                toast.error("Something went wrong")
            }
        }
        setIsCreating(false);
    };

    return (
        <div>
            <div className='mb-10'>
                <h5 className='text-2xl font-bold'>Create a user</h5>
                <p className='text-sm text-gray-600'>Specify the role for access control.</p>
            </div>
            <div className='space-y-10'>
                <form action="" className='space-y-4'>
                    <div>
                        <div className='mb-2 text-sm'><label htmlFor="user-name">Username</label></div>
                        <Input
                            placeholder='Enter user name'
                            id='user-name'
                            value={formData.userName}
                            onChange={e => handleChange(e, 'userName')}
                            disabled={isCreating}
                        />
                    </div>
                    <div>
                        <div className='mb-2 text-sm'><label htmlFor="email">Email</label></div>
                        <Input
                            placeholder='Enter email'
                            id='email'
                            type='email'
                            value={formData.email}
                            onChange={e => handleChange(e, 'email')}
                            disabled={isCreating}
                        />
                    </div>
                    <div>
                        <div className='mb-2 text-sm'><label htmlFor="password">Password</label></div>
                        <Input
                            placeholder='Enter password'
                            id='password'
                            type='password'
                            value={formData.password}
                            onChange={e => handleChange(e, 'password')}
                            disabled={isCreating}
                        />
                    </div>
                    <div>
                        <div className='mb-2 text-sm'>User Role</div>
                        <Select
                            options={roleOptions}
                            // defaultValue={formData.role}
                            onChange={value => handleChange(value, 'role')}
                            placeholder='Select user role'
                        />
                    </div>
                </form>
                <Button disabled={isCreating} onClick={createUser}>
                    Create user
                </Button>
            </div>
        </div>
    )
}
