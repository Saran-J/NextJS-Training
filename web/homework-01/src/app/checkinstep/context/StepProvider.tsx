// src/context/StepContext.tsx
"use client";
import { createContext, useContext, useState } from 'react';

export interface Passenger {
    name: string;
    type: string;
    seat: string;
}

interface StepContextType {
    step: number;
    setStep: (s: number) => void;
    selectedPassengers: Passenger[];
    setSelectedPassengers: (passengers: Passenger[]) => void;
    canContinue: boolean;
    setCanContinue: (v: boolean) => void;
}

const StepContext = createContext<StepContextType>({
    step: 1,
    setStep: () => { },
    selectedPassengers: [],
    setSelectedPassengers: () => { },
    canContinue: true,
    setCanContinue: () => { },
});

export function StepProvider({ children }: { children: React.ReactNode }) {
    const [step, setStep] = useState(1);
    const [selectedPassengers, setSelectedPassengers] = useState<Passenger[]>([]);
    const [canContinue, setCanContinue] = useState(true);
    return (
        <StepContext.Provider value={{ step, setStep, selectedPassengers, setSelectedPassengers, canContinue, setCanContinue }}>
            {children}
        </StepContext.Provider>
    );
}

export const useStep = () => useContext(StepContext);