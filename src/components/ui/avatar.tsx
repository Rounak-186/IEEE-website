import clsx from 'clsx'
import { UserRound } from 'lucide-react'
import React from 'react'

export const Avatar = ({ src, className }: { src?: string, className?: string }) => {
    return (
        <div className={clsx('w-10 h-10 rounded-full flex items-center justify-center overflow-hidden', className)}>
            {src
                ? <img src={src} alt="" />

                : <div className='w-full h-full bg-gray-300 flex items-center justify-center'>
                    <UserRound className='text-gray-800 w-[60%] h-[60%]' />
                </div>
            }
        </div>
    )
}
