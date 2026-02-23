import React from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';
import Link from 'next/link';

export interface CheckinInfoCardProps {
    title: string;
    icon?: LucideIcon;
    description: string;
    linkText: string;
    linkHref?: string;
}

export default function CheckinInfoCard({
    title,
    icon: Icon,
    description,
    linkText,
    linkHref = '#',
}: CheckinInfoCardProps) {
    return (
        <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white border-1 border-border-primary shadow-lg shadow-[rgba(0,0,0,0.1)] w-full h-full mx-auto mt-6">
            <div className="flex items-center gap-2">
                {Icon && <Icon className="w-6 h-6 text-gray-800" />}
                <h3 className="text-lg font-bold text-gray-800">
                    {title}
                </h3>
            </div>

            <p className="text-base font-normal text-gray-600 whitespace-pre-line">
                {description}
            </p>

            <Link href={linkHref} className="flex items-center gap-2 text-primary hover:text-primary-light transition-colors font-bold self-start">
                <span>{linkText}</span>
                <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
    );
}
