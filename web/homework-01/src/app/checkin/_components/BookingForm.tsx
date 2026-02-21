import React from 'react';
import CommonTextfield from '@/components/common/CommonTextfield';
import Button from '@/components/common/Button';

export default function BookingForm() {
    return (
        <div className="flex flex-col gap-6 p-6 rounded-2xl border-1 border-border-secondary bg-white w-full mx-auto mt-8 shadow-lg shadow-[rgba(0,0,0,0.1)]">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center">
                Retrieve Your Booking
            </h2>

            <div className="flex flex-col gap-4">
                <CommonTextfield
                    title="Last Name"
                    placeholder="Enter your last name"
                    id="lastName"
                />

                <CommonTextfield
                    title="Booking reference (PNR)"
                    placeholder="e.g. ABCDEF"
                    id="pnr"
                />
            </div>

            <div className="mt-2">
                <Button
                    buttonTitle="Retrieve Booking"
                    className="w-full"
                />
            </div>
        </div>
    );
}
