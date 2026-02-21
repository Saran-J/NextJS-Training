import React from 'react';

export interface CommonTextfieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'title' | 'placeholder'> {
    title: string;
    placeholder: string;
}

export const CommonTextfield: React.FC<CommonTextfieldProps> = ({
    title,
    placeholder,
    className = '',
    id,
    ...props
}) => {
    // 1. Clean JSX: Separate complex Tailwind classes into descriptive variables
    // 2. Mobile-First Approach: Base text-sm, then text-base for md+
    // 3. Force Light Mode: bg-white, border-gray-300, text-black (no dark variants)
    const containerStyle = "flex flex-col gap-1.5 w-full";
    const labelStyle = "font-medium text-gray-700 text-sm md:text-base";
    const inputStyle = "w-full px-4 py-2.5 bg-white text-black border border-gray-300 rounded-lg outline-none focus:border-[#3c85be] focus:ring-1 focus:ring-[#3c85be] transition-colors placeholder-gray-400 text-sm md:text-base";

    return (
        <div className={`${containerStyle} ${className}`.trim()}>
            <label htmlFor={id} className={labelStyle}>
                {title}
            </label>
            <input
                id={id}
                type="text"
                placeholder={placeholder}
                className={inputStyle}
                {...props}
            />
        </div>
    );
};

export default CommonTextfield;
