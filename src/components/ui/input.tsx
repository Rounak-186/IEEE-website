"use client";

import clsx from 'clsx';
import React, { ChangeEvent, useState } from 'react'

type InputProps = {
    id?: string,
    placeholder?: string,
    value?: string,
    type?: string,
    onChange?: (e: string) => void
}

export const Input = ({ placeholder, value, type = 'text', onChange, id }: InputProps) => {

    // states for input 
    const [input, setInput] = useState<string>(value || "");
    const [isFocused, setIsFocused] = useState<boolean>(false)


    // Handle Input Change
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        setInput(val);
        onChange?.(val)
    }

    const handleFocus = () => {
        setIsFocused(true)
    }

    const handleBlur = () => {
        setIsFocused(false)
    }

    const uid = id || Math.random().toString(36).substring(2,15);

    return (
        <div className='w-full flex items-center relative m-2'>
            <label htmlFor={uid} className={clsx('absolute ml-3 transition-all duration-300',(isFocused || input!="") && '-translate-y-6 scale-90' )}>
                {placeholder}
            </label>
            <input value={input} type={type} onChange={(e) => handleChange(e)} onFocus={handleFocus} onBlur={handleBlur} className={clsx('py-2 pt-4 px-4')}/>
        </div>
    )
}
