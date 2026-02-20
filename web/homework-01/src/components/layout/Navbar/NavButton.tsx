import React from 'react';

"use client";

export interface NavButtonProps {
    title: string;
    isActive?: boolean;
    onClick?: () => void;
}

export default function NavButton({ title, isActive = false, onClick }: NavButtonProps) {

    const activeStyle = "text-blue-600 underline underline-offset-4";
    const inactiveStyle = "text-black no-underline";
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 font-medium transition-colors ${isActive ? activeStyle : inactiveStyle}
                }`}
        >
            {title}
        </button>
    );
}
