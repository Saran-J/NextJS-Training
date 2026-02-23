import React from 'react';
import Link from 'next/link';

import ProgressHeader from './_components/ProgressHeader';

export default function CheckInStepLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-secondary w-full relative pb-28">
            <ProgressHeader />
            <main className="max-w-4xl mx-auto w-full px-4 mt-6">
                {children}
            </main>

            {/* Sticky Footer */}
            <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 z-10">
                <div className="max-w-4xl mx-auto w-full flex gap-4">
                    <Link href="/main/checkin" className="flex-1 py-3 px-6 rounded-lg font-bold text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 flex items-center justify-center transition-colors">
                        Back
                    </Link>
                    <Link href="/main/checkin" className="flex-1 py-3 px-6 rounded-lg font-bold text-white bg-primary hover:bg-primary/90 flex items-center justify-center transition-colors">
                        Continue
                    </Link>
                </div>
            </div>
        </div>
    );
}
