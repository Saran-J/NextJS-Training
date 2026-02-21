import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    buttonTitle: string;
    isActive?: boolean;
    roundCorner?: number | string;
    activeBgClass?: string;
    inactiveBgClass?: string;
}

export const Button: React.FC<ButtonProps> = ({
    buttonTitle,
    isActive = true,
    roundCorner = 16,
    activeBgClass = 'bg-button-primary',
    inactiveBgClass = 'bg-button-primary-light',
    className = '',
    style,
    ...props
}) => {
    const baseStyle = "flex items-center justify-center px-6 py-2.5 font-medium text-white transition-all text-sm md:text-base";
    const activeStyle = `hover:brightness-110 cursor-pointer shadow-sm md:shadow-md ${activeBgClass}`;
    const inactiveStyle = `opacity-80 hover:opacity-100 cursor-pointer ${inactiveBgClass}`;

    const combinedClassName = `${baseStyle} ${isActive ? activeStyle : inactiveStyle} ${className}`.trim();

    const customStyle: React.CSSProperties = {
        borderRadius: typeof roundCorner === 'number' ? `${roundCorner}px` : roundCorner,
        color: '#ffffff',
        ...style,
    };

    return (
        <button className={combinedClassName} style={customStyle} {...props}>
            {buttonTitle}
        </button>
    );
};

export default Button;
