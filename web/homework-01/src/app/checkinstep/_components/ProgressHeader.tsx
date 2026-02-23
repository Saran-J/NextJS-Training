"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { useStep } from '../context/StepProvider';

export default function ProgressHeader() {
    const { step: currentStep } = useStep();
    const totalSteps = 5;

    const getStepTitle = (step: number): string => {
        switch (step) {
            case 1:
            case 2: return 'Select Passengers';
            case 3: return 'Passenger Detail';
            case 4: return 'Dangerous Goods';
            case 5: return 'Boarding Pass';
            default: return 'Check-in';
        }
    };

    return (
        <div className="w-full bg-white shadow-sm border-b border-border-secondary">
            <div className="max-w-4xl mx-auto w-full px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button className="p-2 -ml-2 text-gray-400 hover:text-gray-600 cursor-pointer">
                        <X className="w-5 h-5" />
                    </button>
                    <div className="flex flex-col">
                        <h1 className="text-gray-900 font-bold text-lg">Check-in</h1>
                        <p className="text-gray-500 text-sm"> {getStepTitle(currentStep)}</p>
                    </div>
                </div>

                <div className="text-sm font-medium text-gray-500">
                    Step {currentStep} of {totalSteps}
                </div>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full h-1 flex max-w-4xl mx-auto gap-[2px]">
                {Array.from({ length: totalSteps }).map((_, index) => {
                    const stepNumber = index + 1;
                    let bgClass = "bg-gray-100"; // default for future steps

                    if (stepNumber <= currentStep) {
                        bgClass = "bg-primary";
                    } else if (stepNumber === currentStep + 1) {
                        bgClass = "bg-gradient-to-r from-primary/60 to-gray-100";
                    }

                    return (
                        <div
                            key={stepNumber}
                            className={`h-full flex-1 ${bgClass}`}
                        />
                    );
                })}
            </div>
        </div>
    );
}
