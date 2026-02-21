import React from 'react';
import { MapPin, Check } from 'lucide-react';

export default function TravelTips() {
    return (
        <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white shadow-lg shadow-[rgba(0,0,0,0.1)] w-full max-w-xl mx-auto mt-6">
            <div className="flex items-center gap-2">
                <MapPin className="w-6 h-6 text-gray-800" />
                <h3 className="text-lg font-bold text-gray-800">
                    Travel Tips
                </h3>
            </div>

            <div className="flex flex-col gap-4 mt-2">
                {/* Mock Tip Item */}
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                        <Check className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-base font-semibold text-gray-800">Arrive Early</h4>
                        <p className="text-sm font-normal text-gray-600">
                            Arrive 2-3 hours before international flights, 1-2 hours for domestic flights
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                        <Check className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-base font-semibold text-gray-800">Valid Documents</h4>
                        <p className="text-sm font-normal text-gray-600">
                            Ensure your passport is valid for at least 6 months beyond your travel dates.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                        <Check className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-base font-semibold text-gray-800">Mobile Boarding</h4>
                        <p className="text-sm font-normal text-gray-600">
                            Download your boarding pass to your phone for quick access.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                        <Check className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-base font-semibold text-gray-800">Pack Smart</h4>
                        <p className="text-sm font-normal text-gray-600">
                            Keep liquids in containers under 100ml and place them in a transparent bag.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                        <Check className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-base font-semibold text-gray-800">Stay Informed</h4>
                        <p className="text-sm font-normal text-gray-600">
                            Check visa requirements and travel advisories for your destination.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
