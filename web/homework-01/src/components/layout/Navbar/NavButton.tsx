"use client";

import React from 'react';
import Link from 'next/link';



export interface NavButtonProps {
    title: string;
    isActive?: boolean;
    href: string;
}

export default function NavButton({ title, isActive = false, href }: NavButtonProps) {
    const activeStyle = "text-[#3a83c1] underline underline-offset-4";
    const inactiveStyle = "text-black no-underline";
    return (
        <Link
            href={href}
            className={`px-4 py-2 font-semibold transition-colors ${isActive ? activeStyle : inactiveStyle}`}
        >
            {title}
        </Link>
    );
}
