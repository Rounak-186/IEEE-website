"use client";

import React from "react";


interface DropdownSelectProps {
    options: string[];
    defaultValue?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
}

export const Selection: React.FC<DropdownSelectProps> = ({
    options,
    defaultValue,
    placeholder = "Select an option",
    onChange,
}) => {
    const [selected, setSelected] = React.useState<string>(
        defaultValue || ""
    );

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelected(value);
        if (onChange) onChange(value);
    };

    return (
        <div className="w-full">
            <select
                value={selected}
                onChange={handleChange}
                className="w-full py-2 px-4 border border-[var(--primary)] text-gray-700 focus:outline-none focus-visible:ring-[var(--accent)] focus-visible:ring-[3px] rounded-md bg-transparent"
            >
                {!defaultValue && (
                    <option value="" disabled hidden>
                        {placeholder}
                    </option>
                )}
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};