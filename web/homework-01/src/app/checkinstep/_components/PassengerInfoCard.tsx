"use client";

import React, { useState } from "react";
import PhoneInput from "./PhoneInput";

export interface PassengerInfoData {
    nationality: string;
    phoneCountryCode: string;
    phoneNumber: string;
}

export interface PassengerInfoCardProps {
    index: number;
    name: string;
    data: PassengerInfoData;
    onChange: (data: PassengerInfoData) => void;
}

export default function PassengerInfoCard({
    index,
    name,
    data,
    onChange,
}: PassengerInfoCardProps) {

    const updateField = (field: keyof PassengerInfoData, value: string) => {
        onChange({
            ...data,
            [field]: value
        });
    };

    return (
        <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-5">
            <h3 className="font-bold text-gray-900 text-lg flex gap-2">
                <span>{index}.</span>
                <span>{name}</span>
            </h3>

            {/* Nationality Field */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">
                    Nationality
                </label>
                <input
                    type="text"
                    value={data.nationality}
                    onChange={(e) => updateField('nationality', e.target.value)}
                    className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-900 text-base"
                    placeholder="e.g. TH, US"
                />
            </div>

            {/* Phone Number Field */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">
                    Phone Number
                </label>
                <PhoneInput
                    countryCode={data.phoneCountryCode}
                    onCountryCodeChange={(code) => updateField('phoneCountryCode', code)}
                    value={data.phoneNumber}
                    onChange={(val) => updateField('phoneNumber', val)}
                />
            </div>
        </div>
    );
}
