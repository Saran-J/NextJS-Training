"use client";

import React from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

export interface TabBarItemProps {
    label: string;
    href: string;
    icon: LucideIcon;
    isActive?: boolean;
}

export default function TabBarItem({ label, href, icon: Icon, isActive = false }: TabBarItemProps) {
    return (
        <Link
            href={href}
            className={`flex flex-col items-center justify-center gap-1 flex-1 py-2 transition-colors ${isActive ? "text-[#3a5a7c]" : "text-gray-400"
                }`}
        >
            <Icon size={24} strokeWidth={1.5} />
            <span className="text-[10px] font-medium leading-tight text-center">{label}</span>
        </Link>
    );
}
