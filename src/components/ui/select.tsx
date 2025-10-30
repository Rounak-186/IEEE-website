"use client";

import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import React, { KeyboardEvent, useEffect, useRef, useState } from "react";

type Option = { label: string; value: string } | string;

type SelectProps = {
  id?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  options?: Option[];
  onChange?: (val: string) => void;
  required?: boolean;
  disabled?: boolean;
  placeholderClass?: string;
  className?: string;
};

export const Select = ({
  id,
  name,
  placeholder,
  value,
  options = [],
  onChange,
  required,
  disabled,
  placeholderClass,
  className,
}: SelectProps) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string>(value ?? "");
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const normalized = options.map((o) =>
    typeof o === "string" ? { label: o, value: o } : o
  );

  useEffect(() => {
    setSelected(value ?? "");
  }, [value]);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("mousedown", handleOutside);
    return () => window.removeEventListener("mousedown", handleOutside);
  }, []);

  const uid = id || Math.random().toString(36).substring(2, 15);

  function selectValue(val: string) {
    setSelected(val);
    onChange?.(val);
    setOpen(false);
  }

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      setOpen((s) => !s);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <div className="relative"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      ref={ref}
    >
      <div
        className={clsx('w-full py-1 h-fit flex items-center relative border border-gray-400 focus-within:border-[var(--primary)] focus-within:ring-[var(--accent)] focus-within:ring-[1px] rounded-2xl transition-all duration-150', className)}
      >
        <label
          htmlFor={uid}
          className={clsx('absolute ml-3 transition-all duration-200 px-1 text-foreground cursor-text z-1 origin-left', (isFocused || selected != "") && '!text-[var(--primary)] -translate-y-3 scale-80', placeholderClass)}
        >
          {placeholder}
        </label>

        <div
          id={uid}
          role="button"
          tabIndex={disabled ? -1 : 0}
          aria-haspopup="listbox"
          aria-expanded={open}
          className={clsx(
            'w-full resize-y min-h-10 py-2 px-4 outline-none border-none bg-transparent',
            (isFocused || selected != "") && 'translate-y-2',
            disabled && "opacity-50 cursor-not-allowed"
          )}
          onClick={() => !disabled && setOpen((s) => !s)}
          onKeyDown={onKeyDown}
        >
          <span className="truncate">{selected === "" ? "" : normalized.find((o) => o.value === selected)?.label ?? selected}</span>
        </div>
        <div className="absolute top-1/2 right-4 -translate-y-1/2">
          <ChevronDown size={16} className="text-[var(--primary)]" />
        </div>
      </div>
      {/* dropdown */}
      {(open && !disabled) && (
        <ul
          role="listbox"
          aria-labelledby={uid}
          className="absolute left-0 w-full mt-1 bg-white border border-[var(--primary)] rounded-md shadow-md z-50 max-h-56 overflow-auto"
        >
          {normalized.map((opt) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={selected === opt.value}
              tabIndex={0}
              className={clsx(
                "px-4 py-2 hover:bg-[var(--accent)] hover:text-white cursor-pointer",
                selected === opt.value && "font-semibold bg-[var(--accent)] text-white"
              )}
              onClick={() => selectValue(opt.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  selectValue(opt.value);
                }
              }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};