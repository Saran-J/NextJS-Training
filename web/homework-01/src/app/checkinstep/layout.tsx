import React from 'react';

import ProgressHeader from './_components/ProgressHeader';

export default function CheckInStepLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-secondary w-full">
            <ProgressHeader />
            <main className="max-w-4xl mx-auto w-full px-4 mt-6">
                {children}
            </main>
        </div>
    );
}
