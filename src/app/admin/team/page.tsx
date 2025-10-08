"use client";

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PopupBox } from '@/components/ui/popupBox'
import { Pencil, Plus, UsersRound } from 'lucide-react'
import React, { useState } from 'react'

export default function TeamAdminPage() {
    const [isCreateActive, setIsCreateActive] = useState(false);
    return (
        <div>
            <div className='mb-10'>
                <h5 className='text-2xl font-bold'>Manage Teams</h5>
                <p className='text-sm text-gray-600'>Add, remove or edit teams</p>
            </div>
            <div className='space-y-6'>
                <div>
                    <Button variant='primary' onClick={() => setIsCreateActive(true)}>
                        <Plus size={15} />
                        Create new Team
                    </Button>
                </div>
                <div>
                    <h5 className='text-xl mb-3'>Teams</h5>
                    <div className='space-y-2'>
                        <TeamItem />
                        <TeamItem />
                        <TeamItem />
                    </div>
                </div>
            </div>
            <CreateTeamPopup isOpen={isCreateActive} onClose={() => setIsCreateActive(false)} />
        </div>
    )
}

const TeamItem = () => {
    return (
        <div className='p-2 bg-gray-200 rounded-xl flex items-center gap-3 justify-between'>
            <div className='flex items-center gap-3'>
                <div className='p-3 rounded-xl w-fit bg-blue-300'><UsersRound size={25} className='text-blue-500' /></div>
                <div>
                    <h5 className='text-md font-semibold'>Faculty Advisory team</h5>
                </div>
            </div>
            <div>
                <Button variant='success'>
                    <Pencil size={15} />
                    Edit team
                </Button>
            </div>
        </div>
    )
}

const CreateTeamPopup = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    return (
        <PopupBox openState={isOpen} onClose={onClose} className='space-y-6 w-[30em]'>
            <h5 className='text-md font-semibold'>Create new Team</h5>
            <div>
                <Input placeholder='Enter team name' />
            </div>
            <div className='flex justify-end gap-3'>
                <Button variant='outline' onClick={onClose}>
                    Close
                </Button>
                <Button>
                    Create team
                </Button>
            </div>
        </PopupBox>
    )
}
