"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ProgressHeader from './_components/ProgressHeader';
import { StepProvider, useStep } from './context/StepProvider';

function StepLayoutInner({ children }: { children: React.ReactNode }) {
    const { step, setStep } = useStep();
    const pathname = usePathname();

    // Sync step from URL to Context
    useEffect(() => {
        let currentStep = 1;
        if (pathname.includes('/step')) {
            const stepMatch = pathname.match(/step(\d)/);
            if (stepMatch && stepMatch[1]) {
                currentStep = parseInt(stepMatch[1], 10);
            }
        }
        setStep(currentStep);
    }, [pathname, setStep]);

    const backHref = step > 1 ? `/checkinstep/step${step - 1}` : '/main/checkin';
    const continueHref = step < 5 ? `/checkinstep/step${step + 1}` : `/main/checkin/success`;

    return (
        <div className="min-h-screen bg-secondary w-full relative pb-28">
            <ProgressHeader />
            <main className="max-w-4xl mx-auto w-full px-4 mt-6">
                {children}
            </main>

            {/* Sticky Footer */}
            <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 z-10 flex flex-col gap-2">
                {step === 4 && (
                    <div className="max-w-4xl mx-auto w-full text-center">
                        <span className="text-[14px] text-gray-500 font-medium">I understand and accept the dangerous policy</span>
                    </div>
                )}
                <div className="max-w-4xl mx-auto w-full flex gap-4">
                    <Link href={backHref} className={`flex-1 py-3 px-6 rounded-lg font-bold text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 flex items-center justify-center transition-colors ${step === 5 ? 'hidden' : ''}`}>
                        Back
                    </Link>
                    <Link href={continueHref} className={`flex-1 py-3 px-6 rounded-lg font-bold text-white bg-primary hover:bg-primary/90 flex items-center justify-center transition-colors ${step === 5 ? 'hidden' : ''}`}>
                        {step === 4 ? 'Accept & Continue' : 'Continue'}
                    </Link>
                    <Link href={backHref} className={`flex-1 py-3 px-6 rounded-lg font-bold text-white bg-primary hover:bg-primary/90 flex items-center justify-center transition-colors ${step === 5 ? '' : 'hidden'}`}>
                        Done
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function CheckInStepLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <StepProvider>
            <StepLayoutInner>
                {children}
            </StepLayoutInner>
        </StepProvider>
    );
}
