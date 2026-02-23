"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';

export default function ProgressHeader() {
    const pathname = usePathname();

    // Simple logic to parse step from pathname (e.g. /checkinstep/step2)
    let currentStep = 1;
    if (pathname.includes('/step')) {
        const stepMatch = pathname.match(/step(\d)/);
        if (stepMatch && stepMatch[1]) {
            currentStep = parseInt(stepMatch[1], 10);
        }
    }

    const totalSteps = 5;

    return (
        <div className="w-full bg-white shadow-sm border-b border-border-secondary">
            <div className="max-w-4xl mx-auto w-full px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button className="p-2 -ml-2 text-gray-400 hover:text-gray-600 cursor-pointer">
                        <X className="w-5 h-5" />
                    </button>
                    <div className="flex flex-col">
                        <h1 className="text-gray-900 font-bold text-lg">Check-in</h1>
                        <p className="text-gray-500 text-sm">Select Passengers</p>
                    </div>
                </div>

                <div className="text-sm font-medium text-gray-500">
                    Step {currentStep} of {totalSteps}
                </div>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full h-1 bg-gray-100 flex max-w-4xl mx-auto">
                {Array.from({ length: totalSteps }).map((_, index) => {
                    const stepNumber = index + 1;
                    const isActive = stepNumber <= currentStep;

                    return (
                        <div
                            key={stepNumber}
                            className={`h-full flex-1 ${isActive ? 'bg-primary' : 'bg-transparent'}`}
                            // Make right edge rounded only for the end of active progress segment
                            style={stepNumber === currentStep ? { borderTopRightRadius: '999px', borderBottomRightRadius: '999px' } : {}}
                        />
                    );
                })}
            </div>
        </div>
    );
}
