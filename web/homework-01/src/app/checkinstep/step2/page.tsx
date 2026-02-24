"use client";

import React from 'react';
import { Check } from 'lucide-react';
import PassengerBox from '../_components/PassengerBox';
import { useStep, Passenger } from '../context/StepProvider';

const PASSENGERS: Passenger[] = [
    { name: "ALEX HUUM", type: "ADT", seat: "12A" },
    { name: "Somsee Kuum", type: "ADT", seat: "12B" },
];

export default function Step2Page() {
    const { selectedPassengers, setSelectedPassengers } = useStep();

    const handleSelectChange = (name: string, isSelected: boolean) => {
        if (isSelected) {
            const passenger = PASSENGERS.find((p) => p.name === name);
            if (passenger) {
                setSelectedPassengers([...selectedPassengers, passenger]);
            }
        } else {
            setSelectedPassengers(selectedPassengers.filter((p) => p.name !== name));
        }
    };

    const isAllSelected = selectedPassengers.length === PASSENGERS.length;

    const toggleSelectAll = () => {
        if (isAllSelected) {
            setSelectedPassengers([]);
        } else {
            setSelectedPassengers([...PASSENGERS]);
        }
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-border-secondary p-6 w-full max-w-4xl mx-auto">
                <div className="mb-6">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                        Select Passengers
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base text-medium">
                        Choose passengers for check-in
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    {PASSENGERS.map((passenger) => (
                        <PassengerBox
                            key={passenger.name}
                            name={passenger.name}
                            type={passenger.type}
                            seat={passenger.seat}
                            isSelected={selectedPassengers.some((p) => p.name === passenger.name)}
                            onSelectChange={handleSelectChange}
                        />
                    ))}
                </div>
            </div>

            <div className="w-full flex justify-end">
                <button
                    onClick={toggleSelectAll}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-medium text-sm shadow-sm transition-colors"
                >
                    <Check className="w-4 h-4" />
                    {isAllSelected ? "Clear All" : "Select All"}
                </button>
            </div>
        </div>
    );
}
