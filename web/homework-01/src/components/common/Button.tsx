import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    buttonTitle: string;
    isActive?: boolean;
    roundCorner?: number | string;
    activeBgColor?: string;
    inactiveBgColor?: string;
}

export const Button: React.FC<ButtonProps> = ({
    buttonTitle,
    isActive = true,
    roundCorner = 16,
    activeBgColor = '#3c85be',
    inactiveBgColor = '#8ab5d9',
    className = '',
    style,
    ...props
}) => {
    const baseStyle = "flex items-center justify-center px-6 py-2.5 font-medium text-white transition-all text-sm md:text-base";
    const activeStyle = "hover:brightness-110 cursor-pointer shadow-sm md:shadow-md";
    const inactiveStyle = "opacity-80 hover:opacity-100 cursor-pointer";

    const combinedClassName = `${baseStyle} ${isActive ? activeStyle : inactiveStyle} ${className}`.trim();

    const customStyle: React.CSSProperties = {
        borderRadius: typeof roundCorner === 'number' ? `${roundCorner}px` : roundCorner,
        backgroundColor: isActive ? activeBgColor : inactiveBgColor,
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
