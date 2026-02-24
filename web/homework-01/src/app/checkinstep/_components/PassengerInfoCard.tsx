"use client";

import React from "react";
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

// Validation helpers
export function isNationalityValid(value: string): boolean {
    return /^[A-Za-z]{2}$/.test(value);
}

export function isPhoneValid(value: string): boolean {
    return /^0\d{9}$/.test(value);
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

    const handleNationalityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Allow only English letters, max 2 characters
        const raw = e.target.value.replace(/[^A-Za-z]/g, '').slice(0, 2);
        // Auto-uppercase when 2 characters are reached
        const value = raw.length === 2 ? raw.toUpperCase() : raw;
        updateField('nationality', value);
    };

    const handlePhoneChange = (value: string) => {
        // Allow only digits 0-9, max 10 characters
        const cleaned = value.replace(/[^0-9]/g, '').slice(0, 10);
        updateField('phoneNumber', cleaned);
    };

    const nationalityTouched = data.nationality.length > 0;
    const phoneTouched = data.phoneNumber.length > 0;
    const nationalityError = nationalityTouched && !isNationalityValid(data.nationality);
    const phoneError = phoneTouched && !isPhoneValid(data.phoneNumber);

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
                    onChange={handleNationalityChange}
                    maxLength={2}
                    className={`w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 transition-all text-gray-900 text-base uppercase ${nationalityError
                            ? 'border-red-400 focus:ring-red-200 focus:border-red-400'
                            : 'border-gray-300 focus:ring-primary/20 focus:border-primary'
                        }`}
                    placeholder="e.g. TH, US"
                />
                {nationalityError && (
                    <span className="text-xs text-red-500 font-medium">
                        Please enter exactly 2 English letters (e.g. TH, US)
                    </span>
                )}
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
                    onChange={handlePhoneChange}
                    hasError={phoneError}
                />
                {phoneError && (
                    <span className="text-xs text-red-500 font-medium">
                        Phone number must start with 0 and be exactly 10 digits
                    </span>
                )}
            </div>
        </div>
    );
}
