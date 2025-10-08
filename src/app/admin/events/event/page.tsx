"use client";

import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PopupBox } from '@/components/ui/popupBox'
import { Selection } from '@/components/ui/selection'
import { Camera, Image, ImagePlus } from 'lucide-react'
import { useSearchParams } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react'
import Cropper, { Area } from 'react-easy-crop';

export default function EventAddPage() {
    const yearOptions = [
        '1st year',
        '2nd year',
        '3rd year',
        '4th year',
    ];
    const depertmentOptions = [
        'INFORMATION TECHNOLOGY',
        'COMPUTER SIENCE',
        'ELECTRONICS AND COMMUNICATION',
        'ELECTRICAL ENGINEERING',
        'MECHANICAL ENGINEERING',
        'CIVIL ENGINEERING',
    ];

    // handle tabs
    const searchParams = useSearchParams();
    const tab = searchParams.get('tab');

    // handle inputs
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: "",
        time: "",
        eventType: "",
        location: "",
    });
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    // Handle form changes
    const handleChange = (e: string, field: string) => {
        setFormData({
            ...formData,
            [field]: e
        });
    };

    // image cropper
    const [isImageCropperOpen, setIsImageCropperOpen] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [croppedFile, setCroppedFile] = useState<File | null>(null);
    const [fileUploadLoading, setFileUploadLoading] = useState<boolean>(false);

    return (
        <div>
            <div className='mb-10'>
                <h5 className='text-2xl font-bold'>{tab === 'create' ? "Add new Event" : "Edit Event"}</h5>
            </div>
            <div className='mb-10'>
                <h5 className='mb-6'>Event details</h5>
                <div className='space-y-2'>
                    <div>
                        <div className='mb-2 text-sm'><label htmlFor="event-title">Event title</label></div>
                        <Input
                            placeholder='Title'
                            id='event-title'
                            value={formData.title}
                            onChange={e => handleChange(e, 'title')}
                        />
                    </div>
                    <div>
                        <div className='mb-2 text-sm'><label htmlFor="event-description">Event description</label></div>
                        <Input
                            placeholder='Description'
                            id='event-description'
                            value={formData.description}
                            onChange={e => handleChange(e, 'description')}
                        />
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                            <div className='mb-2 text-sm'><label htmlFor="event-date">Date</label></div>
                            <input type="date" name="" id="event-date" className='form-control' value={formData.date} onChange={e => handleChange(e.target.value, 'date')} />
                        </div>
                        <div>
                            <div className='mb-2 text-sm'><label htmlFor="event-time">Time</label></div>
                            <input type="time" name="" id="event-time" className='form-control' value={formData.time} onChange={e => handleChange(e.target.value, 'time')} />
                        </div>
                    </div>
                    <div>
                        <div className='mb-2 text-sm'><label htmlFor="location">Location</label></div>
                        <Input
                            placeholder='Location'
                            id='location'
                            value={formData.location}
                            onChange={e => handleChange(e, 'location')}
                        />
                    </div>
                    <div>
                        <div className='mb-2 text-sm'><label htmlFor="event-type">Event type</label></div>
                        <Input
                            placeholder='Event type'
                            id='event-type'
                            value={formData.eventType}
                            onChange={e => handleChange(e, 'eventType')}
                        />
                    </div>
                    <div className='flex items-center gap-3'>
                        <label htmlFor="event-image" className='cursor-pointer'>
                            <div className='mb-2 text-sm'>Add Event image</div>
                            <ImagePlus size={50} />
                        </label>
                        <input type="file" id="event-image" className='hidden' />
                    </div>
                </div>
            </div>
            <div className='flex gap-3 justify-end'>
                {tab !== 'create' && <Button className='bg-red-400'>Remove event</Button>}
                {tab === 'create'
                    ? <Button variant='success'>Add Event</Button>
                    : <Button variant='success'>Save changes</Button>
                }
            </div>
        </div>
    )
}