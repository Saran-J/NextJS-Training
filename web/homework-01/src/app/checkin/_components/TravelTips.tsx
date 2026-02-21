import React from 'react';
import { MapPin } from 'lucide-react';
import TravelTipItem from './TravelTipItem';

export default function TravelTips() {
    return (
        <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white shadow-lg shadow-[rgba(0,0,0,0.1)] w-full mx-auto mt-6">
            <div className="flex items-center gap-2">
                <MapPin className="w-6 h-6 text-gray-800" />
                <h3 className="text-lg font-bold text-gray-800">
                    Travel Tips
                </h3>
            </div>

            <div className="flex flex-col gap-4 mt-2">
                <TravelTipItem
                    title="Arrive Early"
                    description="Arrive 2-3 hours before international flights, 1-2 hours for domestic flights"
                />
                <TravelTipItem
                    title="Valid Documents"
                    description="Ensure your passport is valid for at least 6 months beyond your travel dates."
                />
                <TravelTipItem
                    title="Mobile Boarding"
                    description="Download your boarding pass to your phone for quick access."
                />
                <TravelTipItem
                    title="Pack Smart"
                    description="Keep liquids in containers under 100ml and place them in a transparent bag."
                />
                <TravelTipItem
                    title="Stay Informed"
                    description="Check visa requirements and travel advisories for your destination."
                />
            </div>
        </div>
    );
}
