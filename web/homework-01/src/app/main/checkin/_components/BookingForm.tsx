"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import CommonTextfield from '@/components/common/CommonTextfield';
import Button from '@/components/common/Button';

export default function BookingForm() {
    const router = useRouter();
    const [lastName, setLastName] = useState('');
    const [pnr, setPnr] = useState('');

    const isFormValid = lastName.trim() !== '' && pnr.trim().length >= 5;

    const handleRetrieveBooking = () => {
        if (isFormValid) {
            router.push('/checkinstep/step2');
        }
    };

    return (
        <div className="flex flex-col gap-6 p-6 rounded-2xl border-1 border-border-primary bg-white w-full mx-auto mt-6 shadow-lg shadow-[rgba(0,0,0,0.1)]">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center">
                Retrieve Your Booking
            </h2>

            <div className="flex flex-col gap-4">
                <CommonTextfield
                    title="Last Name"
                    placeholder="Enter your last name"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />

                <CommonTextfield
                    title="Booking reference (PNR)"
                    placeholder="e.g. ABCDEF"
                    id="pnr"
                    value={pnr}
                    onChange={(e) => setPnr(e.target.value)}
                />
            </div>

            <div className="mt-2">
                <Button
                    buttonTitle="Retrieve Booking"
                    className="w-full"
                    isActive={isFormValid}
                    onClick={handleRetrieveBooking}
                />
            </div>

            <div
                className="bg-[#e3f2fd] w-full p-4 flex items-center"
                style={{ borderRadius: '16px' }}
            >
                <label className="text-primary text-[12px]">
                    <span className="font-semibold text-blue-800">Tip:</span> Online check-in open 24 hours before departure and close 2 hours before departure.
                </label>
            </div>
        </div>
    );
}
