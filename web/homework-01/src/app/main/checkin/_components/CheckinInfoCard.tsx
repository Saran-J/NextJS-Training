import React from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';
import Link from 'next/link';

export interface CheckinInfoCardProps {
    title: string;
    icon?: LucideIcon;
    iconColor?: string;
    iconBgColor?: string;
    description: string;
    linkText: string;
    linkTextColor?: string;
    linkHref?: string;
}

export default function CheckinInfoCard({
    title,
    icon: Icon,
    iconColor,
    iconBgColor,
    description,
    linkText,
    linkTextColor,
    linkHref = '#',
}: CheckinInfoCardProps) {
    return (
        <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white border-1 border-border-primary shadow-lg shadow-[rgba(0,0,0,0.1)] w-full h-full mx-auto mt-6">
            <div className="flex items-center gap-3">
                {Icon && (
                    <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: iconBgColor }}
                    >
                        <Icon className="w-5 h-5" style={{ color: iconColor }} />
                    </div>
                )}
                <h3 className="text-lg font-bold text-gray-800">
                    {title}
                </h3>
            </div>

            <p className="text-base font-normal text-gray-600 whitespace-pre-line">
                {description}
            </p>

            <Link href={linkHref} className={`flex items-center gap-2 ${linkTextColor} hover:text-primary-light transition-colors font-bold self-start`}>
                <span>{linkText}</span>
                <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
    );
}
