import React from 'react';
import { Check } from 'lucide-react';

export interface TravelTipItemProps {
    title: string;
    description: string;
}

export default function TravelTipItem({ title, description }: TravelTipItemProps) {
    return (
        <div className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-0.5">
                <Check className="w-5 h-5 text-green-500" />
            </div>
            <div className="flex flex-col gap-1">
                <h4 className="text-base font-semibold text-gray-800">{title}</h4>
                <p className="text-sm font-normal text-gray-600">
                    {description}
                </p>
            </div>
        </div>
    );
}
