"use client";

import React, { useState } from 'react';
import PassengerInfoCard, { PassengerInfoData } from '../_components/PassengerInfoCard';
import { useStep } from '../context/StepProvider';

export default function Step3Page() {
    const { selectedPassengers } = useStep();

    // State to hold form data for all passengers
    const [passengersData, setPassengersData] = useState<Record<string, PassengerInfoData>>(() => {
        const initialData: Record<string, PassengerInfoData> = {};
        selectedPassengers.forEach(p => {
            initialData[p.name] = {
                nationality: '',
                phoneCountryCode: 'TH',
                phoneNumber: '',
            };
        });
        return initialData;
    });

    const handlePassengerDataChange = (name: string, data: PassengerInfoData) => {
        setPassengersData(prev => ({
            ...prev,
            [name]: data
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
                {selectedPassengers.map((passenger, index) => (
                    <PassengerInfoCard
                        key={passenger.name}
                        index={index + 1}
                        name={passenger.name}
                        data={passengersData[passenger.name] || { nationality: '', phoneCountryCode: 'TH', phoneNumber: '' }}
                        onChange={(newData) => handlePassengerDataChange(passenger.name, newData)}
                    />
                ))}
            </div>
        </div>
    );
}
