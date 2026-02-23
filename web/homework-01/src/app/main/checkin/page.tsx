import CheckinHeader from "./_components/CheckinHeader";
import BookingForm from "./_components/BookingForm";
import CheckinInfoCard from "./_components/CheckinInfoCard";
import TravelTips from "./_components/TravelTips";
import { Info } from "lucide-react";

export default function CheckinPage() {
    return (
        <div className="min-h-screen bg-white">
            <CheckinHeader />
            <div className="px-4 py-4 flex flex-col md:flex-row gap-6 w-full max-w-7xl mx-auto">
                <div className="flex flex-col w-full max-w-4xl">
                    <div className="w-full">
                        <BookingForm />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 w-full">
                        <div className="flex-1">
                            <CheckinInfoCard
                                title="Flight Status"
                                icon={Info}
                                description="Track your flight in real-time. Get updates on departure, arrival, gate changes, and delays"
                                linkText="Check Status"
                                linkHref="/flight-status"
                            />
                        </div>
                        <div className="flex-1">
                            <CheckinInfoCard
                                title="Baggage Rules"
                                icon={Info}
                                description={`Economy: 1 carry-on (7kg) + 1 checked bag (23kg). \n Business: 2 carry-on + checked bags (32kg).`}
                                linkText="Learn More"
                                linkHref="/baggage-rules"
                            />
                        </div>
                    </div>

                </div>
                <div className="w-full md:max-w-md mx-auto">
                    <TravelTips />
                </div>
            </div>

        </div>
    );
}