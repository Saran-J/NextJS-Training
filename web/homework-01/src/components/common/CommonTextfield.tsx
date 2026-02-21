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
    const containerStyle = "flex flex-col gap-1.5 w-full";
    const labelStyle = "font-bold text-gray-700 text-sm md:text-base";
    const inputStyle = "w-full px-4 py-2.5 bg-white text-black border border-gray-300 rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-gray-400 text-sm md:text-base";

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
