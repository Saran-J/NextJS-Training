import React from 'react';

export default function CheckinHeader() {
    return (
        <div className="flex flex-col items-center justify-center w-full py-8 bg-primary text-white text-center">
            <h1 className="text-[24px] font-bold mb-1">
                Online Check-in
            </h1>
            <h2 className="text-[16px] font-medium mb-1">
                Fly Smart, Fly Next.
            </h2>
            <p className="text-[12px] opacity-90">
                check in online and save time at the airport
            </p>
        </div>
    );
}
