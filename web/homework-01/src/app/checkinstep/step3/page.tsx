"use client";

import React, { useState, useEffect } from 'react';
import PassengerInfoCard, { PassengerInfoData, isNationalityValid, isPhoneValid } from '../_components/PassengerInfoCard';
import { useStep } from '../context/StepProvider';

export default function Step3Page() {
    const { selectedPassengers, setCanContinue } = useStep();

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

    // Compute overall validation and sync to context
    useEffect(() => {
        const allValid = selectedPassengers.every(p => {
            const d = passengersData[p.name];
            if (!d) return false;
            return isNationalityValid(d.nationality) && isPhoneValid(d.phoneNumber);
        });
        setCanContinue(allValid);
        return () => setCanContinue(true); // reset when leaving step3
    }, [passengersData, selectedPassengers, setCanContinue]);

    const handlePassengerDataChange = (name: string, data: PassengerInfoData) => {
        setPassengersData(prev => ({
            ...prev,
            [name]: data
        }));
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg shadow-[rgba(0,0,0,0.1)] border border-border-secondary p-6 w-full max-w-4xl mx-auto flex flex-col gap-6">
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
