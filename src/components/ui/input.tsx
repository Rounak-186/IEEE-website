"use client";

import clsx from 'clsx';
import { Eye, EyeClosed } from 'lucide-react';
import React, { ChangeEvent, useEffect, useState } from 'react'

type InputProps = {
    id?: string,
    placeholder?: string,
    value?: string,
    type?: string,
    onChange?: (e: string) => void,
    required?: boolean,
    disabled?: boolean,
    placeholderClass?: string
    className?:string
}

export const Input = ({ placeholder, value, type = 'text', onChange, id, required, disabled, placeholderClass, className }: InputProps) => {

    // states for input 
    const [input, setInput] = useState<string>(value || "");
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [inputType, setInputType] = useState<string>(type)


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

    // handle password type input
    useEffect(() => {
        if (type === "password")
            setInputType(showPassword ? "text" : "password")
    }, [showPassword])

    const uid = id || Math.random().toString(36).substring(2, 15);

    return (
        <div className={clsx('w-full flex items-center relative  box ', className)}>
            <label
                htmlFor={uid}
                className={clsx('absolute ml-3 transition-all duration-300 px-1 text-[var(--primary)] ', (isFocused || input != "") && '-translate-y-5 scale-90 bg-[var(--background)]', placeholderClass)}>
                {placeholder}
            </label>
            <input
                id={uid}
                value={input}
                type={inputType}
                onChange={(e) => handleChange(e)}
                onFocus={handleFocus} onBlur={handleBlur}
                className={clsx('w-full py-2 px-4 outline-none border border-[var(--primary)] rounded-md', 'focus-visible:ring-[var(--accent)] focus-visible:ring-[3px] rounded-md')} />
            {type === 'password' &&
                <label htmlFor={uid} className='text-[var(--primary)] absolute right-3' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <Eye /> : <EyeClosed />}
                </label>
            }
        </div>
    )
}
