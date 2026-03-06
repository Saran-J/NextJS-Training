"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface CountryCode {
    code: string;
    dial: string;
    flag: string;
    name: string;
}

const COUNTRIES: CountryCode[] = [
    { code: "TH", dial: "+66", flag: "🇹🇭", name: "Thailand" },
    { code: "US", dial: "+1", flag: "🇺🇸", name: "United States" },
    { code: "GB", dial: "+44", flag: "🇬🇧", name: "United Kingdom" },
    { code: "JP", dial: "+81", flag: "🇯🇵", name: "Japan" },
];

export interface PhoneInputProps {
    value?: string;
    onChange?: (value: string) => void;
    countryCode?: string;
    onCountryCodeChange?: (code: string) => void;
    id?: string;
    hasError?: boolean;
}

export default function PhoneInput({
    value = "",
    onChange,
    countryCode = "TH",
    onCountryCodeChange,
    id,
    hasError = false,
}: PhoneInputProps) {
    const [isOpen, setIsOpen] = useState(false);

    const selectedCountry = COUNTRIES.find((c) => c.code === countryCode) || COUNTRIES[0];

    const handleCountrySelect = (code: string) => {
        if (onCountryCodeChange) {
            onCountryCodeChange(code);
        }
        setIsOpen(false);
    };

    return (
        <div className="flex flex-col gap-1 w-full">
            <div className="flex gap-2 relative">
                {/* Dropdown Button */}
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-2 h-12 px-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-700 min-w-[100px] justify-between"
                    >
                        <span className="flex items-center gap-2 text-base">
                            <span className="text-xl leading-none">{selectedCountry.flag}</span>
                            <span>{selectedCountry.dial}</span>
                        </span>
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                        <>
                            <div
                                className="fixed inset-0 z-10"
                                onClick={() => setIsOpen(false)}
                            />
                            <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20 py-1 max-h-60 overflow-y-auto">
                                {COUNTRIES.map((country) => (
                                    <button
                                        key={country.code}
                                        type="button"
                                        onClick={() => handleCountrySelect(country.code)}
                                        className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-3 transition-colors"
                                    >
                                        <span className="text-xl leading-none">{country.flag}</span>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-gray-700">{country.name}</span>
                                            <span className="text-xs text-gray-500">{country.dial}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Number Input */}
                <input
                    id={id}
                    type="tel"
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    className={`flex-1 min-w-0 h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 transition-all text-gray-900 text-base ${hasError
                        ? 'border-red-400 focus:ring-red-200 focus:border-red-400'
                        : 'border-gray-300 focus:ring-primary/20 focus:border-primary'
                        }`}
                    placeholder="Enter phone number"
                />
            </div>

            {/* Country Name Hint */}
            <span className="text-xs text-gray-500 mt-1 ml-1">{selectedCountry.name}</span>
        </div>
    );
}
