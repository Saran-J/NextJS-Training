"use client";

import React from 'react';
import PassengerBox from '../_components/PassengerBox';

export default function Step2Page() {
    return (
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
                <PassengerBox
                    name="ALEX HUUM"
                    type="ADT"
                    seat="12A"
                    initialSelected={true}
                />

                <PassengerBox
                    name="Somsee Kuum"
                    type="ADT"
                    seat="12B"
                    initialSelected={false}
                />
            </div>
        </div>
    );
}
