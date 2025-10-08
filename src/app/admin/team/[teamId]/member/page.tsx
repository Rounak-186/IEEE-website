"use client";

import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PopupBox } from '@/components/ui/popupBox'
import { Selection } from '@/components/ui/selection'
import { Camera } from 'lucide-react'
import { useSearchParams } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react'
import Cropper, { Area } from 'react-easy-crop';

export default function MemberAddPage() {
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
        name: "",
        about: "",
        email: "",
        studyYear: "",
        depertment: "",
        role: "",
        linkedin: "",
        instagram: ""
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
                <h5 className='text-2xl font-bold'>{tab === 'create' ? "Add new member" : "Edit member"}</h5>
            </div>
            <div className='mb-10'>
                <h5 className='mb-6'>Member details</h5>
                <div className='space-y-2'>
                    <div>
                        <div className='mb-2 text-sm'><label htmlFor="member-name">Name</label></div>
                        <Input
                            placeholder='Member name'
                            id='member-name'
                            value={formData.name}
                            onChange={e => handleChange(e, 'name')}
                        />
                    </div>
                    <div>
                        <div className='mb-2 text-sm'><label htmlFor="member-about">About</label></div>
                        <Input
                            placeholder='Member about'
                            id='member-about'
                            value={formData.about}
                            onChange={e => handleChange(e, 'about')}
                        />
                    </div>
                    <div>
                        <div className='mb-2 text-sm'><label htmlFor="member-email">Email</label></div>
                        <Input
                            type='email'
                            placeholder='Member email'
                            id='member-email'
                            value={formData.email}
                            onChange={e => handleChange(e, 'email')}
                        />
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                            <div className='mb-2 text-sm'>Study year</div>
                            <Selection
                                options={yearOptions}
                                defaultValue={formData.studyYear}
                                onChange={value => handleChange(value, 'studyYear')}
                            />
                        </div>
                        <div>
                            <div className='mb-2 text-sm'>Depertment</div>
                            <Selection
                                options={depertmentOptions}
                                defaultValue={formData.depertment}
                                onChange={value => handleChange(value, 'depertment')}
                            />
                        </div>
                    </div>
                    <div>
                        <div className='mb-2 text-sm'><label htmlFor="member-role">Role</label></div>
                        <Input
                            placeholder='Member Role'
                            id='member-role'
                            value={formData.role}
                            onChange={e => handleChange(e, 'role')}
                        />
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                            <div className='mb-2 text-sm'><label htmlFor="linkedin">LinkedIn</label></div>
                            <Input
                                placeholder='Linkedin profile'
                                id='linkedin'
                                value={formData.linkedin}
                                onChange={e => handleChange(e, 'linkedin')}
                            />
                        </div>
                        <div>
                            <div className='mb-2 text-sm'><label htmlFor="instagram">Instagram</label></div>
                            <Input
                                placeholder='Instagram profile'
                                id='instagram'
                                value={formData.instagram}
                                onChange={e => handleChange(e, 'instagram')}
                            />
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div>
                            <Avatar className='w-20 h-20' />
                        </div>
                        <label htmlFor='member-profile' className='cursor-pointer bg-gray-200 p-2 rounded-xl'>
                            <Camera />
                            <input
                                type="file"
                                name=""
                                id="member-profile"
                                accept='image/*'
                                multiple={false}
                                className='hidden'
                                onChange={async (e) => {
                                    if (e.target.files && e.target.files.length > 0) {
                                        setFile(e.target.files[0]);
                                        setIsImageCropperOpen(true);
                                    }
                                }}
                            />
                        </label>
                        <p>Add profile picture</p>
                    </div>
                </div>
            </div>
            <div className='flex gap-3 justify-end'>
                {tab !== 'create' && <Button className='bg-red-400'>Remove member</Button>}
                {tab === 'create'
                    ? <Button variant='success'>Add member</Button>
                    : <Button variant='success'>Save changes</Button>
                }
            </div>
            <ImageCropper
                openState={isImageCropperOpen}
                onClose={() => { setIsImageCropperOpen(false); setFile(null) }}
                file={file}
                onCropComplete={blob => setCroppedFile(blob)}
            />
        </div>
    )
}

// Image cropper component
const ImageCropper = ({ openState, onClose, file, onCropComplete }: { openState: boolean, onClose: () => void, file: File | null, onCropComplete: (croppedFile: File | null) => void }) => {
    const [imageSrc, setImageSrc] = useState<string>('');
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

    // Load the file as data URL
    useEffect(() => {
        if (!file) return;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImageSrc(reader.result as string);
        };
    }, [file]);

    const onCropDone = async () => {
        if (!croppedAreaPixels) return;
        const croppedBlob = await getCroppedImg(imageSrc, croppedAreaPixels);
        const croppedFile = new File([croppedBlob], `cropped_${file?.name}`, { type: file?.type });
        onCropComplete(croppedFile);
        onClose();
        setImageSrc('');
    };

    const onCropCompleteHandler = useCallback((_: Area, croppedPixels: Area) => {
        setCroppedAreaPixels(croppedPixels);
    }, []);

    return (
        <PopupBox openState={openState} onClose={onClose} >
            <div >
                <div className='md:w-[80vw] w-[90vw] md:h-[65svh] h-[80svh] overflow-y-auto relative mb-3'>
                    <Cropper
                        image={imageSrc}
                        crop={crop}
                        zoom={zoom}
                        aspect={1}
                        onCropChange={setCrop}
                        onZoomChange={setZoom}
                        onCropComplete={onCropCompleteHandler}
                    />
                </div>
                <div className='flex items-center justify-end gap-3'>
                    <Button variant='outline' onClick={onClose}>Cancel</Button>
                    <Button variant='primary' onClick={onCropDone}>Crop & save</Button>
                </div>
            </div>
        </PopupBox>
    )
};

// cropped image creater
async function getCroppedImg(imageSrc: string, crop: any): Promise<Blob> {
    const image = new Image();
    image.src = imageSrc;
    await new Promise((resolve) => (image.onload = resolve));

    const canvas = document.createElement('canvas');
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d')!;

    ctx.drawImage(
        image,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
    );

    return new Promise((resolve) => {
        canvas.toBlob((blob) => {
            if (blob) resolve(blob);
        }, 'image/jpeg');
    });
};
