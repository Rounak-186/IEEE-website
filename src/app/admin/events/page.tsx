import { Button } from '@/components/ui/button'
import { Calendar, Pencil, Plus } from 'lucide-react'
import React from 'react'

export default function EventAdminPage() {

    return (
        <div>
            <div className='mb-10'>
                <h5 className='text-2xl font-bold'>Manage Events</h5>
                <p className='text-sm text-gray-600'>Add, remove or edit events</p>
            </div>
            <div className='space-y-6'>
                <div>
                    <Button variant='primary'>
                        <Plus size={15} />
                        Create new Event
                    </Button>
                </div>
                <div>
                    <h5 className='text-xl mb-3'>Events</h5>
                    <div className='space-y-2'>
                        <div className='p-2 bg-gray-200 rounded-xl flex items-center gap-3 justify-between'>
                            <div className='flex items-center gap-3'>
                                <div className='p-3 rounded-xl w-fit bg-blue-300'><Calendar size={25} className='text-blue-500' /></div>
                                <div>
                                    <h5 className='text-xl'>Event name</h5>
                                </div>
                            </div>
                            <div>
                                <Button variant='success'>
                                    <Pencil size={15} />
                                    Edit event
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
