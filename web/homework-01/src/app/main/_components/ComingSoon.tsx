import React from 'react';
import { Clock } from 'lucide-react';

export default function ComingSoon() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full flex-1 p-6">
            <div className="w-20 h-20 bg-[#f0f9ff] rounded-full flex items-center justify-center mb-5">
                <Clock className="w-10 h-10 text-[#007cc3]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                พบกันเร็วๆนี้
            </h3>
            <p className="text-gray-500 text-center text-sm md:text-base">
                ฟีเจอร์นี้กำลังอยู่ระหว่างการพัฒนา<br />
                กรุณารอติดตามการอัปเดตในเร็วๆ นี้
            </p>
        </div>
    );
}
