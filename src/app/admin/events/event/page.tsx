"use client";

import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PopupBox } from '@/components/ui/popupBox'
import { Selection } from '@/components/ui/selection'
import { TextArea } from '@/components/ui/textArea';
import { objectToFormData } from '@/lib/utils/formdata-converter';
import axios from 'axios';
import { Camera, Image, ImagePlus } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react'
import Cropper, { Area } from 'react-easy-crop';
import { toast } from 'react-toastify';

export default function EventAddPage() {
    const router = useRouter();
    // handle tabs
    const searchParams = useSearchParams();
    const tab = searchParams.get('tab');
    const eventId = searchParams.get('id');

    // handle inputs
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: "",
        time: "",
        eventType: "",
        location: "",
        thumbnail: ""
    });
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);

    // Handle form changes
    const handleChange = (e: string, field: string) => {
        setFormData({
            ...formData,
            [field]: e
        });
    };

    // fetch the event
    useEffect(() => {
        (async () => {
            if (!eventId || tab != "edit") return;
            try {
                await axios.get(`/api/event/get?id=${eventId}`)
                    .then((res) => {
                        const data = res.data.data;
                        if (data)
                            setFormData(data);
                        setPreviewUrl(data?.thumbnail);
                    });
            } catch (error) {
                toast.error("Faild to fetch event");
            }
        })();
    }, [tab, eventId]);

    // handle preview image
    useEffect(() => {
        if (file) {
            setPreviewUrl(URL.createObjectURL(file))
        }
    }, [file]);

    // create new event
    const handleCreateNewEvent = async () => {
        try {
            const data = {
                ...formData,
                thumbnail: file || formData.thumbnail
            }
            const payLoads = objectToFormData(data)
            await axios.post("/api/event/create", payLoads, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
                .then(() => {
                    toast.success("Event created successfully");
                    router.push("/admin/events");
                })
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data?.message)
            }
        }
    }

    // create new event
    const handleEditEvent = async () => {
        try {
            const data = {
                eventId,
                ...formData,
                thumbnail: file || formData.thumbnail
            }
            const payLoads = objectToFormData(data)
            await axios.patch("/api/event/update", payLoads, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
                .then(() => {
                    toast.success("Event updated successfully");
                })
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data?.message)
            }
        }
    }

    // handle button click
    const [isLoading, setIsLoading] = useState(false)
    const handleButtonClick = async () => {
        setIsLoading(true);

        if (tab === "create")
            await handleCreateNewEvent();
        else if (tab === "edit" && eventId)
            await handleEditEvent();

        setIsLoading(false);
    }

    // delete event
    const handleDeleteEvent = async () => {
        try {
            if (!eventId) return;
            await axios.delete(`/api/event/remove?id=${eventId}`)
                .then(() => {
                    toast.success("Event removed successfully");
                    router.push(`/admin/events`);
                })
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data?.message)
            }
        }
    }

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
                            disabled={isLoading}
                        />
                    </div>
                    <div>
                        <div className='mb-2 text-sm'><label htmlFor="event-description">Event description</label></div>
                        <TextArea
                            placeholder='Description'
                            id='event-description'
                            value={formData.description}
                            onChange={e => handleChange(e, 'description')}
                            disabled={isLoading}
                        />
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                            <div className='mb-2 text-sm'><label htmlFor="event-date">Date</label></div>
                            <Input type="date" id="event-date" className='form-control' value={formData.date} onChange={e => handleChange(e, 'date')} disabled={isLoading} />
                        </div>
                        <div>
                            <div className='mb-2 text-sm'><label htmlFor="event-time">Time</label></div>
                            <Input type="time" id="event-time" className='form-control' value={formData.time} onChange={e => handleChange(e, 'time')} disabled={isLoading} />
                        </div>
                    </div>
                    <div>
                        <div className='mb-2 text-sm'><label htmlFor="location">Location</label></div>
                        <Input
                            placeholder='Location'
                            id='location'
                            value={formData.location}
                            onChange={e => handleChange(e, 'location')}
                            disabled={isLoading}
                        />
                    </div>
                    <div>
                        <div className='mb-2 text-sm'><label htmlFor="event-type">Event type</label></div>
                        <Input
                            placeholder='Event type'
                            id='event-type'
                            value={formData.eventType}
                            onChange={e => handleChange(e, 'eventType')}
                            disabled={isLoading}
                        />
                    </div>
                    <div className='flex items-center gap-3'>
                        <label htmlFor="event-image" className='cursor-pointer'>
                            <div className='mb-2 text-sm'>Add Event image</div>
                            <ImagePlus size={50} />
                        </label>
                        <input type="file" id="event-image" className='hidden' onChange={e => setFile(e.target.files![0])} disabled={isLoading} />
                    </div>
                    {previewUrl &&
                        <div>
                            <img src={previewUrl} alt="" className='w-[50%]' />
                        </div>
                    }
                </div>
            </div>
            <div className='flex gap-3 justify-end'>
                {tab !== 'create' &&
                    <Button
                        className='bg-red-400'
                        disabled={isLoading}
                        onClick={handleDeleteEvent}
                    >
                        Remove event
                    </Button>
                }
                <Button
                    variant='success'
                    onClick={handleButtonClick}
                    disabled={isLoading}
                >
                    {tab === "create" ? "Add Event" : "Save Event"}
                </Button>
            </div>
        </div>
    )
}