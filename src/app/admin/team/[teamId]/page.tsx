"use client";

import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Pencil, Plus } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

export default function TeamEditPage() {
    const router = useRouter();
    const pathname = usePathname();
    return (
        <div>
            <div className='mb-10'>
                <h5 className='text-2xl font-bold'>Edit Team</h5>
                <p className='text-sm text-gray-600'>Add, remove or edit team members.</p>
            </div>
            <div className='space-y-6'>
                <div>
                    <h5 className='mb-3'>Team Details</h5>
                    <div className='mb-5'>
                        <Input placeholder='Team name' />
                    </div>
                    <Button variant='success'>
                        Save changes
                    </Button>
                </div>

                <div>
                    <div className='flex items-center justify-between mb-4'>
                        <h5 className='text-xl mb-4'>Members</h5>
                        <Button onClick={() => router.push(`${pathname}/member?tab=create`)}>
                            <Plus size={15} />
                            Add new member
                        </Button>
                    </div>
                    <div className='space-y-2'>
                        <div className='flex items-center justify-between bg-gray-200 p-3 rounded-xl'>
                            <div className='flex items-center gap-3'>
                                <Avatar />
                                <h5>Member name</h5>
                            </div>
                            <div>
                                <Button>
                                    <Pencil size={15} />
                                    Edit member
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
