"use client";

import React, { useState } from 'react';
import PassengerInfoCard, { PassengerInfoData } from '../_components/PassengerInfoCard';

const PASSENGERS_MOCK = [
    { id: 'p1', name: "ALEX HUUM", initialNationality: "TH", initialPhoneDial: "TH", initialPhone: "811234567" },
    { id: 'p2', name: "Somsee Kuum", initialNationality: "US", initialPhoneDial: "US", initialPhone: "5551234567" },
];

export default function Step3Page() {
    // State to hold form data for all passengers
    const [passengersData, setPassengersData] = useState<Record<string, PassengerInfoData>>(() => {
        const initialData: Record<string, PassengerInfoData> = {};
        PASSENGERS_MOCK.forEach(p => {
            initialData[p.id] = {
                nationality: p.initialNationality,
                phoneCountryCode: p.initialPhoneDial,
                phoneNumber: p.initialPhone,
            };
        });
        return initialData;
    });

    const handlePassengerDataChange = (id: string, data: PassengerInfoData) => {
        setPassengersData(prev => ({
            ...prev,
            [id]: data
        }));
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-border-secondary p-6 w-full max-w-4xl mx-auto flex flex-col gap-6">
            <div className="mb-2">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                    Passenger Details
                </h2>
                <p className="text-gray-500 text-sm md:text-base font-medium">
                    Enter required information for each passenger
                </p>
            </div>

            <div className="flex flex-col gap-4">
                {PASSENGERS_MOCK.map((passenger, index) => (
                    <PassengerInfoCard
                        key={passenger.id}
                        index={index + 1}
                        name={passenger.name}
                        data={passengersData[passenger.id]}
                        onChange={(newData) => handlePassengerDataChange(passenger.id, newData)}
                    />
                ))}
            </div>
        </div>
    );
}
