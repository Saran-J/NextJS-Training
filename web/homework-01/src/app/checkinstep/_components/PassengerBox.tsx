"use client";

import React, { useState } from 'react';
import { Check } from 'lucide-react';

export interface PassengerBoxProps {
    name: string;
    type: string;
    seat: string;
    initialSelected?: boolean;
    onSelectChange?: (name: string, isSelected: boolean) => void;
}

export default function PassengerBox({
    name,
    type,
    seat,
    initialSelected = false,
    onSelectChange,
}: PassengerBoxProps) {
    const [isSelected, setIsSelected] = useState(initialSelected);

    const toggleSelection = () => {
        const newState = !isSelected;
        setIsSelected(newState);
        if (onSelectChange) {
            onSelectChange(name, newState);
        }
    };

    return (
        <div
            onClick={toggleSelection}
            className={`
                relative w-full rounded-lg border-2 p-4 cursor-pointer transition-all bg-white overflow-hidden
                ${isSelected ? 'border-primary' : 'border-gray-200 hover:border-gray-300'}
            `}
        >
            <div className="flex flex-col gap-2">
                <h3 className={`font-bold text-base ${isSelected ? 'text-primary' : 'text-gray-800'}`}>
                    {name}
                </h3>
                <div className="flex items-center gap-2 text-sm">
                    <span className="bg-secondary text-gray-600 px-2 py-0.5 rounded text-xs font-semibold">
                        {type}
                    </span>
                    <span className="text-primary font-medium">
                        Seat {seat}
                    </span>
                </div>
            </div>

            {/* Selected Checkmark Triangle */}
            {isSelected && (
                <div className="absolute top-0 right-0 w-8 h-8 bg-primary rounded-bl-3xl flex items-start justify-end p-1">
                    <Check className="w-4 h-4 text-white p-0.5 mr-0.5 mt-0.5" />
                </div>
            )}
        </div>
    );
}
