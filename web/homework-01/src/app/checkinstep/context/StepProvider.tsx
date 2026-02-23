// src/context/StepContext.tsx
"use client";
import { createContext, useContext, useState } from 'react';

const StepContext = createContext({ step: 1, setStep: (s: number) => { } });

export function StepProvider({ children }: { children: React.ReactNode }) {
    const [step, setStep] = useState(1);
    return (
        <StepContext.Provider value={{ step, setStep }}>
            {children}
        </StepContext.Provider>
    );
}

export const useStep = () => useContext(StepContext);