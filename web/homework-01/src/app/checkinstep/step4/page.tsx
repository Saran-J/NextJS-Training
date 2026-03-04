"use client";

import React from 'react';

export default function Step4Page() {
    return (
        <div className="bg-white rounded-2xl shadow-lg shadow-[rgba(0,0,0,0.1)] border border-border-secondary w-full max-w-4xl mx-auto overflow-hidden">
            {/* Header Section */}
            <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                    Dangerous Goods Declaration
                </h2>
                <p className="text-gray-500 text-sm md:text-base font-medium">
                    A mandatory safety and legal declaration as required by Thai law (CAAT/AOT).
                </p>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col gap-5">
                <p className="font-bold text-red-600 text-base md:text-lg">
                    For the safety of the flight, the transport of specific hazardous items is strictly forbidden.
                </p>

                <p className="text-gray-700 text-base leading-relaxed font-medium">
                    By continuing, you confirm that you and those in your booking are NOT carrying the following Dangerous Goods in your carry-on or checked baggage, which are prohibited under all circumstances:
                </p>

                <ul className="list-disc pl-6 flex flex-col gap-3 text-gray-700 font-medium">
                    <li>
                        Explosives (e.g., Fireworks, Flares, Ammunition, Toy Caps, Gunpowder).
                    </li>
                    <li>
                        Flammable Items (e.g., Flammable Gases, Gasoline, Lighter Fluid, Aerosol Paints, Strike-Anywhere Matches).
                    </li>
                    <li>
                        Corrosives & Poisons (e.g., Acids, Blech, Pesticides, Toxic or Infectious Substances).
                    </li>
                    <li>
                        Lithium Battery-Powered Vehicles (e.g., Hoverboards, Self-Balancing Wheels, Mini-Segways are forbidden in all baggage).
                    </li>
                    <li>
                        Other items like Tear Gas, Pepper Spray, or Radioactive Material.
                    </li>
                </ul>
            </div>
        </div>
    );
}
