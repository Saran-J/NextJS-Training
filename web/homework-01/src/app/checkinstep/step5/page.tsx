"use client";

import React from 'react';
import BoardingPassTicket from '../_components/BoardingPassTicket';
import { useStep } from '../context/StepProvider';

export default function Step5Page() {
    const { selectedPassengers } = useStep();

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">
            {selectedPassengers.map((passenger) => (
                <BoardingPassTicket
                    key={passenger.name}
                    passengerName={passenger.name}
                    terminal="1"
                    gate="40"
                    departureDisplayCode="BKK"
                    departureDisplayName="Suvarnabhumi Airport, Bangkok"
                    departureDate="19 Feb 2026"
                    departureTime="14:54"
                    arrivalDisplayCode="SIN"
                    arrivalDisplayName="Changi International Airport, Singapore"
                    arrivalDate="20 Feb 2026"
                    arrivalTime="17:54"
                    flightNo="QL123"
                    seatNo={passenger.seat}
                    zone="1"
                    seq="023"
                    boardingTime="21:14"
                    barcodeValue={`12345678901234567890BKKQ123SIN${passenger.name.replace(/\s/g, '')}`}
                />
            ))}
        </div>
    );
}
