"use client";

import clsx from "clsx";
import React, { ChangeEvent, useState } from "react";

type TextAreaProps = {
  id?: string;
  placeholder?: string;
  value?: string;
  rows?: number;
  onChange?: (val: string) => void;
  required?: boolean;
  disabled?: boolean;
  placeholderClass?: string;
  className?: string;
};

export const TextArea = ({
  id,
  placeholder,
  value,
  rows = 6,
  onChange,
  required,
  disabled,
  placeholderClass,
  className,
}: TextAreaProps) => {
  const [input, setInput] = useState<string>(value || "");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setInput(val);
    onChange?.(val);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const uid = id || Math.random().toString(36).substring(2, 15);

  return (
    <div className={clsx("w-full relative box", className)}>
      <label
        htmlFor={uid}
        className={clsx(
          "absolute ml-3 mt-2 transition-all duration-300 px-1 text-[var(--primary)]",
          (isFocused || input !== "") && "-translate-y-5 scale-90 bg-[var(--background)]",
          placeholderClass
        )}
      >
        {placeholder}
      </label>

      <textarea
        id={uid}
        value={input}
        rows={rows}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={clsx(
          "w-full py-3 px-4 rounded-md border border-[var(--primary)] outline-none resize-vertical",
          "focus-visible:ring-[var(--accent)] focus-visible:ring-[3px]"
        )}
        required={required}
        disabled={disabled}
      />
    </div>
  );
};
