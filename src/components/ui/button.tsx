import clsx from 'clsx'
import React from 'react'

type ButtonProps = {
    children: React.ReactNode,
    className?: string,
    disabled?: boolean,
    active?: boolean,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    variant: 'primary' | 'nav' | 'outline'
}

export const Button = ({ children, className, disabled, active, onClick, variant }: ButtonProps) => {

    const variants: Record<string, string> = {
        'primary': 'bg-[var(--primary)] text-white',
        'nav': "bg-transparent text-[var(--foreground)] hover:bg-[#77777740] !rounded-lg active:bg-[var(--primary)] active:text-white",
        'outline': "bg-transparent border-[var(--primary)] border-2 rounded-md p-2 "
    }

    return (
        <button className={clsx('hover:brightness-120 disabled:brightness-70 disabled:cursor-not-allowed cursor-pointer transition-all duration-200 rounded-xl', 'flex items-center gap-2  px-4 py-2 border-1 border-transparent', active && '', variants[variant], className)}>
            {children}
        </button>
    )
}